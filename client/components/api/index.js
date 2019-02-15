import request from "superagent";
export function getLoginData(url, state) {
  return request.post(url).send({
    username: state.username,
    password: state.password
  });
}
export function getPosts() {
  return request
    .get("/v1/home")
    .then(res => {
      console.log(res);
      const posts = res.body;
      return posts;
    })
    .catch(() => {
      throw Error("You need to implement an API route for /v1/posts");
    });
}
export function addPost(post) {
  return request
    .post("/v1/home")
    .send(post)
    .then(res => {
      const returnedPost = res.body;
      return returnedPost;
    });
}

// export function updatePost(post) {
//   return request
//     .put(`/v1/home/${post.id}`)
//     .send(post)
//     .then(res => {
//       const returnedPost = res.body;
//       return returnedPost;
//     });
// }
