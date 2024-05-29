import styles from './Header.module.css'
import {Nav,Navbar,Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useNavigate,NavLink } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { Authentication } from '../../Features/CounterSlice';

const Header=()=>{
const data = useSelector((state)=>state.cart.isLoggin)  
console.log(data)

const navigate = useNavigate()
const dispatch = useDispatch()

const loginHandler=()=>{
    navigate('/login')
}

const signupHandler=()=>{
    navigate('/signup')
}

const logoutHandler = ()=>{
    dispatch(Authentication())
}


const user = JSON.parse(localStorage.getItem('auth'))

    return (
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Shopping_cart</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className={styles.homeNav} to='/'>Home</NavLink>
          </Nav>
          <Nav>
            <span className={styles.profile}>{data ? `Welcome ${user.username}` : ""}</span>
            {data && (
              <Button className='btn-sm mx-4' variant="light" onClick={logoutHandler}>Logout</Button>
            )}
            {!data && (
              <>
                <Button className='btn-sm mx-4' variant="light" onClick={loginHandler}>Login</Button>
                <Button className='btn-sm' variant="light" onClick={signupHandler}>Sign Up</Button>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    )
}
export default Header   