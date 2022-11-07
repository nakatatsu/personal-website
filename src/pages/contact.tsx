import * as React from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import Box from '@mui/material/Box';
import Typography from '../lib/modules/components/Typography';
import AppFooter from '../lib/modules/views/AppFooter';
import AppAppBar from '../lib/modules/views/AppAppBar';
import AppForm from '../lib/modules/views/AppForm';
import { email, required } from '../lib/modules/form/validation';
import RFTextField from '../lib/modules/form/RFTextField';
import FormButton from '../lib/modules/form/FormButton';
import FormFeedback from '../lib/modules/form/FormFeedback';
import withRoot from '../lib/modules/withRoot';
import AppHead from '../lib/modules/views/AppHead';
import axios from "axios";


// https://develop-api.tricrow.com/send-mail



function Contact() {
  const [sent, setSent] = React.useState(false);

  const input = {name: "", email: "", title: "", message: ""};
  
  const validate = (values: { [index: string]: string }) => {
    const errors = required(['name', 'email', 'title', 'message'], values);

    if (!errors.email) {
      const emailError = email(values.email);
      if (emailError) {
        errors.email = emailError;
      }
    }
    return errors;
  };

  const handleSubmit = async (s:any) => {
    setSent(true);

    try {
      if (process.env.NEXT_PUBLIC_API_URL == undefined)
        throw new Error("APIのURLを設定してください"); 
      // 'https://develop-api.tricrow.com/send-mail'
      const response = await axios.post(process.env.NEXT_PUBLIC_API_URL, s);
      // JSON.stringify(s),
      // headers: { "Content-type": "text/plain" } ,

      console.log(response);
    } catch (error) {
      console.log(error);
      //alert("送信に失敗しました。")
    }

    
    setSent(false);
  };


  return (
    <React.Fragment>
      <AppHead />
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Contact
          </Typography>
          <Typography variant="body2" align="center">
            {'各項目に入力し、送信ボタンを押してください。'}
          </Typography>
        </React.Fragment>
        <Form
          initialValues={input}
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>
              <Field
                autoComplete="name"
                autoFocus
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="お名前"
                margin="normal"
                name="name"
                required
                size="large"
                value={input.name}
              />
              <Field
                autoComplete="email"
                autoFocus
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Eメール"
                margin="normal"
                name="email"
                required
                size="large"
                value={input.email}
              />
              <Field
                autoComplete="title"
                autoFocus
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="タイトル"
                margin="normal"
                name="title"
                required
                size="large"
                value={input.title}
              />
              <Field
                autoComplete="message"
                autoFocus
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="本文"
                margin="normal"
                name="message"
                required
                size="large"
                multiline
                rows={6}
                value={input.message}
              />
              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback error sx={{ mt: 2 }}>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <FormButton
                sx={{ mt: 3, mb: 2 }}
                disabled={submitting || sent}
                size="large"
                color="secondary"
                fullWidth
              >
                {submitting || sent ? '通信中...' : '送信'}
              </FormButton>
            </Box>
          )}
        </Form>
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Contact);
