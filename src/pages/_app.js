import "@/styles/globals.css";
import GoToHome from "@/components/GoToHome";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const pathName = router.pathname === "/" ? true : false;

  return (
    <>
      {!pathName && <GoToHome />}
      <Component {...pageProps} />
    </>
  );
}
