import React, { Component } from "react";
import { Card, CardSection, Input, Button } from "./commons/index";

class LoginPage extends Component {
    state = {email: '', password: '', error: ''}

  render() {
      const { email, password} = this.state;
    return (
      <Card>
        <CardSection>
          <Input 
            label="Email" 
            placeholder="email@pmail.com" 
            value={email}
            onChangeText={text => this.setState({ email: text })}
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

export default LoginPage;
