function selectFilter(event) {
  let dataCopy = [...data]
  switch (event.target.value) {
    case "R-P":
      console.log("rich to poor filter")
      dataCopy.sort((a, b) => b.salary - a.salary)
      updateTableRowDOM(dataCopy)
      break
    case "P-R":
      console.log("poor to rich filter")
      dataCopy.sort((a, b) => a.salary - b.salary)
      updateTableRowDOM(dataCopy)
      break
    default:
      console.log("no filter")
      updateTableRowDOM()
  }
}
selectElement.addEventListener("change", selectFilter)