import { useContext, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import Theme from '@/context/Theme';

const DarkModeButton = () => {
    const {theme, setTheme} = useContext(Theme);

    useEffect(() => {
        const html = document.documentElement;
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <button className='text-yellow-300' onClick={() => {
            setTheme(theme==='light'?'dark':'light')
        }}>
            {theme=='dark'?<Moon />:<Sun />}
        </button>
    )
}

export default DarkModeButton;