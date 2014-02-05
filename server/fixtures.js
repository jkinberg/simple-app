if (Posts.find().count() === 0) {
  Posts.insert({
    title: "Moby Dick",
    author: "Herman Melville",
    url: "http://google.com"
  });
  Posts.insert({
    title: "Catcher in the Rye",
    author: "J.D. Salinger",
    url: "http://marvel.com"
  });
  Posts.insert({
    title: "Of Mice and Men",
    author: "John Steinbeck",
    url: "http://nyu.edu"
  });
}