import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  SetUserBillInfo,
  SetUserShippingInfoList,
} from '../../../Redux';

import {
  DivStyle,
  CheckOutButtonStyle,
  ShopItemTextStyle,
  PopOutContianerStyle,
  DeleteButtonStyle,
} from '../ShopCartStyles';

const DefaultSetting = (props) => {
  const {
    list,
    firstName,
    lastName,
    phone,
    email,
    city,
    zipCode,
    backFunc,
    nextFunc,
  } = props;

  const [selectType, setSelectType] = useState('All');
  const [isSelectFirstName, setIsSelectFirstName] = useState(!!firstName);
  const [isSelectLastName, setIsSelectLastName] = useState(!!lastName);
  const [isSelectPhone, setIsSelectPhone] = useState(!!phone);
  const [isSelectEmail, setIsSelectEmail] = useState(!!email);
  const [isSelectCity, setIsSelectCity] = useState(!!city);
  const [isSelectZipCode, setIsSelectZipCode] = useState(!!zipCode);

  useEffect(() => {
    if (selectType === 'All') {
      setIsSelectFirstName(!!firstName);
      setIsSelectLastName(!!lastName);
      setIsSelectPhone(!!phone);
      setIsSelectEmail(!!email);
      setIsSelectCity(!!city);
      setIsSelectZipCode(!!zipCode);
    } else if (selectType === 'Parts') {
      setIsSelectFirstName(false);
      setIsSelectLastName(false);
      setIsSelectPhone(false);
      setIsSelectEmail(false);
      setIsSelectCity(false);
      setIsSelectZipCode(false);
    }
  }, [selectType]);

  const handleChangeSelect = (type) => {
    setSelectType(type);
  };

  const handleChangeFirstName = () => {
    setIsSelectFirstName(!isSelectFirstName);
  };
  const handleChangeLastName = () => {
    setIsSelectLastName(!isSelectLastName);
  };
  const handleChangePhone = () => {
    setIsSelectPhone(!isSelectPhone);
  };
  const handleChangeEmail = () => {
    setIsSelectEmail(!isSelectEmail);
  };
  const handleChangeCity = () => {
    setIsSelectCity(!isSelectCity);
  };
  const handleChangeZipCode = () => {
    setIsSelectZipCode(!isSelectZipCode);
  };

  const handleClickedNext = () => {
    nextFunc();
  };

  return (
    <PopOutContianerStyle>
      <DeleteButtonStyle
        type="button"
        onClick={backFunc}
      />
      <ShopItemTextStyle>
        Do you want to set as default?
      </ShopItemTextStyle>
      <DivStyle>
        <div>
          <input
            type="checkbox"
            onChange={() => handleChangeSelect('All')}
            checked={selectType === 'All'}
          />
          Select All
        </div>
        <div>
          <input
            type="checkbox"
            onChange={() => handleChangeSelect('Parts')}
            checked={selectType === 'Parts'}
          />
          Select Parts
        </div>
      </DivStyle>
      {firstName
        ? (
          <DivStyle>
            <div>
              <input
                type="checkbox"
                onChange={handleChangeFirstName}
                checked={isSelectFirstName}
              />
              First Name :
            </div>
            {' '}
            {firstName}
          </DivStyle>
        )
        : null}
      {lastName
        ? (
          <DivStyle>
            <div>
              <input
                type="checkbox"
                onChange={handleChangeLastName}
                checked={isSelectLastName}
              />
              Last Name :
            </div>
            {' '}
            {lastName}
          </DivStyle>
        )
        : null}
      {phone
        ? (
          <DivStyle>
            <div>
              <input
                type="checkbox"
                onChange={handleChangePhone}
                checked={isSelectPhone}
              />
              Phone Number :
            </div>
            {' '}
            {phone}
          </DivStyle>
        )
        : null}
      {email
        ? (
          <DivStyle>
            <div>
              <input
                type="checkbox"
                onChange={handleChangeEmail}
                checked={isSelectEmail}
              />
              Email :
            </div>
            {' '}
            {email}
          </DivStyle>
        )
        : null}
      {city
        ? (
          <DivStyle>
            <div>
              <input
                type="checkbox"
                onChange={handleChangeCity}
                checked={isSelectCity}
              />
              City :
            </div>
            {' '}
            {city}
          </DivStyle>
        )
        : null}
      {zipCode
        ? (
          <DivStyle>
            <div>
              <input
                type="checkbox"
                onChange={handleChangeZipCode}
                checked={isSelectZipCode}
              />
              Zip Code :
            </div>
            {' '}
            {zipCode}
          </DivStyle>
        )
        : null}
      <CheckOutButtonStyle
        type="button"
        onClick={handleClickedNext}
      >
        Update and Next
      </CheckOutButtonStyle>
    </PopOutContianerStyle>
  );
};

export default DefaultSetting;
