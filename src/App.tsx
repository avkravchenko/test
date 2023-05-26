import {Routes, Route } from 'react-router-dom';
import './App.css';
import './scss/displayData.scss';
import Navigation from './Navigation';
import jsonData from './myData';
import RenderData from './components/RenderData';
import { useState } from 'react';



const App: React.FC = () => {

  const [receivedType, setReceivedType] = useState('')

  const receiveType = (type: string) => {
    setReceivedType(type)
  }

  console.log(receivedType)

  return (
    <>
      <Navigation receiveType={receiveType} jsonData={jsonData} />
      <div className='container'>
        <Routes>
          <Route path='/' element={<RenderData jsonData={jsonData.data} type={'income'}/>} />
          <Route path='/income' element={<RenderData jsonData={jsonData.data} type={receivedType || 'income'}/>} />
          <Route path='/outcome' element={<RenderData jsonData={jsonData.data} type={receivedType || 'outcome'}/>} />
          <Route path='/loan' element={<RenderData jsonData={jsonData.data} type={receivedType || 'loan'}/>} />
          <Route path='/investment' element={<RenderData jsonData={jsonData.data} type={receivedType || 'investment'}/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
