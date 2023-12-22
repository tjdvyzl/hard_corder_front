import React, { useState, useEffect } from "react";
import { StartScreen } from "../components/StartScreen";
import { Header } from "../components/Header";
import axios from "axios";

export const Main = () => {
  return (
    <main className="main">
      <Header />
      <StartScreen />
    </main>
  );
};
