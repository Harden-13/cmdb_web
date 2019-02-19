import React from 'react'
import ReactDom from 'react-dom'
// import {Route,Link,BrowserRouter as Router} from 'react-router-dom'
import Admin from './admin'
import Life from './pages/demo/Life'
import Router from './router'
import './index.css'
// import registerServiceWorker from './registerServiceWorker'


// ReactDom.render(<Admin />,document.getElementById('root'))

ReactDom.render(<Router />,document.getElementById('root'))
// registerServiceWorker()

