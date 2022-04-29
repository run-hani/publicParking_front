import React, { useState } from "react";
import { useDispatch } from "react-redux";
import tableStyles from "@/pages/common/styles/Table.module.css";
import commStyles from '@/pages/common/styles/Common.module.css';
import Link from 'next/link';
import formStyles from '@/pages/common/styles/Form.module.css';
import { boardActions } from "@/redux/reducers/boardReducer.ts";

export default function Board() {
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    areaName: "",
    parkingName: "",
    divisionCount: "",
    charge: "",
    adressLotNumber: "",
    adressRoadName: "",
    operDay: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (post) dispatch(boardActions.postAddRequest(post));
      }}
    >
      <div>
        <div className={commStyles.titleArea}>
          <h2 className={commStyles.titText}>정보 등록</h2>
        </div>
        <div className={tableStyles.boxTbl}>
          <table className={tableStyles.tblComm}>
            <caption className={commStyles.irCaption}>테이블: 서울 공영주차장 게시글 작성</caption>
            <colgroup>
                <col style={{width: '130px'}} />
            </colgroup>
            <thead>
            </thead>
            <tbody>
              <tr>
                <th>지역</th>
                <td>
                  <select
                    id="areaName"
                    name="areaName"
                    className={formStyles.optComm}
                    onChange={handleChange}>
                    <option value="">지역 선택</option>
                    <option value="GN">강남구</option>
                    <option value="GD">강동구</option>
                    <option value="GB">강북구</option>
                    <option value="GS">강서구</option>
                    <option value="GA">관악구</option>
                    <option value="GG">광진구</option>
                    <option value="GR">구로구</option>
                    <option value="GC">금천구</option>
                    <option value="NW">노원구</option>
                    <option value="DB">도봉구</option>
                    <option value="DDM">동대문구</option>
                    <option value="DJ">동작구</option>
                    <option value="MP">마포구</option>
                    <option value="SDM">서대문구</option>
                    <option value="SC">서초구</option>
                    <option value="SD">성동구</option>
                    <option value="SB">성북구</option>
                    <option value="SP">송파구</option>
                    <option value="YC">양천구</option>
                    <option value="YDP">영등포구</option>
                    <option value="YS">용산구</option>
                    <option value="EP">은평구</option>
                    <option value="JN">종로구</option>
                    <option value="J">중구</option>
                    <option value="JR">중랑구</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>주차장명</th>
                <td>
                  <input
                    type="text"
                    onChange={handleChange}
                    className={formStyles.inpComm}
                    id="parkingName"
                    name="parkingName"
                    placeholder="주차장명 입력"
                  />
                </td>
              </tr>
              <tr>
                <th>구획수</th>
                <td>
                  <input
                    type="text"
                    onChange={handleChange}
                    className={formStyles.inpComm}
                    id="divisionCount"
                    name="divisionCount"
                    placeholder="구획수 입력"
                  />
                </td>
              </tr>
              <tr>
                <th>요금</th>
                <td>
                  <input
                    type="text"
                    onChange={handleChange}
                    className={formStyles.inpComm}
                    id="charge"
                    name="charge"
                    placeholder="요금 입력"
                  />
                </td>
              </tr>
              <tr>
                <th>주소 (지번)</th>
                <td>
                  <input
                    type="text"
                    onChange={handleChange}
                    className={formStyles.inpComm}
                    id="adressLotNumber"
                    name="adressLotNumber"
                    placeholder="주소 (지번) 입력"
                  />
                </td>
              </tr>
              <tr>
                <th>주소 (도로명)</th>
                <td>
                  <input
                    type="text"
                    onChange={handleChange}
                    className={formStyles.inpComm}
                    id="adressRoadName"
                    name="adressRoadName"
                    placeholder="주소 (도로명) 입력"
                  />
                </td>
              </tr>
              <tr>
                <th>운영요일</th>
                <td>
                  <select
                    id="operDay"
                    name="operDay"
                    className={formStyles.optComm}
                    onChange={handleChange}>
                    <option value="">운영요일 선택</option>
                    <option value="WEEK">평일</option>
                    <option value="WEEK_SAT">평일+토요일</option>
                    <option value="WEEK_SAT_HOLI">평일+토요일+공휴일</option>
                    <option value="ALL">연중무휴</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button type='submit' className={formStyles.linkApply}>등록</button>
      </div>
    </form>
  );
}
