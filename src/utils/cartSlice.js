import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({

    name:"cart",
    initialState:{

        // items:["lasagna,Ramen,Burger"]

        items:[]
    },

    reducers:{

        //Vanilla(older)Redux => dont mutate the state, return the state was mandatory
        //const newState = [...state]
        //newState.items.push(action.payload)
        //return newState
           
        //mutating the state
        //Redux-toolkit => Mutate the state,return is not mandatory
        //redux-toolkit uses immerse library behind the scenes
        //immerse finds the diff between current state & mutated state and gives back a immutable state

        addCart:(state,action) => {
             state.items.push(action.payload)   
              
             //console.log() wont work import current from Redux-TK
             console.log(current(state));

            },
        removeCart:(state,action) => {
                state.items.pop()
            },

            //originalState = {items: ["pizza"]}
        clearCart:(state,action) => {

             
            //this wont work because we are creating a reference to the state and not mutating it
            //state = []

             //RTK - either Mutate the existing  state or return a new State
             // state.items.length = 0; // originalState = []
            
            return {items:[]}

            console.log(current(state));
            
          },
        },
});


export const {addCart,removeCart,clearCart} = cartSlice.actions;
export default cartSlice.reducer;