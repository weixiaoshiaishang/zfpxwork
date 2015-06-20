// simple-todos.js
Tasks = new Mongo.Collection("tasks");
teamList = new Mongo.Collection("teamlist");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({

    teamlist: function () {
      return teamList.find({});
    },

    tasks: function () {
      return Tasks.find({});
    }
  });

  if(Meteor.isServer){

  }
}