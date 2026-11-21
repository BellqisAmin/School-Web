import React from 'react'

import LoginFeatures from '../../component/login/loginFeatures'
import LoginForm from '../../component/login/loginForm'

const Login = () => {
    return (
        <main className='min-h-screen flex flex-col bg-background-light text-text-primary'>
            <main className='flex-1 max-w-7xl mx-auto w-full px-4 py-8 md:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'>
                <div className='lg:col-span-5'>
                    <LoginForm />
                </div>
                <div className='lg:col-span-7'>
                    <LoginFeatures />
                </div>
            </main>
        </main>
    )
}

export default Login