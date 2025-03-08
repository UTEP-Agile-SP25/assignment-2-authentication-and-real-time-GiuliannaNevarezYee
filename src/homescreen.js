import { collection, doc, getDoc, onSnapshot, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./config";
import { signUp, logout, login, onAuthStateChanged, getUserUID } from "./auth";

async function loadDisplayName() {
    try {
        const userUID = await getUserUID()
        const userRef = doc(db, "users", userUID)
        const userSnap = await getDoc(userRef)

        if (userSnap.exists() && userSnap.data().displayName) {
            const displayName = userSnap.data().displayName
            document.getElementById("greeting").innerHTML = "<h2>Hi, " + displayName + "</h2>"
            document.getElementById("displayName").value = displayName

        } else {
            document.getElementById("greeting").innerHTML = "<h2>Hi, User</h2>"
        }
    } catch (error) {
        console.error("Error fetching display name: ", error);
    }
}

async function setDisplayName(displayName) {
    try {
        const userUID = await getUserUID()
        const userRef = doc(db, "users", userUID)

        await updateDoc(userRef, {
            displayName:displayName
        }, {merge: true})
        
        loadDisplayName()

    } catch (error) {
        console.error("Error setting display name: ", error)
    }
}

const saveSong = async function() {
    const title = document.getElementById("titleInput").value.trim()
    const artist = document.getElementById("artistInput").value.trim()
    const year = document.getElementById("yearInput").value.trim()
    const personalRating = document.getElementById("personalRatingInput").value.trim()

    try {
        const songRef = doc(db, "songs", title.toLowerCase() + "-" + artist.toLowerCase())
        await setDoc(songRef,{
            title: title,
            artist: artist,
            year: year,
            personalRating: personalRating
        })

        console.log("The song was successfully saved")
        document.getElementById("titleInput").value = ""
        document.getElementById("artistInput").value = ""
        document.getElementById("yearInput").value = ""
        document.getElementById("personalRatingInput").value = ""
        
    } catch(error) {
        console.log("Error saving the song:", error)
    }
}

const deleteSong = async function() {
    const id = document.getElementById("deleteIDInput").value.trim()

    try {
        const songRef = doc(db, "songs", id)
        await deleteDoc(songRef)

        console.log("The song was sucessfully deleted")
        document.getElementById("deleteIDInput").value = ""
        
    } catch(error) {
        console.log("Error deleting the song:", error)
    }
}

const songsCollection = collection(db, "songs")
onSnapshot(songsCollection, (snapshot)=>{
    const tableBody = document.getElementById("table-body")
    tableBody.innerHTML = ""

    snapshot.forEach((doc)=>{
        const data = doc.data()
        const row = document.createElement("tr")

        row.innerHTML = `
        <td> ${doc.id}</td>
        <td> ${data.title}</td>
        <td> ${data.artist}</td>
        <td> ${data.year}</td>
        <td> ${data.personalRating}</td>
        `
        tableBody.appendChild(row)
    })
})

const displayNameForm = document.querySelector("#displayNameForm")
displayNameForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    const displayName = document.getElementById("displayName").value

    setDisplayName(displayName)
})

const logOutForm = document.querySelector("#logoutForm")
logOutForm.addEventListener("submit", (event)=>{
    event.preventDefault()

    logout()
    window.location.href = "index.html"
})

const addForm = document.querySelector("#addSong")
addForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    saveSong()
})

const deleteForm = document.querySelector("#deleteSong")
deleteForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    deleteSong()
})

window.onload = loadDisplayName;
