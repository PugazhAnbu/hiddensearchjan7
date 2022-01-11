const searchxyz = document.querySelector(".search")
const btnxyz = document.querySelector(".btn")
const inputxyz = document.querySelector(".input")



// toggle function

// 1. if the class active is present the toggle fun can remove the active class

// 2. does not present the active class toggle will create the active class.

btnxyz.addEventListener("click", function(){
    searchxyz.classList.toggle("active")
    inputxyz.focus()
})