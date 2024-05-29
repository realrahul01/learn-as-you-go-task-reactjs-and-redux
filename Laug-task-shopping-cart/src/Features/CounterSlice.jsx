import {createSlice} from '@reduxjs/toolkit'


export const CounterSlice = createSlice({
    name:"cart",
    initialState:{
        isLoggin: JSON.parse(localStorage.getItem('isLoggin')) || false,
        productCart:[]
    },
    reducers:{
        Authentication: (state)=>{
            state.isLoggin = !state.isLoggin
            localStorage.setItem('isLoggin', JSON.stringify(state.isLoggin));
        },
        productCartHandler:(state,action)=>{
            const existingItem = state.productCart.findIndex((x)=>x.id == action.payload.id)
            if(existingItem !== -1){
                state.productCart[existingItem].quantity += 1
            }else{
                state.productCart.push(action.payload)
            }
        },
        incrementHandler:(state,action)=>{
            state.productCart = state.productCart.map((x,index)=>{
                if(index == action.payload){
                    return {...x, quantity:x.quantity+1}
                }else{
                    return x
                }
            })
        },
        decrementHandler:(state,action)=>{

            state.productCart = state.productCart.map((x,index)=>{
                if(index == action.payload){
                    return {...x, quantity:x.quantity-1}
                }else{
                    return x
                }
            })
        },
        removeHandler:(state,action)=>{
            state.productCart.splice(action.payload, 1)
        }
    }
})

export const {Authentication,productCartHandler,incrementHandler,decrementHandler,removeHandler} = CounterSlice.actions
export default CounterSlice.reducer