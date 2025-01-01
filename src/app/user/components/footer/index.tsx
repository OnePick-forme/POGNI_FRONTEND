import * as S from "./style.css";

const Footer = () => {
  const { name, address, phone, ceo, email, company } = {
    name: "(사)여성과나눔 보육콜센터",
    address: "부산시 동래구 연안로 59번길99",
    phone: "051-507-6961",
    ceo: "손정은",
    email: "boyukcall@nate.com",
    company: [
      "자매단체",
      "한국사회적기업진흥원",
      "(사)부산여성회",
      "동래여성인력개발센터",
      "부산북구지역자활센터",
    ],
  };

  return (
    <div className={S.FooterLayout}>
      <div className={S.FooterLeft}>
        <div className={S.FooterTitle}>{name}</div>
        <div className={S.FooterInfoBox}>
          <div className={S.FooterInfo1}>
            <div>주소 | {address}</div>
            <div>전화번호 | {phone}</div>
          </div>
          <div className={S.FooterInfo2}>
            <div>대표 | {ceo}</div>
            <div>이메일 | {email}</div>
          </div>
        </div>
      </div>
      <div className={S.FooterRight}>
        <div className={S.InfoTitle}>{company[0]}</div>
        {company.slice(1).map((org, index) => (
          <div key={index} className={S.CompanyItem}>
            {org}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
