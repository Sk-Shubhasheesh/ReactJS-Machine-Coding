import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [principle, setPrinciple] = useState(0)
  const [interest, setInterest] = useState(0)
  const[years, setYears] = useState(0)
  const [emi, setEMI] = useState(0);

  const hadleChange = (e)=>{
    const id = e.target.id;
    const value = parseInt(e.target.value);
    if(id === 'principle') setPrinciple(value);
    else if (id === 'interest') setInterest(value);
    else setYears(value)
  }

  const calculateEMI = ()=>{
    let r = interest;
    if (principle && r && years) {
      r = r / 12 / 100; // per month
      const calcPow = Math.pow(1 + r, years * 12);
      const amount = principle * ((r * calcPow) / (calcPow - 1));
      setEMI(Math.round(amount));
    }
  }


  useEffect(()=>{
    calculateEMI();
  }, [principle, interest, years])
  return (
    <div className='loan-calc'>
      <h1>Mortage Calculator</h1>

      <div className='inputes'>
        <p>Principle loan amount</p>
        <input onChange={hadleChange} type='number' id='principle'  />

        <p>Interest rate</p>
        <input onChange={hadleChange} type='number' id='interest'  />

        <p>Years</p>
        <input onChange={hadleChange} type='number' id='year'  />

      </div>

      <div className='output'>
        YourEMI is {emi}

      </div>
    </div>

  )
 
}

export default App
