import { Link } from 'react-router-dom';
import styled from 'styled-components';


// function GoHomeImage() {
//     return(
//         <Link to = '/app.js'>
//             <img className='Logo' src ='seb41_pre_032/front/src/Images/logo-stackoverflow.svg' />
//         </Link>
//     )
// }

// 배너를 로그인 홈 링크로 걸어보려다 보류

const Headercss = styled.div`
display: flex;
justify-content: center;
`

const Header = () => {
    return (
        <Headercss>
           <Link to='/'>
           <div>[홈화면이동]</div>
           </Link>
           <div>About</div>
           <div>Products</div>
           <div>For Teams</div>
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

