import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage.jsx'
import HomePages from './Components/HomePage/HomePages'
import Detail from './Components/Detail/Detail';
import FormPage from './Components/formPage/formPage';
import axios from 'axios'
import {  useState } from 'react';




function App() {
  const [characters,setCharacters] = useState([])

  const onSearch = async (name)=>{
    try {
      const res = await axios(`http://localhost:3001/dogsRoutes/name?name=${name}`)
      if(res.data && !characters.find(ele => ele.name.toLowerCase() === name.toLowerCase())){
        return setCharacters([...characters,res.data])
      }
      if(characters.find(ele => ele.name.toLowerCase() === name.toLowerCase())){
        return alert('este perrito está repetido')
      }
    } catch (error) {
      return alert('no hay perritos con este nombre :c')
    }
  }
  const onClose = (name)=>{
    setCharacters(characters.filter((char)=>char.name !== name))
  }
  const orderByName = (characters,getter,order)=>{
    characters.sort((a, b)=>{
        const first = getter(a);
        const second = getter(b);
        const compare = first.localeCompare(second)
        return order === true ? compare: -compare
    })
    return setCharacters(characters)
}
const deDb = (getter)=>{
  if(getter === 'yes')return setCharacters(characters.filter(ele => ele.fromDb))
  else setCharacters(characters.filter(ele => !ele.fromDb))
  
  
}
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/homePage' element={<HomePages onSearch={onSearch} characters={characters} onClose={onClose} orderByName={orderByName} deDb={deDb}/>}/>
        <Route path='/detail/:id' element = {<Detail/>}/>
        <Route path='/formPage' element={<FormPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

