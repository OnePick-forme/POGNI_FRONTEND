import { style } from "@vanilla-extract/css";
import theme from "@/ui/style/theme.css";

export const UploadLayout = style({
  display: "flex",
  padding: "0 10%",
  width: "100%",
  height: "104px",
  alignItems: "center",
  bottom: "0",
  position: "fixed",
  boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.05)",
  borderBottom: `1px solid ${theme.gray[300]}`,
  zIndex: 200,
  backgroundColor: theme.white,
});

export const UploadBack = style({
  display: "flex",
  fontSize: "26px",
});

export const UploadButton = style({
  display: "flex",
  fontSize: "28px",
  color: theme.white,
  backgroundColor: "#33A748",
  height: "72px",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
  padding: "20px 46px 19px 46px",
  marginLeft: "auto",
});

// export const Fix = style({
//   width: "20px",
//   height: "20px",
//   borderRadius: "900px",
//   border: "2px solid var(--gray-G200, #D4D4D4)",
//   backgroundColor: theme.white,
// });

export const FixTitle = style({
  fontFamily: "pretendard",
  fontSize: "20px",
  display: "flex",
  padding: "2px 8px 2px 8px",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "5px",
  fontStyle: "normal",
  fontWeight: "500",
  color: "white",
  backgroundColor: theme.gray[300],
});

export const Important = style({
  width: "20px",
  height: "20px",
  borderRadius: "900px",
  border: "2px solid var(--gray-G200, #D4D4D4)",
  backgroundColor: theme.white,
});

export const ImportantTitle = style({
  fontFamily: "pretendard",
  fontSize: "20px",
  display: "flex",
  padding: "2px 8px 2px 8px",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "5px",
  fontStyle: "normal",
  fontWeight: "500",
  color: "white",
  backgroundColor: theme.red,
});

export const Button = style({
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 20px",
});

export const ButtonLayout = style({
  display: "flex",
  marginLeft: "auto",
});

export const Fix = style({
  width: "20px",
  height: "20px",
  borderRadius: "900px",
  border: "2px solid var(--gray-G200, #D4D4D4)", // 기본 선 색깔
  backgroundColor: theme.white, // 기본 배경색
});

export const FixSelected = style({
  width: "20px",
  height: "20px",
  borderRadius: "900px",
  border: "2px solid #33A748", // 선택된 상태의 선 색깔
  backgroundColor: "#A9DDB3", // 선택된 상태의 배경색
});
export const ImportantSelected = style({
  width: "20px",
  height: "20px",
  borderRadius: "900px",
  border: "2px solid #33A748", // 선택된 상태의 선 색깔
  backgroundColor: "#A9DDB3", // 선택된 상태의 배경색
});
