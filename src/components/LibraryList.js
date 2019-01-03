import React, { Component } from "react";
import { connect } from 'react-redux';

class LibraryList extends Component {
  render(){
    return;
  }
}

function mapStateToProps({ library }){
  return { library }
} 

export default connect(mapStateToProps)(LibraryList);