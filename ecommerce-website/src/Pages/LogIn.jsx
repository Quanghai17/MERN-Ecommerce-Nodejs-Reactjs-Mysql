import SignImg from "../assets/SignImg.png";
import { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from 'react-hot-toast';
import axios from 'axios'
import Context from '../context';

const LogIn = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()
    const { userDetails } = useContext(Context)
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

        const URL = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/signin`
        try {
            const response = await axios({
                method: 'post',
                url: URL,
                data: {
                    email: data.email,
                    password: data.password
                },
                withCredentials: true
            })

            toast.success(response.data.message)

            if (response.data.success) {
                //dispatch(setToken(response?.data?.token))
                localStorage.setItem('token', response?.data?.token)
                setData({
                    password: "",
                })
                navigate('/')
                userDetails()
            }
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    return (
        <div className="relative flex max-lg:flex-col-reverse justify-center  md:justify-start items-center mb-36 gap-12 lg:mt-28 xl:gap-24 ">
            <img src={SignImg} alt="Sign Image" />
            <div className="flex flex-col gap-6 md:gap-8 md:mx-10 items-center sm:items-start max-lg:mt-40 justify-center">
                <h1 className="text-xl md:text-4xl font-medium font-inter ">
                    Đăng nhập tài khoản
                </h1>
                <p>Thông tin đăng nhập</p>
                <form
                    className="flex flex-col gap-6 md:gap-8 w-72 md:w-96"
                    onSubmit={handleSubmit}
                >
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
                    <div className='cursor-pointer text-xl' onClick={() => setShowPassword((preve) => !preve)}>
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
                        <button
                            type="button"
                            // onClick={handleForgotPassword}
                            className="text-base text-red-500 hover:underline font-medium "
                        >
                            Quên mật khẩu
                        </button>
                    </div>
                </form>
                <p className="text-gray-600 mx-auto">
                    <span>Bạn chưa có tài khoản </span>
                    <Link
                        to="/signUp"
                        className="ml-2 text-gray font-medium hover:underline"
                    >
                        Đăng kí
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default LogIn