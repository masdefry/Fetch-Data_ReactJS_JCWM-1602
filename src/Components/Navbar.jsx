import React from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component{
    render(){
        return(
            <nav className="nav bg-dark">
                <Link to='/' className="nav-link active">Home</Link>
                <Link to='/data-1' className="nav-link active">Fetch Data 1</Link>
                <Link to='/data-2' className="nav-link active">Fetch Data 2</Link>
                <Link to='/lifecyclemethod' className="nav-link active">Lifecycle Method</Link>
                <Link to='/exercise' className="nav-link active">Exercise</Link>
                <Link to='/fake-api' className="nav-link active">Fetch Data Fake API</Link>
            </nav>
        )
    }
}