// console.log("Hello from JavaScript!");

// const url = "https://api.github.com/users/ahenla"

// console.log("before the fetch");
// fetch(url)
//   .then(response => response.json())
//   .then((data) => {
//     console.log("getting data");
//     console.log(data.login);
//   })

import Swal from "sweetalert2";

console.log("after the fetch");

const url = "https://reqres.in/api/register";

// 1. Select elements
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const button = document.querySelector("#button");

const register = (event) => {
  event.preventDefault();
  console.log(event);
  // 2.5 Fetch the reqres API
  const data = {
    "email": email.value,
    "password": password.value
  };

  const options = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  }  

  fetch(url, options)
  .then((response) => {
    console.log(response.status);
    if (response.status === 200) {
      Swal.fire({title: 'Success', text: 'You are connected', icon: 'success'})
    } else {
      Swal.fire({title: 'Error!', text: 'Oups! Something went wrong', icon: 'error'})
    }
    response.json()
  })
  .then((data) => {
    console.log(data);
  })
};

// 2. Listen to a click on button
button.addEventListener("click", register);