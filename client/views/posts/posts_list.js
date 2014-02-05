var postsData = [
  {
    title: "Moby Dick",
    author: "Herman Melville",
    url: "http://google.com"
  },
  {
    title: "Catcher in the Rye",
    author: "J.D. Salinger",
    url: "http://marvel.com"
  },
  {
    title: "Of Mice and Men",
    author: "John Steinbeck",
    url: "http://nyu.edu"
  }
];

Template.postsList.helpers({
  posts: postsData
});