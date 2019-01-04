import React, { Component } from "react";
import { Text } from 'react-native';
import { Card, CardSection } from './commons/index';

class ListItem extends Component {
  // renderItem(library){
  //   return <ListItem library={library} />
  // }

  render(){
    return (
      <Card>
        <CardSection>
          {this.props.library.title}
        </CardSection>
      </Card>
    )
  }
}

export default ListItem;