import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import {
  SetUserBillInfo,
  SetUserShippingInfoList,
  SetUserBillShippingInfoList,
} from '../../../Redux';

import checkEmail from '../../Function/checkEmail';
import DefaultSetting from '../DefaultSetting/DefaultSetting';

import {
  DivStyle,
  CheckOutButtonStyle,
  ShopItemTextStyle,
  PopOutContianerStyle,
} from '../ShopCartStyles';

const BillShippingInfo = (props) => {
  const dispatch = useDispatch();

  const {
    text,
    nextFunc,
    backFunc,
  } = props;

  const {
    userInfo,
  } = useSelector((state) => state.user);

  const {
    userBillInfo,
    userBillShippingInfoList,
    userShopCartList,
    userShippingInfoList,
  } = useSelector((state) => state.shopCart);

  const {
    areacode,
    city,
    email,
    firstname,
    lastname,
    phone,
    zipcode,
  } = userInfo;

  const [firstNameNew, setFirstNameNew] = useState('');
  const [lastNameNew, setLastNameNew] = useState('');
  const [phoneNew, setPhoneNew] = useState('');
  const [emailNew, setEmailNew] = useState('');
  const [cityNew, setCityNew] = useState('');
  const [zipCodeNew, setZipCodeNew] = useState('');

  const [addressType, setAddressType] = useState('default');
  const [warningList, setWarningList] = useState([]);
  const [isSetDefaultList, setIsSetDafaultList] = useState([]);

  useEffect(() => {
    const billIndexList = [];
    const shippingIndexList = [];
    userBillShippingInfoList.forEach((i, index) => {
      if (i.fec_user_is_bill) {
        billIndexList.push(index);
      }
      if (i.fec_user_is_shipping) {
        shippingIndexList.push(index);
      }
    });
    if (text === 'Bill') {
      const len = billIndexList.length - 1;
      if (len > -1) {
        setAddressType(String(billIndexList[len]));
      } else {
        setAddressType('default');
      }
    } else if (text === 'Shipping') {
      const len = shippingIndexList.length - 1;
      if (len > -1) {
        setAddressType(String(shippingIndexList[len]));
      } else {
        setAddressType('bill');
      }
    }
  }, [userBillShippingInfoList]);

  useEffect(() => {
    if (addressType === 'default') {
      setFirstNameNew(firstname || '');
      setLastNameNew(lastname || '');
      let newPhone = '';
      if (areacode && phone) {
        newPhone = String(areacode) + phone;
      }
      setPhoneNew(newPhone);
      setEmailNew(email || '');
      setCityNew(city || '');
      setZipCodeNew(zipcode || '');
    } else if (addressType === 'new') {
      setFirstNameNew('');
      setLastNameNew('');
      setPhoneNew('');
      setEmailNew('');
      setCityNew('');
      setZipCodeNew('');
    } else {
      let info;
      if (addressType === 'bill') {
        const { index } = userBillInfo;
        info = { ...userBillShippingInfoList[index] };
      } else {
        info = { ...userBillShippingInfoList[Number(addressType)] };
      }
      setFirstNameNew(info.fec_user_first_name || '');
      setLastNameNew(info.fec_user_last_name || '');
      setPhoneNew(info.fec_user_phone || '');
      setEmailNew(info.fec_user_email || '');
      setCityNew(info.fec_user_city || '');
      setZipCodeNew(info.fec_user_zip_code || '');
    }
    setWarningList([]);
    setIsSetDafaultList([]);
  }, [addressType]);

  const nextFuncNew = () => {
    if (Number(addressType) > -1) {
      const info = userBillShippingInfoList[Number(addressType)];
      if (text === 'Bill') {
        dispatch(SetUserBillInfo(info));
      } else if (text === 'Shipping') {
        const addressIndexList = userShippingInfoList.map((i) => (i.shippingAddress));
        const newList = [...userShippingInfoList];
        const lastObj = newList.pop();
        const index = addressIndexList.indexOf(Number(addressType));
        if (index > -1) {
          const newObj = { ...userShippingInfoList[index] };
          const { itemsList } = newObj;
          const itemsToAddList = lastObj.itemsList;
          const itemsSkusIdList = itemsList.map((i) => i.skus_id);
          const newItemsList = [...itemsList];
          for (let i = 0; i < itemsToAddList.length; i += 1) {
            const skusid = itemsToAddList[i].skus_id;
            const skusIndex = itemsSkusIdList.indexOf(skusid);
            if (skusIndex > -1) {
              newItemsList[skusIndex].quantity += itemsToAddList[i].quantity;
            } else {
              newItemsList.push(itemsToAddList[i]);
            }
          }
          newObj.itemsList = newItemsList;
          newList[index] = newObj;
        } else {
          lastObj.shippingAddress = Number(addressType);
          newList.push(lastObj);
        }
        dispatch(SetUserShippingInfoList(newList));
      }
    } else {
      const newList = [...userBillShippingInfoList];
      const obj = {
        fec_user_id: userInfo.id,
        fec_user_phone: phoneNew,
        fec_user_first_name: firstNameNew,
        fec_user_last_name: lastNameNew,
        fec_user_email: emailNew,
        fec_user_city: cityNew,
        fec_user_zip_code: zipCodeNew,
        index: newList.length,
      };
      if (text === 'Bill') {
        obj.fec_user_is_bill = true;
        dispatch(SetUserBillInfo(obj));
        newList.push(obj);
      } else if (text === 'Shipping') {
        const len = userShippingInfoList.length;
        const newShippingList = [...userShippingInfoList];
        const newObj = { ...userShippingInfoList[len - 1] };
        if (addressType === 'bill') {
          const { index } = userBillInfo;
          newList[index].fec_user_is_shipping = true;
          newObj.shippingAddress = index;
        } else {
          obj.fec_user_is_shipping = true;
          newObj.shippingAddress = newList.length;
          newList.push(obj);
        }
        newShippingList[len - 1] = newObj;
        dispatch(SetUserShippingInfoList(newShippingList));
      }
      dispatch(SetUserBillShippingInfoList(newList));
    }
    setIsSetDafaultList([]);
    nextFunc();
  };

  const handleClickedNext = () => {
    const listforWarning = [];
    const listforDefault = [];
    if (firstNameNew.length === 0) {
      listforWarning.push('firstName');
    } else if (firstNameNew !== firstname) {
      listforDefault.push('firstName');
    }
    if (lastNameNew.length === 0) {
      listforWarning.push('lastName');
    } else if (lastNameNew !== lastname) {
      listforDefault.push('lastName');
    }
    if (!Number(phoneNew) > 0 || String(phoneNew).length < 10) {
      listforWarning.push('phone');
    } else if (phoneNew !== (String(areacode) + phone)) {
      listforDefault.push('phone');
    }
    if (!checkEmail(emailNew)) {
      listforWarning.push('email');
    } else if (emailNew !== email) {
      listforDefault.push('email');
    }
    if (cityNew.length === 0) {
      listforWarning.push('city');
    } else if (cityNew !== city) {
      listforDefault.push('city');
    }
    if (zipCodeNew.length === 0) {
      listforWarning.push('zipCode');
    } else if (zipCodeNew !== zipcode) {
      listforDefault.push('zipCode');
    }
    if (listforWarning.length > 0) {
      setWarningList(listforWarning);
    } else if (listforDefault.length > 0 && addressType === 'default') {
      setWarningList([]);
      setIsSetDafaultList(listforDefault);
    } else {
      nextFuncNew();
    }
  };

  const handleClickedBack = () => {
    backFunc();
  };

  const handleChangeAddress = (event) => {
    setAddressType(event.target.value);
  };

  const handleClickedListforDefaultBack = () => {
    setIsSetDafaultList([]);
  };

  const handleChangeInput = (event) => {
    if (addressType !== 'new' && addressType !== 'default') {
      setAddressType('new');
    }
    const {
      id,
      value,
    } = event.target;

    if (id === 'FirstName') {
      setFirstNameNew(value);
    }
    if (id === 'LastName') {
      setLastNameNew(value);
    }
    if (id === 'City') {
      setCityNew(value);
    }
    if (id === 'Email') {
      setEmailNew(value);
    }
    if (id === 'ZipCode') {
      setZipCodeNew(value);
    }
    if (id === 'Phone') {
      setPhoneNew(value);
    }
  };

  return (
    <>
      <ShopItemTextStyle>
        {`${text} Info`}
      </ShopItemTextStyle>
      <DivStyle>
        <div>
          <input
            type="checkbox"
            onChange={handleChangeAddress}
            value="new"
            checked={addressType === 'new'}
          />
          New Address
        </div>
        {text === 'Shipping'
          ? (
            <div>
              <input
                type="checkbox"
                onChange={handleChangeAddress}
                checked={addressType === 'bill'}
                value="bill"
              />
              as Bill
            </div>
          )
          : null}
        {text === 'Bill' && userBillShippingInfoList.length < 1
          ? (
            <div>
              <input
                type="checkbox"
                onChange={handleChangeAddress}
                checked={addressType === 'default'}
                value="default"
              />
              Default
            </div>
          )
          : null}
        {userBillShippingInfoList.map((i, index) => {
          if (text === 'Shipping' && i.fec_user_is_shipping) {
            return (
              <div
                key={index}
              >
                <input
                  type="checkbox"
                  onChange={handleChangeAddress}
                  checked={addressType === String(index)}
                  value={index}
                />
                {`${i.fec_user_city} ${i.fec_user_zip_code}`}
              </div>
            );
          }
          if (text === 'Bill' && i.fec_user_is_bill) {
            return (
              <div
                key={index}
              >
                <input
                  type="checkbox"
                  onChange={handleChangeAddress}
                  checked={addressType === String(index)}
                  value={index}
                />
                {`${i.fec_user_first_name} ${i.fec_user_last_name}`}
              </div>
            );
          }
          return null;
        })}
      </DivStyle>
      <DivStyle
        isWarning={warningList.includes('firstName')}
      >
        First Name :
        {' '}
        <input
          type="text"
          value={firstNameNew}
          id="FirstName"
          onChange={handleChangeInput}
        />
      </DivStyle>
      <DivStyle>
        {warningList.includes('firstName')
          ? <> Example : John (Can not be Empty)</>
          : null}
      </DivStyle>
      <DivStyle
        isWarning={warningList.includes('lastName')}
      >
        Last Name :
        {' '}
        <input
          type="text"
          value={lastNameNew}
          id="LastName"
          onChange={handleChangeInput}
        />
      </DivStyle>
      <DivStyle>
        {warningList.includes('lastName')
          ? <> Example : Smith (Can not be Empty)</>
          : null}
      </DivStyle>
      <DivStyle
        isWarning={warningList.includes('phone')}
      >
        Phone Number :
        {' '}
        <input
          type="text"
          value={phoneNew}
          maxLength="10"
          id="Phone"
          onChange={handleChangeInput}
        />
      </DivStyle>
      <DivStyle>
        {warningList.includes('phone')
          ? <> Example : 6501234567 (Can not be Empty)</>
          : null}
      </DivStyle>
      <DivStyle
        isWarning={warningList.includes('email')}
      >
        Email :
        {' '}
        <input
          type="text"
          value={emailNew}
          id="Email"
          onChange={handleChangeInput}
        />
      </DivStyle>
      <DivStyle>
        {warningList.includes('email')
          ? <> Example : 123@gmail.com (Can not be Empty)</>
          : null}
      </DivStyle>
      <DivStyle
        isWarning={warningList.includes('city')}
      >
        City :
        {' '}
        <input
          type="text"
          value={cityNew}
          id="City"
          onChange={handleChangeInput}
        />
      </DivStyle>
      <DivStyle>
        {warningList.includes('city')
          ? <> Example : Millbrae (Can not be Empty)</>
          : null}
      </DivStyle>
      <DivStyle
        isWarning={warningList.includes('zipCode')}
      >
        Zip Code :
        {' '}
        <input
          type="text"
          value={zipCodeNew}
          id="ZipCode"
          onChange={handleChangeInput}
        />
      </DivStyle>
      <DivStyle>
        {warningList.includes('zipCode')
          ? <> Example : 94030 (Can not be Empty)</>
          : null}
      </DivStyle>
      {isSetDefaultList.length > 0
        ? (
          <DefaultSetting
            text={text}
            firstName={isSetDefaultList.includes('firstName') ? firstNameNew : null}
            lastName={isSetDefaultList.includes('lastName') ? lastNameNew : null}
            phone={isSetDefaultList.includes('phone') ? phoneNew : null}
            email={isSetDefaultList.includes('email') ? emailNew : null}
            city={isSetDefaultList.includes('city') ? cityNew : null}
            zipCode={isSetDefaultList.includes('zipCode') ? zipCodeNew : null}
            backFunc={handleClickedListforDefaultBack}
            nextFunc={nextFuncNew}
          />
        ) : null}
      <CheckOutButtonStyle
        type="button"
        onClick={handleClickedNext}
      >
        Next
      </CheckOutButtonStyle>
      <CheckOutButtonStyle
        type="button"
        onClick={handleClickedBack}
      >
        Back
      </CheckOutButtonStyle>
    </>
  );
};

export default BillShippingInfo;
