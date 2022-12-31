import styled from "styled-components";

const FooterCss = styled.footer`
  background-color: hsl(210, 8%, 15%);

  .footer-box {
    padding: 32px 12px 12px 12px;
    margin: 0px 319.5px;
    display: flex;
    justify-content: center;
  }

  .footer-logo {
    padding-right: 20px;
    > img {
      width: 48px;
      height: 48px;
    }
  }

  .footer-title {
    color: #babfc4;
    font-size: 13px;
    margin-bottom: 12px;
  }
  .footer-content {
    color: #9199a1;
    font-size: 13px;
    padding: 4px 0px;
  }

  .footer-nav {
    display: flex;
  }
  .footer-li {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: auto;
    padding: 0px 100px 24px 0px;
  }

  .footer-copyright-box {
    display: flex;
    flex-direction: column;
  }

  .footer-copyright-top {
    display: flex;
    color: #9199a1;
    font-size: 11px;
  }

  .first-link {
    padding-bottom: 4px;
  }
  .other-link {
    padding-left: 12px;
  }

  .footer-copyright-bottom {
    font-size: 11px;
    color: #9199a1;
    margin-bottom: 24px;
    margin-top: auto;
  }
`;

const Footer = () => {
  return (
    <FooterCss>
      <div className="footer-container">
        <div className="footer-box">
          <div className="footer-logo">
            <img
              src="../images/64px-Stack_Overflow_icon.png"
              alt="footer-logo"
            />
          </div>
          <div className="footer-nav">
            <div className="footer-li">
              <h5 className="footer-title">STACK OVERFLOW</h5>
              <div className="footer-content">Question</div>
              <div className="footer-content">Help</div>
            </div>
            <div className="footer-li">
              <h5 className="footer-title">PRODUCT</h5>
              <div className="footer-content">Teams</div>
              <div className="footer-content">Advertising</div>
              <div className="footer-content">Collectives</div>
              <div className="footer-content">Talent</div>
            </div>
            <div className="footer-li">
              <h5 className="footer-title">COMPANY</h5>
              <div className="footer-content">About</div>
              <div className="footer-content">Press</div>
              <div className="footer-content">Work Here</div>
              <div className="footer-content">Legal</div>
              <div className="footer-content">Privacy Policy</div>
              <div className="footer-content">Terms of Service</div>
              <div className="footer-content">Contact Us</div>
              <div className="footer-content">Cookie Settings</div>
              <div className="footer-content">Cookie Policy</div>
            </div>
            <div className="footer-li">
              <h5 className="footer-title">STACK EXCHANGE NETWORK</h5>
              <div className="footer-content">Technology</div>
              <div className="footer-content">Culture & recreation</div>
              <div className="footer-content">Life & arts</div>
              <div className="footer-content">Science</div>
              <div className="footer-content">Professional</div>
              <div className="footer-content">Business</div>
              <div className="footer-content">API</div>
              <div className="footer-content">Data</div>
            </div>
          </div>
          <div className="footer-copyright-box">
            <div className="footer-copyright-top">
              <div className="first-link">blog</div>
              <div className="other-link">Facebook</div>
              <div className="other-link">Twitter</div>
              <div className="other-link">Linkein</div>
              <div className="other-link">Instargram</div>
            </div>
            <div className="footer-copyright-bottom">
              <p>Site design / logo © 2022 Stack Exchange Inc;</p>
              <p>contributions licensed under CC BY-SA. rev 2022.12.21.43127</p>
            </div>
          </div>
        </div>
      </div>
    </FooterCss>
  );
};

export default Footer;

// 아직 구현 미완
