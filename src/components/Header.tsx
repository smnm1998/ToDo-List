"use client";

import React from "react";
import useAuthStore from "@/hooks/useAuthStore";

const Header: React.FC = () => {
    const { isLoggedIn, login, logout } = useAuthStore();

    return (
        <header className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b">
            <h1 className="text-lg font-bold">ToDo-List</h1>
            <nav className="flex space x-4">
                {isLoggedIn ? (
                    <>
                        <a href="#"
                            onClick={ login }
                            className="text-blue-500 hover:underline"
                        >
                            로그인
                        </a>
                        <a href="/signup" className="text-blue-500 hover:underline">
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
                        <a href="/profile" className="text-blue-500 hover:underline">
                            회원정보
                        </a>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;