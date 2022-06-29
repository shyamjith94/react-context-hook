import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

class NavBar extends Component {
    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark;
                return (<nav style={{ background: theme.ui, color: theme.syntax }}>
                    <h1>context app</h1>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>)
            }}</ThemeContext.Consumer>
        );
    }
}

export default NavBar;