import React, { useState, useEffect } from 'react';

import { Button, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

const PlaceOrderScreen = () => {
  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Col></Col>
    </>
  );
};

export default PlaceOrderScreen;
