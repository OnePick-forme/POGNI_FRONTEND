import { style } from "@vanilla-extract/css";
import theme from "@/ui/style/theme.css";

export const BoardLayout = style({
  width: "100%",
  padding: "0 10%",
});

export const BoardTitle = style({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  gap: "12px",
  fontSize: "20px",
  fontFamily: "pretendard",
  color: theme.gray[500],
  paddingTop: "4%",
  alignItems: "end",
});

export const Title = style({
  display: "flex",
  fontSize: "34px",
  fontFamily: "Jal_Onuel",
  color: theme.gray[900],
});

export const WriteButton = style({
  display: "flex",
  fontSize: "20px",
  width: "123px",
  height: "45px",
  backgroundColor: theme.green,
  color: theme.white,
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "auto",
  borderRadius: "8px",
});

export const BoardTitleBottom = style({
  display: "flex",
  justifyContent: "space-between",
  padding: "34px 0 26px 0",
});

export const BoardTitleText = style({
  display: "flex",
  fontSize: "25px",
  fontFamily: "Pretendard",
  fontWeight: "500",
  color: theme.gray[900],
});
export const BoardTitleNumber = style({
  padding: "0 0 0 6px",
  color: theme.green,
  fontFamily: "Pretendard",
  fontWeight: "600",
});
export const BoardTitleInput = style({
  width: "184px",
  height: "24px",
  border: "none",
  outline: "none",
  fontSize: "20px",
  fontFamily: "Pretendard",
  fontWeight: "500",
  color: theme.gray[900],
  "::placeholder": {
    color: theme.gray[500],
  },
});

export const BoardSearchBox = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "40px",
  padding: "0 0 7px 0",
  borderBottom: `2px solid ${theme.gray[300]}`,
});

export const BoardBoxList = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  gap: "58px 0%",
  flexWrap: "wrap",
  padding: "0 0 109px 0",
});

export const BoardBoxSlide = style({
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 0 100px 0",
});
export const BoardBoxNumbers = style({
  display: "flex",
  position: "relative",
  alignItems: "center",
  fontSize: "24px",
  gap: "20px",
  fontFamily: "Pretendard",
  fontWeight: "500",
  color: theme.gray[500],
});

export const BoardBoxSlideButton = style({
  position: "absolute",
  right: "0",
  transform: "translateX(40px)",
});

export const BoardBoxSelectNumbers = style({
  color: theme.green,
});
