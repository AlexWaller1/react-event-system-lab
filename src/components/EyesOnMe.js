// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {

    onFocus = () => console.log('Good!')
    // on focus is when we click on element
    onBlur = () => console.log('Hey! Eyes on me!')
    // blur is when we click off element
    render() {
        return (
            <button onFocus={this.onFocus} onBlur={this.onBlur}>
                Eye on me, please!
                </button>
        )
        
    }
}

export default EyesOnMe;