import { signUp } from "./auth"

const signUpForm = document.querySelector("#signupForm")
signUpForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const email = document.getElementById("signupEmail").value
    const password = document.getElementById("signupPassword").value

    signUp(firstName, lastName, email, password)

})