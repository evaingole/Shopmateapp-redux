import {createSlice} from '@reduxjs/toolkit'



const cartSlice=createSlice(
  {
    name:"cart",
    initialState:{
        cartList:[],
        total:0
    },
    reducers:{
          //action consist of type and payload
          //type is nothing but which action taken here we took add
          //payload :having object data 
        add(state,action){
         const updatedCartList=state.cartList.concat(action.payload) ;
         //suppose total=0 so and that product price is 145 (0+$145=145)
         const total=state.total+action.payload.price;

         return{...state,total:total,cartList:updatedCartList}
        },
        remove(state,action){
          //The id which match that remove. and put the id is no match with filter method
            const updatedCartList=state.cartList.filter((item=>item.id!==action.payload.id));
            const total=state.total-action.payload.price;
            return{...state,total:total, cartList:updatedCartList}
            
        }
    }


  }

); 
 export const {add,remove}=cartSlice.actions;
 export const cartReducer=cartSlice.reducer;