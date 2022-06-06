
import React from "react"
import ReactDOM from "react-dom"
import {Form , UsersData} from "./Form"

function App() {
return(
  <>
  <Form/>
  <UsersData/>
  </>
)
}

ReactDOM.render(<App/>, document.getElementById('app'))
