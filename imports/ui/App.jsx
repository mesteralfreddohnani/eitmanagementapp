import React from "react";
import Eits from "./components/Eits";
import 'bootstrap/dist/css/bootstrap.css';
import {Button} from 'react-bootstrap';
import {EitCollection} from '../api/eits';

import { withTracker } from 'meteor/react-meteor-data';

import NavBar from './components/NavBar/NavBar.component';

class App extends React.Component {
  // constructor(){
  //   super();

  //   state = {
  //     eits: this.props.eits
  //   }
  // }

  handleClick = () => {
    this.props.history.push('/new');
  }

  render() {
    return (
      <>
      <NavBar />
      <div className="container p-5">
       
        <Button onClick={this.handleClick} variant="primary" className="mx-auto d-block my-5 text-center">Add New EIT</Button>
        <Eits {...this.props} />
      </div>
      </>
    );
  }
}


export default withTracker(() => {
  return {
    eits: EitCollection.find({}, { sort: { createdAt: -1}}).fetch(),
  };
})(App);
