import React from 'react';
import styled from 'styled-components';
import Button from 'components/utilities/Button';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setToken } from 'actions/AuthActions';

const Container = styled.div`
  margin:1em;
`;

const StyledButton = styled(Button)`
  font-size: 1.6rem;
`;

const LogoutButton = ({ setToken }) => {
  const handleClick = () => {
    setToken('');
    return <Redirect to="/login" />;
  };

  return (
    <Container>
      <StyledButton onClick={handleClick}>Log out</StyledButton>
    </Container>
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
