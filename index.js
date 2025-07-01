let userList = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const listEl = document.getElementById("list-el")

inputBtn.addEventListener("click", function() {
    userList.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
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