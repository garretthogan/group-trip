import React, { Component } from 'react';
import ExpensesPage from './ExpensesPage';

/**
 * To do
 * figure out a way to handle different types of expenses
 * hotels, airbnbs, daily badges etc
 */

class App extends Component {
  render() {
    return (
      <div>
        <ExpensesPage />
      </div>
    );
  }
}

export default App;
