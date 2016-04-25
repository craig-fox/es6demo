import { createStore } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'
import Company from './components/Company'
import company from './reducers/company'

const store = createStore(company)
const root = document.getElementById('root')

function render() {
    ReactDOM.render(
        <Company store={store} />,
        root
    )
}

render()
store.subscribe(render)