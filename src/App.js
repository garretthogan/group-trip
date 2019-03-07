import React, { Component } from 'react';
import {
  Button,
  TextField,
  AppBar,
  Toolbar,
  Fab,
  Collapse
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AttachMoneyOutlined from '@material-ui/icons/AttachMoney';
import Expense from './Expense';

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCreateExpenseInput: false,
      newExpenseName: '',
      newExpenseCost: 0,
      newExpenseQuantity: 0,
      expenses: []
    };
  }
  toggle = key => () => {
    this.setState(prevState => ({ [key]: !prevState[key] }));
  };
  handleInput = key => event => {
    this.setState({ [key]: event.target.value });
  };
  addNewExpense = () => {
    const {
      newExpenseCost,
      newExpenseName,
      newExpenseQuantity,
      expenses
    } = this.state;
    this.setState({
      showCreateExpenseInput: false,
      newExpenseCost: 0,
      newExpenseName: '',
      newExpenseQuantity: 0,
      expenses: [
        ...expenses,
        {
          createdBy: 'gret',
          cost: newExpenseCost,
          name: newExpenseName,
          remainingBalance: newExpenseCost,
          quantity: newExpenseQuantity,
          claims: []
        }
      ]
    });
  };
  handleNewClaim = (expense, index) => claim => {
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
    const {
      newExpenseName,
      newExpenseCost,
      newExpenseQuantity,
      expenses,
      showCreateExpenseInput
    } = this.state;
    return (
      <div className={classes.container}>
        <Collapse in={showCreateExpenseInput}>
          <TextField
            fullWidth
            label="Expense Name"
            placeholder="PAX Badges"
            value={newExpenseName}
            onChange={this.handleInput('newExpenseName')}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Quantity"
            type="number"
            onChange={this.handleInput('newExpenseQuantity')}
            value={newExpenseQuantity}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Cost"
            type="number"
            onChange={this.handleInput('newExpenseCost')}
            value={newExpenseCost}
            margin="normal"
          />
          <div className={classes.button}>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.addNewExpense}
            >
              Add Expense
            </Button>
          </div>
        </Collapse>
        {expenses.map((expense, i) => (
          <div key={i} className={classes.expenseContainer}>
            <Expense
              onClaimAdded={this.handleNewClaim(expense, i)}
              {...expense}
            />
          </div>
        ))}
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

export default withStyles(styles)(App);
