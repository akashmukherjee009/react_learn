import { useState } from 'react'
import './App.css'
import AddSubscriber from './components/subscribers/addSubscriber/AddSubscriber'
import SubscriberList from './components/subscribers/subscriberList/SubscriberList'
import Container from './components/templetes/Container'

function App() {
  const [user, setUser]= useState([])
  const addUser= (form)=>{
    setUser([...user, form]) 
    localStorage.setItem('Sub',form.pincode)
    console.log(user);
  }
  
  return (
    <Container>
      <AddSubscriber addUser={addUser} />
      <SubscriberList user={user}/>
    </Container>
  )
}

export default App
