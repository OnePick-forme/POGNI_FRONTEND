  import { style } from "@vanilla-extract/css";
import theme from "@/ui/style/theme.css";

export const WriteLayout = style({
  height: "100vh",
  width: "100%",
  padding: "0 10%",
  minHeight:"100vh",
  display:"flex",
  flexDirection:"column"
});

export const WriteTitle = style({
  display: "flex",
  fontFamily: "Pretendard-Medium",
  fontSize: "28px",
  border: "none",
  outline: "none",
  marginTop: "56px",
  zIndex: "20",
  width: "100%",
});

export const WriteLine = style({
  display: "flex",
  width: "18%",
  padding: "2px",
  marginBottom: "5px",
  backgroundColor: theme.gray[300],
});

export const WriteEditer = style({
  marginTop: "16px",
});

export const Line = style({
  display: "flex",
  width: "100%",
  padding: "1px",
  backgroundColor: theme.gray[200],
});

export const Toolbar = style({
  display: "flex",
  border: "none",
  padding: "10px 0 0 0 ",
});

export const ToolbarButton = style({
  display: "flex",
  fontSize: "20px",
  border: "none",
  borderRadius: "4px",
});
