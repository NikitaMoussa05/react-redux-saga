import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import { asyncIncrementCreator, asyncDecrementCreator } from './store/countReducer';
import { fetchUsers } from './store/userReducer';

function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)

  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash})
  }

  const getCash = () => {
    dispatch({type: "GET_CASH", payload: 5})

  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }


  return (
    <div className="App">
      <div style={{fontSize: "3rem"}}>{cash}</div>
      <div style={{display: "flex"}} className='btns'>
        <button className="btn" onClick={() => dispatch(asyncIncrementCreator())}>ИНКРЕМЕНТ++</button>
        <button className="btn" onClick={() => dispatch(asyncDecrementCreator())}>ДЕКРЕМЕНТ--</button>
        <button className="btn" onClick={() => dispatch(fetchUsers())}>--ПОЛУЧИТЬ ВСЕХ ЮЗЕРОВ--</button>
      </div>
      <div>
        {customers.length > 0 ? 
        <div>
          {customers.map(customer => 
            <div onClick={() => removeCustomer(customer)} style={{fontSize: "2rem", border: "1px solid black", padding: "10px", marginTop: 5}}>{customer.name}</div>
            )}
        </div> 
        : 
         <div style={{fontSize: "2rem", marginTop: 20}}>
          Клиенты отсутсвуют
          </div>}
      </div>
    </div>
  );
}

export default App;
