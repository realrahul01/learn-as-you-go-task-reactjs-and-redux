import { useState } from 'react'
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Authentication } from '../../Features/CounterSlice'


const Login=()=>{
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [usernameError, setUsernameError] = useState('')
const [passwordError, setPasswordError] = useState('')

const navigate = useNavigate()
const dispatch = useDispatch()

const errorHandler1=()=>{
    setTimeout(()=>{
        setUsernameError('')
    },2000)
} 

const errorHandler3=()=>{
    setTimeout(()=>{
        setPasswordError('')
    },2000)
}    


const handleLogin=()=>{
    if(!username){
        setUsernameError('*username cant not empty')
        errorHandler1()
        return 
    }

    if(!password){
        setPasswordError('*password cant not empty')
        errorHandler3()
        return 
    }
    if(password.length < 5){
        setPasswordError('*password must be greater then 5 character')
        errorHandler3()
        return 
    }

    let user = JSON.parse(localStorage.getItem('auth'))
    console.log(user)
    if(user.username !== username || user.password !== password){
        alert('Invalid username or password')
    }else{
        alert("Login Successful")
        dispatch(Authentication())
        navigate('/')
    }
}

    return (
        <div className={styles.main}>
            <h2>Login</h2>
            <div className={styles.inp}>
                <label htmlFor="username">Username</label>
                <div>
                    <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <p className={styles.error}>{usernameError}</p>
            </div>
            <div className={styles.inp}>
                <label htmlFor="password">Password</label>
                <div>
                    <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <p className={styles.error}>{passwordError}</p>
            </div>
            <button className={styles.sign} onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login