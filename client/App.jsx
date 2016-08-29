import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
// import NavAdmin from '/imports/ui/components/NavAdmin.jsx';
// import FooterPro from '/imports/ui/components/FooterPro.jsx';
// import {Table, thead, tr,th,tbody, td, Radio,FormControl, FormGroup, Button} from 'react-bootstrap';
import { createContainer } from 'meteor/react-meteor-data';
// import {PaymentCodes} from '/imports/api/lib/PaimentCode/collection.js';
// import "/imports/api/lib/users/publication.js";



class DemandeAdhesion extends Component {
	render(){
		console.log("I am redner", this.props.users)
		return (
			<div>
        {this.props.users.map((i)=>(<div key={i._id}>{i._id}</div>))}
			</div>
			)
	}
}

export default PaiementContainer = createContainer(() => {

   let handleUser = Meteor.subscribe('Allusers');

  return {
    users: Meteor.users.find({}).fetch(),
  };
}, DemandeAdhesion);
