import { createStore } from 'redux'
import ReactDOM from 'react-dom'
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