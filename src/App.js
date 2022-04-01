
import './App.css';
import Expense from './components/Expense';

function App() {
  const expenseData=[
    {
      id:1,
      title:"Telephone Bill",
      amount:"95$",
      date:new Date(2021,10,14)
    },
    {
      id:2,
      title:"Internet Charges",
      amount:"95$",
      date:new Date(2022,10,14),
    },
    {
      id:2,
      title:"Telephone Bill",
      amount:"95$",
      date:new Date(2010,10,14)
    },
    {
      id:3,
      title:"Telephone Bill",
      amount:"95$",
      date:new Date(2011,11,26)
    },
  ];

  

  
  return (
    
    <div className="app">
      <Expense items={expenseData}/>
      <Expense items={expenseData}/>
      <Expense items={expenseData}/>
      <Expense items={expenseData}/>
    </div>
  );
}

export default App;
