import SignImg from "../assets/SignImg.png";
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from 'react-hot-toast';
import axios from 'axios'

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const navigate = useNavigate()

    const handleOnChange = (e) => {
        const { name, value } = e.target

        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (data.password === data.confirmPassword) {
            const URL = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/signup`

            try {
                const response = await axios.post(URL, data)
                toast.success(response.data.message)

                if (response.data.success) {
                    setData({
                        name: "",
                        email: "",
                        password: "",
                    })

                    navigate('/login')
                }
            } catch (error) {
                console.log(error.response.data)
                toast.error(error?.response?.data?.message)
            }
        } else {
            toast.error("Mật khẩu xác thực không khớp")
        }
    }
    return (
        <div className="relative flex max-lg:flex-col-reverse justify-center  md:justify-start items-center mb-36 gap-12 lg:mt-28 xl:gap-24 ">
            <img src={SignImg} alt="Sign Image" />
            <div className="flex flex-col gap-6 md:gap-8 md:mx-10 items-center sm:items-start max-lg:mt-40 justify-center">
                <h1 className="text-xl md:text-4xl font-medium font-inter ">
                    Đăng kí tài khoản
                </h1>
                <p>Thông tin đăng kí</p>
                <form
                    className="flex flex-col gap-6 md:gap-8 w-72 md:w-96"
                    onSubmit={handleSubmit}
                >
                    <TextField
                        label="Họ và tên"
                        variant="standard"
                        type="text"
                        name="name"
                        onChange={handleOnChange}
                        required
                    />
                    <TextField
                        label="Email của bạn"
                        variant="standard"
                        type="email"
                        name="email"
                        onChange={handleOnChange}
                        required
                    />
                    <TextField
                        type={showPassword ? "text" : "password"}
                        label="Mật khẩu"
                        variant="standard"
                        name='password'
                        onChange={handleOnChange}
                        required
                    />
                    <div className='cursor-pointer' onClick={() => setShowPassword((preve) => !preve)}>
                        <span>
                            {
                                showPassword ? (
                                    <FaEyeSlash />
                                )
                                    :
                                    (
                                        <FaEye />
                                    )
                            }
                        </span>
                    </div>
                    <TextField
                        type={showConfirmPassword ? "text" : "password"}
                        label="Nhập lại mật khẩu"
                        variant="standard"
                        name='confirmPassword'
                        onChange={handleOnChange}
                        required
                    />
                    <div className='cursor-pointer' onClick={() => setShowConfirmPassword((preve) => !preve)}>
                        <span>
                            {
                                showConfirmPassword ? (
                                    <FaEyeSlash />
                                )
                                    :
                                    (
                                        <FaEye />
                                    )
                            }
                        </span>
                    </div>
                    <div className="flex items-center gap-2 justify-between mt-4">
                        <Button
                            type="submit"
                            sx={{
                                color: "white",
                                fontSize: "16px",
                                bgcolor: "hsla(0, 68%, 56%, 1)",
                                textTransform: "none",
                                padding: "16px 0",
                                borderRadius: "4px",
                                fontWeight: "500",
                                width: "40%",
                                ":hover": {
                                    bgcolor: "hsla(0, 68%, 56%, .9)",
                                },
                            }}
                            variant="contained"
                            color="primary"
                            className="my-2"
                        >
                            Đăng nhập
                        </Button>
                    </div>
                </form>
                <p className="text-gray-600 mx-auto">
                    <span>Bạn đã có tài khoản </span>
                    <Link
                        to="/signUp"
                        className="ml-2 text-gray font-medium hover:underline"
                    >
                        Đăng nhập
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default SignUp