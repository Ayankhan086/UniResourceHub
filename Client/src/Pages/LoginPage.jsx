import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { toast, Toaster } from 'react-hot-toast';
import axiosInstance from '../lib/axios';
import { useNavigate } from 'react-router-dom';
import { useAuthUserStore } from '../store/authUserStore';
import cookie from "js-cookie"

export default function LoginPage() {
    const { setUser, setToken, setIsAdmin } = useAuthUserStore();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const Login = async (data) => {
        try {
            setIsAdmin(false);
            if (data.email === 'kmayankhan1@gmail.com') {
                setIsAdmin(true);
            }
            const response = await axiosInstance.post('/users/login', data);
            toast.success('Login successful!');
            setUser(response.data.data.user);
            setToken(response.data.data.accessToken);
            cookie.set('accessToken', response.data.data.accessToken, { expires: 7 });
            navigate('/home');
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error('An error occurred while logging in. Please try again.');
            }
        }
    };

    return (
        <>
            <Toaster position="top-right" />
            <Navbar />
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-8 px-2">
                <div className="w-full max-w-md bg-white/90 p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-100">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-indigo-700 tracking-tight">Welcome Back</h2>
                    <form onSubmit={handleSubmit(Login)} noValidate>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                            <input
                                id="email"
                                type="email"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: 'Invalid email address',
                                    },
                                })}
                                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-gray-50 text-gray-800 placeholder-gray-400 transition ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
                                placeholder="Enter your email"
                            />
                            {errors.email && (
                                <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>
                            )}
                        </div>
                        <div className="mb-8">
                            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                            <input
                                id="password"
                                type="password"
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: { value: 6, message: 'Minimum 6 characters' },
                                })}
                                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-gray-50 text-gray-800 placeholder-gray-400 transition ${errors.password ? 'border-red-400' : 'border-gray-300'}`}
                                placeholder="Enter your password"
                            />
                            {errors.password && (
                                <span className="text-red-500 text-xs mt-1 block">{errors.password.message}</span>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 text-lg"
                        >
                            Login
                        </button>
                    </form>
                    <div className="mt-8 text-center">
                        <span className="text-gray-600">Don't have an account?</span>
                        <NavLink
                            to="/signup"
                            className="ml-2 text-indigo-600 hover:underline font-semibold"
                        >
                            Sign Up
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}