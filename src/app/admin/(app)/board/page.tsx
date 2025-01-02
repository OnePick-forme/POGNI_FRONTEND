import * as S from "./style.css";
import Header from "@/app/admin/components/header";

const Board = () => {
  return (
    <>
      <Header />
      <div className={S.BoardLayout}></div>
    </>
  );
};

export default Board;
