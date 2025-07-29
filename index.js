let userList = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const listEl = document.getElementById("list-el")
const deleteBtn = document.getElementById("delete-btn")
const listFromLocalStorage = JSON.parse(localStorage.getItem("userList")) // Parses stringed list out to become a regular list
const tabBtn = document.getElementById("tab-btn")

if (listFromLocalStorage) {
    userList = listFromLocalStorage
    render(userList)
}

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabInfo) {
        userList.push(tabInfo[0].url)
        localStorage.setItem("userList", JSON.stringify(userList))
        render(userList)
    })
})

function render(list) {
    let inputList = ""
    for (let i = 0; i < list.length; i++) {
        inputList += `<li>
                        <a href="${list[i]}" target="_blank">
                            ${list[i]}
                        </a>
                     </li>`
    }
    listEl.innerHTML = inputList
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    userList = []
    render(userList)
})

inputBtn.addEventListener("click", function() {
    userList.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("userList", JSON.stringify(userList)) // Makes the list a string
    render(userList)
})