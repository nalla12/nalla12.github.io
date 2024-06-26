import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.scss'
import {NextUIProvider} from '@nextui-org/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <NextUIProvider>
            <App className='app dark' />
        </NextUIProvider>
    </React.StrictMode>,
)
