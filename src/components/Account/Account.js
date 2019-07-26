import React from 'react';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import { AuthUserContext, withAuthorization } from '../Session';
import { PasswordForgetForm } from './PasswordForget/PasswordForget';
import PasswordChangeForm from './PasswordChange/PasswordChange';

const styles = (theme) => {
  return (
    {
      root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background,
      },
      rootPath: {
        color: '#000',
      }
    }
  );
}

const AccountPage = (props) => {
  console.log('props are', props);
  return( 
    <AuthUserContext.Consumer>
      {authUser => (
        <div>
          <h1>Account: {authUser.email}</h1>
          <SimpleTabs classes={props.classes} />
          <PasswordForgetForm />
          <PasswordChangeForm />
        </div>
      )}
    </AuthUserContext.Consumer>
  );
}

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    // const classes = styles();
    const { classes } = this.props;
    console.log('classes', classes);
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            classes={{
              root: classes.rootPath,
            }}
            value={value}
            onChange={this.handleChange}
          >
            <Tab label="Item One">
              sfsdfsdf
            </Tab>
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Item One</TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
      </div>
    );
  }
}


SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

const condition = authUser => !!authUser;

const Account = compose(
  withAuthorization(condition),
  withStyles(styles, {withTheme: true}),
)(AccountPage);

export default Account;