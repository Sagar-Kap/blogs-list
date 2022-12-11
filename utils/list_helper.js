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

module.exports = {
  dummy,
  totalLikes,
};
