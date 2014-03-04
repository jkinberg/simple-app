Posts = new Meteor.Collection('posts');

Posts.allow({
  insert: function(userId, doc){
    // return if userId exists (i.e. user is logged-in)
    return !! userId;
  }
});