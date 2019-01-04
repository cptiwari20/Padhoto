import React, { Component } from "react";
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {
  renderItem(library){
    return <ListItem library={library} />
  }

  render(){
    return (
      <ListView 
        dataSource={this.props.library}
        renderItem={this.renderItem}
        keyExtractor={(library) => library.id }
      />
    )
  }
}

function mapStateToProps({ library }){
  return { library }
} 

export default connect(mapStateToProps)(LibraryList);