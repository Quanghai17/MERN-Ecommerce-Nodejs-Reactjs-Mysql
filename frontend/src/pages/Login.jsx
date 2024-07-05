import { useContext, useState } from 'react'
import loginIcons from '../assest/Customer.png'
import { Link, useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from 'react-hot-toast';
import axios from 'axios'
import Context from '../context';

const Login = () => {
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


// console.log("data login",data)
return (
    <section id='login'>
        <div className='mx-auto container p-4'>
            <div className='bg-white p-5 w-full max-w-sm mx-auto rounded-lg'>
                <div className='w-20 h-20 mx-auto'>
                    <img src={loginIcons} alt='login icons' />
                </div>
                <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
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
                        <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:blue-red-600'>
                            Quên mật khẩu ?
                        </Link>
                    </div>
                    <button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Đăng nhập</button>
                </form>
                <p className='my-5'>Bạn chưa có tài khoản ? <Link to={"/sign-up"} className=' text-blue-600 hover:text-blue-700 hover:underline'>Đăng kí</Link></p>
            </div>
        </div>
    </section>
)
}

export default Login