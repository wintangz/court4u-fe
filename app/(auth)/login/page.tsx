'use client';
import { baseUrl } from '@/app/_services/baseService';
import { login } from '@/app/_services/userService';
import { jwtDecode } from 'jwt-decode';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type UserInfo = {
  email: string;
  password: string;
};

const Login = () => {
  const router = useRouter();

  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: '',
    password: '',
  });

  const handleLogin = async () => {
    const loadingToastId = toast.loading('Logging in...', {
      toastId: 'loginLoading',
      autoClose: false,
      closeOnClick: false,
      hideProgressBar: true,
      draggable: false,
      position: 'bottom-right',
      pauseOnHover: false,
      progress: undefined,
      theme: 'light',
    });

    try {
      const res = await login({
        email: userInfo.email,
        password: userInfo.password,
      });

      toast.update(loadingToastId, {
        render: 'Login successful!',
        type: 'success',
        isLoading: false,
        autoClose: 2500,
        position: 'bottom-right',
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'light',
      });

      if (res.status === 200) {
        // save token to local storage
        const accessToken = res.data.metaData.tokens.accessToken;
        const refreshToken = res.data.metaData.tokens.refreshToken;
        console.log(jwtDecode(accessToken));
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        const decodedToken = jwtDecode(
          res.data.metaData.tokens.accessToken
        ) as any;
        const role = decodedToken.roles[0];

        // redirect to dashboard
        if (role.toUpperCase() === 'ADMIN') {
          router.push('/admin');
        } else if (role.toUpperCase() === 'OWNER') {
          router.push('/owner');
        } else if (role.toUpperCase() === 'STAFF') {
          router.push('/staff/checkin');
        } else {
          router.push('/');
        }
      }
    } catch (error) {
      toast.update(loadingToastId, {
        render: 'Incorrect email or password!',
        type: 'error',
        isLoading: false,
        autoClose: 2500,
        position: 'bottom-right',
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'light',
      });
      console.error('Login failed:', error);
    }
  };

  const handleFacebook = async () => {
    router.replace(baseUrl + '/auth/facebook');
  };

  const handleGoogle = async () => {
    router.replace(baseUrl + '/auth/google');
  };

  return (
    <div className=''>
      <ToastContainer />
      <div className='flex flex-col relative w-[50vw] min-h-[100vh] bg-secondary py-16 px-4 text-center '>
        <Link href='/' className='absolute left-0 top-0 p-4'>
          <IoIosArrowBack className='size-8' />
        </Link>
        <div className=''>
          <div className='title text-[40px] font-bold '>
            <p className='text-[neutral]'>Login</p>
          </div>
          <p className='text-[neutral] text-lg tracking-[0.2px] leading-6 text-center my-4 mx-36'>
            Welcome back to Court4U!
          </p>
        </div>

        <div className='flex flex-col items-center'>
          <label className='form-control w-full max-w-sm'>
            <div className='label'>
              <span className='label-text text-lg'>Email</span>
            </div>
            <input
              type='text'
              placeholder='Enter your email address'
              className='input input-bordered input-ghost w-full max-w-sm'
              onChange={(e) => {
                setUserInfo({ ...userInfo, email: e.target.value });
              }}
            />
          </label>
          <br />
          <label className='form-control w-full max-w-sm'>
            <div className='label'>
              <span className='label-text text-lg'>Password</span>
            </div>
            <input
              type='password'
              placeholder='Enter your password'
              className='input input-bordered input-ghost w-full max-w-sm'
              onChange={(e) => {
                setUserInfo({ ...userInfo, password: e.target.value });
              }}
            />
          </label>
        </div>
        <br />
        <div className='flex flex-col items-center'>
          <button className='text-btn gap-4 hover:text-[#4f7d6f]'>
            Forgot Password?
          </button>
          <button
            onClick={() => handleLogin()}
            className='w-[54%] my-8 rounded-lg btn hover:shadow-[0_1px_0px_rgb(0,0,0)] text-[#ffffff] text-md bg-[#4f7d6f] ease-out hover:translate-y-1 transition-all hover:bg-[#2d4242]'
          >
            Login
          </button>
        </div>

        <div>
          <div className='relative'>
            <span className='absolute left-40 top-4 -translate-y-1/2 w-[54%] h-[1px] bg-[#1a1616]' />
            <span className='flex items-center justify-center relative z-10 w-8 h-[23px] m-auto bg-secondary'>
              or
            </span>
          </div>
        </div>

        <div className='flex justify-between mt-[30px] mb-9 mx-36'>
          <a
            onClick={() => handleGoogle()}
            className='text-[14px] gap-[15px] border border-black w-[45%] rounded-[23px] text-neutral flex p-2 justify-center items-center font-semibold hover:bg-[#c6c6c6a1] hover:text-black hover:cursor-pointer'
          >
            <img className='icon w-4' alt='Google' src='../assets/google.png' />
            Login with Google
          </a>
          <a
            onClick={() => handleFacebook()}
            className='text-[14px] gap-[15px] border border-black w-[45%]  rounded-[23px] text-neutral flex p-2 justify-center items-center font-semibold hover:bg-[#c6c6c6a1] hover:text-black  hover:cursor-pointer'
          >
            <img
              className='icon w-4'
              alt='Facebook'
              src='../assets/facebook.png'
            />
            Login with Facebook
          </a>
        </div>

        <div className='sign_up inline-flex justify-center items-center'>
          <p className='text-neutral'>Don’t have an account?</p>
          <Link
            href='/register'
            className="font-semibold text-green-700 text-sm relative gap-1 px-2 inline-flex after:content-[''] after:absolute after:left-2 after:bottom-[-2px] after:w-0 after:h-[1px] after:bg-green-700 after:transition-all hover:after:w-[75%]"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
