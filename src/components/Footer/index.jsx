import "./style.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left-footer">
        <h3 className="footerTitles">LOGO</h3>
        <p>
          Lorem ipsum dolor sit <br />
          amet consectetur adipisicing elit. <br />
          Rem dolor <br />
          nam vel.
        </p>
      </div>
      <div className="mid_left-footer">
        <h3 className="footerTitles">About</h3>
        <p>Product</p>
        <p>Resource</p>
        <p>Term & Condition</p>
        <p>FAQ</p>
      </div>
      <div className="mid_right-footer">
        <h3 className="footerTitles">Company</h3>
        <p>Our Team</p>
        <p>Partner With Us</p>
        <p>Privacy & Policy</p>
        <p>Features</p>
      </div>
      <div className="right-footer">
        <h3 className="footerTitles">Contact</h3>
        <p>+012 3456789</p>
        <p>adorableprogrammer@gmail.com</p>
        <div className="imgs">
          <img
            src="https://api.removal.ai/download/g2/preview/6175c86e-8e78-4dd4-82c9-7411ab33b71f.png"
            alt=""
          />
          <img
            src="https://api.removal.ai/download/g3/preview/e2e22126-e787-45c2-bfd3-0214e7ad6298.png"
            alt=""
          />
          <img
            src="https://api.removal.ai/download/g1/preview/b55fe13f-61e1-4b54-bfdd-170122def6a3.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
