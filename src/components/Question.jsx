import React, { useState } from 'react'


function Question(props) {

    const [question, setQuestion] = useState([])
    const [viewAnswer, setViewAnswer] = useState(false)


    const getQuestion = () => {
        fetch('http://jservice.io/api/random?count=1')
            .then(mow => mow.json())
            .then(irina => setQuestion(irina))

        setViewAnswer(false)
    }

    return (
        <div>
            <button onClick={() => getQuestion()}>Новый вопрос</button>

            {question.length > 0 &&
                <div>
                    <p>Пришел вопрос</p>
                    <h2>{question[0].question}</h2>
                    <button onClick={() => setViewAnswer(true)}>Ответ</button>
                    {viewAnswer &&
                        <h3>{question[0].answer}</h3>
                    }

                </div>
            }
        </div>
    )
}

export default Question