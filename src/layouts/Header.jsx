import { Link, NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header className="header">
            SPACE SHOP
            <nav>
                <NavLink to="/">상품 목록</NavLink>
                <NavLink to="/notice">공지사항</NavLink>
            </nav>
        </header>
    )
}

export default Header
