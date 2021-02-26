import React from 'react'
import Axios from 'axios'

const linkAPI = 'http://localhost:2000/users'

export default class FetchFakeAPI extends React.Component{

    state = {
        dataUsers: null
    }

    componentDidMount(){
        this.onGetData()
    }

    onGetData = () => {
        Axios.get(linkAPI)
        .then((res) => {
            console.log(res.data)
            this.setState({dataUsers: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render(){
        if(this.state.dataUsers === null){
            return(
                <div>
                    Loading...
                </div>
            )
        }

        return(
            <div className='container mt-5'>
                <h1>
                    Fetch Data Fake API
                </h1>
                <table className="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.dataUsers.map((value, index) => {
                            return(
                                <tr key={index}>
                                    <th scope="row">{value.id}</th>
                                    <td>{value.username}</td>
                                    <td>{value.email}</td>
                                    <td>{value.password}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}