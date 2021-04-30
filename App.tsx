import React, { useEffect } from 'react';
import Apploading from 'expo-app-loading';
import * as Notifications from 'expo-notifications';

import { 
  useFonts, 
  Jost_400Regular, 
  Jost_600SemiBold 
} from '@expo-google-fonts/jost';

import Routes from './src/routes/index';
import { PlantProps } from './src/libs/storage';


export default function App(){
  // o vetor da const é boolean retorna error ou null
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular, 
    Jost_600SemiBold
  });

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant as PlantProps;
        console.log(data);      
      }
    )
    return () => subscription.remove();

    // async function notifications() {
    //   const data = await Notifications.getAllScheduledNotificationsAsync();
    //   console.log('cancelado');
    //   console.log(data);
    // }
    // notifications();
  }, [])

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