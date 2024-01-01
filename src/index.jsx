import './style.css'
import { createRoot } from 'react-dom/client'
import App from './App.js'

const root = createRoot(document.querySelector('#root'))

root.render(
        <App clickersCount={ 3 }>
            <h1>React Recap 1</h1>
            <h2>Going over the basics</h2>
        </App>
)