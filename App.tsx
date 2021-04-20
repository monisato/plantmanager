import React from 'react';
import { Welcome } from './src/pages/Welcome';

export default function App(){
  return (
    <Welcome />
  )
}

// fragment: 
// caso na utilização de multiplos tags repetidos usar estes em volta => <> </>
// ou usar <View> </View>, <Fragment> </Fragment>
// import React, { Fragment } from 'react';