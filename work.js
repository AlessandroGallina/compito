window.onload = () => {
  const form = document.getElementById("myForm")
  form.onsubmit = function (e) {
    console.log("form inviato")
    console.log(e)
  }
}
