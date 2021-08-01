import React from 'react'
import { IconButton } from '@material-ui/core';
import SmsIcon from '@material-ui/icons/Sms';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "../assets/css/navbar.css"


function Navbar1() {
    return (
        <div className="navbar1">
            <div className="navbarItems1">
                <IconButton>    
                    <SmsIcon />
                </IconButton>
                <IconButton>    
                    <AccountCircleIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Navbar1
