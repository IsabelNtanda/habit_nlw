const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add(){
const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
const dayExists = nlwSetup.dayExists(today)

if (dayExists) {
  alert("Dia já incluso ❌" )
  return 
}
alert('Dia adicionado com sucesso ✅ ')
nlwSetup.addDay(today)
}
function save() {
  
}

const data = {
  run: ["01-01"],
}
nlwSetup.setData(data)
nlwSetup.load()