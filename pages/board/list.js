import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { boardActions } from "@/redux/reducers/boardReducer.ts";
import commStyles from "@/pages/common/styles/Common.module.css";
import tableStyles from "@/pages/common/styles/Table.module.css";
import formStyles from "@/pages/common/styles/Form.module.css";

export default function BoardList() {
  const proxy = "http://localhost:5000";

  const columns = [
    "지역",
    "주차장명",
    "구획수",
    "요금",
    "주소",
    "운영시간",
    "설정",
  ];
  const cols = ["120px", "160px", "80px", "120px", "", "200px", "140px"];
  const areaName = {
    GN: "강남구",
    GD: "강동구",
    GB: "강북구",
    GS: "강서구",
    GA: "관악구",
    GG: "광진구",
    GR: "구로구",
    GC: "금천구",
    NW: "노원구",
    DB: "도봉구",
    DDM: "동대문구",
    DJ: "동작구",
    MP: "마포구",
    SDM: "서대문구",
    SC: "서초구",
    SD: "성동구",
    SB: "성북구",
    SP: "송파구",
    YC: "양천구",
    YDP: "영등포구",
    YS: "용산구",
    EP: "은평구",
    JN: "종로구",
    J: "중구",
    JR: "중랑구",
  };
  const charge = {
    FREE: "무료",
    PAY: "유료",
    MULTI: "혼합",
  };
  const operDay = {
    WEEK: "평일",
    WEEK_SAT: "평일+토요일",
    WEEK_SAT_HOLI: "평일+토요일+공휴일",
    ALL: "연중무휴",
  };

  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  const getListData = () => {
    axios
      .get(`${proxy}/board/posts`)
      .then((res) => {
        setData(res.data.posts);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    const loginUser = localStorage.getItem("loginUser");
    setIsLogin(!!loginUser);
    getListData();
  }, []);

  const onClickDelete = async (e, post) => {
    e.preventDefault();
    dispatch(boardActions.postDelRequest(post));
  };

  return (
    <div>
      <div className={commStyles.titleArea}>
        <h2 className={commStyles.titText}>주차장 정보</h2>
        {isLogin && (
          <Link href={"/board/add"}>
            <button className={formStyles.linkApply}>게시글 등록</button>
          </Link>
        )}
      </div>
      <div className={tableStyles.boxTbl}>
        <table className={tableStyles.tblComm}>
          <caption className={commStyles.irCaption}>
            테이블: 서울 공영주차장 정보 리스트
          </caption>
          <colgroup>
            {cols.map((colWidth, idx) => (
              <col style={{ width: colWidth }} key={`col${idx}`} />
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
                <td colSpan={columns.length} className={tableStyles.tdNodata}>
                  게시글 없음
                </td>
              </tr>
            ) : (
              data.map((board) => (
                <tr key={board._id}>
                  <td>{areaName[board.areaName]}</td>
                  <td>{board.parkingName}</td>
                  <td>{board.divisionCount}</td>
                  <td>{charge[board.charge]}</td>
                  <td className={commStyles.alignLeft}>
                    {board.adressLotNumber}
                    <br />
                    {board.adressRoadName}
                  </td>
                  <td>{operDay[board.operDay]}</td>
                  <td>
                    {isLogin ? (
                      <>
                        <Link
                          href={{
                            pathname: `/board/[id]`,
                          }}
                          as={`/board/${board._id}`}
                        >
                          <button className={formStyles.linkSetting}>
                            수정
                          </button>
                        </Link>
                        <button
                          className={formStyles.linkSetting}
                          onClick={(e) => {
                            onClickDelete(e, board);
                          }}
                        >
                          삭제
                        </button>
                      </>
                    ) : (
                      <>-</>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
