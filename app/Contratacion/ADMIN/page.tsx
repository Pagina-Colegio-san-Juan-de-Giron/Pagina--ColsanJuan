'use client'

import React from 'react'
import "./login.scss"
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'


type FormValues = {
  Password: string
  Username: string
}

const login = () => {

  const { register, formState: {errors}, handleSubmit } = useForm<FormValues>(); 

  const router = useRouter()

  const OnSubmit = handleSubmit(async (data) => {
    
    const res = await signIn("credentials", {
    Username: data.Username,
    pswd: data.Password,
    redirect: false,

  });


    if (res?.error) {
      alert(res.error);
      console.log("Quien eres? un maldito espía? Para quién?")
    }
    else{
      router.push("/Contratacion/ADMIN/Secretaria")

      console.log("Eres un admin")
    }
 }
)

  return (
  <div className='Main'>
    <div className='container-all'>
      <h1>LOGIN</h1>
      <form onSubmit={OnSubmit}>

        <input type="text" 
          {...register("Username", {
              required: {
                value: true,
                message: "* Debe introducir el nombre de usuario"
              },
          })}
          placeholder='Nombre de usuario'/>


          {
            errors.Username && (
              <span className='Error-NoValue'>{errors.Username.message}</span>
            )
          }

        <input type="password" {...register("Password", {
              required: {
                value: true,
                message: "* Debe introducir una contraseña"
              },
          })}
          placeholder='Contraseña'/>


          {
            errors.Password && (
              <span className='Error-NoValue'>{errors.Password.message}</span>
            )
          }

        <button className='Enter'>Iniciar Sesión</button>
      </form>
    </div>
  </div>
  )
}

export default login
