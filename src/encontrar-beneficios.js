const questions = [
  {
    id: 1,
    question: 'Qual sua faixa etaria?',
    buttonLabel: 'Próximo',
    image: './assets/encontrar-beneficios/2.png',
    isLastQuestion: false,
    answers: [
      { label: '50-59', value: 50 },
      { label: '60-69', value: 60 },
      { label: '70-79', value: 70 },
      { label: '80-89', value: 80 },
      { label: '90+', value: 90 },
    ]
  },
  {
    id: 2,
    question: 'Qual renda mensal?',
    buttonLabel: 'Próximo',
    image: './assets/encontrar-beneficios/3.png',
    isLastQuestion: false,
    answers: [
      { label: 'Ate R$ 2 mil', value: 2000 },
      { label: 'Ate R$ 4 mil', value: 4000 },
      { label: 'Ate R$ 7 mil', value: 7000 },
      { label: 'R$ 7001,00 ou mais', value: 7001 },
    ]
  },
  {
    id: 3,
    question: 'Pessoa portadora de deficiência?',
    buttonLabel: 'Finalizar',
    image: './assets/encontrar-beneficios/4.png',
    isLastQuestion: true,
    answers: [
      { label: 'Sim', value: true },
      { label: 'Não', value: false },
    ]
  }
]

let currentQuestion = null
const responses = []

const getNextQuestion = () => {
  if (currentQuestion && currentQuestion.isLastQuestion) {
    const response = document.querySelector('input[name="beneficiosInput"]:checked');
    if (response === null) {
      alert('Você precisa selecionar uma resposta')
      return
    }

    responses.push({
      id: currentQuestion.id,
      response: response.value
    })

    getResultScreen()
    return
  }

  let nextId = 1
  if (currentQuestion) {
    const response = document.querySelector('input[name="beneficiosInput"]:checked');
    if (response === null) {
      alert('Você precisa selecionar uma resposta')
      return
    }

    responses.push({
      id: currentQuestion.id,
      response: response.value
    })
    nextId = currentQuestion.id + 1
  }

  const question = questions.find(question => question.id === nextId)
  if (!question) {
    alert('Ocorreu um erro ao carregar as perguntas')
    return
  }

  currentQuestion = question
  resetScreen()
  createQuestionScreen(currentQuestion)
}

const getResultScreen = () => {
  console.log(responses)
  resetScreen()


  const formBeneficios = document.getElementById('form-beneficios')
  formBeneficios.classList.add('result-screen')

  const title = document.createElement('h1')
  title.innerText = 'Através das suas respostas, identificamos que você se encaixa nos seguintes benefícios:'
  formBeneficios.appendChild(title)

  const button = document.createElement('a')
  button.href = '/beneficios/bpc.html'
  button.classList.add('btn', 'btn-success')
  const checkmark = document.createElement('i')
  checkmark.classList.add('fa-solid', 'fa-check')
  button.appendChild(checkmark)
  const text = document.createElement('span')
  text.innerText = 'BPC'
  button.appendChild(text)

  formBeneficios.appendChild(button)
}

const resetScreen = () => {
  const form = document.getElementById('form-beneficios')
  form.innerHTML = ''
}

const createQuestionScreen = (question) => {
  const formBeneficios = document.getElementById('form-beneficios')

  const containerLeft = document.createElement('div')
  const title = document.createElement('h1')
  title.innerText = question.question
  containerLeft.appendChild(title)
  const formInput = createFormInputElements(question.answers)
  containerLeft.appendChild(formInput)
  const button = document.createElement('button')
  button.classList.add('btn', 'btn-primary')
  button.onclick = () => getNextQuestion()
  button.innerText = question.buttonLabel
  containerLeft.appendChild(button)

  const img = document.createElement('img')
  img.src = question.image

  formBeneficios.appendChild(containerLeft)
  formBeneficios.appendChild(img)
}

const createFormInputElements = (answers = []) => {
  const form = document.createElement('form')
  form.classList.add('form-answers')
  for (const answer of answers) {
    const formCheck = document.createElement('div')
    formCheck.classList.add('form-check')
    const input = document.createElement('input')
    input.classList.add('form-check-input')
    input.type = 'radio'
    input.value = answer.value
    input.name = 'beneficiosInput'
    formCheck.appendChild(input)
    const label = document.createElement('label')
    label.classList.add('form-check-label')
    label.innerText = answer.label
    label.for = 'beneficiosInput'
    formCheck.appendChild(label)
    form.appendChild(formCheck)
  }
  return form
}
