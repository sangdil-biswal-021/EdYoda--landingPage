import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import { Form } from './components/Form/Form.jsx';
import Form2 from './components/Form2/Form2';

function App() {
  return (
   <>
 <div className ="App"> 
 </div>
  <Navbar/>
  <div className='flexes'>
    <div className='flexed'>
      
    <Hero/>
    </div>
    <div className=' formbox'>
     <Form2/>

    </div>
  </div>

   </>
  );
}

export default App;
