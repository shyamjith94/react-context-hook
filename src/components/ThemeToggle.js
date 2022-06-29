import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";


class ThemeToggle extends Component {
    static contextType = ThemeContext
    render() { 
        const { toggleTheme } = this.context;
        console.log(this.context)
        return (
            <button onClick={toggleTheme}>Toggle theme</button>
        );
    }
}
 
export default ThemeToggle;