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
  console.log(largestObject);
  const toReturn = {
    title: largestObject.title,
    author: largestObject.author,
    likes: largestObject.likes,
  };
  return toReturn;
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
