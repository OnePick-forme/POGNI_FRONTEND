import { style } from "@vanilla-extract/css";
import theme from "@/ui/style/theme.css";

export const NewsBox = style({
  width: "385px",
  height: "30vh",
  display: "flex",
  flexDirection: "column",
  flexShrink: 0,
});

export const Image = style({
  width: "100%",
  height: "180px",
  objectFit: "cover",
});

export const Type = style({
  fontSize: "18px",
  fontFamily: "Pretendard",
  fontWeight: "500",
  color: theme.green,
  padding: "10px 0 5px 0",
});

export const Title = style({
  fontSize: "22px",
  fontFamily: "Pretendard",
  fontWeight: "500",
  color: theme.gray[900],
  padding: "0 0 10px 0",
});

export const Line = style({
  display: "flex",
  width: "100%",
  padding: "1px",
  color: theme.gray[200],
  margin: "5px 0",
  position: "relative",
});

export const Text = style({
  fontSize: "20px",
  fontFamily: "Pretendard",
  fontWeight: "400",
  color: theme.gray[500],
});
