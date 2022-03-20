import { useEffect, useState } from "react";
import axios from "axios";
import commStyles from "@/pages/common/styles/Common.module.css";
import tableStyles from "@/pages/common/styles/Table.module.css";

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
  const cols = [
    "70px",
    "120px",
    "160px",
    "80px",
    "120px",
    "",
    "200px",
  ];
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/board/list")
      .then((res) => {
        setData(res.data.boards);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      <div className={commStyles.titleArea}>
        <h2 className={commStyles.titText}>주차장 정보</h2>
      </div>
      <div className={tableStyles.boxTbl}>
        <table className={tableStyles.tblComm}>
        <caption className={commStyles.irCaption}>테이블: 서울 공영주차장 정보 리스트</caption>
        <colgroup>
          {cols.map((colWidth, idx) => (
            <col style={{width: colWidth}} key={`col${idx}`} />
          ))}
        </colgroup>
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
              <td colSpan={columns.length} className={tableStyles.tdNodata}>게시글 없음</td>
            </tr>
          ) : (
            data.map((board) => (
              <tr key={board.parkingId}>
                <td>{board.parkingId}</td>
                <td>{board.areaName}</td>
                <td>{board.name}</td>
                <td>{board.divisionCount}</td>
                <td>{board.charge}</td>
                <td className={commStyles.alignLeft}>{board.adress}</td>
                <td>{board.operTime}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      </div>
    </div>
  );
}
