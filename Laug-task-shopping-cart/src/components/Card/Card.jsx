import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {productCartHandler} from '../../Features/CounterSlice'


const CardItem=({title, description, quantity, product})=>{
const navigate = useNavigate()
const dispatch = useDispatch()


const addHandler=()=>{
  dispatch(productCartHandler(product))
  navigate('/cartItem')
}



    return(
        <Card style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button className='btn-sm' variant="primary" onClick={addHandler}>Add</Button>
      </Card.Body>
    </Card>
    )
}

export default CardItem