import { useState } from 'react'
import Question from '../components/Question'

import './App.css'

function App() {
  const questions = [
    {
      q: 'What is the correct way to update a single item in an array in React state while keeping other items unchanged?',
      options: [
        'A. Directly modify the state array.',
        'B. Create a copy of the state array, modify the copy, and set the state with the modified copy.',
        'C. Use the splice method on the state array.',
        'D. Use the concat method to add the new item to the state array.',
      ],
      ans: 1,
      id: 0,
    },
    {
      q: 'In a functional component using the useState hook, which method is used to ensure the state update is based on the most recent state?',
      options: [
        'A. this.setState',
        'B. useEffect',
        'C. Functional form of setState',
        'D. useContext',
      ],
      ans: 2,
      id: 1,
    },
    {
      q: 'Which of the following statements about updating state in React is TRUE?',
      options: [
        'A. Directly modifying the state variable will cause React to re-render the component.',
        'B. The useState hook replaces the old state entirely',
        'C. Using the useEffect hook updates the state automatically.',
        'D. The setState function in class components merges the new state with the old state.',
      ],
      ans: 3,
      id: 2,
    },
    {
      q: 'What is the significance of the useEffect hook in React?',
      options: [
        'A. It replaces lifecycle methods like componentDidMount and componentDidUpdate.',
        'B. It is used for routing in React applications.',
        'C. It is used to create reusable components in React.',
        'D. It is used to define context providers in React.',
      ],
      ans: 0,
      id: 3,
    },
    {
      q: 'What does JSX stand for in React?',
      options: [
        'A. JavaScript XML',
        'B. JSON Syntax Extension',
        'C. JavaScript Extension',
        'D. JavaScript React Extension',
      ],
      ans: 0,
      id: 4,
    },
    {
      q: 'Which hook in React is used for performing side effects?',
      options: ['A. useState', 'B. useMemo', 'C. useCallback', 'D. useEffect'],
      ans: 3,
      id: 5,
    },
    {
      q: 'In React, what is the purpose of useMemo hook?',
      options: [
        'A. To perform side effects based on state changes.',
        'B. To memoize a function so that it only recomputes the memoized value when its dependencies change.',
        'C. To manage global state in functional components.',
        'D. To fetch data from an API in a component.',
      ],
      ans: 1,
      id: 6,
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [chosenAns, setChosenAns] = useState([])
  const [score, setScore] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleNavigation = (direction) => {
    if (direction === 'prev') {
      setCurrentQuestion(Math.max(0, currentQuestion - 1))
    } else {
      setCurrentQuestion(Math.min(questions.length - 1, currentQuestion + 1))
    }
  }

  const handleOnSubmit = () => {
    let temp = 0
    for (let i = 0; i < chosenAns.length; i++) {
      if (questions[i].options[questions[i].ans] === chosenAns[i]) {
        temp += 1
      }
    }
    setIsSubmitted(true)
    setScore(temp)
  }

  return (
    <>
      {isSubmitted === false ? (
        <div className="container">
          <div className="header">
            <h2>
              question : {currentQuestion + 1} / {questions.length}
            </h2>
          </div>
          <div className="body">
            <Question
              question={questions[currentQuestion]}
              setChosenAns={setChosenAns}
              chosenAns={chosenAns}
            />
            <div className="navigation">
              <button
                onClick={() => {
                  handleNavigation('prev')
                }}
              >
                PREV
              </button>
              <button
                onClick={() => {
                  handleNavigation('next')
                }}
              >
                NEXT
              </button>
            </div>
            <button className="submit" onClick={handleOnSubmit}>
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div className="result container">
          <h1>
            You got <span style={{ color: 'green' }}>{score}</span>{' '}
            {score == 1 ? 'answer ' : 'answers '}
            correct!
          </h1>
          <button
            onClick={() => {
              setIsSubmitted(false)
              setCurrentQuestion(0)
            }}
          >
            Try again?
          </button>
        </div>
      )}
    </>
  )
}

export default App
