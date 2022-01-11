const upload = () => {
    const progressBar = document.querySelector('.myBar')
    progressBar.setAttribute('id', 'play-animation')
}

const form = document.querySelector('#form')

function download(data, filename) {
    const a = document.createElement("a")
    const file = new Blob([JSON.stringify(data)], {type: 'application/json'}) // stringify if the data isn't already stringified
    a.href = URL.createObjectURL(file)
    a.download = filename
    a.click()
  }

function submitForm(event) {
  event.preventDefault()
  const task_name = document.getElementById('name').value
  const daily_rate = document.getElementById('drate').value
  const importance = document.getElementById('importance').value
  const data = { task_name: task_name, daily_rate: daily_rate, importance: importance}
  download(data, 'info.json')
}

form.addEventListener('submit', submitForm)