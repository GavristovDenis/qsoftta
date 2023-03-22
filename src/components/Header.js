import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import { SearchBar } from './SearchBar';
export const Header = () => {
    return (
        <div className="header">
            <AppBar position="static">
                <Toolbar variant="dense" className='tool_bar'>
                    <div className='header_image_container'>
                        <img

                            className='header_image'
                            alt="QSOFT"
                            src={require("./img/logo.png")} />
                    </div>
                    <SearchBar />
                    <div className='user_container'>
                        <Typography className='user_name'>
                            USER_NAME
                        </Typography>
                        <Avatar className='avatar' />
                    </div>
                </Toolbar>
            </AppBar>

        </div>
    )
}