import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';

import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-cefea.cloudfunctions.net';

class SignInForm extends Component {
    state = { phone: '', code: '' };

    handleSubmit = async () => {
        const { phone, code } = this.state;
        try {
            let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, { phone, code });
            firebase.auth().signInWithCustomToken(data.token);
            console.warn('SIGNED IN');
        } catch (err) {
            console.warn(err.response.data);
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

                <View styke={{ marginBottom: 10 }}>
                    <FormLabel> Enter Code</FormLabel>
                    <FormInput
                        value={this.state.code}
                        onChangeText={code => this.setState({ code })}
                    />
                </View>

                <Button onPress={this.handleSubmit} title="submit" />

            </View>
        );
    }

}


export default SignInForm;