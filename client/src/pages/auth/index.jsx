import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast, Toaster } from 'sonner';

import React, { useState } from 'react'
import { apiClient } from '../../lib/api-client';
import { LOGIN_ROUTE, SIGNUP_ROUTE } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const Ready = () => {
        setEmail("");
        setName("");
        setPassword("");
        setConfirmPassword("");
    }

    const validateSignup =()=>{
        if(!name){
            toast.error("Name is required");
            return false;
        }else if(!email){
            toast.error("Email is required");
            return false;
        }else if(!password){
            toast.error("Password is required");
            return false;
        }else if(!confirmPassword){
            toast.error("Confirm Password is required")
            return false;
        }else if(password!=confirmPassword){
            toast.error("Password and Confirm password is not equal")
            return false;
        }

        return true;
    }
    const validateLogin =()=>{
        if(!email){
            toast.error("Email is required")
            return false;
        }else if(!password){
            toast.error("Password is required")
            return false;
        }

        return true;
    }

    const handleSignup= async ()=>{
        if(validateSignup()){
            try{
                const response = await apiClient.post(SIGNUP_ROUTE,{name,email,password},{withCredentials:true});
                Ready();
                toast.success("Signup successful");
                navigate("/todos");
                
            }catch(err){
                toast.error(err.message);
            }
        }
    }

    const handleLogin = async()=>{
        if(validateLogin()){
            try{
                const response = await apiClient.post(LOGIN_ROUTE,{email,password},{withCredentials:true});
                Ready();
                toast.success("Login successful");
                navigate("/todos");
            }catch(err){
                toast.error(err.message);
            }
        }
    }

    return (
        <>
            <div className=' w-[100vw] h-[100vh] flex justify-center items-center '  >
                <div className=' w-[70vw] h-[70vh] p-10 grid lg:grid-cols-2 border rounded-2xl shadow-lg gap-6 ' >
                    <div className=' text-2xl font-semibold ' >
                        <div className="flex items-center justify-center flex-col">
                            <div className="flex items-center justify-center">
                                <h1 className=" text-2xl font-bold md:text-4xl ">Welcome</h1>
                            </div>
                            <p className="text-xl ">Fill in the details to manage your todos</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center w-full' >
                        <Tabs className=' flex flex-col gap-10 w-3/4' onValueChange={Ready} defaultValue='login' >
                            <TabsList className='flex w-full' >
                                <TabsTrigger value='login'

                                    className={`data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500  w-full p-3 transition-all duration-300 `}
                                    >Login</TabsTrigger>
                                <TabsTrigger value='signup'

                                    className={`data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500  w-full p-3 transition-all duration-300 `}
                                  
                                >Signup</TabsTrigger>
                            </TabsList>

                            <TabsContent value='login' className=' flex flex-col gap-5' >
                                <Input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                                <Input type="text" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                <Button onClick={handleLogin} >Login</Button>
                            </TabsContent>

                            <TabsContent value='signup' className=' flex flex-col gap-5' >
                                <Input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
                                <Input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                                <Input type="text" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                <Input type="password" value={confirmPassword} placeholder="confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />

                                <Button onClick={handleSignup} >Signup</Button>
                            </TabsContent>

                        </Tabs>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Auth