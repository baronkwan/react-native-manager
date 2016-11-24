import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { loginCredentialsUpdate, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {

  // *** These methods were relaced by loginCredentialsUpdate from '../actions' ***

  // onEmailChange(text) {
  //   this.props.emailChanged(text);
  // }
  //
  // onPasswordChange(text) {
  //   this.props.passwordChanged(text);
  // }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return (<Spinner size="large" />);
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='email@gmail.com'
            onChangeText={value => this.props.loginCredentialsUpdate({ prop: 'email', value })}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label='Password'
            placeholder='password'
            onChangeText={value => this.props.loginCredentialsUpdate({ prop: 'password', value })}
            value={this.props.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, { loginCredentialsUpdate, loginUser })(LoginForm);
