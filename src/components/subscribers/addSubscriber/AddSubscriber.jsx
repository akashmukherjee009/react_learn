import './AddSubscriber.css'
import Container from '../../templetes/Container'
import Button from '../../templetes/Button'
import { useEffect, useRef, useState } from 'react'
import ErrorModal from '../../templetes/ErrorModal'


const AddSubscriber = ({  addUser, props }) => {
  const [form, setForm]= useState({
    name: "",
    pincode: localStorage.getItem('Sub')
  })
  // const [user, setUser]= useState([])
  const inputChangeHandler= (e)=>{
    const {name, value}= e.target
    setForm({...form ,[name]:value})
  }
  const [error, setError]= useState()
  
  const onSubmitHandler = (e)=>{
    e.preventDefault()    
    // console.log(priceInputRef.current.value);
    if (form.name.trim().length== 0) {
      setError({title:"Name Required", content:"Name Field Should be filled!"})
      
      return
    }
    if (form.pincode.trim().length== 0) {
      setError({title:"Pincode Required", content:"Pincode Field Should be filled!"})
      return
    }
    if (form.pincode < 0) {
      setError({title:"Pincode Should be Positive", content:"Pincode Field Should be a Positive Number!"})
      return
    }
    

    addUser(form) 
    setForm({
      name: "",
      pincode: ""
    })
  }
  const onCloseHandler= ()=>{
    setError()
  }
  const priceInputRef= useRef('Hello')
  // useEffect(()=>{
  //   console.log('Hello');
  // },[])
  return (
    <div>
      {error && <ErrorModal title={error.title} content={error.content} onClose={onCloseHandler}></ErrorModal>}
      
        <form onSubmit={onSubmitHandler}>
          <Container className='input'>
            <label htmlFor="name">Name</label>
            <input type="text"  id='name' value={form.name} name='name' onChange={inputChangeHandler}/>
            <label htmlFor="pincode">Pincode</label>
            <input type="text"  id='pincode' value={form.pincode} name='pincode' onChange={inputChangeHandler}/>
            <input type="text" ref={priceInputRef}  id='pincode' name='price' />
            <Button type='submit'>Save</Button>
          </Container>
        </form>  
        
    </div>
  )
}

export default AddSubscriber
