import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});


Meteor.publish("Allusers", function(argument){
  return Meteor.users.find()
});
