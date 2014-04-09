Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish("images", function() {
  return Images.find();
});