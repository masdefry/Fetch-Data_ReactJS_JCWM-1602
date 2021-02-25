import { render } from '@testing-library/react'
import React from 'react'
import Axios from 'axios'

const linkAPI = 'https://randomuser.me/api/'

export default class Data1 extends React.Component{

    getData = () => {
        // Axios.get(linkAPI)
        // .then((response) => {
        //     console.log(response)
        // })
        // .catch((error) => {
        //     console.log(error)
        // })
    }

    render(){
        return(
            <div>
                <h1>
                    Fetch Data API - 1
                </h1>
                <input type='button' value='Ambil Data' onClick={this.getData} />
            </div>
        )
    }
}