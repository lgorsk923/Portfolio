import localFont from "next/font/local";

export const bjCree = localFont({
  variable: "--font-bj-cree",
  display: "swap",
  src: [
    { path: "./fonts/BJCree/BJCree-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/BJCree/BJCree-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/BJCree/BJCree-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/BJCree/BJCree-Bold.ttf", weight: "700", style: "normal" },
  ],
});

export const jomolhari = localFont({
  variable: "--font-jomolhari",
  display: "swap",
  src: [{ path: "./fonts/Jomolhari/Jomolhari-Regular.ttf", weight: "400", style: "normal" }],
});

export const afacad = localFont({
  src: "./fonts/Afacad/Afacad-VariableFont_wght.ttf",
  display: "swap",
});
