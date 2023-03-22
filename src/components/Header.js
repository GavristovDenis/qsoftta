import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { SearchBar } from "./SearchBar";
export const Header = () => {
    const size = window.screen.width;
    console.log(size);
    return (
        <div className="header">
            <AppBar position="static">
                <Toolbar variant="dense" className="tool_bar">
                    {size > 380 ? (
                        <>
                            <div className="header_image_container">
                                <img
                                    className="header_image"
                                    alt="QSOFT"
                                    src={require("./img/logo.png")}
                                />
                            </div>
                            <SearchBar />
                            <div className="user_container">
                                <Typography className="user_name">USER_NAME</Typography>
                                <Avatar className="avatar" />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="header_image_wrapper">
                                <div className="header_image_container">
                                    <img
                                        className="header_image"
                                        alt="QSOFT"
                                        src={require("./img/logo.png")}
                                    />
                                </div>
                                <div className="user_container">
                                    <Avatar className="avatar" />
                                </div>
                            </div>
                            <SearchBar />
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
};