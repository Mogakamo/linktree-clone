import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Links from "./Links";
import Socials from "./Socials";

function App() {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <Header />
      <Links />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
