import React, { useState, useEffect } from "react";

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState("");

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    window.localStorage.removeItem("isLoggedIn");
    window.localStorage.removeItem("id");
    window.location.replace("/");
  };

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("id"));
  }, [isLoggedIn]);

  return (
    <>
      <header className="app-header">
        <div className="header-left">
          <button className="menu-button" onClick={toggleMenu}>
            Menu
          </button>
        </div>
        <div className="header-right">
          {isLoggedIn ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <a href="/signIn">Login</a>
          )}
        </div>
      </header>

      {isMenuOpen && (
        <div className="slide-menu">
          <nav>
            <a href="/myPage" onClick={toggleMenu}>
              마이페이지
            </a>
            <a href="/" onClick={toggleMenu}>
              퀴즈
            </a>
            <a href="/board" onClick={toggleMenu}>
              면접 기출 공유
            </a>
            <a href="/aiinterview" onClick={toggleMenu}>
              AI 모의면접
            </a>
            <a href="/come" onClick={toggleMenu}>
              면접 스터디원 모집
            </a>
            <a href="/support" onClick={toggleMenu}>
              채용연계 지원
            </a>
          </nav>
          <div
            className="slide-menu-close"
            onClick={toggleMenu}
            role="button"
            tabIndex={0}
          >
            x
          </div>
        </div>
      )}
    </>
  );
};
