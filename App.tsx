import React from 'react';
import Apploading from 'expo-app-loading';

import { 
  useFonts, 
  Jost_400Regular, 
  Jost_600SemiBold 
} from '@expo-google-fonts/jost';

import Routes from './src/routes/index';


export default function App(){
  // o vetor da const é boolean retorna error ou null
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular, 
    Jost_600SemiBold
  });

  if (!fontsLoaded) 
    return <Apploading />
    

  return (
    <Routes />
  )
}

// fragment: 
// caso na utilização de multiplos tags repetidos usar estes em volta => <> </>
// ou usar <View> </View>, <Fragment> </Fragment>
// import React, { Fragment } from 'react';