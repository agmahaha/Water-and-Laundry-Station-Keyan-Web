'use client';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


const allowedUsername = ["customer", "employee", "owner"];

const loginSchema = z.object({
    username: z.string().refine((value) => allowedUsername.includes(value),
    {
      message: "Invalid username.",
    }),
    password: z.string().min(5),
});

function submit (values: z.infer<typeof loginSchema>){
    console.log(values)
}
export default function SignForm(){
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
                <label> Username:</label>
                <input type ="text" {...register("username")}/>
                {errors.username && <span>{errors.username.message}</span>}
            </div>
            <div>
                <label> Password:</label>
                <input type ="password" {...register("password")}/>
            </div>
            <button type = "submit"> Login</button>
        </form>
    )
}