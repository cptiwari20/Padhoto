import React, { Component } from "react";
import { connect } from 'react-redux';
import { FlatList, ScrollView} from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {
  renderItem({item}){
    return<ListItem library={item} />
  }

  render(){
    return (
      <ScrollView>
         <FlatList
            data={this.props.library}
            renderItem={this.renderItem}
            keyExtractor={(library) => (library.id).toString() }
        />
      </ScrollView>
    )
  }
}

function mapStateToProps({ library }){
  return { library }
} 

export default connect(mapStateToProps)(LibraryList);