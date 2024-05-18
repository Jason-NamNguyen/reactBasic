import React, { useState } from "react";
const GenerateOTP = (props) => {
    const [orgOtp, setOrgOtp] = useState("")
    const handleClickBtn = () => {
        const otp = Math.floor(100000 + Math.random() * 900000)
        setOrgOtp(otp)
        props.setOrgOtp(otp)
    }
    return (
        <div className="generate-otp-container">
            <button onClick={() => handleClickBtn()}>Generate</button>
            <div className="title"> Your OTP: {orgOtp}</div>
        </div>
    )
}
export default GenerateOTP