function submitData(name, email) {
  let formData = {
    name: name,
    email: email,
  };

  let config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

  return fetch("http://localhost:3000/users", config)
    .then((response) => response.json())
    .then((data) => {
      document.body.innerHTML += `<p>New ID: ${data.id}</p>`;
    })
    .catch((error) => {
      document.body.innerHTML += `<p>Error: ${error.message}</p>`;
    });
}

// Testing the submitData function
submitData("John Doe", "johndoe@example.com");
