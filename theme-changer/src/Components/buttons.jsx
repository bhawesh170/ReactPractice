import { useState } from "react";



function Button(prop) {
    const [theme, setTheme] = useState('light');
    const changeTheme = (color) => {
        setTheme(color);
        document.body.style.backgroundColor = theme;
    };

    return (
        <button className="btn" onClick={() => changeTheme(prop.color)}>
            {prop.color.toUpperCase()}
        </button>
    )
}

export default Button