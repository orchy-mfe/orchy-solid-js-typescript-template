import {render} from 'solid-js/web'
import {renderWithQiankun, qiankunWindow} from 'vite-plugin-qiankun/dist/helper'
import {Router} from '@solidjs/router'

import './index.css'
import App from './App'

const retrieveContainer = props => props.container ?? document

const renderApp = (props = {}) => {
    const container = retrieveContainer(props)
    render(() => 
    <Router base={props.baseUrl}>
        <App />
    </Router>, container.querySelector('#root'))
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
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    renderApp({})
}