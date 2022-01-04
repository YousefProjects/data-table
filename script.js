const table = document.getElementById("table")
const thead = document.getElementById("thead")
const tbody = document.getElementById("tbody")
const tfoot = document.getElementById("tfoot")
const selectElement = document.querySelector(".filters")
const addUserBtn = document.getElementById("add-user")

let data = [
  {
    firstName: "John",
    lastName: "Mike",
    email: "johnmike@example.com",
    salary: 150,
  },
]

function updateTableRowDOM(provideData = data) {
  tbody.innerHTML = ""
  // render table rows
  provideData.forEach((item) => {
    const rowEl = document.createElement("tr")
    rowEl.innerHTML = `
      <td></td>
      <td>${item.firstName}</td>
      <td>${item.lastName}</td>
      <td>${item.email}</td>
      <td>${item.salary}</td>
    `
    tbody.appendChild(rowEl)
  })
}

function updateTotalSalaries() {
  tfoot.innerHTML = ''
  const totalSalaries = data.reduce((acc, user) => (acc += user.salary), 0)
  const totalEl = document.createElement("tr")
  totalEl.innerHTML = `
  <td colspan="4"><strong>Total Salaries</strong></td>
  <td><strong>${totalSalaries}</strong></td>`
  tfoot.appendChild(totalEl)
}

updateTableRowDOM()
updateTotalSalaries()
