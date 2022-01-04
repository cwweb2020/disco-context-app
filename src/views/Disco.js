import React from 'react';

const Disco = () => {



    return (
        <>
           <section>
               <h2 className='text-center my-4 fs-4'>Adelante por favor</h2>
               <div>
                     <img src="../img/disco-entrance.jpg" alt="" style={image} />
               </div>

           </section>
            
        </>
    )
}
const image = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
}

export default Disco
