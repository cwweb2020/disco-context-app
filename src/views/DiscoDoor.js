import React, { useContext, useState } from 'react'
import NoEntry from '../components/NoEntry'
import { AuthContext } from '../context/EntryProvider'



const DiscoDoor = () => {
    const [age, setAge] = useState(null)
    const [noAdmited, setNoAdmited] = useState(false)

    const authConsumer = useContext(AuthContext)
    const { handleLogin } = authConsumer

   const handleChange = (e) => {
        setAge(e.target.value)
        console.log(typeof parseInt(age));
    
   }

    const handleSubmit = (e) => {
        e.preventDefault()
       
        if(age < '18'){
            setNoAdmited(true)
        }else{
            setNoAdmited(false)
        }
        handleLogin(age)
        e.target.reset()
    }

    return (
        <>
           <section className='discoDoor' style={{minHeight: '100vh', padding: "40px 0"}}>
               <h2 className='m-4 fs-4' onClick={() => window.location.reload()} style={{alignSelf: "baseline", cursor: "pointer"}}>Volver a puerta</h2> <h2>Disco</h2>
              {
                    noAdmited ? <NoEntry />  
             
               : <div>

                <img src="../img/disco1.jpg" alt="" />
                <form onSubmit={handleSubmit}>
                    <h2 className='my-3 text-center'>Documento por favor</h2>
                    <input type="number"
                     className='form-control my-3'
                     placeholder="Edad"
                     onChange={handleChange}
                     name="documento"
                     />
                     <button className='btn btn-primary' type='submit'>Entro?</button>
                </form>
               </div>
            } 
                  
                
           </section>
            
        </>
    )
}

export default DiscoDoor
