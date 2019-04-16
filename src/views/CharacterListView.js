import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { 
  getChars
 } from '../actions'
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getChars()
    // call our action
  }

  render() {
    if (this.props.fetching) {
      return <h2>Loading Data</h2>
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.charsReducer.isLoading,
  characters: state.charsReducer.characters
})

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    getChars
  }
)(CharacterListView);
