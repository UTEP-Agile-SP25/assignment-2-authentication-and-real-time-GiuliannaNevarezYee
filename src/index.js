import { logout, login } from "./auth"

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