Template.postsList.helpers({
  posts: function() {
    return Posts.find({}, {sort:{likeCount:-1, title:1}});
  }
});