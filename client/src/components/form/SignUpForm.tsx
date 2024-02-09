'use client';

import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link";
import { useForm } from "react-hook-form"
import { z } from "zod"


const allowedUsername = ["customer", "employee", "owner"];

const loginSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid Email").refine((value) => value.includes("@")),
    username: z.string().refine((value) => allowedUsername.includes(value),
    {
      message: "Invalid username.",
    }),
    password: z.string().min(5),
});

function submit (values: z.infer<typeof loginSchema>){
    console.log(values)
}
const SignForm = () => {
    const{
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues:{
            username:"",
            password:""
        },
    })

    return(
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label> Email:</label>
                <input type ="text" {...register("email")}/>
                {errors.email && <span>{errors.email.message}</span>}
            </div>
            <div>
                <label> Username:</label>
                <input type ="text" {...register("username")}/>
                {errors.username && <span>{errors.username.message}</span>}
            </div>
            <div>
                <label> Password:</label>
                <input type ="password" {...register("password")}/>
            </div>
            <button type = "submit"> Register</button>
            <p>
                <Link href="/auth/signup"> Sign-Up</Link>
            </p>
        </form>
     
    )
}


export default SignForm