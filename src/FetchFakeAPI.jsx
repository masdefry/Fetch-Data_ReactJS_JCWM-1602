import React from 'react'
import Axios from 'axios'

const linkAPI = 'http://localhost:2000/users'

export default class FetchFakeAPI extends React.Component{

    state = {
        dataUsers: null,
        showForm: false,
        idSelected: null
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

    onSubmitData = () => {
        // 1. Ambil value inputan user
        let inputUsername = this.refs.username.value
        let inputEmail = this.refs.email.value
        let inputPassword = this.refs.password.value

        // 2. Validasi inputan user (optional)
        if(inputUsername && inputEmail && inputPassword){
            // 3. Kirim data user menuju API
            Axios.post(linkAPI, {username: inputUsername, email: inputEmail, password: inputPassword})
            .then((res) => {
                if(res.status === 201){
                    alert('Data Berhasil Ditambah')
                    this.onGetData()

                    // Supaya Input Form Menjadi Koson Kembali 
                    this.refs.username.value = ''
                    this.refs.email.value = ''
                    this.refs.password.value = ''
                }
            })
            .catch((err) => {
                console.log(err)
            })
        }else{
            alert('Masukan Seluruh Data!')
        }
    }

    onUpdateData = () => {
        // 1. Ambil value terbaru dari user
        let usernameEdited = this.refs.usernameEdit.value
        let emailEdited = this.refs.emailEdit.value
        let passwordEdited = this.refs.passwordEdit.value

        console.log(usernameEdited)

        let dataToSend = {
            username: usernameEdited,
            email: emailEdited,
            password: passwordEdited
        }

        // 2. Kita validasi
        if(usernameEdited && emailEdited && passwordEdited){
            // 3. Kita kirim data terbaru ke API
            Axios.patch(linkAPI + '/' + this.state.idSelected, dataToSend)
            .then((res) => {
                if(res.status === 200){
                    alert('Data Berhasil Diubah')
                    this.setState({idSelected: null})
                    this.onGetData() // Karena terjadi perubahan di state, maka tabel bakalan re-render dan datanya berubah
                }
            })
            .catch((err) => {

            })
        }else{
            alert('Masukan Seluruh Data!')
        }

    }

    // mapDataUsers = () => {
        
    // }

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
                <div className='d-flex justify-content-between'>
                    <div>
                        <h1>
                            Fetch Data Fake API
                        </h1>
                    </div>
                    <div>
                        <input type='button' value='Tambah Data' className='btn btn-primary' onClick={() => this.setState({showForm: true})} />
                    </div>
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col"><center>Action</center></th>
                        </tr>
                    </thead>
                    <tbody className='border'>
                    {
                        this.state.dataUsers.map((value, index) => {
                            if(this.state.idSelected === value.id){
                                return(
                                    <tr key={index}>
                                        <th scope="row">{value.id}</th>
                                        <td>
                                            <input type='text' ref='usernameEdit' defaultValue={value.username} />
                                        </td>
                                        <td>
                                            <input type='text' ref='emailEdit' defaultValue={value.email} />
                                        </td>
                                        <td>
                                            <input type='text' ref='passwordEdit' defaultValue={value.password} />
                                        </td>
                                        <td>
                                            <center>
                                                <input type='button' value='Save' className='btn btn-success' onClick={this.onUpdateData} />
                                                <input type='button' value='Cancel' className='btn btn-danger mx-3' onClick={() => this.setState({idSelected: null})} />
                                            </center>
                                        </td>
                                    </tr>
                                )
                            }else{
                                return(
                                    <tr key={index}>
                                        <th scope="row">{value.id}</th>
                                        <td>{value.username}</td>
                                        <td>{value.email}</td>
                                        <td>{value.password}</td>
                                        <td>
                                            <center>
                                                <input type='button' value='Edit' className='btn btn-warning' onClick={() => this.setState({idSelected: value.id})} />
                                                <input type='button' value='Delete' className='btn btn-danger mx-3' />
                                            </center>
                                        </td>
                                    </tr>
                                )
                            }
                        })
                    }
                    </tbody>
                </table>
                    
                {
                    this.state.showForm?
                        <div className='mt-5'>
                            <h1>
                                Inpurt Form
                            </h1>
                            <div>
                                <input type='text' ref='username' placeholder='Input Username' className='form-control w-50' />
                            </div>
                            <div className='mt-3'>
                                <input type='text' ref='email' placeholder='Input Email' className='form-control w-50' />
                            </div>
                            <div className='mt-3'>
                                <input type='text' ref='password' placeholder='Input Password' className='form-control w-50' />
                            </div>

                            <input type='button' value='Submit Data' className='btn btn-primary mt-3' onClick={this.onSubmitData} />
                            <input type='button' value='Cancel' className='btn btn-danger mt-3' onClick={() => this.setState({showForm: false})} />
                        </div>
                    :
                        <div>
                            Form Tidak Tampil
                        </div>
                }

                <br /><br /><br /><br /><br />
            </div>
        )
    }
}