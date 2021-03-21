import { createStore } from 'redux'

import CalorieReducer from './reducer'

const store = createStore(,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default store