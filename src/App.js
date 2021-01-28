import './App.css';
import AddTransaction from './components/addTransaction';
import Balanced from './components/balanced';
import Header from './components/header';
import History from './components/history';
import IncomeExpense from './components/incomeExpense';

function App() {
  return (
    <div>
    <Header/>
    <div className='container'>
      <Balanced/>
      <IncomeExpense/>
      <History/>
      <AddTransaction/>
    </div>
    </div>
  );
}

export default App;
