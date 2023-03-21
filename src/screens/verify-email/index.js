import React from 'react'
import Loader from '../../components/loader'
import Popup from '../../components/Popup'
import Verificationlogo from "../../assets/images/emailverification.jpg";

const VerifyEmail = () => {
  return (
    <>
      <Popup image={Verificationlogo} title="verification" sx={{width: 470, height: 380  }}/>
      <Loader />
    </>
  )
}

export default VerifyEmail
