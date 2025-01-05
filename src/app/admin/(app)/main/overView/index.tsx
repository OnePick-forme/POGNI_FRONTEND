import * as S from "./style.css";

const Main = () => {
    const {OverViewText1,OverViewText2,OverViewText3,OverViewText4,OverViewText5}={
        OverViewText1:"에코포그니는 여성과 아동의 건강과 복지를 위한 다양한 사회적 가치를 실현하는 ",
        OverViewText2:"부산의 대표적인 사회적기업",
        OverViewText3:"입니다. 지속 가능한 공동체를 만들기 위해 노력하며, ",
        OverViewText4:"지구와 여성 건강을 동시에 고려한 제품",
        OverViewText5:"과 서비스를 제공합니다. ",
    }

  return (
    <>
    <div className={S.OverViewLayout}>
        <div className={S.OverViewTitle}>
            <div className={S.OverViewTitleText}>Company Overview</div>
            <div className={S.OverViewTitleGreenBox}></div>
        </div>
        <div>
            <div className={S.OverViewText}>{OverViewText1}</div>
            <div className={S.OverViewFlex}>
                <div className={S.OverViewTextBold}>{OverViewText2}</div>
                <div className={S.OverViewText}>{OverViewText3}</div>
            </div>
            <div className={S.OverViewFlex}>
                <div className={S.OverViewTextBold}>{OverViewText4}</div>
                <div className={S.OverViewText}>{OverViewText5}</div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Main;
