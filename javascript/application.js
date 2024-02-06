import Swal from "sweetalert2";

console.log("Hello from JavaScript!");

// const url = "https://api.github.com/users/GutarManboy1";


// FETCH GET REQUEST example
// console.log("before the fetch");
// fetch(url)
//   .then(response => response.json())
//   .then((data) => {
//     console.log(data);
//   })
// console.log("after the fetch");

// FETCH POST REQUEST example
const url = "https://reqres.in/api/register";

// 1. Select elements (form, 2 inputs)
const form  = document.querySelector("#form");
const email  = document.querySelector("#email");
const password  = document.querySelector("#password");

// 2. Listen to a submit on the form
form.addEventListener("submit", (event) => {
  console.log(event);
  event.preventDefault();
  // 2.5 Fetch the API (POST)
  const payload = {
    email: email.value,
    password: password.value
  }

  const options = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(payload)
  }

  fetch(url, options)
    .then((response) => {
      console.log(response.status);
      if (response.status === 200) {
        // show a 'You're connect'
        Swal.fire({
          title: 'Success!',
          text: 'You are connected',
          icon: 'success'
        })
      } else {
        // show a 'Whoops'
        Swal.fire({
          title: 'Error!',
          text: 'Whoops! Something went wrong',
          icon: 'error'
        })
      }
      return response.json()
    })
    .then((data) => {
      // 3. Change the DOM (console.log)
      console.log(data);
    })
})



