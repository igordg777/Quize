import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: 'Hello2',
            word2: "Андрей"
        };
    }

    render() {
        return (
            <div >
                {this.state.word}, {this.state.word2}
            </div>
        );
    }
}

export default ClassComponent;