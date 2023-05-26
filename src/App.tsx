import {Routes, Route } from 'react-router-dom';
import './App.css';
import './scss/displayData.scss';
import Navigation from './Navigation';
import jsonData from './myData';
import Income from './components/Income';
import Outcome from './components/Outcome';
import Loan from './components/Loan';
import Investment from './components/Investment';
import Home from './components/Home';



const App: React.FC = () => {
  // ...
  return (
    <>
      <Navigation jsonData={jsonData} />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/income' element={<Income jsonData={jsonData.data} type="income"/>} />
          <Route path='/outcome' element={<Outcome jsonData={jsonData.data} type="outcome"/>} />
          <Route path='/loan' element={<Loan jsonData={jsonData.data} type="loan"/>} />
          <Route path='/investment' element={<Investment jsonData={jsonData.data} type="investment"/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;

{/* <Route path='/' component={Table}/>
        <Route path='/navigator?tab=0'/>
        <Route path='/navigator?tab=1'/>
        <Route path='/navigator?tab=2'/>
        <Route path='/navigator?tab=3'/> */}