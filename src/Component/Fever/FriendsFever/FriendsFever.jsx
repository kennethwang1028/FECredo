import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  LoadUserFriendsFever,
  DeletedUserFriend,
} from '../../../Redux';

import FeverItems from '../FeverItems/FeverItems';

import {
  LogInTextStyle,
  FeverStyle,
  CategorySelectStyle,
  RowContainer,
  FeverDeleteButton,
  FeverDeleteContainer,
} from '../FeverStyle';

const sortByOptionList = ['First Name', 'Last Name', 'City'];

const FriendsFever = () => {
  const dispatch = useDispatch();

  const {
    userFriendsList,
  } = useSelector((state) => state.user);

  const {
    countInfoWidth,
  } = useSelector((state) => state.window);

  const [friendToShowedIndex, setFriendToShowedIndex] = useState(0);
  const [friendList, setFriendList] = useState(userFriendsList);
  const [sortBy, setSortBy] = useState(sortByOptionList[0]);
  const [friendToShowed, setFriendToShowed] = useState(userFriendsList[0]);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isFeverListShow, setIsFeverListShow] = useState(false);
  const [isShoppingListShow, setIsShoppingListShow] = useState(false);

  useEffect(() => {
    const list = [...userFriendsList];
    let option;
    if (sortBy === 'First Name') {
      option = 'fec_user_first_name';
    } else if (sortBy === 'Last Name') {
      option = 'fec_user_last_name';
    } else if (sortBy === 'City') {
      option = 'fec_user_city';
    }
    list.sort((a, b) => {
      const A = a[option];
      const B = b[option];
      if (A > B) {
        return 1;
      }
      if (A < B) {
        return -1;
      }
      return 0;
    });
    if (list.length > 0) {
      setIsFeverListShow(list[0].fec_show_fever_list);
      setIsShoppingListShow(list[0].fec_show_shopping_list);
    } else {
      setIsFeverListShow(false);
      setIsShoppingListShow(false);
    }
    setFriendList(list);
    setFriendToShowedIndex(0);
    setFriendToShowed(list[0]);
  }, [sortBy, userFriendsList]);

  useEffect(() => {
    if (friendToShowed !== undefined) {
      if (friendToShowed.feverlist === undefined && friendToShowed.fec_show_fever_list) {
        LoadUserFriendsFever({
          dispatch,
          userid: friendToShowed.fec_friends_id,
          friendList: [...friendList],
          index: friendToShowedIndex,
        });
      }
    }
  }, [friendToShowed]);

  const handleChangeSelect = (event) => {
    const index = event.target.selectedIndex;
    setIsFeverListShow(friendList[index].fec_show_fever_list);
    setIsShoppingListShow(friendList[index].fec_show_shopping_list);
    setFriendToShowed(friendList[index]);
    setFriendToShowedIndex(index);
  };

  const handleChangeSelectSortBy = (event) => {
    const index = event.target.selectedIndex;
    setSortBy(sortByOptionList[index]);
  };

  const handleClickedCheck = () => {
    setIsDeleted(true);
  };

  const handleClickedCancelDeleted = () => {
    setIsDeleted(false);
  };

  const handleClickedCheckedDeleted = () => {
    DeletedUserFriend({
      dispatch,
      userfriendid: friendToShowed.fec_user_friends_id,
      friendList,
    });
    setIsDeleted(false);
  };

  return (
    <FeverStyle
      width={countInfoWidth * 0.9}
    >
      {friendList.length > 0 ? (
        <>
          <RowContainer>
            <div>
              <LogInTextStyle>
                Friends List
              </LogInTextStyle>
              <CategorySelectStyle
                onChange={handleChangeSelect}
                value={friendToShowedIndex}
              >
                {friendList.map((i, index) => (
                  <option
                    key={i.fec_friends_id}
                    value={index}
                  >
                    {`${i.fec_friends_id} ${i.fec_user_first_name} ${i.fec_user_last_name} in ${i.fec_user_city}`}
                  </option>
                ))}
              </CategorySelectStyle>
            </div>
            <div>
              <LogInTextStyle>
                Sort By
              </LogInTextStyle>
              <CategorySelectStyle
                onChange={handleChangeSelectSortBy}
                value={sortBy}
              >
                {sortByOptionList.map((i) => (
                  <option
                    key={i}
                    value={i}
                  >
                    {i}
                  </option>
                ))}
              </CategorySelectStyle>
            </div>
          </RowContainer>
          <FeverDeleteContainer
            width={countInfoWidth * 0.6}
          >
            {isDeleted
              ? (
                <RowContainer>
                  <LogInTextStyle>
                    {`To delete ${friendToShowed.fec_friends_id} ${friendToShowed.fec_user_first_name} ${friendToShowed.fec_user_last_name} ?`}
                  </LogInTextStyle>
                  <button
                    type="button"
                    onClick={handleClickedCheckedDeleted}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={handleClickedCancelDeleted}
                  >
                    No
                  </button>
                </RowContainer>
              )
              : (
                <FeverDeleteButton
                  type="button"
                  onClick={handleClickedCheck}
                >
                  X
                </FeverDeleteButton>
              )}
          </FeverDeleteContainer>
          <LogInTextStyle>
            Fever
          </LogInTextStyle>
          {isFeverListShow ? (
            <FeverItems
              productList={friendToShowed.feverlist}
            />
          ) : (
            <LogInTextStyle>
              Not for public
            </LogInTextStyle>
          )}
          <LogInTextStyle>
            Shopped
          </LogInTextStyle>
          {isShoppingListShow ? (
            <FeverItems
              productList={friendToShowed.feverlist}
            />
          ) : (
            <LogInTextStyle>
              Not for public
            </LogInTextStyle>
          )}
        </>
      ) : (
        <LogInTextStyle>
          No Friends Yet
        </LogInTextStyle>
      )}
    </FeverStyle>
  );
};

export default FriendsFever;
