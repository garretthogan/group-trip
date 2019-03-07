import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Expense from './Expense';

const styles = theme => ({
  expenseContainer: {
    paddingTop: 12
  }
});

class ExpenseList extends Component {
  handleClaimAdded = (expense, index) => claim => {
    const { onAddNewClaim } = this.props;
    if (onAddNewClaim) {
      onAddNewClaim(expense, index, claim);
    }
  };
  render() {
    const { expenses, classes } = this.props;
    return (
      <div>
        {expenses.map((expense, i) => (
          <div key={i} className={classes.expenseContainer}>
            <Expense
              onClaimAdded={this.handleClaimAdded(expense, i)}
              {...expense}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(ExpenseList);
