import React from 'react'
import Nav from '../Nav/Nav'


function Header() {



    return(
        <div className='container-fluid min-vw-100'>
        <header className='d-flex flex-wrap justify-content-between    border-bottom header'>
            <h1>
            Aaron Neslin
            </h1>
            <Nav></Nav>

        </header>
        </div>
    )
}

export default Header