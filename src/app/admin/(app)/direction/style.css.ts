import { style } from "@vanilla-extract/css";
import theme from "@/ui/style/theme.css";

export const DirectionsLayout = style({
  display: "flex",
  width: "100%",
  padding: "0 10%",
  minHeight:"100vh",
  flexDirection:"column"
});

export const DirectionTitle = style({
  display: "flex",
  marginTop: "48px",
  fontFamily: "Jal_Onuel",
  fontWeight: "400",
  fontSize: "36px",
});

export const Line = style({
  display: "flex",
  width: "100%",
  padding: "0.5px",
  marginTop: "20px",
  backgroundColor: theme.gray[600],
});

export const Title = style({
  display: "flex",
  fontFamily: "pretendard",
  fontWeight: "500",
  fontSize: "26px",
  paddingTop: "48px",
});

export const AddressInput = style({
  paddingTop: "15px",
  width: "100%",
  border: "none",
  outline: "none",
  fontSize: "24px",
});

export const AddressLine = style({
  display: "flex",
  width: "95%",
  padding: "0.5px",
  marginTop: "5px",
  backgroundColor: theme.gray[150],
});

export const AddressSearch = style({
  display: "flex",
  flexDirection: "row", // 입력 필드와 버튼 나란히 배치
  alignItems: "center", // 수직 정렬
  gap: "16px", // 간격 유지
  width: "auto",
});

export const AddressInfo = style({
  width: "350px",
  display: "flex",
  flexDirection: "column",
});

export const AddressButton = style({
  display: "flex",
  position: "sticky",
  padding: "10px 19px 9px 20px",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "5px",
  backgroundColor: theme.gray[200],
  color: theme.white,
  fontFamily: "pretendard",
  fontSize: "24px",
  fontWeight: "400",
  border: "none",
});

export const Lines = style({
  display: "flex",
  width: "100%",
  padding: "0.5px",
  marginTop: "5px",
  backgroundColor: theme.gray[150],
});

export const input = style({
  display: "flex",
  paddingTop: "15px",
  width: "100%",
  border: "none",
  outline: "none",
  fontSize: "24px",
});

export const Box = style({
  display: "flex",
  width: "100%",
  flexDirection: "column",
});
