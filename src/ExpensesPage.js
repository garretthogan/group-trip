import React, { Component } from 'react';
import { AppBar, Toolbar, Fab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AttachMoneyOutlined from '@material-ui/icons/AttachMoney';
import ExpenseCreator from './ExpenseCreator';
import ExpensesList from './ExpensesList';

/**
 * To do
 * figure out a way to handle different types of expenses
 * hotels, airbnbs, daily badges etc
 */

const styles = theme => ({
  container: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 12,
    paddingRight: 12
  },
  button: {
    paddingTop: 4,
    float: 'right'
  },
  expenseContainer: {
    paddingTop: 12
  },
  appBar: {
    top: 'auto',
    bottom: 0
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto'
  }
});

class ExpensesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCreateExpenseInput: false,
      expenses: []
    };
  }
  toggle = key => () => {
    this.setState(prevState => ({ [key]: !prevState[key] }));
  };
  addNewExpense = ({ cost, name, quantity }) => {
    const { expenses } = this.state;
    this.setState({
      showCreateExpenseInput: false,
      expenses: [
        ...expenses,
        {
          createdBy: 'gret',
          cost,
          name,
          remainingBalance: cost,
          quantity,
          claims: []
        }
      ]
    });
  };
  addNewClaim = (expense, index, claim) => {
    const { expenses } = this.state;

    const updatedClaims = [...expense.claims, claim];

    const updatedExpense = {
      ...expense,
      remainingBalance: expense.remainingBalance - claim.payment,
      claims: updatedClaims
    };

    expenses.splice(index, 1, updatedExpense);
    this.setState({
      expenses
    });
  };
  render() {
    const { classes } = this.props;
    const { expenses, showCreateExpenseInput } = this.state;
    return (
      <div className={classes.container}>
        <ExpenseCreator
          onAddExpense={this.addNewExpense}
          showCreateExpenseInput={showCreateExpenseInput}
        />
        <ExpensesList onAddNewClaim={this.addNewClaim} expenses={expenses} />
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Fab
              color="secondary"
              aria-label="Add"
              className={classes.fabButton}
              onClick={this.toggle('showCreateExpenseInput')}
            >
              <AttachMoneyOutlined />
            </Fab>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(ExpensesPage);
