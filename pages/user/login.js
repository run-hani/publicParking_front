import formStyles from "@/pages/common/styles/Form.module.css";

export default function Login() {
  const handleChange = () => {};
  return (
    <form
      className={formStyles.wrapForms}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className={formStyles.innerForms}>
        <h2 className={formStyles.titForms}>로그인</h2>
        <div className={formStyles.boxForms}>
          <div className={formStyles.itemInp}>
            <input
              type="text"
              name="userid"
              className={formStyles.inpComm}
              placeholder={'ID 입력'}
              onChange={handleChange}
            />
          </div>
          <div className={formStyles.itemInp}>
            <input
              type="password"
              name="password"
              className={formStyles.inpComm}
              placeholder={'비밀번호 입력'}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className={formStyles.btnSubmit}>
            로그인
          </button>
        </div>
      </div>
    </form>
  );
}
