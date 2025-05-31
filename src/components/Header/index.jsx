import "./style.css";
import MyIcons from "../Icons";
import Avatar from "../../../public/assets/images/user.png";

const Header = () => {
  return (
    <header className="header">
      <div className="left-section">
        <div className="logo">{<MyIcons.logo />}</div>
        <div className="search-box">
          <MyIcons.search className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="center-section">
          <nav>
            <a href="#">Home</a>
            <div className="dropdown">
              <a href="#">
                Explore <MyIcons.down className="chevron-icon" />
              </a>
            </div>
          </nav>
        </div>
      </div>

      <div className="right-section">
        <MyIcons.bell className="icon" />
        <MyIcons.sms className="icon" />
        <button className="wallet-button">
          Wallet <MyIcons.down className="chevron-icon" />
        </button>
        <img className="avatar" src={Avatar} alt="User" />
      </div>
    </header>
  );
};

export default Header;
