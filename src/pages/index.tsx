import * as React from 'react';
import AppFooter from '../lib/modules/views/AppFooter';
import ProductHero from '../lib/modules/views/ProductHero';
import ProductValues from '../lib/modules/views/ProductValues';
import AppAppBar from '../lib/modules/views/AppAppBar';
import AppHead from '../lib/modules/views/AppHead';
import withRoot from '../lib/modules/withRoot';


function Index() {
  return (
    <React.Fragment>
      <AppHead />
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);

