// Author: Avinash Gunjal
import React from "react";
import "./styles.css";
import Heading from "./components/Header";
import StateFundamentals from "./components/01-StateHooks";
import EffectFundaments01 from "./components/02-EffectHooks";
import EffectFundaments02 from "./components/03-EffectHooks";
import CustomHooks from "./components/04-CustomHooks";
import RefHook from "./components/05-RefHooks";
import HttpReq from "./components/06-HTTPReq";

export default function App() {
  return (
    <div className="App">
      <Heading className="u-center" title="React Hooks fundamentls" />
      {/* <StateFundamentals initialName="Avinash" /> */}
      {/* <EffectFundaments01 /> */}
      <EffectFundaments02 />
      {/* <CustomHooks /> */}
      {/* <RefHook /> */}
      {/* <HttpReq /> */}
    </div>
  );
}
