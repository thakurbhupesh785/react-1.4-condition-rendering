import PropTypes from 'prop-types'

function UserGreeting (props) {

  const welcomeMsg = <h2 className="welcome-msg">Welcome {props.username}</h2>;

  const loginMsg = <h2 className="login-msg">Please login to continue</h2>;

  return (props.isLogged ? welcomeMsg : loginMsg);

 /* if (props.isLogged) {
    return <h2>welcome {props.username}</h2>
  } else {
    return <h2>please login to continue</h2>
  }
  

  return (props.isLogged ? <h2 className="welcome-msg">Welcome {props.username}</h2> : 
                          <h2 className="login-msg">Please login to continue</h2>);
*/
}

UserGreeting.Proptypes = {
  isLogged : PropTypes.bool,
  username : PropTypes.string,
}

UserGreeting.defaultProps = {
  isLogged: false,
  username : "Guest",
}

export default UserGreeting