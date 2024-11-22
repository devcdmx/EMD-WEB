import MyourHead from "@/src/layouts/MyourHead";
import Preloader from "@/src/layouts/Preloader";
import "@/styles/globals.css";
import "@/public/style/basic.scss";

import { Fragment, useEffect, useState } from "react";
const App = ({ Component, pageProps }) => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <Fragment>
      <MyourHead />
      {loader && <Preloader />}
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
