import './App.css';
import AddTransaction from './components/addTransaction';
import Balanced from './components/balanced';
import Header from './components/header';
import History from './components/history';
import IncomeExpense from './components/incomeExpense';
import { GlobalProvider} from "./context/globalContext";

function App() {
  return (
    <GlobalProvider>
    <Header/>
    <div className='container'>
      <Balanced/>
      <IncomeExpense/>
      <History/>
      <AddTransaction/>
    </div>
    </GlobalProvider>
  );
}

export default App;
