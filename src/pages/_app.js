import "@/styles/globals.css";
import GoToHome from "@/components/GoToHome";
export default function App({ Component, pageProps }) {
  const pathName = window.location.pathname === "/" ? true : false;
  return (
    <>
      {!pathName && <GoToHome />}
      <Component {...pageProps} />
    </>
  );
}
