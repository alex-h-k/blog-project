import request from 'superagent'
export function getLoginData(url, state) {
  return request.post(url)
    .send({
      "username": state.username,
      "password": state.password
    })
  }
