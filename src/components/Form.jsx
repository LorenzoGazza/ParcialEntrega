import React from 'react'
import { useState } from 'react'
import Card from './Card'

const Form = () => {

    const [user, setUser] = useState({
        nombre: '',
        apellido: '',
        edad: ''
    })
    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)

    const handle = (event) => {
        event.preventDefault()
        if(user.nombre.length > 3 && user.nombre.startsWith(" ") == false && user.apellido.length>6) {
            setShow(true)
            setErr(false)
        } else {
            setErr(true)
        }

    }



  return (
    <div>
        <form onSubmit={handle}>
            <label>Nombre</label>
            <input type="text" value={user.nombre} onChange={(e) => setUser({...user, nombre: e.target.value})}/>
            <label>Apellido</label>
            <input type="text" value={user.apellido} onChange={(e) => setUser({...user, apellido: e.target.value})}/>
            <label>Edad</label>
            <input type="text" value={user.edad} onChange={(e) => setUser({...user, edad: e.target.value})}/>
            <button>Enviar</button>
            {err && "Por favor chequea que la información sea correcta"}
        </form>
        {show  && <Card nom={user.nombre} ape={user.apellido}/>}
        </div>
  )
}

export default Form