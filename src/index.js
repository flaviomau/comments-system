import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import base from './Base'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <App base={base}/>, 
    document.getElementById('root')
)
registerServiceWorker()
