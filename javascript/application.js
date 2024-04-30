import Swal from 'sweetalert2'

console.log("Hello from JavaScript!");

const url = "https://api.github.com/users/littlebobert";


// FETCH GET REQUEST example
// fetch(url).then((response) => {
//   console.log(response);
//   console.log(response.status);
//   // response.json() converts raw JSON file into JS code (array/object)
//   // response.json() returns a Promise
//   return response.json()
// }).then((userInfo) => {
//   console.log(userInfo.name);
// });
// console.log("after the fetch");

fetch(url)
  .then(response => response.json())
  .then((userInfo) => {
    console.log(userInfo.name);
});

// {
//   "email": "eve.holt@reqres.in",
//   "password": "pistol"
// }

// FETCH POST REQUEST example
const postUrl = "https://reqres.in/api/register"

// 1. Select elements (2 inputs, form)
const email = document.querySelector("#email");
const password =  document.querySelector("#password");
const form = document.querySelector("#form");

// 2. Listen to a submit on the form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
  // 2.5 Fetch the reqres API (POST)
  const data = {
    email: email.value,
    password: password.value
  }
  fetch(postUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data) // converts JS data into JSON file
  }).then((response) => {
    if (response.status === 200) {
      // show a success alert
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      // show a error alert
      Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }
  })
})




