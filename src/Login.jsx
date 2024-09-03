import { useState } from 'react'
import './Login.css'

function Login() {
  

  return (
    <>
      <div className='Box-Login'>
      <h2>Bienvenido a Twitbox </h2>
        <form>
            <label>Usuario</label>
            <input type="text" />
            
            <label>Contraseña</label>
            <input type="password" />

            <button className='btn btn-primary'>Iniciar Seccion</button>
        </form>
      </div>
    </>
  )
}

export default Login
