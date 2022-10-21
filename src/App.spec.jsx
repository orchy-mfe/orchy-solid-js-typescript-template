import {describe, it, expect} from 'vitest'
import {screen, render} from 'solid-testing-library'

import App from './App'

describe('App', () => {
    it('renders correctly', async () => {
        render(() => <App />)

        expect(screen.getByText(/Edit/i)).toBeDefined()
        expect(screen.getByText(/src\/App/i)).toBeDefined()


        expect(screen.getByText(/and save to reload./i)).toBeDefined()
        expect(screen.getByText('Learn Solid')).toBeDefined()
    })
})