// import "@/styles/globals.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
// import localFont from "next/font/local";
// import { useRouter } from "next/router";
// import { NotoSansArabic } from "@next/font/google";

// // const TheSans = localFont({
// //   src: [
// //     {
// //       path: "../../public/assets/fonts/TheSans-Plain.otf",
// //       weight: "400",
// //       style: "normal",
// //     },

// //     {
// //       path: "../../public/assets/fonts/TheSans-Bold.otf",
// //       weight: "700",
// //       style: "normal",
// //     },
// //   ],
// // });

// const req3a = localFont({
//   src: [
//     {
//       path: "../../public/fonts/req3a1.ttf",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/req3a2.ttf",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/req3a3.ttf",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/req3a4.ttf",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/req3a5.ttf",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/req3a6.ttf",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/req3a7.ttf",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/req3a8.woff2",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/WebFonts.ttf",
//       weight: "500",
//       style: "normal",
//     },

//     {
//       path: "../../public/assets/fonts/TheSans-Plain.otf",
//       weight: "400",
//       style: "normal",
//     },

//     {
//       path: "../../public/assets/fonts/TheSans-Bold.otf",
//       weight: "700",
//       style: "normal",
//     },
//   ],
// });
// export default function App({ Component, pageProps }) {
//   const { locale } = useRouter();

//   const notoSansArabic2 = NotoSansArabic({
//     subsets: ["arabic"],
//     weight: ["400", "700"], // Adjust weights as needed
//   });

//   const combinedStyles = {
//     ...req3a.style,
//   };

//   return (
//     <main style={combinedStyles} className={`App ${locale}`}>
//       <Component {...pageProps} />
//     </main>
//   );
// }

import "@/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import localFont from "next/font/local";
import { useRouter } from "next/router";

// Move req3a to the module scope as well
const req3a = localFont({
  src: [
    {
      path: "../../public/fonts/req3a1.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/req3a2.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/req3a3.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/req3a4.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/req3a5.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/req3a6.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/req3a7.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/req3a8.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/WebFonts.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/TheSans-Plain.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/TheSans-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }) {
  const { locale } = useRouter();

  const combinedStyles = {
    ...req3a.style,
  };

  return (
    <main style={combinedStyles} className={`App ${locale}`}>
      <Component {...pageProps} />
    </main>
  );
}
