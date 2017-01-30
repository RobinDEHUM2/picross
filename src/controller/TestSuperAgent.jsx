var request = require('superagent');

var myAlert = (err, res)=>alert("Super : ", res, "err : ", err);

export const getText = () =>
  request
    .get("/validation")
    .end((err, res)=>alert("Super : ", res, "err : ", err));

export const postText = () =>
  request
    .post("/validation")
    .send({
        id: 1,
        name: "yourOtherValue"
      })
    .end((err, res)=>alert("Super : ", res, "err : ", err));
