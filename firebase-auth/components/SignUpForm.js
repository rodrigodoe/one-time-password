import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';

import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-cefea.cloudfunctions.net';

class SignUpForm extends Component {
  state = { phone: '' };

  handleSubmit = async () => {
    try {
      await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone })
      await axios.post(`${ROOT_URL}/requestOneTimePassord`, { phone: this.state.phone })
    } catch (err) {
      console.warn(err.response.data)
    }
  }

  render() {
    return (
      <View>
        <View styke={{ marginBottom: 10 }}>
          <FormLabel> Enter Phone Number</FormLabel>
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>
        <Button onPress={this.handleSubmit} title="submit" />
      </View>
    );
  }

}


export default SignUpForm;