import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Provider } from 'react-redux'
// import { Store } from './store/store.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {NavbarComponent} from '../src/components/navbarComponent/navbarComponent.jsx'
import {HomeComponent} from '../src/components/homeComponent/homeComponent.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={Store}> */}
      <BrowserRouter>
        <Routes>
          <Route path='' element={<NavbarComponent />}>
          <Route path='' element={<HomeComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>,
)
