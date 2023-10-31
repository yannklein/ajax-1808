import Swal from "sweetalert2";

console.log("Hello from JavaScript!");

// url = "https://api.github.com/users/ashamarinauchida";

// console.log(fetch(url));
// fetch(url)
//   .then(response => response.json()) // ASYNC
//   .then((data) => {                  // ASYNC
//     console.log(data);               // ASYNC
//   })

// console.log("Some process after the fetch...");

const url = "https://reqres.in/api/register";

// 1. Select elements (2 inputs, form)
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const form = document.querySelector("#form");

const signUp = (event) => {
  event.preventDefault();
  // 2.5 Fetch the reqres API
  const userInput = {
    email: emailInput.value,
    password: passwordInput.value
  }

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userInput)
  };

  fetch(url, options)
  .then((response) => {
    if (response.status === 200) {
      Swal.fire({
        title: 'Success!',
        text: 'You are connected',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Oops, Something went wrong',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }
  })
}

// 2. Listen to a submit on the form
form.addEventListener("submit", signUp);

