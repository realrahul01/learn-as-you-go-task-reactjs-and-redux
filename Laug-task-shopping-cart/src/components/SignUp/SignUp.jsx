import { useState } from 'react'
import styles from './SignUp.module.css'
import { useNavigate } from 'react-router-dom'


const SignUp=()=>{
const [username, setUsername] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [usernameError, setUsernameError] = useState('')
const [emailError, setEmailError] = useState('')
const [passwordError, setPasswordError] = useState('')

const navigate = useNavigate()

const errorHandler1=()=>{
    setTimeout(()=>{
        setUsernameError('')
    },2000)
}    
const errorHandler2=()=>{
    setTimeout(()=>{
        setEmailError('')
    },2000)
}    
const errorHandler3=()=>{
    setTimeout(()=>{
        setPasswordError('')
    },2000)
}    

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


const handleSignUp=()=>{
    if(!username){
        setUsernameError('*username cant not empty')
        errorHandler1()
        return 
    }
    if(!email){
        setEmailError('*email cant not empty')
        errorHandler2()
        return 
    }

    if(!emailRegex.test(email)){
        setEmailError('*please Enter a valid email')
        errorHandler2()
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

    let user = {
        username,
        password
    }

    localStorage.setItem('auth', JSON.stringify(user))

    navigate('/login')
} 


    
    return(
        <div className={styles.main}>
            <h2>Sign Up</h2>
            <div className={styles.inp}>
                <label htmlFor="username">Username</label>
                <div>
                    <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <p className={styles.error}>{usernameError}</p>
            </div>
            <div className={styles.inp}>
                <label htmlFor="email">Email</label>
                <div>
                    <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <p className={styles.error}>{emailError}</p>
            </div>
            <div className={styles.inp}>
                <label htmlFor="password">Password</label>
                <div>
                    <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <p className={styles.error}>{passwordError}</p>
            </div>
            <button className={styles.sign} onClick={handleSignUp}>Sign Up</button>
        </div>
    )
}
export default SignUp