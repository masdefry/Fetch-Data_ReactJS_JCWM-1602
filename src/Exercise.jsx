import React from 'react'

class Exercise extends React.Component{
    state = {
        countWord : 0
    }

    onChangeInput = () => {
        console.log('Masuk Function')
        let inputValue = this.refs.input.value
        let totalKata = 0

        for(let i = 0; i < inputValue.length; i++){
            if(inputValue[i] === ' '){
                totalKata++
            }
        }

        this.setState({countWord: totalKata})
    }

    render(){
        return(
            <div>
                <p>Jumlah Kata: {this.state.countWord}</p>
                <input type='text' ref='input' placeholder='Enter your text' onChange={this.onChangeInput} />
            </div>
        )
    }
}

export default Exercise