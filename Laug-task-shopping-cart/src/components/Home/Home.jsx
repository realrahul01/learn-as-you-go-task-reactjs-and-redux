import { useSelector } from 'react-redux';
import styles from './Home.module.css'
import {cartData} from '../../services/cartData';
import CardItem from '../Card/Card';


const Home=()=>{
const val = useSelector((state)=>state.cart.isLoggin)


const item = cartData.map((x,index)=>(
    <div key={x.id}>
        <CardItem
            title = {x.title}
            description = {x.description}
            quantity = {x.quantity}
            product = {x}
        />
    </div>
))


    return (
        <div>
            {!val && (
                <p className={styles.homeSty}>Please Login first before shopping...</p>
            )}
            {val && (
                <>
                    <h1 style={{textAlign:'center'}}> <span style={{color:'red', fontStyle:'italic'}}>Shopping</span>_Cart </h1>
                <div className={styles.card_sec}>
                    {item}
                </div>
                </>
            )}
        </div>
    )
}

export default Home;