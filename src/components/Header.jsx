import { useState } from "react";
import HeaderButton from "./HeaderButton";

function Header() {

    const [minHeaderHeight, setMinHeaderHeight] = useState("60px");

    const headerStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        width: "100%",
        height: minHeaderHeight,
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#404AA6",
        color: "#fff",
        zIndex: 1000,
        minWidth: "30%",
    };

    const flexboxStyle = {
        display: "flex",
        alignItems: "center",
        gap: "10px",
    };

    const mapFontStyle = {
        fontFamily: "'Bauhaus 93', sans-serif",
        fontSize: "40px",
        color: "white"
    };

    return (
        <>
            <div style={{ height: minHeaderHeight }}></div>
            <div style={headerStyle}>
                <span style={mapFontStyle}>MAP</span>
                <div style={flexboxStyle}>
                    <HeaderButton text="홈" onClick={() => window.location.href = "/"} />
                    <HeaderButton text="공지" onClick={() => window.location.href = "/announcements"} />
                    <HeaderButton text="게시판" onClick={() => window.location.href = "/board"} />
                    <HeaderButton text="글 작성" onClick={() => window.location.href = "/write"} />
                    <HeaderButton text="캘린더" onClick={() => window.location.href = "/calendar"} />
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