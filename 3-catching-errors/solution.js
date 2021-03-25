fetch(`https://.typicode.com/todos/x`)
  .then((response) => {
    console.log(response);
    if (response.ok) {
      return response.json();
    } else {
      console.log(response.status);
    }
  })
  .then((dataObject) => {
    console.log(dataObject);
  });
throw new Error((error) => {
  console.log(error);
});
