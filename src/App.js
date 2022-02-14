import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import DatePicker from 'react-bootstrap-date-picker';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { useState } from 'react';
function App() {
  const now = new Date();
  const [date, setdate] = useState(now);
  console.log(date);
  const formatDate=date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getUTCFullYear()
  console.log(formatDate)
  const [slot, setslot] = useState('');
  const dummyData = [
    {
      date: '14-2-2022',
      Avltime: '7:30',
      Avl: true
    },
    {
      date: '12-2-2022',
      Avltime: '6:30',
      Avl: true
    },
    {
      date: '12-2-2022',
      Avltime: '7:30',
      Avl: false
    },
    {
      date: '14-2-2022',
      Avltime: '8:30',
      Avl: false
    },
    {
      date: '13-2-2022',
      Avltime: '8:30',
      Avl: true
    }

  ]

  const checkAvl = function (e) {
    console.log(e)
    const result = dummyData.find((z) => z.date === e);
    if (result === undefined) {
      alert('slots not available on that date')
    }
    else {
  
        if (result.Avl == true) {
          return result.Avltime;
        }
        else {
          alert("slot unavailable");
        }
     
  
      // if (result.Avl == true) {
      //   return result.Avltime;
      // }
      // else {
      //   alert("slot unavailable");
      // }

    }

  }
  const bookSlot=function() {
    const result = dummyData.find((z) => z.date === (formatDate));

   if(slot=== result.Avltime){
     alert('slot booked');
   }
   else{
     alert("slot not available");
    
   }
  }

  return (
    <div className="container-fluid d-flex bg-primary">
      <div className='container-fluid d-flex' style={{ alignContent: 'center', flexDirection: 'column', justifyItems: 'center' }}>

        <DatePicker selected={date} onChange={(date) => {setdate(date);checkAvl(formatDate)}}  ></DatePicker>
        {/* onInputClick={checkAvl(date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear())} */}
        <button onClick={() => setslot('6:30')}>6:30</button>

        <button onClick={() => setslot('7:30')}>7:30</button>
        <button onClick={() => setslot('8:30')}>8:30 pm</button>
        <button onClick={() => bookSlot()} className='btn btn-secondary'>confirm Slot</button>



      </div>
    </div>
  );
}

export default App;





























































