import React from 'react';

import styled from 'styled-components/native';

const Login = ({navigation}: any) => {
  return (
    <Container>
      <Text>Hello from Login</Text>
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
    </Container>
  );
};

export default Login;

const Container = styled.View``;
const Text = styled.Text``;
const Button = styled.Button``;
