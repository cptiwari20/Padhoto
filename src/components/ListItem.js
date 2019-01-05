import React, { Component } from "react";
import { Text } from 'react-native';
import { Card, CardSection } from './commons/index';

class ListItem extends Component {
  render(){
    return (
      <Card>
        <CardSection>
          <Text>
              {this.props.library.title}
          </Text>
        </CardSection>
      </Card>
    )
  }
}

export default ListItem;