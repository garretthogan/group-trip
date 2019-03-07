import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
  withStyles,
  Collapse,
  CardActions,
  Avatar,
  IconButton
} from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AttachMoneyOutlined from '@material-ui/icons/AttachMoney';

/**
 * To do:
 * hook up to real data
 * add snackbar notification
 */

const styles = theme => ({
  button: {
    paddingTop: 12
  },
  input: {
    paddingTop: 8
  },
  actions: {
    float: 'right'
  }
});

class Expense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showClaimInput: false,
      showClaims: false,
      newClaimMessage: '',
      newClaimPayment: 0,
      newClaimQuantity: 0,
      remainingQuantity: props.quantity
    };
  }
  handleInput = key => event => {
    this.setState({ [key]: event.target.value });
  };
  toggleShowClaimInput = () => {
    this.setState(prevState => ({ showClaimInput: !prevState.showClaimInput }));
  };
  toggleShowClaimInput = () => {
    this.setState(prevState => ({ showClaimInput: !prevState.showClaimInput }));
  };
  toggle = key => () => {
    this.setState(prevState => ({ [key]: !prevState[key] }));
  };
  addNewClaim = () => {
    const { onClaimAdded } = this.props;
    const {
      newClaimMessage,
      newClaimPayment,
      newClaimQuantity,
      remainingQuantity
    } = this.state;

    if (onClaimAdded) {
      onClaimAdded({
        message: newClaimMessage,
        payment: newClaimPayment,
        claimQuantity: newClaimQuantity,
        claimedBy: 'gret'
      });
    }

    this.setState({
      newClaimMessage: '',
      newClaimPayment: 0,
      newClaimQuantity: 0,
      showClaimInput: false,
      remainingQuantity: remainingQuantity - newClaimQuantity
    });
  };
  render() {
    const {
      name,
      cost,
      quantity,
      claims,
      createdBy,
      classes,
      remainingBalance
    } = this.props;
    const {
      newClaimMessage,
      newClaimPayment,
      newClaimQuantity,
      showClaimInput,
      showClaims,
      remainingQuantity
    } = this.state;

    return (
      <Card>
        <CardHeader
          onClick={this.toggle('showClaimInput')}
          title={name}
          subheader={createdBy}
          avatar={<Avatar />}
        />
        <CardContent>
          <div>Total cost: ${cost}</div>
          <div>Remaining cost: ${remainingBalance}</div>
          <div>Total quantity: {quantity}</div>
          <div>Remaining quantity: {remainingQuantity}</div>
        </CardContent>
        <Collapse in={showClaims}>
          <CardContent onClick={this.toggle('showClaims')}>
            <div style={{ padding: 4 }}>
              {claims.map((claim, i) => (
                <div key={i}>
                  {claim.claimQuantity} {claim.message} ${claim.payment} -{' '}
                  {claim.claimedBy}
                </div>
              ))}
            </div>
          </CardContent>
        </Collapse>
        <Collapse in={showClaimInput}>
          <CardContent>
            <div className={classes.input}>
              <TextField
                fullWidth
                label="Quantity"
                onChange={this.handleInput('newClaimQuantity')}
                value={newClaimQuantity}
                type="number"
              />
            </div>
            <div className={classes.input}>
              <TextField
                fullWidth
                label="Message"
                onChange={this.handleInput('newClaimMessage')}
                value={newClaimMessage}
                placeholder="Badge me bro"
              />
            </div>
            <div className={classes.input}>
              <TextField
                fullWidth
                label="Payment"
                onChange={this.handleInput('newClaimPayment')}
                value={newClaimPayment}
                type="number"
              />
            </div>
            <div className={classes.button}>
              <Button fullWidth variant="outlined" onClick={this.addNewClaim}>
                Claim
              </Button>
            </div>
          </CardContent>
        </Collapse>
        <CardActions className={classes.actions}>
          {!showClaimInput && !showClaims && (
            <div>
              <IconButton onClick={this.toggle('showClaims')}>
                <AssignmentIcon />
              </IconButton>
              <IconButton onClick={this.toggle('showClaimInput')}>
                <AttachMoneyOutlined />
              </IconButton>
            </div>
          )}
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(Expense);
