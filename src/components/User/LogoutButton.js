import React from 'react';
import styled from 'styled-components';
import Button from 'components/utilities/Button';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setToken } from 'actions/AuthActions';

const StyledButton = styled(Button)`
  position: absolute;
  top: 1rem;
  right: 4rem;
  font-size: 1rem;
  border-color: #fff;
`;

const LogoutButton = ({ token, setToken }) => {
  const handleClick = () => {
    setToken('');
    return <Redirect to="/login" />;
  };

  return (
    <div>
      <StyledButton onClick={handleClick}>Log out</StyledButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setToken: token => dispatch(setToken(token)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(LogoutButton);
