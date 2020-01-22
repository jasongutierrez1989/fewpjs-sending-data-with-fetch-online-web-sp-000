function submitData(name, email) {
<<<<<<< HEAD
  return fetch("http://localhost:3000/users", {
=======
  fetch("http://localhost:3000/users", {
>>>>>>> 10a31f86501c1b7570137c833f95016929af12fd
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
<<<<<<< HEAD
    },
=======
    }
>>>>>>> 10a31f86501c1b7570137c833f95016929af12fd
    body: JSON.stringify({
      name: name,
      email: email
    })
<<<<<<< HEAD
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    let p = document.createElement("p");
    p.innerText = object.id;
  })
  .catch(function(error) {
    console.log(error.message);
  })
=======
  };
>>>>>>> 10a31f86501c1b7570137c833f95016929af12fd
}
