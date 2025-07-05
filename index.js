let userList = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const listEl = document.getElementById("list-el")
const deleteBtn = document.getElementById("delete-btn")
const listFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")) // Parses stringed list out to become a regular list

if (leadsFromLocalStorage) {
    userList = listFromLocalStorage
    renderList()
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    renderList()
})

inputBtn.addEventListener("click", function() {
    userList.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) // Makes the list a string
    renderList()
})



function renderList() {
    let inputList = ""
    for (let i = 0; i < userList.length; i++) {
        inputList += `<li>
                        <a href="${userList[i]}" target="_blank">
                            ${userList[i]}
                        </a>
                     </li>`
    }
    listEl.innerHTML = inputList
}