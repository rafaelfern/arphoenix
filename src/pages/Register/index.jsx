import React from 'react';
import RegisterUser from '../../views/RegisterUser';
import {Container, Card, CardContent} from '@material-ui/core';

function Register() {
  return (
    <Container maxWidth="sm" className="margin-50">
      <Card variant="outlined">
        <CardContent>

          <h1 className="logo">A.R. Phoenix</h1>
          <RegisterUser/>
          
        </CardContent>
      </Card>
    </Container>
  );
}

export default Register;
