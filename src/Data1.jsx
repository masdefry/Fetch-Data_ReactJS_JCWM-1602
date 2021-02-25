import React from 'react'
import Axios from 'axios'

const linkAPI = 'https://randomuser.me/api/'

export default class Data1 extends React.Component{

    state = {
        data: null
    }

    getData = () => {
        Axios.get(linkAPI)
        .then((response) => {
            this.setState({data: response.data.results})
            console.log(response.data.results)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render(){
        if(this.state.data === null){
            return(
                <div>
                    <h1>
                        Fetch Data API - 1
                    </h1>
                    <input type='button' value='Ambil Data' onClick={this.getData} />
                </div>
            )
        }

        return(
            <div>
                <h1>
                    Data :
                </h1>
                {
                    this.state.data.map((value, index) => {
                        return(
                            <div key={index}>
                                <h1>
                                    {value.email}
                                </h1>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}