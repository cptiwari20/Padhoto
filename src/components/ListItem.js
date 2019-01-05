import React, { Component } from "react";
import { connect } from 'react-redux'
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './commons/index';
import { selectLibrary } from '../actions';


class ListItem extends Component {

  renderDescription(){
    const { library, expanded } = this.props
    
    if(expanded){
      return (
        <CardSection>
          <Text style={{ flex: 1}}>
            Something {library.description}
          </Text>
        </CardSection>
      )
    }
  }

  render(){
    const { library, selectLibrary, selectedId } = this.props;
    const { title, id } = library;
    return (
       <TouchableWithoutFeedback
        onPress={() => selectLibrary(id)} > 
         <View>
          <CardSection>
            <Text>
                {title}
            </Text>
          </CardSection>
            {this.renderDescription()}
         </View>
       </TouchableWithoutFeedback>
    )
  }
}
 function mapStateToProps({ selectedId }, ownProps){
  const expanded = selectedId === ownProps.library.id;
  return { expanded}
 }

export default connect(mapStateToProps, { selectLibrary })(ListItem);