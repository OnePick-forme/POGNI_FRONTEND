import { style } from "@vanilla-extract/css";
import theme from "@/ui/style/theme.css";

export const CategoryBox = style({
  display: "flex",
  padding: "24px 32px ",
  width: "28%",
  height: "10vw",
  border: `1px solid ${theme.gray[200]}`,
  borderRadius: "5px",
  alignItems: "center",
  justifyContent: "center",
});
export const CategoryTitle = style({
  display: "flex",
  fontSize: "24px",
  fontFamily: "Pretendard",
  fontWeight: "500",
  color: theme.gray[500],
});
