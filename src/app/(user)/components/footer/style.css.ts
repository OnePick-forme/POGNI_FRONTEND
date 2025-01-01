import { style } from "@vanilla-extract/css";
import theme from "@/ui/style/theme.css";

export const FooterLayout = style({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  height: "267px",
  padding: "0 10%",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: theme.black,
  color: theme.white,
  fontFamily: "Pretendard-Regular",
});

export const FooterInfoBox = style({
  display: "flex",
  fontFamily: "Pretendard-Regular",
  color: theme.white,
  fontSize: "18px",
  gap: "36px",
});

export const FooterLeft = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: "40px",
  maxWidth: "70%",
});

export const FooterRight = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "8px",
  maxWidth: "30%",
});

export const FooterTitle = style({
  fontSize: "24px",
  fontFamily: "Jal_Onuel",
  marginBottom: "10px",
});

export const FooterInfo1 = style({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  fontSize: "18px",
});
export const FooterInfo2 = style({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  fontSize: "18px",
});

export const InfoTitle = style({
  fontSize: "18px",
  fontWeight: "700",
  marginBottom: "10px",
});

export const CompanyItem = style({
  fontSize: "16px",
});
