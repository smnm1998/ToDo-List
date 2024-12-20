"use client";

import React from "react";
import useAuthStore from "@/hooks/useAuthStore";

const Header: React.FC = () => {
    const { isLoggedIn, login, logout } = useAuthStore();

    return (
        <header className="flex items-center justify-between px-6 py-6 bg-gray-100 border-b">
            <h1 className="text-lg font-bold">ToDo</h1>
            <nav className="flex space x-4">
                {/* 241220 ::: isLoggedIn 앞에 '!'를 안붙여서 로그아웃, 회원정보가 출력되었다.*/}
                {!isLoggedIn ? (
                    <>
                        <a href="#"
                            onClick={ login }
                            className="text-blue-500 hover:underline">
                            로그인
                        </a>
                        <a href="/signup" className="ml-6 text-blue-500 hover:underline">
                            회원가입
                        </a>
                    </>
                ) : (
                    <>
                        <a href="#"
                            onClick={ logout }
                            className="text-blue-500 hover:underline"
                        >
                            로그아웃
                        </a>
                        <a href="/profile" className="ml-6 text-blue-500 hover:underline">
                            회원정보
                        </a>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;