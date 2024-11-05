import Swal from "sweetalert2";

// console.log("Hello from JavaScript!");

// FETCH GET REQUEST example
const url = "https://api.github.com/users/yannklein";

// const response = fetch(url);
// console.log(response);
fetch(url)
  .then(response => response.json())
  .then((data) => {
    // console.log(data);
  });


// FETCH POST REQUEST example
const postUrl = "https://reqres.in/api/register"

// 1. Select elements (inputs, form)
const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

// 2. Listen to a submit on the form
form.addEventListener("submit", (event) => {
  console.log(event);
  event.preventDefault();
  
  // 2.5 Fetch API (POST)
  const data = {
    email: email.value,
    password: password.value
  }

  const options = {
    method: "POST",
    headers: { "Content-type": "application/json"},
    body: JSON.stringify(data)
  };

  fetch(postUrl, options)
  .then((response) => {
    if (response.ok) {
      // display a "connected!"
      Swal.fire({
        icon: "success",
        title: "Successfully connected!",
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      // display error message
      Swal.fire({
        title: 'Error!',
        text: 'Try again!',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }
    return response.json();
  })
  .then((data) => {
    // 3. Change the DOM (console.log)
    console.log(data);
  })
  
});



