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

const getResponses = () => {
  const responses = localStorage.getItem('@responses')
  if (!responses) return []
  return JSON.parse(responses)
}

const saveResponses = (responses = []) => {
  localStorage.setItem('@responses', JSON.stringify(responses))
}

const responses = getResponses()
let currentQuestion = responses.length ? questions[responses.length] : null


const getNextQuestion = () => {
  if (currentQuestion && currentQuestion.isLastQuestion) {
    const response = document.querySelector('input[name="beneficiosInput"]:checked');
    if (response === null) {
      alert('Você precisa selecionar uma resposta')
      return
    }

    const responses = getResponses()
    responses.push({
      id: currentQuestion.id,
      response: response.value
    })
    saveResponses(responses)

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
    const responses = getResponses()
    responses.push({
      id: currentQuestion.id,
      response: response.value
    })
    saveResponses(responses)

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
  const responses = getResponses()
  const beneficios = validateBeneficios(responses)
  resetScreen()

  const formBeneficios = document.getElementById('form-beneficios')
  formBeneficios.classList.add('result-screen')

  const title = document.createElement('h1')
  title.innerText = 'Através das suas respostas, identificamos que você se encaixa nos seguintes benefícios:'
  formBeneficios.appendChild(title)

  const buttonGroup = document.createElement('div')
  buttonGroup.className = 'button-group-beneficios'

  if (!beneficios.length) {
    const message = document.createElement('h2')
    message.innerText = 'Você ainda não se encaixa em nenhum benefício'
    buttonGroup.appendChild(message)
  }

  beneficios.forEach(beneficio => {
    const button = document.createElement('a')
    button.href = beneficio.link 
    button.classList.add('btn', 'btn-success')
    const checkmark = document.createElement('i')
    checkmark.classList.add('fa-solid', 'fa-check')
    button.appendChild(checkmark)
    const text = document.createElement('span')
    text.innerText = beneficio.name
    button.appendChild(text)
    buttonGroup.appendChild(button)
  })
  formBeneficios.appendChild(buttonGroup)

  const restart = document.createElement('button')
  restart.classList.add('btn')
  restart.classList.add('btn-primary')
  restart.innerText = 'Refazer teste'
  restart.onclick = () => {
    localStorage.removeItem('@responses')
    window.location.reload()
  }
  formBeneficios.appendChild(restart)
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

const validateBeneficios = (responses = []) => {
  const beneficios = []
  responses.forEach(r => {
    const { id, response } = r 
    if (id === 1 && parseInt(response) >= 60) {
      beneficios.push({ name: 'Remédios Gratuitos', link: './beneficios/remedio-gratuito.html' })
      beneficios.push({ name: 'Isenção do Imposto de Renda', link: './beneficios/isencao-imposto.html' })
      beneficios.push({ name: 'BPC', link: './beneficios/bpc.html' })
      beneficios.push({ name: 'Atendimento Preferencial', link: './beneficios/atendimento-preferencial.html' })
    } else if (id === 2 && parseInt(response) === 2000) {
      beneficios.push({ name: 'Passagens Gratuitas', link: './beneficios/passagem-gratuita.html' })
    } else if (id === 2 && parseInt(response) <= 4000) {
      beneficios.push({ name: 'Isenção IPTU', link: './beneficios/isencao-iptu.html' })
    } else if (id === 3 && response === 'true' && !beneficios.find(beneficio => beneficio.name === 'Atendimento Preferencial')) {
      beneficios.push({ name: 'Atendimento Preferencial', link: './beneficios/atendimento-preferencial.html' })
    }
  })

  return [...new Set(beneficios)]
}

if (responses.length) {
  if (responses.length === 3) {
    getResultScreen()
  } else {
    const question = questions.find(question => question.id === responses.length + 1)
    if (!question) {
      alert('Ocorreu um erro ao carregar as perguntas')
    }

    currentQuestion = question
    resetScreen()
    createQuestionScreen(currentQuestion)
  }
}
