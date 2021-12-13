import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/AddContact/ContactList';
import { useState, useEffect } from 'react';
import uuid from 'react-uuid'
import { BrowserRouter as  Switch, Route, Routes, Router, BrowserRouter } from 'react-router-dom';
import ContactCard from './components/AddContact/ContactCard';
import  api from '../src/api/api'
import EditContact from './components/AddContact/EditContact';
import Pratice from './components/Header/Pratice';


function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([])
  const [searchTerm, setSearchTerm] = useState()
  const [searchResults, setSearchResults] = useState([])

  const retriveContacts = async () => {
    const response = await api.get("/contacts")
    return response.data

  }

  const addContact = async (contact) => {
    const request = {
      id: uuid(),
      ...contact
    }
    const response = await api.post("/contacts", request)
    //Without api
 /*    {id: uuid(), ...contact} */
    setContacts([...contacts, response.data])
   
  }

  const removeHandler = async (id) => {
 
   await api.delete(`/contacts/${id}`);
  const removeContacts = contacts.filter(contact => contact.id !== id) 
  setContacts(removeContacts) 
  
  }
  const updateHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact)
    const {id, name, email} = response.data
    setContacts(contacts.map(contact => {
      return contact.id === id ? {...response.data} : contact 
    }))


  }

  const searchHandler = (searchWord) => {
   
    setSearchTerm(searchWord)
    console.log(searchTerm)

   if(searchWord !== "")
    {
      const newContactList = contacts.filter(contact => {
        return Object.values(contact).join(" ").toLowerCase().includes(searchWord.toLowerCase())
      })
     setSearchResults(newContactList)
    }
    else {
      return contacts;
    } 

  }

  useEffect(() => {
  /*   const retriveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retriveContact) setContacts(retriveContact) */
    const getContacts = async () => {
      const allContacts = await retriveContacts();
      if(allContacts) setContacts(allContacts)

    }
    getContacts()
  
   
  }, [])

 useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  
 }, [contacts])

 
  return (
    <div className="App">
      <BrowserRouter>
        <>
   <Header></Header> 
   
      
   <Routes>
      
        <Route path="/"  element={<ContactList term={searchTerm} searchKeyword={searchHandler} contacts={ searchTerm &&  searchTerm.length > 1 ? searchResults : contacts} deleteContact={removeHandler} />}>
      </Route>
      <Route path="/add" exact element={<AddContact addContact={addContact} />}>
      </Route>
      <Route path="/contact/:id" exact element={<ContactCard></ContactCard>} >
      </Route>
      <Route path="/contact/edit/:id" exact element={<EditContact updateContact={updateHandler}></EditContact>} >
      </Route>
      <Route path="/practice" element={<Pratice></Pratice>}>

      </Route>
      
      
     
      </Routes> 
      </>
     
      </BrowserRouter>
     
    </div>
  );
}

export default App;
