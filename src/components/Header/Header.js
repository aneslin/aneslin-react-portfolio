import React from 'react'
import Nav from '../Nav/Nav'


function Header(props) {
 const   {contentSelected, setContentSelected} = props
 

    return(
        <div className='container-fluid min-vw-100 px-0 fixed-top'>
        <header className='d-flex flex-wrap justify-content-between align-items-center   border-bottom header'>
            
            <h1 className='px-3'>
            Aaron Neslin
            </h1>
            <div className='px-4'>
            <Nav 
            
            contentSelected={contentSelected}
            setContentSelected={setContentSelected}
            ></Nav>

        </div>
     
        </header>
        </div>
    )
}

export default Header