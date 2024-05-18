import { useState } from "react"
import GenerateOTP from "./GenerateOTP"
import InputOTP from "./InputOTP"
import './OTP.scss'
const OTP = () => {
    const [orgOtp, setOrgOtp] = useState('')
    const [userOtp, setUserOtp] = useState('')
    const [isDisableBtn, setIsDisableBtn] = useState(false)
    const handleSuccess = () => {
        if (+orgOtp === +userOtp) {
            alert('Code Vefication Success')
        }
        else { alert('Code Vefication Failed') }
    }
    return (
        <div className="otp-parent-container">
            <GenerateOTP
                setOrgOtp={setOrgOtp}
            />
            <InputOTP
                setUserOtp={setUserOtp}
                handleSuccess={handleSuccess}
                isDisableBtn={isDisableBtn}
                setIsDisableBtn={setIsDisableBtn}
            />
        </div>
    )
}
export default OTP