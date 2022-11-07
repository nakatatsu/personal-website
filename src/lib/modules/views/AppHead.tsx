import Head from 'next/head'
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';


function AppHead() {
  return (
    <React.Fragment>
      <Head>
        <title>Tricrow&apos;s personal website</title>
        <meta name="description" content="Tricrow's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </React.Fragment>
  );
}

export default AppHead;
