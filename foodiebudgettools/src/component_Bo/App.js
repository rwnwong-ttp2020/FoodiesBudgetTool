import React from 'react'
import Login from './Login'
import useLocalStorage from '../hooks_Bo/useLocalStorage';
import Dashboard from './Dashboard'
import {ContactsProvider} from '../contexts_Bo/ContactsProvider'
import {ConversationsProvider} from '../contexts_Bo/ConversationsProvider'


function App() {
  const [id,setId] = useLocalStorage('id')

const dashboard = (
  <ContactsProvider>
    <ConversationsProvider>
    <Dashboard id={id}/>
    </ConversationsProvider>
  </ContactsProvider>
)
  return (
    
    id ? dashboard : <Login onIdSubmit ={setId} />
  
  )
}

export default App;
