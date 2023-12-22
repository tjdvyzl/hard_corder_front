import React, { useState, useEffect } from "react";
import { StartScreen } from "../components/StartScreen";
import axios from "axios";

export const Main = () => {
  return (
    <main className="main">
      <StartScreen />
    </main>
  );
};
