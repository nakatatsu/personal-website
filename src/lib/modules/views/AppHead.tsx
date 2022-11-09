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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1434344380503678" crossorigin="anonymous"></script>
        <meta name="description" content="Tricrow's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </React.Fragment>
  );
}

export default AppHead;
