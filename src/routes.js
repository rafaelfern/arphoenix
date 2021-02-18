import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Register from './pages/Register';
import Home from './pages/Home';

export default function Routes() {

  return (
    <BrowserRouter>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/register" exact component={Register} />
        {/* <Route path="/csv-to-vcard" exact component={CsvToVcard} />
        <Route path="/email-signature" exact component={EmailSignature} />
        <Route path="/digital-card" exact component={DigitalCard} />
        <Route path="/login" exact component={Login} /> */}
        {/* <Route component={NotFoundPage}/> */}
      </Switch>
    </BrowserRouter>
  );
}
