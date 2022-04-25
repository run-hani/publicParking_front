import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../redux/reducers/userReducer.ts";
import Link from "next/link";
import styles from "./styles/Nav.module.css";

export default function Nav() {
  const [userUrls, setUserUrls] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const loginUser = localStorage.getItem("loginUser");
    if (loginUser === null) {
      setUserUrls([
        {
          name: "회원가입",
          url: "/user/join",
        },
        {
          name: "로그인",
          url: "/user/login",
        },
      ]);
    } else {
      setUserUrls([
        {
          name: "로그아웃",
          url: "",
          onClick(e) {
            e.preventDefault();
            dispatch(userActions.logoutRequest());
          },
        },
      ]);
    }
  }, []);

  return (
    <header className={styles.docHeader}>
      <nav className={styles.innerHeader}>
        <h1 className={styles.titHeader}>
          <Link href="/board/board-list">
            <a className={styles.linkTit}>서울 공영주차장 정보</a>
          </Link>
        </h1>
        <ul className={styles.listUtil}>
          {userUrls.map(function (item, idx) {
            return (
              <li>
                {item.url ? (
                  <Link href={item.url}>
                    <a className={styles.linkUtil}>{item.name}</a>
                  </Link>
                ) : (
                  <a
                    href="#none"
                    className={styles.linkUtil}
                    onClick={item.onClick}
                  >
                    {item.name}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
