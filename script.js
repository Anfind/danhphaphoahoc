const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

// chinh cau hoi , true cho cau trl dung
const questions = [
  {
    question: 'What is the chemical symbol for Sodium?',
    answers: [
      { text: 'Na', correct: true },
      { text: 'So', correct: false},
      { text: 'S', correct: false },
      { text: 'C', correct: false },
    ]
  },
  {
    question: 'What is the chemical symbol for Magnesium?',
    answers: [
      { text: 'Mg', correct: true },
      { text: 'M', correct: false },
     
      { text: 'Ms', correct: false },
      { text: 'Ma', correct: false },

     
    ]
  },
  {
    question: 'What is the chemical symbol for Aluminium?',
    answers: [
      { text: 'Am', correct: false },
      { text: 'A', correct: false },
      { text: 'Al', correct: true },
      
      { text: 'Alu', correct: false }
    ]
  },
  {
    question: 'What is the name of element Br?',
    answers: [
      { text: 'bromide', correct: false },
      { text: 'bromine', correct: true },
      { text: 'bromite', correct: false },
      { text: 'boron', correct: false }
    ]
  },
  {
    question: 'What is the name of element Ag?',
    answers: [
      { text: 'agen', correct: false },
      { text: 'silver', correct: true },
      { text: 'silicon', correct: false },
      { text: 'agenium', correct: false }
    ]
  },
  {
    question: 'What is the name of element I?',
    answers: [
      { text: 'iodide', correct: false },
      { text: 'iodine', correct: true },
      { text: 'iodua', correct: false },
      { text: 'iotine', correct: false }
    ]
  },
  {
    question: 'What is the name of element Ba?',
    answers: [
      { text: 'boron', correct: false },
      { text: 'barium', correct: true },
      { text: 'balium', correct: false },
      { text: 'barylliym', correct: false }
    ]
  },
  {
    question: 'What is the name of element W?',
    answers: [
      { text: 'wonrium', correct: false },
      { text: 'tungsten', correct: true },
      { text: 'hydrogiant', correct: false },
      { text: 'helium', correct: false }
    ]
  },
  {
    question: 'What is the name of element Os?',
    answers: [
      { text: 'oxygen', correct: false },
      { text: 'osmium', correct: true },
      { text: 'hydroxygen', correct: false },
      { text: 'helium', correct: false }
    ]
  },
  {
    question: 'What is the name of element Pt?',
    answers: [
      { text: 'phosphorus', correct: false },
      { text: 'platinum', correct: true },
      { text: 'palladium', correct: false },
      { text: 'helium', correct: false }
    ]
  },
  {
    question: 'What is the name of element Au?',
    answers: [
      { text: 'aurium', correct: false },
      { text: 'gold', correct: true },
      { text: 'hydrogen', correct: false },
      { text: 'helium', correct: false }
    ]
  },
  {
    question: 'What is the name of element Hg?',
    answers: [
      { text: 'hydrogen', correct: false },
      { text: 'hengrium', correct: false },
      { text: 'mercury', correct: true },
      
      { text: 'helium', correct: false }
    ]
  },
  {
    question: 'What is the name of element Pb?',
    answers: [
      { text: 'pabarium', correct: false },
      { text: 'lead', correct: true },
      { text: 'hydrogen', correct: false },
      { text: 'helium', correct: false }
    ]
  },
  {
    question: 'What is the name of element U?',
    answers: [
      
      { text: 'uranium', correct: true },
      { text: 'hydrogen', correct: false },
      { text: 'underium', correct: false },
      { text: 'helium', correct: false }
    ]
  },
  {
    question: 'What is the chemical formula for Sodium oxide?',
    answers: [
      { text: 'NaO', correct: false },
      { text: 'Na2O', correct: true },
      { text: 'Na3O4', correct: false },
      { text: 'So2O', correct: false }
    ]
  },
  {
    question: 'What is the chemical formula for Sulfur(VI) oxide?',
    answers: [
      { text: 'SO2', correct: false },
      { text: 'SO3', correct: true },
      { text: 'S2O', correct: false },
      { text: 'SO', correct: false }
    ]
  },
  {
    question: 'What is the chemical formula for Chromium(III) oxide?',
    answers: [
      { text: 'CrO3', correct: false },
      { text: 'CrO', correct: false },
      { text: 'Cr2O3', correct: true },
      { text: 'Cr2O', correct: false }
    ]
  },
  {
    question: 'What is the name of NO?',
    answers: [
      { text: 'nitrogen(IV) oxide', correct: false },
      
      { text: 'nitrogen oxide', correct: false },
      { text: 'nitrogen oxygen', correct: false },
      { text: 'nitrogen(II) oxide', correct: true }
    ]
  },
  {
    question: 'What is the name of P2O5?',
    answers: [
      
      { text: 'diphosphorus pentoxide', correct: true },
      { text: 'phosphorus(II) oxide', correct: false },
      { text: 'phosphorus dioxide', correct: false },
      { text: 'phosphorus oxygen', correct: false }
    ]
  },
  {
    question: 'What is the name of CO?',
    answers: [
      { text: 'carbon dioxide', correct: false },
      { text: 'carbon monoxide', correct: true },
      { text: 'carbon(IV) oxide', correct: false },
      { text: 'carbon oxygen', correct: false }
    ]
  },
  {
    question: 'What is the name of NO2?',
    answers: [
      { text: 'nitrogen(II) oxide', correct: false },
      { text: 'nitrogen(IV) oxide', correct: true },
      { text: 'nitrogen oxide', correct: false },
      { text: 'nitrogen oxygen', correct: false }
    ]
  },
  {
    question: 'What is the name of Fe3O4?',
    answers: [
      { text: 'iron tetroxide', correct: false },
      { text: 'iron(II, III) oxide', correct: true },
      { text: 'iron oxide', correct: false },
      { text: 'iron oxygen', correct: false }
    ]
  },
  {
    question: 'What is the chemical formula for Manganese(II) hydroxide?',
    answers: [
      { text: 'Mn(OH)3', correct: false },
      { text: 'Mg(OH)2', correct: false },
      { text: 'Mn(OH)2', correct: true },
     
      { text: 'Mn2(OH)3', correct: false }
    ]
  },
  {
    question: 'What is the chemical formula for Ferrous hydroxide?',
    answers: [
      { text: 'Fr(OH)2', correct: false },
      { text: 'Fe(OH)2', correct: true },
      { text: 'Fe(OH)3', correct: false },
      { text: 'Fe2(OH)3', correct: false }
    ]
  },
  {
    question: 'What is the chemical formula for Ferric hydroxide?',
    answers: [
      { text: 'Fe(OH)2', correct: false },
      { text: 'Fe2(OH)3', correct: false },
      { text: 'Fr(OH)3', correct: false },
      { text: 'Fe(OH)3', correct: true  }
    ]
  },
  {
    question: 'What is the name of Zn(OH)2?',
    answers: [
      { text: 'zinc hydroxide', correct: true },
      { text: 'zinc dihydroxide', correct: false },
     
      { text: 'zirconium hydroxide', correct: false },
      { text: 'zirconium oxygen hydrogen', correct: false }
    ]
  },
  {
    question: 'What is the name of Al(OH)3?',
    answers: [
      { text: 'aluminium dihydroxide', correct: false },
      { text: 'aluminium hydroxide', correct: true },
      { text: 'dialuminium hydroxide', correct: false },
      { text: 'aluminium oxygen hydrogen', correct: false }
    ]
  },
  {
    question: 'What is the name of Ca(OH)2?',
    answers: [
      { text: 'calcium hydroxide', correct: true },
      { text: 'calcium dihydroxide', correct: false },
      
      { text: 'dicalcium hydroxide', correct: false },
      { text: 'calcium oxygen hydrogen', correct: false }
    ]
  },
  {
    question: 'What is the chemical formula for Hydrosulfuric acid?',
    answers: [
      { text: 'H2SO3', correct: false },
      { text: 'H2SO4', correct: false },
      { text: 'H2S', correct: true },
     
      { text: 'HS2', correct: false }
    ]
  },
  {
    question: 'What is the chemical formula for Boric acid?',
    answers: [
      
      { text: 'H3BO3', correct: true },
      { text: 'H2BO3', correct: false },
      { text: 'H3BeO3', correct: false },
      { text: 'H3BO2', correct: false }
    ]
  },
  {
    question: 'What is the chemical formula for Hydroiodic acid?',
    answers: [
      { text: 'HIO', correct: false },
      { text: 'HIo', correct: false },
      { text: 'HI', correct: true },
      
      { text: 'H2I', correct: false }
    ]
  },
  {
    question: 'What is the name of HClO in aqueous form?',
    answers: [
      { text: 'hydrochloric acid', correct: false },
      
      { text: 'chloruos acid', correct: false },
      { text: 'hypochloruos acid', correct: true },
      { text: 'perchloric acid', correct: false }
    ]
  },
  {
    question: 'What is the name of HCN in aqueous form?',
    answers: [
      { text: 'hydrochloric acid', correct: false },
      { text: 'hydrocyanic acid', correct: true },
      { text: 'chloruos acid', correct: false },
      { text: 'perchloric acid', correct: false }
    ]
  },
  {
    question: 'What is the name of HClO4 in aqueous form?',
    answers: [
      { text: 'chloruos acid', correct: false },
      { text: 'hydrochloric acid', correct: false },
      { text: 'perchloric acid', correct: true },
      
      { text: 'chloric acid', correct: false }
    ]
  },
  {
    question: 'What is the chemical formula for Sodium iodide?',
    answers: [
      { text: 'Nalo', correct: false },
      { text: 'NaI', correct: true },
      { text: 'NaI2', correct: false },
      { text: 'Na3I', correct: false }
    ]
  },
  {
    question: 'What is the chemical formula for Sodium hypochlorite?',
    answers: [
      { text: 'NaClO2', correct: false },
      { text: 'NaClO', correct: true },
      { text: 'NaClO4', correct: false },
      { text: 'NaClO3', correct: false }
    ]
  },
  {
    question: 'What is the chemical formula for Potassium chlorate?',
    answers: [
      { text: 'KClO', correct: false },
      { text: 'KClO3', correct: false },
      { text: 'KClO4', correct: true },
      
      { text: 'KClO2', correct: false }
    ]
  },
  {
    question: 'What is the name of Mg3P2?',
    answers: [
      
      { text: 'magnesium phosphide', correct: true },
      { text: 'magnesium phosphate', correct: false },
      { text: 'magnesium phosphite', correct: false },
      { text: 'magnesium phosphine', correct: false }
    ]
  },
  {
    question: 'What is the name of KCN?',
    answers: [
      { text: 'potassium clorua', correct: false },
      { text: 'potassium cyanide', correct: true },
      { text: 'kalium cyanide', correct: false },
      { text: 'potassium carbon nitrogen', correct: false }
    ]
  },
  {
    question: 'What is the name of CuSO4?',
    answers: [
      { text: 'copper(I) sulfate', correct: false },
      { text: 'copper(II) sulfite', correct: false },
      { text: 'copper(II) sulfate', correct: true },
     
      { text: 'copper(II) sulfuric', correct: false }
    ]
  },
  
]