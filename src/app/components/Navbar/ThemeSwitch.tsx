'use client';
import { useState } from "react"
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ThemeSwitch = () => {
    const [darkMode, setDarkMode] = useState(true)
    const switchToDark = () => {
        document.documentElement.setAttribute('theme-mode', 'dark')
        setDarkMode(true)
    }
    const switchToLight = () => {
        document.documentElement.setAttribute('theme-mode', 'light')
        setDarkMode(false)
    }

    return darkMode ?
        <button
            id="theme-toggle"
            type="button"
            className="hover:bg-neutral-800 focus:outline-none focus:ring-4 focus:ring-neutral-700 rounded-lg h-8 w-8"
            onClick={switchToLight}
        >
            <LightModeIcon/>
        </button> :
        <button
            id="theme-toggle"
            type="button"
            className="hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg h-8 w-8"
            onClick={switchToDark}
        >
            <DarkModeIcon/>
        </button>
}

export default ThemeSwitch