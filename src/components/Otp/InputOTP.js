import React, { useState } from "react";
import OtpInput from "react-otp-input";
import Countdown from "./Countdown";
const InputOTP = (props) => {
    const [otp, setOtp] = useState('')
    const handleChange = (otp) => {
        console.log('check input: ', otp)
        setOtp(otp)
        props.setUserOtp(otp)
    }
    const handleSuccess = () => {
        props.handleSuccess()
    }
    return (
        <div className="input-otp-container">
            <div className="title">Enter Verification Code</div>
            <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={6}
                renderSeparator={<span>-</span>}
                inputStyle={"input-customize"}
                renderInput={(props) => <input {...props} />} nb

            />
            <Countdown
                setIsDisableBtn={props.setIsDisableBtn}
            />
            <div className="otp-check" >{handleSuccess}</div>
            <div className="action">
                <button className="clear" onClick={() => setOtp()}> Clear</button>
                <button className="confirm" disabled={props.isDisableBtn} onClick={() => handleSuccess()}> Confirm</button>
            </div>
        </div >
    )
}
export default InputOTP