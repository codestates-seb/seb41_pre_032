import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import Logo from '../images/logo-stackoverflow.png'

// function GoHomeImage() {
//     return(
//         <Link to = '/app.js'>
//             <img className='Logo' src ='seb41_pre_032/front/src/Images/logo-stackoverflow.svg' />
//         </Link>
//     )
// }

// 배너를 로그인 홈 링크로 걸어보려다 보류

const Headercss = styled.div`
position : fixed;
top:0;
left:0;
width:100%;
height: 5rem;
display: flex;
justify-content: center;
align-items:center;
border-top:3px solid var(--main-color);
background-color: var(--background-color);
    >.logo {
        padding:0 .8rem;
        height:100%;
        display:flex;
        align-items:center;
        >span {
            width:15rem;
            height:3rem;
            background-image:url(../images/logo-stackoverflow.svg);
            background-size:cover;
            background-position:center center;
            text-indent:-9999rem;
        }
    }
`

const Header = () => {
    return (
        <Headercss>
           <Link to='/' className='logo'>
           <span>Stackoverflow</span>
           </Link>
           {/* <div>About</div>
           <div>Products</div>
           <div>For Teams</div> */}
           <form>
                <input type='text' placeholder='Search...' />
           </form>
           <button>
           <Link to="/login">Log in</Link>
            </button> 
           {/* Login.js로 이동 */}
           <button>
            <Link to='/signup'>Sign up</Link>
            </button>
           {/* Signup.js로 이동 */}
        </Headercss>
    )
}

export default Header