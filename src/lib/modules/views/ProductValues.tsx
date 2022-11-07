import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: '#FFF' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="img/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Typography variant="h6" sx={{ my: 5 }}>
                インフラ構築
              </Typography>
              <Typography variant="h5">
                {
                  'AWSを用い、高負荷にも対応した高可用性かつセキュアなITインフラの構築を行います。'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Typography variant="h6" sx={{ my: 5 }}>
                設計/開発/テスト
              </Typography>
              <Typography variant="h5">
                {
                  '要求の洗い出しから設計・開発・テストまで、一通り対応しています。'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Typography variant="h6" sx={{ my: 5 }}>
                ドキュメント作成
              </Typography>
              <Typography variant="h5">
                {'定義書や設計書の要望に応じて作成します。'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
