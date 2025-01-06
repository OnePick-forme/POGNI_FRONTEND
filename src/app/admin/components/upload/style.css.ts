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
