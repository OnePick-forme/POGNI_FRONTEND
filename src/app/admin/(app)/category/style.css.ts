import { style } from "@vanilla-extract/css";
import theme from "@/ui/style/theme.css";

export const CategoryLayout = style({
  display: "flex",
  width: "70%",
  padding: "0 10%",
  flexDirection: "column",
  minHeight:"100vh",
});

export const CategoryInput = style({
  paddingTop: "15px",
  width: "100%",
  border: "none",
  outline: "none",
  fontSize: "24px",
  marginTop: "50px",
});

export const Line = style({
  display: "flex",
  width: "100%",
  padding: "1px",
  marginTop: "5px",
  backgroundColor: theme.gray[150],
});

export const LineError = style({
  display: "flex",
  width: "100%",
  padding: "1px",
  marginTop: "5px",
  backgroundColor: theme.red,
});

export const CountInput = style({
  display: "flex",
  marginTop: "auto",
});

export const InputLayout = style({
  display: "flex",
  width: "100%",
  fontSize: "20px",
  color: theme.gray[500],
});

export const ErrorMessage = style({
  color: theme.red,
  width: "100%",
  fontSize: "20px",
  marginTop: "8px",
  textAlign: "right",
});

export const CountInputError = style({
  color: theme.red,
});
