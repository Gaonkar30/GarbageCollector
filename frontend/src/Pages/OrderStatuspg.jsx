import React from 'react';
import './OrderStatus.css';
import HeaderUser from '../components/HeaderUser';

function OrderStatuspg() {
  return (
    <div className='OrderStatus'>
      <div className='header'>
        <HeaderUser />
      </div>
      <div className='body'>
        <div className='pending'>
          <h1>
            <u>Current Request Order:</u>
          </h1>
          <div className='orders'>
            <table>
              <thead>
                <tr>
                  <th>Date Of Request</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {/* Add your data here */}
                <tr>
                  <td>12/11/23</td>
                  <td>12:04pm</td>
                  <td>pending</td>
                </tr>
                <tr>
                  <td>13/11/23</td>
                  <td>15:04pm</td>
                  <td>pending</td>
                </tr>
                <tr>
                  <td>12/11/23</td>
                  <td>19:04pm</td>
                  <td>pending</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderStatuspg;
