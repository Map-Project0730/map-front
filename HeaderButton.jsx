function HeaderButton({ text, onClick }) {

    const buttonStyle = {
        color: "#fff",
        padding: "10px 3vw",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        transition: "background-color 0.3s ease"
    };

    return (
        <div
            className="header-button"
            onClick={onClick}
            style={buttonStyle}
        >
            {text}
        </div>
    );
}

export default HeaderButton;