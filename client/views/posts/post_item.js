Template.postItem.helpers({
  ownPost: function() {
    if (Meteor.userId())
      return this.userId == Meteor.userId();
  },  
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
});

Template.postItem.events({
  'click button': function() {
    Posts.update(this._id, {$inc : {likeCount : 1} });
  }
});