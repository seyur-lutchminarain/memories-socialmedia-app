// posts are going to be an array so we pass any ampty array
export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...posts, action.payload]; //spread
    default:
      return posts;
  }
};
