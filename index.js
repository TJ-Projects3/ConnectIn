let userList = []
let inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
let listEl = document.getElementById("list-el")

inputBtn.addEventListener("click", function() {
    userList.push(listEl.value)
})