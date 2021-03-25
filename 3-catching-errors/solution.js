fetch(`https://.typicode.com/todos/1`)
  .then((response) => {
    console.log(response);
    if (response.ok) {
      return response.json();
    } else {
      console.log(response.status);
    }
  })
  .catch((error) => {
    console.log(` My error is a: ${error}`);
  });
