const { response } = require("express");
const { List } = require("../models");


const add = document.querySelector('#add-brewery button')
add.forEach(add => add.onclick = handleclick)

async function handleclick(e) {
  const {id, done} = e.target.dataset
  const resp = await fetch('/index' + id, {
    method: done === 'true' ? 'DELETE' : 'PUT'
  })
  if (resp.status === 200)
  window.location.reload()
  else {
    const text = await response.text()
    console.log(text)
  }
}




module.export = { List };