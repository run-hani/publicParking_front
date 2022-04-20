import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "@/redux/reducers/userReducer.ts";
import formStyles from "@/pages/common/styles/Form.module.css";

export default function Join() {
  const [user, setUser] = useState({
    userid: "",
    password: "",
    email: "",
    name: "",
    phone: "",
    birth: "",
    address: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      className={formStyles.wrapForms}
      onSubmit={(e) => {
        e.preventDefault();
        alert(" 진행 1: 회원가입 클릭 ");
        dispatch(userActions.joinRequest(user));
        setUser({
          userid: "",
          password: "",
          email: "",
          name: "",
          phone: "",
          birth: "",
          address: "",
        });
      }}
    >
      <div className={formStyles.innerForms}>
        <h2 className={formStyles.titForms}>회원가입</h2>
        <div className={formStyles.boxForms}>
          <div className={formStyles.itemInp}>
            <input
              type="text"
              name="userid"
              className={formStyles.inpComm}
              placeholder={'사용자ID'}
              onChange={handleChange}
            />
          </div>
          <div className={formStyles.itemInp}>
            <input
              type="password"
              name="password"
              className={formStyles.inpComm}
              placeholder={'비밀번호'}
              onChange={handleChange}
            />
          </div>
          <div className={formStyles.itemInp}>
            <input
              type="text"
              name="email"
              className={formStyles.inpComm}
              placeholder={'이메일'}
              onChange={handleChange}
            />
          </div>
          <div className={formStyles.itemInp}>
            <input
              type="text"
              name="name"
              className={formStyles.inpComm}
              placeholder={'이름'}
              onChange={handleChange}
            />
          </div>
          <div className={formStyles.itemInp}>
            <input
              type="text"
              name="phone"
              className={formStyles.inpComm}
              placeholder={'전화번호'}
              onChange={handleChange}
            />
          </div>
          <div className={formStyles.itemInp}>
            <input
              type="text"
              name="birth"
              className={formStyles.inpComm}
              placeholder={'생년월일'}
              onChange={handleChange}
            />
          </div>
          <div className={formStyles.itemInp}>
            <input
              type="text"
              name="address"
              className={formStyles.inpComm}
              placeholder={'주소'}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className={formStyles.btnSubmit}>
            회원가입
          </button>
        </div>
      </div>
    </form>
  );
}
