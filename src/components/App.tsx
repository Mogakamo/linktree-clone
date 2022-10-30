import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Links from "./Links";

function App() {
  return (
    <div className="flex flex-col items-center justify-center p-10 w-screen">
      <Header />
      <Links />
      <Footer />
    </div>
  );
}

export default App;
