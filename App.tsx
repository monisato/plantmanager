import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App(){
  return (
    <View style={ style.container }>
      <Text>
        Olá!
      </Text>
      <Text>
        NLW#5
      </Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})


// fragment: 
// caso na utilização de multiplos tags repetidos usar estes em volta => <> </>
// ou usar <View> </View>, <Fragment> </Fragment>
// import React, { Fragment } from 'react';