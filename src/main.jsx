import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { Store } from './store/store.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StructureComponent } from './components/structureComponent/structureComponent.jsx'
import './styles.css'
import { SearchPage } from './pages/searchPage.jsx'
import {MyPhotosPage} from './pages/myPhotosPage.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route element={<StructureComponent />}>
            <Route path='' element={<SearchPage />} />
            <Route path='myPhotos' element={<MyPhotosPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
