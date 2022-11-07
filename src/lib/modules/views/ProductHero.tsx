import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import Image from 'next/image'

const backgroundImage ='img/background.jpg';
export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <Image
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
        width={1920}
        height={1080}
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Welcome to tricrow&apos;s website
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        <p>IT業界で働くクラウドエンジニア＆プログラマー tricrowの個人サイトです。</p>
        <p>using AWS, GCP, Terraform/CloudFormation/Ansible, C#, C++, Go, php, Typescript(javascript).</p>
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="contact.html"
        sx={{ minWidth: 200 }}
      >
        Contact
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        御用の際はこちらをクリック↑
      </Typography>
    </ProductHeroLayout>
  );
}
