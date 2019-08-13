import React from 'react';
import './App.css';

const fakeData = Array(5).fill({
  orderId: "Vlad",
  created: 2434,
  customer: "vladislav sazonius",
  fulfillment: "Unfulfilled",
  total: 1000,
  profit: 999,
  status: "Paid"
});

function App() {
  return (
    <div className="App" >
      <h1>Vlados miros</h1>
      <div className="overflow">
       <table className="zui-table zui-table-rounded">
         <thead>
        <tr>
          <th>Order id</th>
          <th>Created</th>
          <th>Customer</th>
          <th>Go</th>
          <th>Test</th>
          <th>OMG</th>
        </tr>
        </thead>
        <tbody>
        {fakeData.map(el => {
          return (
            <tr className="row">
              <td className="cell">{el.orderId}</td>
              <td>{el.created}</td>
              <td>{el.customer}</td>
              <td><input type="text" placeholder="vlados"/></td>
              <td>{el.fulfillment}</td>
              <td>{el.fulfillment}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default App;
