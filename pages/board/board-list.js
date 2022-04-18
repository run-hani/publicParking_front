import Head from "next/head";
import tableStyles from "../common/styles/table.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BoardList() {
  const columns = [
    "번호",
    "지역",
    "주차장명",
    "구획수",
    "요금",
    "주소",
    "운영시간",
  ];
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/board/list")
      .then((res) => {
        setData(res.data.boards);
      })
      .catch((err) => {});
  }, []);

  return (
    <>
      <h2>게시판</h2>
      <table className={tableStyles.table}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th scope="col" key={column}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length == 0 ? (
            <tr>
              <td colSpan={columns.length}>게시글 없음</td>
            </tr>
          ) : (
            data.map((board) => (
              <tr key={board.parkingId}>
                <td>{board.parkingId}</td>
                <td>{board.area}</td>
                <td>{board.name}</td>
                <td>{board.division}</td>
                <td>{board.charge}</td>
                <td>{board.adress}</td>
                <td>{board.opertime}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}
