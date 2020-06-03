import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message,
  Segment, Loader } from 'semantic-ui-react'
import { Link, withRouter, Router } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

import validateInput from '../validators/register';
import { registerUser } from '../store/actions/auth';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      nationalId: '',
      password: '',
      confirmPassword: '',
      errors: {},
      isLoading: false
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      axios.post('http://localhost:5000/api/users/signup', this.state)
      .then(response => {
        console.log(response)
        if(response)
    // alert('signup successful!')
    this.props.history.push('/Login');
      })
      .catch(error => {
        console.log(error)
      })
      this.props.registerUser(this.state, this.props.history);
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid = () => {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
        isLoading: false
      });
    }
  }

  render() {
    const { firstName, lastName, email, phone, nationalId, password,
      confirmPassword, errors, isLoading } = this.state;

    return(
      <div className="register-form">
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>

            <Link to='/'>
              <Image src='/assets/images/logo.png' size='tiny' centered />
            </Link>

            <Header as='h2' color='teal' textAlign='center'>
              Create Account
            </Header>

            <Form size='large' onSubmit={this.onSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  placeholder='First Name'
                  name='firstName'
                  value={firstName}
                  error={errors.firstName ? true : false}
                  onChange={this.onChange}
                />
                <Form.Input
                  fluid
                  placeholder='Last Name'
                  name='lastName'
                  value={lastName}
                  error={errors.lastName ? true : false}
                  onChange={this.onChange}
                />
                <Form.Input
                  fluid
                  placeholder='E-mail'
                  name='email'
                  value={email}
                  error={errors.email ? true : false}
                  onChange={this.onChange}
                />
                <Form.Input
                  fluid
                  placeholder='Phone'
                  name='phone'
                  value={phone}
                  error={errors.phone ? true : false}
                  onChange={this.onChange}
                />
                <Form.Input
                  fluid
                  placeholder='National ID'
                  name='nationalId'
                  value={nationalId}
                  error={errors.nationalId ? true : false}
                  onChange={this.onChange}
                />
                <Form.Input
                  fluid
                  placeholder='Password'
                  name='password'
                  type='password'
                  value={password}
                  error={errors.password ? true : false}
                  onChange={this.onChange}
                />
                <Form.Input
                  fluid
                  placeholder='Confirm Password'
                  name='confirmPassword'
                  type='password'
                  value={confirmPassword}
                  error={errors.confirmPassword ? true : false}
                  onChange={this.onChange}
                />
                    <Button color='teal' fluid size='large' disabled={isLoading}>
                      {
                        !isLoading
                        ? 'Create Account'
                        : <Loader active inverted inline size='small' />
                      }>
                      </Button>
              </Segment>
            </Form>

            <Message>
              Already have an account? <Link to='/login'>Login</Link>
            </Message>

          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

RegisterForm.propTypes = {
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  errors: state.errors
})

export default withRouter(connect(mapStateToProps, { registerUser })(RegisterForm))
