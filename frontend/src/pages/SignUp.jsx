import { useState } from 'react'
import loginIcons from '../assest/Customer.png'
import { Link, useNavigate } from 'react-router-dom';
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
    // console.log("data", data)
    return (
        <section id='signup'>
            <div className='mx-auto container p-4'>
                <div className='bg-white p-5 w-full max-w-sm mx-auto rounded-lg'>
                    <div className='w-20 h-20 mx-auto'>
                        <img src={loginIcons} alt='login icons' />
                    </div>

                    <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                        <div className='grid'>
                            <label>Họ và Tên : </label>
                            <div className='bg-slate-100 p-2 rounded-full'>
                                <input
                                    type='text'
                                    placeholder='Nhập họ và tên'
                                    name='name'
                                    value={data.name}
                                    onChange={handleOnChange}
                                    required
                                    className='w-full h-full outline-none bg-transparent' />
                            </div>
                        </div>
                        <div className='grid '>
                            <label>Email : </label>
                            <div className='bg-slate-100 p-2 rounded-full'>
                                <input
                                    type='email'
                                    placeholder='Nhập email'
                                    name='email'
                                    value={data.email}
                                    onChange={handleOnChange}
                                    className='w-full h-full outline-none bg-transparent' />
                            </div>
                        </div>
                        <div>
                            <label>Mật khẩu : </label>
                            <div className='bg-slate-100 p-2 flex rounded-full' >
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder='Nhập mật khẩu'
                                    name='password'
                                    value={data.password}
                                    onChange={handleOnChange}
                                    className='w-full h-full outline-none bg-transparent' />
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
                            </div>
                        </div>
                        <div>
                            <label>Nhập lại mật khẩu : </label>
                            <div className='bg-slate-100 p-2 flex rounded-full'>
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder='Nhập mật khẩu'
                                    value={data.confirmPassword}
                                    name='confirmPassword'
                                    onChange={handleOnChange}
                                    required
                                    className='w-full h-full outline-none bg-transparent ' />

                                <div className='cursor-pointer text-xl' onClick={() => setShowConfirmPassword((preve) => !preve)}>
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
                            </div>
                        </div>
                        <button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Đăng kí</button>
                    </form>
                    <p className='my-5'>Bạn đã có tài khoản ? <Link to={"/login"} className=' text-blue-600 hover:text-blue-700 hover:underline'>Đăng nhập</Link></p>
                </div>
            </div>
        </section>
    )
}

export default SignUp