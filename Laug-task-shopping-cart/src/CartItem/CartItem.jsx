import { useDispatch, useSelector } from "react-redux"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './CartItem.module.css'
import { MdDelete } from "react-icons/md";
import { decrementHandler, incrementHandler, removeHandler } from "../Features/CounterSlice";
import img from '../assets/Empty-bro.png'



const CartItem=()=>{
const value = useSelector((state)=>state.cart.productCart)
console.log(value)

const dispatch = useDispatch()

const plusHandler=(index)=>{
    dispatch(incrementHandler(index))
}
const minusHandler=(i, index)=>{
    if(i <= 1 ){
        dispatch(removeHandler(index))
    }else{
        dispatch(decrementHandler(index))
    }
}
const deleteHandler=(index)=>{
    dispatch(removeHandler(index))
    
}

const cartvalue = value.map((x,index)=>(
    <div key={index}>
        <Card>
      <Card.Body>
        <Card.Title>{x.title}</Card.Title>
        <Card.Text>
          {x.description}
        </Card.Text>
        <Card.Text style={{textAlign:'center', fontSize:'20px'}}>{x.quantity}</Card.Text>
            <Card.Text className={styles.btns}>
                <Button className='btn-sm' variant="dark" onClick={()=>plusHandler(index)} >+</Button>
                <MdDelete style={{color:'red', fontSize:'35px',cursor:'pointer'}} onClick={()=>deleteHandler(index)}/>
                <Button className='btn-sm' variant="dark" onClick={()=>minusHandler(x.quantity, index)}>-</Button>
            </Card.Text>
      </Card.Body>
    </Card>
    </div>
))


    return(
        <>
             <h1 style={{textAlign:'center'}}> <span style={{color:'red', fontStyle:'italic'}}>Cart</span>_Item </h1>
             <div className={styles.cadding}>
                {cartvalue.length === 0 ? (
                    <>
                        <img src={img} alt="error" width={500} height={500} />
                        <p style={{fontSize:'50px', color:'red' ,width:'700px', display:'flex', alignItems:'center',fontWeight:'600'}}>Your cart is empty...</p>
                    </>
                ) : cartvalue}
             </div> 
        </>
    )
}

export default CartItem