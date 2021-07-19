import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Layout from '../Layout/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import Content from '../Content/Content'

function App() {
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Content />
        </BrowserRouter>
      </Layout>
    </div>
  )
}

export default App
