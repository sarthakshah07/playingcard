import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../mock-data/card";
import api from "../../users";


const initialState = {
  cardsData: data,
  products:[]
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    showLoader: (state, { payload }) => ({
      ...state,
    }),
    productSuccess:(state,{payload})=>{

      state.products= payload
      console.log("state",state.products)
    }
  },
});


export const { showLoader,productSuccess  } = counterSlice.actions;

export const fetchUsers = (dispatch) => {
  console.log("sedfiuhswefoi");
  try {
        api.get('/products')
           .then((response) =>{
            dispatch(productSuccess(response))
           }
          )      
   }
   catch (e) {
       return console.log("error");
   }
}

export const counterSelector = (state) => state?.Counter;
export default counterSlice.reducer;
