const Question = ({ question, setChosenAns, chosenAns }) => {
  return (
    <>
      <h1>{question.q}</h1>
      <div className="options">
        {question.options.map((option, key) => (
          <button
            key={key}
            style={{
              backgroundColor:
                option === chosenAns[question.id] ? '#0066cc' : '#444444',
              color: option === chosenAns[question.id] ? '#ffffff' : '#d3d3d3',
              border:
                option === chosenAns[question.id]
                  ? '2px solid whitesmoke'
                  : 'none',
            }}
            onClick={() => {
              setChosenAns((prev) => {
                let newState = [...prev]
                newState[question.id] = option
                return newState
              })
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  )
}

export default Question
