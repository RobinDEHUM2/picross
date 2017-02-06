export const getText = () =>
fetch("/validation",
{
  method:'get'
})
.then(e=>e.text())
.then(body=>alert("response : "+body));

export const postText = () =>
  fetch("/validation",
  {
    method: 'post',
    body: JSON.stringify({
      "id": 1,
      "name": "yourOtherValue"
    })
  })
  .then(e=>e.text())
  .then(body=>alert("response : "+body));
