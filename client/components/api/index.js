import request from "superagent";


export function getLoginData(url, state) {
  return request.post(url).send({
    username: state.username,
    password: state.password
  });
}

export function getPosts() {
  return request
    .get("/api/v1/home")
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
    .post("/api/v1/home")
    .send(post)
    .then(res => {
      const returnedPost = res.body;
      return returnedPost;
    });
}

export function registerNewUser(newUser) {
  console.log("reg new user in api index - ", newUser)
  return request
    .post("/api/v1/auth/register")
    //needs to be worked on past this point
    .then(res => {
      console.log(res)
    })
}



// export function updatePost(post) {
//   return request
//     .put(`/api/v1/home/${post.id}`)
//     .send(post)
//     .then(res => {
//       const returnedPost = res.body;
//       return returnedPost;
//     });
// }
