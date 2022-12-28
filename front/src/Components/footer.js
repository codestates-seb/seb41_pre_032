import styled from "styled-components";

const FooterCss = styled.div`
  background-color: hsl(210, 8%, 15%);

  .footer-box {
    padding: 32px 12px 12px 12px;
    margin: 0px 319.5px;
    display: flex;
  }

  .footer-title {
    color: #babfc4;
    font-size: 13px;
  }
  .footer-content {
    color: #9199a1;
    font-size: 13px;
  }

  .footer-nav {
    display: flex;
  }
  .footer-li {
    padding: 0px 12px 24px 0px;
  }
`;

const Footer = () => {
  return (
    <FooterCss>
      <div className="footer-container">
        <div className="footer-box">
          <div className="footer-logo">로고창</div>
          <div className="footer-nav">
            <div className="footer-li">
              <h5 className="footer-title">STACK OVERFLOW</h5>
              <div className="footer-content">question</div>
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
              <h5 className="footer-title">PRODUCT</h5>
              <div className="footer-content">Teams</div>
              <div className="footer-content">Advertising</div>
              <div className="footer-content">Collectives</div>
              <div className="footer-content">Talent</div>
            </div>   <div className="footer-li">
              <h5 className="footer-title">PRODUCT</h5>
              <div className="footer-content">Teams</div>
              <div className="footer-content">Advertising</div>
              <div className="footer-content">Collectives</div>
              <div className="footer-content">Talent</div>
            </div>
          </div>
          <div className="footer-copyright-box">
            <div className="footer-copyright-top"></div>
            <div className="footer-copyright-bottom"></div>
          </div>
        </div>
      </div>
    </FooterCss>
  );
};

export default Footer;

// 아직 구현 미완
