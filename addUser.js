// fetch random user
async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api")
  const data = await res.json()
  const user = data.results[0]
  const newUser = {
    firstName: `${user.name.first}`,
    lastName: `${user.name.last}`,
    email: `${user.email}`,
    salary: Math.floor(Math.random() * 1500),
  }
  addData(newUser)
  console.log(newUser)
}
// add new obj to data arr
function addData(obj) {
  data.push(obj)
  updateTableRowDOM()
  updateTotalSalaries()
}
addUserBtn.addEventListener("click", getRandomUser)