import Axios from 'axios'
import React from 'react'

const linkAPI = 'https://cat-fact.herokuapp.com/facts'

export default class LifeCycleMethod extends React.Component{

    state = {
        nama: 'Defryan',
        data: null
    }

    componentDidMount(){
        console.log('Component Did Mount Jalan')
        this.onGetData()
    }

    onGetData = () => {
        Axios.get(linkAPI)
        .then((res) => {
            console.log(res.data)
            this.setState({data: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    // componentDidUpdate(){
    //     alert('Component Did Update Jalan')
    // }

    // componentWillUnmount(){
    //     alert('Component Will Unmount Jalan')
    // }

    render(){
        console.log('Render Jalan')
        if(this.state.data === null){
            return(
                <div>
                    <h1>
                        Loading...
                    </h1>
                </div>
            )
        }

        return(
            <div>
                {/* <input type='button' value='Test Did Update' onClick={() => this.setState({nama: 'Patrick'})} /> */}
                {
                    this.state.data.map((value, index) => {
                        return(
                            <div key={index}>
                                <h1>
                                    {value.text}
                                </h1>
                            </div>    
                        )
                    })
                }
            </div>
        )
    }
}