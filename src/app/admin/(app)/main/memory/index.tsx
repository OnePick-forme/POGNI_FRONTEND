import * as S from "./style.css";

const Memory = () => {
  const { EggFonyTitle, EggFonyText } = {
    EggFonyTitle: "우리들의 추억",
    EggFonyText: "에코포그니와 함께 달려온 추억을 기록했습니다.",
  };
  const ImageArray = Array.from({ length: 18 });

  return (
    <>
      <div className={S.EggFonyTextLayout}>
        <div className={S.EggFonyText}>
          <div className={S.EggFonyShap}>#</div>
          <div className={S.EggFonyTextBold}>{EggFonyTitle}</div>
        </div>
        <div className={S.EggFonyTexts}>{EggFonyText}</div>
      </div>
      <div className={S.EggFonyImageLayout}>
        <div className={S.slideTrack}>
          {[...ImageArray, ...ImageArray].map((_, index) => (
            <img
              alt="eggImage"
              src={`/MainSlide/Egg${(index % 18) + 1}.png`}
              key={index}
              className={S.EggImage}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Memory ;
