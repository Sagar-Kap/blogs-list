const _ = require("lodash");

const dummy = (blogs) => {
  return blogs.length;
};

const totalLikes = (blogs) => {
  let likes = 0;
  for (let i in blogs) {
    likes += blogs[i].likes;
  }
  return likes;
};

const favoriteBlog = (blogs) => {
  const sortedArr = blogs.sort((a, b) => b.likes - a.likes);
  const largestObject = sortedArr[0];
  const toReturn = {
    title: largestObject.title,
    author: largestObject.author,
    likes: largestObject.likes,
  };
  return toReturn;
};

const mostBlogs = (blogs) => {
  const groupedBlogs = _.countBy(blogs, "author");

  const authorMost = _.maxBy(Object.keys(groupedBlogs), (key) => {
    return groupedBlogs[key];
  });

  return { author: authorMost, blogs: groupedBlogs[authorMost] };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
};
