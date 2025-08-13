import { useState } from "react";
import HeaderButton from "./HeaderButton";
import {useNavigate} from "react-router-dom";

function Header() {

    const [minHeaderHeight, setMinHeaderHeight] = useState("60px");

    const navigate = useNavigate();

    return (
        <>
            <div style={{ height: minHeaderHeight }}></div>
            <div className="fixed top-0 left-0 flex w-full justify-between items-center
             py-[10px] px-[20px] text-white z-[1000] min-w-[30%]" style={{ height: minHeaderHeight, backgroundColor: "#404AA6" }}>
                <span className="text-[40px] text-white font-['Bauhaus_93',sans-serif]">MAP</span>
                <div className="flex items-center gap-[10px]">
                    <HeaderButton text="홈" onClick={() => navigate("/")} />
                    <HeaderButton text="공지" onClick={() => navigate("/announcements")} />
                    <HeaderButton text="게시판" onClick={() => navigate("/board")} />
                    <HeaderButton text="글 작성" onClick={() => navigate("/write")} />
                    <HeaderButton text="캘린더" onClick={() => navigate("/calendar")} />
                </div>
                <div>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40 42V38C40 35.8783 39.1571 33.8434 37.6569 32.3431C36.1566 30.8429 34.1217 30 32 30H16C13.8783 30 11.8434 30.8429 10.3431 32.3431C8.84285 33.8434 8 35.8783 8 38V42M32 14C32 18.4183 28.4183 22 24 22C19.5817 22 16 18.4183 16 14C16 9.58172 19.5817 6 24 6C28.4183 6 32 9.58172 32 14Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </>
    );
}



export default Header;