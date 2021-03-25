fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    console.log(response);
    if (response.ok) {
      return response.json();
    }
  })
  .then((dataObject) => {
    console.log(dataObject);
  });
