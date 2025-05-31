import "./style.css";
import MyIcons from "../Icons";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="rowHeader">
          <div className="left">
            <div className="logo">
              <MyIcons.logo />
            </div>

            <input type="text" placeholder="Search..." />

            <ul className="nav-links">
              <li>
                <a href="#">Ok</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>

          <div className="right">
            {/* Agar kerak bo‘lsa, bu yerga user ikonkasi yoki tugmalar qo‘yiladi */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
