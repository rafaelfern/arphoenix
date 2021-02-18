import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { saveUser } from '../../actions/user';
import {TextField, Button, IconButton, FormControl, InputLabel, Select, Box} from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import 'typeface-roboto';
import nextId from "react-id-generator";
import { useHistory } from 'react-router-dom';

import {
  MailOutline,
  VisibilityOff,
  Visibility,
  PersonOutline,
  PersonAddOutlined,
  Cake
} from '@material-ui/icons';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function RegisterUser(props) {
  let [passwordInputVisibility1, setPasswordInputVisibility1] = useState(false);
  let [passwordInputVisibility2, setPasswordInputVisibility2] = useState(false);
  
  let [email, setEmail] = useState('');
  let [name, setName] = useState('');
  let [userType, setUserType] = useState('');
  let [birthdate, setBirthdate] = useState('');
  let [password, setPassword] = useState('');
  let [repeatPassword, setRepeatPassword] = useState('');

  let history = useHistory();
  
  let [inProgress, setInProgress] = useState(false);
  let [errorPassword, setErrorPassword] = useState(false)

  const register = async (e) => {
    e.preventDefault();
    let userId = nextId('1');

    if (!errorPassword)
    {
      setInProgress(true);

      let dataSave = {
        id: userId,
        name: name,
        email: email,
        password: password,
        birthDate: birthdate,
        userType: userType,
      }

      props.saveUser(dataSave);
      window.location.href='/home';
      
      setInProgress(false);
    }
  }

  useEffect(() => {
    setErrorPassword(repeatPassword !== password);
  },[repeatPassword, password]);

  return (
    <>
      <h2 align="center">
        <PersonAddOutlined/> Cadastre-se
      </h2>

      <form onSubmit={register}>
        <FormControl fullWidth>
          <TextField 
            required
            label="Nome"
            variant="outlined"
            margin="normal"
            value={name} 
            onChange={(e) => setName(e.target.value)}
            InputProps={{ endAdornment: (<PersonOutline />) }}
          />
          <TextField 
            type="email"
            required
            label="E-mail"
            variant="outlined"
            margin="normal"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{ endAdornment: (<MailOutline />) }}
          />
          <TextField 
            type={passwordInputVisibility1 ? "text" : "password"}
            required
            label="Senha"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{ endAdornment: (
              <IconButton onClick={() => setPasswordInputVisibility1(!passwordInputVisibility1)}> 
                {passwordInputVisibility1 ? <Visibility/> : <VisibilityOff/>}
              </IconButton>
            ) }}
          />
          <TextField 
            type={passwordInputVisibility2 ? "text" : "password"}
            required
            label="Repita a senha"
            variant="outlined"
            margin="normal"
            value={repeatPassword}
            onChange={(e) => { setRepeatPassword(e.target.value); }}
            InputProps={{ endAdornment: (
              <IconButton onClick={() => setPasswordInputVisibility2(!passwordInputVisibility2)}> 
                {passwordInputVisibility2 ? <Visibility/> : <VisibilityOff/>}
              </IconButton>
            ) }}
            error={errorPassword}
          />
          <TextField 
            required
            label="Data Nascimento"
            variant="outlined"
            margin="normal"
            type="date"
            value={birthdate} 
            onChange={(e) => setBirthdate(e.target.value)} 
            InputProps={{ endAdornment: (<Cake />) }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          
          <FormControl variant="outlined" margin="normal">
            <InputLabel htmlFor="userTypeInput">usuário</InputLabel>
            <Select 
              native
              label="userType"
              inputProps={{ id: 'userType' }}
              value={userType} 
              onChange={(e) => setUserType(e.target.value)} 
            >
              <option value="administrador">Administrador</option>
              <option value="colaborador">Colaborador</option>
              <option value="gerente">Gerente</option>
            </Select>
          </FormControl>

          { 
            (inProgress) ?  
              <LinearProgress color="primary" />
            :
            <>
              <Button variant="contained" color="primary" size="large" type="submit">
                <PersonAddOutlined/> Cadastrar
              </Button>
              
              <Button variant="contained" color="secondary" size="large" onClick={() => history.goBack()}>
                <ArrowBackIcon/> Voltar
              </Button>
              
            </>
          }

        </FormControl>
      </form>

    </>
  );
}

const mapStateToProps = store => ({
  user: store.user,
});

const mapDispatchToProps = {
  saveUser
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser);
