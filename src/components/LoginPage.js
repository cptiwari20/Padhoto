import React, { Component } from "react";
import firebase from 'firebase';
import { Card, CardSection, Input, Button } from "./commons/index";
import { connect } from 'react-redux';
import {onEmailChange} from './../actions';
import {config} from '../firebaseConfig'

class LoginPage extends Component {
    // state = { password: '', error: ''}

    componentWillMount(){
      firebase.initializeApp(config);
    }

  onEmailTextChange(text){
    this.props.onEmailChange(text)
  }


  render() {
      const { password } = this.state;
      const { email } = this.props.auth;
    return (
      <Card>
        <CardSection>
          <Input 
            label="Email" 
            placeholder="email@pmail.com" 
            value={email}
            onChangeText={text => this.onEmailTextChange(text)}
            />
        </CardSection>
        <CardSection>
          <Input 
            label="Password" 
            placeholder=" password" 
            secureTextEntry
            value={password}
            onChangeText={pass => this.setState({ password: pass })}
            />
        </CardSection>
        <CardSection>
          <Button>
              Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

function mapStateToProps({ auth }){
  return { auth }
}

export default connect(mapStateToProps, { onEmailChange })(LoginPage);
