import Link from "next/link";
import styles from "./styles/Nav.module.css";

export default function Nav() {
  return (
    <header className={styles.docHeader}>
      <nav className={styles.innerHeader}>
        <h1 className={styles.titHeader}>
          <Link href="/board/board-list">
            <a className={styles.linkTit}>서울 공영주차장 정보</a>
          </Link>
        </h1>
        <ul className={styles.listUtil}>
          <li>
            <Link href="/user/login">
              <a className={styles.linkUtil}>로그인</a>
            </Link>
          </li>
          <li>
            <Link href="/user/join">
              <a className={styles.linkUtil}>회원가입</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
