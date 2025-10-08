import { RouterProvider } from 'react-router'
import {router} from '@/routes/router'
import { useState } from 'react';

import Theme from './context/Theme';

function App() {
    const [theme, setTheme] = useState<string>(() => {
        return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')
    });
    const themeContextVaule = {theme, setTheme};

    

    return (
        <>
            <Theme.Provider value={themeContextVaule}>
                <RouterProvider router={router} />
            </Theme.Provider>
            
        </>
    )
}

export default App
