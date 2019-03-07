import React, { Component } from 'react';
import { Collapse, TextField, Button, withStyles } from '@material-ui/core';

const styles = theme => ({
  button: {
    paddingTop: 4,
    float: 'right'
  }
});

class ExpenseCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newExpenseName: '',
      newExpenseQuantity: 0,
      newExpenseCost: 0
    };
  }
  handleInput = key => event => {
    this.setState({ [key]: event.target.value });
  };
  handleExpenseAdded = () => {
    const { newExpenseName, newExpenseCost, newExpenseQuantity } = this.state;
    const { onAddExpense } = this.props;
    if (onAddExpense) {
      onAddExpense({
        name: newExpenseName,
        cost: newExpenseCost,
        quantity: newExpenseQuantity
      });
    }
    this.setState({
      newExpenseCost: 0,
      newExpenseName: '',
      newExpenseQuantity: 0
    });
  };
  render() {
    const { newExpenseName, newExpenseCost, newExpenseQuantity } = this.state;
    const { classes, showCreateExpenseInput } = this.props;
    return (
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
            onClick={this.handleExpenseAdded}
          >
            Add Expense
          </Button>
        </div>
      </Collapse>
    );
  }
}

export default withStyles(styles)(ExpenseCreator);
