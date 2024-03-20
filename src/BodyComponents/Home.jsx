import {useContext} from "react"
import{ Link } from "react-router-dom"
import {Contexto} from "../HeaderComponents/SearchComponent"

export const Home = ( ) => {
   
    const {resultado } = useContext(Contexto)



    return (
    
        
        <div className=' dark:bg-background-darkhard bg-background-lightsoft'>
        {   <section className=' h-auto mx-auto max-w-1400pxMaxW 
        gap-8 grid
        pt-[2rem]
        vsm:grid-cols-1  
         
        md:grid-cols-4 
        transition-all duration-700  ease-in-out 
           overflow-hidden'>
            {resultado.map(e => (

            <Link key={e.name} to={`/All/${e.name}`} >{
                
            <div   className='z-30 slide-fwd-center dark:bg-background-darksoft bg-background-lighthard
                rounded-[10px] hover:scale-110 ease-out duration-300 flex justify-center text-center
                w-[80%] h-auto  flex-col m-[2rem] pb-4   overflow-hidden  cursor-pointer  '  >
                <img className='div__img--flag flex justify-center' src={e.flags.png}></img>
            <div className="m-4">

               <p className='p-2 flex justify-start dark:text-[#fff] text-[#000]'>Population: {e.population}</p>                                      
                <p className='p-2 flex justify-start dark:text-[#fff] text-[#000]'>Region: {e.region}</p>                                      
                <p className='p-2 flex justify-start dark:text-[#fff] text-[#000]'>Pais: {e.name}</p>                                      
                <p className='p-2 flex justify-start dark:text-[#fff] text-[#000]'>Capital: {e.capital}</p>                                      
            </div>
            </div>
            }</Link>
            ))}
        </section>
    }
     
</div>

    )
}
