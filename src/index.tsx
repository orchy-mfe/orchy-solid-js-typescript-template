import {render} from 'solid-js/web'
import {renderWithQiankun, qiankunWindow, QiankunProps} from 'vite-plugin-qiankun/dist/helper'
import {Router} from '@solidjs/router'

import './index.css'
import App from './App'

const retrieveContainer = (props?: QiankunProps) => props?.container ?? document

const renderApp = (props?: QiankunProps) => {
    const container = retrieveContainer(props)
    render(() => 
    <Router base={props?.baseUrl}>
        <App />
    </Router>, container.querySelector('#root') as HTMLElement)
}

renderWithQiankun({
    mount(props) {
        renderApp(props)
    },
    bootstrap() { },
    unmount(props) {
        const container = retrieveContainer(props)
        container.textContent = ''
    },
    update() {}
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    renderApp({})
}