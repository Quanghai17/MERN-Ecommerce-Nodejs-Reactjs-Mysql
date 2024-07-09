import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import authImg from "../assets/img/auth/auth.png";
import Footer from "../components/Footer";
import InputField from "../components/fields/InputField";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => ({
      ...preve,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const URL = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/admin/login`
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
      }
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  };

  return (
    <div>
       <Toaster />
      <div className="relative float-right h-full min-h-screen w-full !bg-white dark:!bg-navy-900">
        <main className="mx-auto min-h-screen">
          <div className="relative flex">
            <div className="mx-auto flex min-h-full w-full flex-col justify-start pt-12 md:max-w-[75%] lg:h-screen lg:max-w-[1013px] lg:px-8 lg:pt-0 xl:h-[100vh] xl:max-w-[1383px] xl:px-0 xl:pl-[70px]">
              <div className="mb-auto flex flex-col pl-5 pr-5 md:pr-0 md:pl-12 lg:max-w-[48%] lg:pl-0 xl:max-w-full">
                <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
                  {/* Sign in section */}
                  <form onSubmit={handleSubmit}>
                    <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
                      <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
                        Đăng nhập
                      </h4>
                      <p className="mb-9 ml-1 text-base text-gray-600">
                        Vui lòng nhập email và mật khẩu để đăng nhập
                      </p>

                      {/* Email */}
                      <InputField
                        extra="mb-3"
                        label="Email*"
                        placeholder="mail@simmmple.com"
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleOnChange}
                      />

                      {/* Password */}
                      <InputField
                        extra="mb-3"
                        label="Password*"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={data.password}
                        onChange={handleOnChange}
                      />
                      <div className="mb-4 flex items-center justify-between px-2">
                        <div className="flex items-center" onClick={() => setShowPassword((preve) => !preve)}>
                          <span>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                          </span>
                          <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
                            Hiện mật khẩu
                          </p>
                        </div>
                      </div>
                      <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
                        Đăng nhập
                      </button>
                    </div>
                  </form>
                </div>
                <div className="absolute right-0 hidden h-full min-h-screen md:block lg:w-[49vw] 2xl:w-[44vw]">
                  <div
                    className="absolute flex h-full w-full items-end justify-center bg-cover bg-center lg:rounded-bl-[120px] xl:rounded-bl-[200px]"
                    style={{ backgroundImage: `url(${authImg})` }}
                  />
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Login;
