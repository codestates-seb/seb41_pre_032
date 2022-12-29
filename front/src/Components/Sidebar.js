import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SidebarWrap = styled.div`
  width: 16.4rem;
  flex-shrink: 0;
  box-shadow: 0 0 0 hsl(210deg 8% 5% / 5%);
  > .stickySide {
    position: sticky;
    width: auto;
    top: 0;
    margin-bottom: 0.8rem;
    max-height: 100vh;
    overflow-y: auto;
    top: 5rem;
    padding-top: 2.4rem;
  }
`;
const NavWrap = styled.nav`
  > ul {
    margin: 1.6rem 0 1.2rem;
    > span {
      color: hsl(210, 8%, 45%);
      font-size: 1.1rem;
    }
  }
  .nav-link {
    display: block;
    padding: 0.4rem 0.4rem 0.4rem 0.8rem;
    line-height: 2rem;
    font-size: 1.3rem;
  }
  .active {
    font-weight: bold;
    background: hsl(210, 8%, 95%);
    color: #222;
    border-right: 3px solid var(--main-color);
  }
  .nav-link-link {
    padding-left: 3rem;
  }
`;
const Sidebar = () => {
  return (
    <SidebarWrap>
      <div className='stickySide'>
        <NavWrap>
          <NavLink to='/' className='nav-link'>
            Home
          </NavLink>
          <ul>
            <span className='nav-link'>PUBLIC</span>
            <li>
              <NavLink to='/questions' className='nav-link nav-link-link'>
                Questions
              </NavLink>
            </li>
            <li>
              <NavLink to='/tags' className='nav-link nav-link-link'>
                Tags
              </NavLink>
            </li>
            <li>
              <NavLink to='/users' className='nav-link nav-link-link'>
                Users
              </NavLink>
            </li>
            <li>
              <NavLink to='/companies' className='nav-link nav-link-link'>
                Companies
              </NavLink>
            </li>
            {/* list-style:none, padding-left로 불릿과 들여쓰기 없애기 */}
          </ul>
        </NavWrap>
      </div>
    </SidebarWrap>
  );
};
export default Sidebar;
