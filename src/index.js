import { signUp, logout, login } from "./auth"

const signUpForm = document.querySelector("#signupForm")
signUpForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const email = document.getElementById("signupEmail").value
    const password = document.getElementById("signupPassword").value

    signUp(firstName, lastName, email, password)
})

const logInForm = document.querySelector("#loginForm")
logInForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    const email = document.getElementById("loginEmail").value
    const password = document.getElementById("loginPassword").value

    login(email, password)
})

const logOutForm = document.querySelector("#logoutForm")
logOutForm.addEventListener("submit", (event)=>{
    event.preventDefault()

    logout()
})