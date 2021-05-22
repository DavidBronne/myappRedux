import React from 'react';

const Ninjas = ({ninjas, deletNinja}) => {

        const ninjasList = ninjas.map( (ninja) => {
           
      /*      if(ninja.age > 20) {

               return(
                   <div className="ninja-list" key={ninja.id}>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
            </div>
               )
            }
            }) */

            /* return ninja.age > 20 ? ( */
                return (
            <div className="ninja-list" key={ninja.id}>
                 <div>Name: {ninja.name}</div>
                 <div>Age: {ninja.age}</div>
                 <div>Belt: {ninja.belt}</div>
                 <button onClick={() => {deletNinja(ninja.id)}}>delete</button>
             </div>
                )
            /* ) 
            : null */
            })

            return (
            <div className="ninja">
                {ninjasList}
            </div>
        )
        
    }


export default Ninjas