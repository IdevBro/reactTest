import "./style.css";
import MyIcons from "../Icons";
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="rowHeader">
          <div className="left">
            <i>{<MyIcons.logo />}</i>
            <input type="text" />
            <ul>
              <li>
                <a href="#">Ok</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
