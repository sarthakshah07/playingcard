
import { Grid } from '@mui/material'
import React from 'react'
import MyButton from '../../components/MyButton'
import WrapperComponent from '../../components/WrapperComponent'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../slice/counter/counterSlice'
import { counterSelector } from "../../slice/counter/counterSlice";


const  Login=()=> {
  const { products } = useSelector(counterSelector);
  const dispatch = useDispatch()
  // const { state } = useSelector((products)=>products.counterSelector);
  console.log("getdata:",products)
  return (
    <WrapperComponent>
    <div style={{display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center",width:"inherit",height:"100%", border:"1px solid red"}}>
      <MyButton
      title="get details"
      variant="outlined"
      handleClick={()=>dispatch(fetchUsers)}
      />

      <Grid container border={1} margin={4}>
        <Grid item>
            
        </Grid>
      </Grid>
    </div>
    </WrapperComponent>
  )
}

export default Login