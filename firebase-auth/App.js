import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';

import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {

  componentDidMount() {
    const config = {
      apiKey: "AIzaSyAVCq9ps_02VB8_4H4UKa4rh_8Fm0Ka-pw",
      authDomain: "one-time-password-cefea.firebaseapp.com",
      databaseURL: "https://one-time-password-cefea.firebaseio.com",
      projectId: "one-time-password-cefea",
      storageBucket: "one-time-password-cefea.appspot.com",
      messagingSenderId: "902548944215"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
