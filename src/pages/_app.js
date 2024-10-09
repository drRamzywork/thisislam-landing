import "@/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import localFont from "next/font/local";

const TheSans = localFont({
  src: [
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
  const combinedStyles = {
    ...TheSans.style,
  };

  return (
    <main style={combinedStyles}>
      <Component {...pageProps} />
    </main>
  );
}
