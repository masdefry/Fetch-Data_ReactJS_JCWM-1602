import Axios from 'axios'
import React from 'react'

const linkAPI = 'https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list'

export default class Data2 extends React.Component{

    state = {
        data: null
    }

    getData = () => {
        Axios.get(linkAPI)
        .then((response) => {
            console.log(response.data)
            this.setState({data: response.data})
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
                        Fetch Data-2
                    </h1>
                    <input type='button' value='Ambil Data' onClick={this.getData} />
                </div>
            )
        }
        
        return(
            <>
                {
                    this.state.data.map((value, index) => {
                        if(index === 0){
                            return(
                                <div key={index}>
                                    <h3>
                                        {value.title}
                                    </h3>
                                    <p>
                                       {value.description} 
                                    </p>
                                    <hr />
                                </div>
                            )
                        }
                    })
                }
                
                {/* <div>
                    <h3>
                        {this.state.data[0].title}
                    </h3>
                    <p>
                        {this.state.data[0].description}
                    </p>
                </div> */}
            </>
        )
    }
}