import React, { useState,useEffect } from 'react'
import Navigations from './NavList';
import Logo from './Logo';
import ThemeToggler from './ThemeToggler';

export default function NavBar() {

    const [isDark, setIsDark] = useState(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches)
            setIsDark(true);
        else
            setIsDark(false);
    }, [])

    useEffect(
        () => {
            if (isDark)
                document.documentElement.classList.add("dark");
            else
                document.documentElement.classList.remove("dark");
        }, [isDark]
    )

    return (
        <div className="nav-bar bg-slate-100 dark:bg-slate-900 px-3 py-2 dark:shadow-white shadow-sm">
            <div className="flex items-center md:justify-between px-5 cursor-pointer justify-center md:py-1 py-3">

                {/* logo */}
                <Logo dark={isDark} />

                {/* navbar */}
                <Navigations />

                {/* themeToggler */}
                <ThemeToggler dark={isDark} setDark={setIsDark} />

            </div>

        </div>
    )
}
