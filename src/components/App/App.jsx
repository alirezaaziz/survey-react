import './App.css'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '../Layout/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Content/Content.css'
import ResultPage from '../ResultPage/ResultPage'
import UserDetail from '../UserDetail/UserDetail'
import Content from '../Content/Content'
import FirstQuestion from '../FirstQuestion/FirstQuestion'
import SecondQuestion from '../SecondQuestion/SecondQuestion'
import ThirdQuestion from '../ThirdQuestion/ThirdQuestion'

function App() {
  return (
    <div className="App">
      <Layout>
        <Content>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <UserDetail />
              </Route>
              <Route path="/first">
                <FirstQuestion />
              </Route>
              <Route path="/two">
                <SecondQuestion />
              </Route>
              <Route path="/three">
                <ThirdQuestion />
              </Route>
              <Route path="/end">
                <ResultPage />
              </Route>
            </Switch>
          </BrowserRouter>
        </Content>
      </Layout>
    </div>
  )
}

export default App
