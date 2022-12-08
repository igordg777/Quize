import React, { useState } from 'react'

function FuncComponent() {

    const [word, setWord] = useState('Hello')
    const [word2, setWord2] = useState('Андрей')

    return (
        <div>
            {word}, {word2}
        </div>
    )
}

export default FuncComponent;