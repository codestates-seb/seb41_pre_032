import Sidebar from '../Components/Sidebar';
import PageListButton from '../Components/PageListButton';
import styled from 'styled-components';
import Footer from '../Components/Footer';

const BodyWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const HomeWrap = styled.div`
  width: 100%;
  max-width: 1264px;
  margin: 0 auto;
  display: flex;
  text-align: left;

  .companies-page-container {
    border-left: 1px solid hsl(210, 8%, 85%);
    padding: 2.4rem;
    > h1 {
      font-size: 2.7rem;
      margin: 0px 0px 4px;
      line-height: 1.15384615;
      font-weight: 400;
    }
  }

  .search-button {
    background-color: hsl(206, 100%, 52%);
    border: 1px solid transparent;
    border-radius: 3px;
    box-shadow: inset 0 1px 0 0hsla (0, 0%, 100%, 0.4);
    padding: 12px 16px;
    cursor: pointer;
    display: inline-block;
    line-height: calc((13+2) / 13);
    position: relative;
    outline: none;
    margin-left: 0.3em;
    font-size: 15px;
    color: white;
  }

  .companies-intro {
    margin: 0px 0px 13px;
    font-size: 1.3rem;
    /* color: hsl(210, 8%, 45%); */
  }

  .companies-mainbar {
    padding-bottom: 1.3rem;
  }

  .companies-searchform {
    margin: -0.2rem;
    > * {
      display: flex;
      justify-content: flex-start;
    }
  }

  .line {
    border-left: 1px solid;
    border-color: hsl(210, 8%, 75%);
    margin: 4px 8px !important;
  }

  .companies-inputform {
    > div {
      margin: 0.2rem;
    }
  }

  .input-filter {
    > input {
      padding: 7.5px 10.5px 7.5px 32px;
      height: 100%;
      font-size: 15px;
      border: 1px solid hsl(210, 8%, 75%);
      border-radius: 4px;
    }
    > .companies-filter {
      -webkit-appearance: none;
      margin: 0;
      padding: 1px 2px 1px 32px;
      border: 1px solid hsl(210, 8%, 75%);
      border-radius: 3px;
      padding: 7.8px 9.1px 7.8px 32px;
      background-image: url(../images/glass.png);
      background-repeat: no-repeat;
      background-size: 18px;
      background-position: 8px center;
      color: hsl(210, 8%, 55%);
      /* 태그 필터 안에 이미지 위치를 정확히 파악하지 못하는 중 */
    }
  }

  .input-filter2 {
    > input {
      padding: 7.5px 10.5px 7.5px 10.5px;
      height: 100%;
      font-size: 15px;
      border: 1px solid hsl(210, 8%, 75%);
      border-radius: 4px;
    }
  }

  .companies-filter2 {
    padding: 7.5px 10.5px 7.5px 32px;
    height: 100%;
    font-size: 15px;
    border: 1px solid hsl(210, 8%, 75%);
    border-radius: 4px;
  }

  .bundle-filter-container {
    > button {
      padding: 12px 30px 12px 12px;
      border: 1px solid hsl(210, 8%, 65%);
      border-radius: 3px;
      color: hsl(210, 8%, 45%);
      background-color: white;
      > span {
        font-size: 15px;
      }
    }
  }

  .all-companies-count {
    margin: 12px 0px;
    > * {
      font-size: 15px;
    }
  }

  .companies-list-container {
    margin: 0px 0px 0px -24px;
    border-top: 1px solid hsl(210, 8%, 85%);
  }

  .eachcompanies {
    padding: 24px 32px 24px 24px;
    border-bottom: 1px solid hsl(210, 8%, 85%);
    position: relative;
    display: flex;
  }

  .companies-photo {
    height: 64px;
    width: 64px;
    margin: 0px 24px 0px 0px;
  }

  .compaines-name {
    margin-bottom: 0.4rem;
    font-size: 15px;
    color: #0074cc;
    font-weight: 400;
  }

  .companies-location-box {
    display: flex;
    margin: 0px -6px;
    > * {
      display: flex;
    }
    > .companies-location {
      margin: 0px 6px;
      > p {
        font-size: 13px;
        color: #6a737c;
      }
    }
  }

  .img-box {
    width: 16px;
    height: 16px;
    margin-right: 6px;
  }

  .companies-introduce {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 13px;
    margin-top: 8px;
  }

  .companies-uselanguage-box {
    margin: 12px -2px 0px -2px;
    display: flex;
  }

  .companies-uselanguage {
    padding: 0px 4px;
    margin: 2px;
    background-color: hsl(205, 46%, 92%);
    border: 1px solid transparent;
    border-radius: 3px;
    color: #39739d;
    font-size: 12px;
    line-height: 1.84615385;
    display: inline-flex;
    justify-content: center;
  }
`;

const Companies = () => {
  return (
    <BodyWrap>
      <HomeWrap>
        <Sidebar />

        <div className='companies-page-container'>
          <h1 className='companies-headline'>Companies</h1>
          <p className='companies-intro'>
            learn about what it's like to work at companies
          </p>
          <div className='companies-mainbar'>
            <form className='companies-searchform'>
              <div className='companies-inputform'>
                <div className='input-filter'>
                  <input
                    type='text'
                    placeholder='Search all companies'
                    className='companies-filter'
                  />
                </div>
                <div className='input-filter2'>
                  <input type='text' placeholder='Search company by location' />
                </div>
              </div>
              <div className='all-companies-count'>
                <div>142 companies</div>
              </div>
            </form>

            <div className='companies-list-container'>
              <ul className='companies-list'>
                <li className='eachcompanies'>
                  <img
                    src='../logo192.png'
                    alt='company_logo'
                    className='companies-photo'
                  />
                  <div className='company-detail'>
                    <h2 className='compaines-name'>Nord Security</h2>
                    <div className='companies-lnfo-box'>
                      <div className='companies-location-box'>
                        <div className='companies-location'>
                          <img
                            src='../images/location-dot-solid.svg'
                            alt='location_img'
                            className='img-box'
                          />

                          <p>Vilnius; Kaunas; Poland</p>
                        </div>
                        <div className='companies-location'>
                          <img
                            src='../images/building-solid.svg'
                            alt='building_logo'
                            className='img-box'
                          />

                          <p>
                            Cybersecurity, Network Security, Software
                            Development
                          </p>
                        </div>
                      </div>
                      <p className='companies-introduce'>
                        Nord Security is one of the world’s leading digital
                        security and privacy solutions providers. Used by
                        millions of customers worldwide, our suite of products
                        include: NordVPN - the fastest VPN on the planet, built
                        to protect your online traffic and privacy with
                        next-generation encryption. NordLayer
                      </p>
                      <div className='companies-uselanguage-box'>
                        <div className='companies-uselanguage'>rust</div>
                        <div className='companies-uselanguage'>open-source</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className='eachcompanies'>
                  <img
                    src='../logo192.png'
                    alt='company_logo'
                    className='companies-photo'
                  />
                  <div className='company-detail'>
                    <h2 className='compaines-name'>Nord Security</h2>
                    <div className='companies-lnfo-box'>
                      <div className='companies-location-box'>
                        <div className='companies-location'>
                          <img
                            src='../images/location-dot-solid.svg'
                            alt='location_img'
                            className='img-box'
                          />

                          <p>Vilnius; Kaunas; Poland</p>
                        </div>
                        <div className='companies-location'>
                          <img
                            src='../images/building-solid.svg'
                            alt='building_logo'
                            className='img-box'
                          />

                          <p>
                            Cybersecurity, Network Security, Software
                            Development
                          </p>
                        </div>
                      </div>
                      <p className='companies-introduce'>
                        Nord Security is one of the world’s leading digital
                        security and privacy solutions providers. Used by
                        millions of customers worldwide, our suite of products
                        include: NordVPN - the fastest VPN on the planet, built
                        to protect your online traffic and privacy with
                        next-generation encryption. NordLayer
                      </p>
                      <div className='companies-uselanguage-box'>
                        <div className='companies-uselanguage'>rust</div>
                        <div className='companies-uselanguage'>open-source</div>
                      </div>
                    </div>
                  </div>
                </li>{' '}
                <li className='eachcompanies'>
                  <img
                    src='../logo192.png'
                    alt='company_logo'
                    className='companies-photo'
                  />
                  <div className='company-detail'>
                    <h2 className='compaines-name'>Nord Security</h2>
                    <div className='companies-lnfo-box'>
                      <div className='companies-location-box'>
                        <div className='companies-location'>
                          <img
                            src='../images/location-dot-solid.svg'
                            alt='location_img'
                            className='img-box'
                          />

                          <p>Vilnius; Kaunas; Poland</p>
                        </div>
                        <div className='companies-location'>
                          <img
                            src='../images/building-solid.svg'
                            alt='building_logo'
                            className='img-box'
                          />

                          <p>
                            Cybersecurity, Network Security, Software
                            Development
                          </p>
                        </div>
                      </div>
                      <p className='companies-introduce'>
                        Nord Security is one of the world’s leading digital
                        security and privacy solutions providers. Used by
                        millions of customers worldwide, our suite of products
                        include: NordVPN - the fastest VPN on the planet, built
                        to protect your online traffic and privacy with
                        next-generation encryption. NordLayer
                      </p>
                      <div className='companies-uselanguage-box'>
                        <div className='companies-uselanguage'>rust</div>
                        <div className='companies-uselanguage'>open-source</div>
                      </div>
                    </div>
                  </div>
                </li>{' '}
                <li className='eachcompanies'>
                  <img
                    src='../logo192.png'
                    alt='company_logo'
                    className='companies-photo'
                  />
                  <div className='company-detail'>
                    <h2 className='compaines-name'>Nord Security</h2>
                    <div className='companies-lnfo-box'>
                      <div className='companies-location-box'>
                        <div className='companies-location'>
                          <img
                            src='../images/location-dot-solid.svg'
                            alt='location_img'
                            className='img-box'
                          />

                          <p>Vilnius; Kaunas; Poland</p>
                        </div>
                        <div className='companies-location'>
                          <img
                            src='../images/building-solid.svg'
                            alt='building_logo'
                            className='img-box'
                          />

                          <p>
                            Cybersecurity, Network Security, Software
                            Development
                          </p>
                        </div>
                      </div>
                      <p className='companies-introduce'>
                        Nord Security is one of the world’s leading digital
                        security and privacy solutions providers. Used by
                        millions of customers worldwide, our suite of products
                        include: NordVPN - the fastest VPN on the planet, built
                        to protect your online traffic and privacy with
                        next-generation encryption. NordLayer
                      </p>
                      <div className='companies-uselanguage-box'>
                        <div className='companies-uselanguage'>rust</div>
                        <div className='companies-uselanguage'>open-source</div>
                      </div>
                    </div>
                  </div>
                </li>{' '}
                <li className='eachcompanies'>
                  <img
                    src='../logo192.png'
                    alt='company_logo'
                    className='companies-photo'
                  />
                  <div className='company-detail'>
                    <h2 className='compaines-name'>Nord Security</h2>
                    <div className='companies-lnfo-box'>
                      <div className='companies-location-box'>
                        <div className='companies-location'>
                          <img
                            src='../images/location-dot-solid.svg'
                            alt='location_img'
                            className='img-box'
                          />

                          <p>Vilnius; Kaunas; Poland</p>
                        </div>
                        <div className='companies-location'>
                          <img
                            src='../images/building-solid.svg'
                            alt='building_logo'
                            className='img-box'
                          />

                          <p>
                            Cybersecurity, Network Security, Software
                            Development
                          </p>
                        </div>
                      </div>
                      <p className='companies-introduce'>
                        Nord Security is one of the world’s leading digital
                        security and privacy solutions providers. Used by
                        millions of customers worldwide, our suite of products
                        include: NordVPN - the fastest VPN on the planet, built
                        to protect your online traffic and privacy with
                        next-generation encryption. NordLayer
                      </p>
                      <div className='companies-uselanguage-box'>
                        <div className='companies-uselanguage'>rust</div>
                        <div className='companies-uselanguage'>open-source</div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <PageListButton />
          </div>
        </div>
      </HomeWrap>
      <Footer />
    </BodyWrap>
  );
};

export default Companies;
