import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../redux/reducers/userReducer.ts";
import tableStyles from "../common/styles/table.module.css";
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
      <h2>회원가입</h2>
      <table className={tableStyles.table}>
        <tbody>
          <tr>
            <th scope="row">사용자ID</th>
            <td>
              <input type="text" name="userid" onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <th scope="row">비밀번호</th>
            <td>
              <input type="text" name="password" onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <th scope="row">이메일</th>
            <td>
              <input type="text" name="email" onChange={handleChange} />
            </td>
          </tr>

          <tr>
            <th scope="row">이름</th>
            <td>
              <input type="text" name="name" onChange={handleChange} />
            </td>
          </tr>

          <tr>
            <th scope="row">전화번호</th>
            <td>
              <input type="text" name="phone" onChange={handleChange} />
            </td>
          </tr>

          <tr>
            <th scope="row">생년월일</th>
            <td>
              <input type="text" name="birth" onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <th scope="row">주소</th>
            <td>
              <input type="text" name="address" onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button type="submit">회원가입</button>
              <br />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
