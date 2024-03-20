import {useContext} from "react"
import {Link} from "react-router-dom"
import {Contexto} from "../HeaderComponents/SearchComponent"


export const AmericaInfo = () => {
  
  const {dataCountries ,search} = useContext(Contexto)


          
          let datos = dataCountries.filter( e => e.region === "Americas" )
          // console.log(datos)
          const ClickCountry = () => { 
        
            console.log(dataCountries[1].population)
           
             
          }


// si por el valor del input de busqueda, no se escribe nada
// que el array, tome los datos  del array original
let resultado = []

if(!search ){
  resultado = datos 
  // console.log(resultado)
  
}else{
  // sinó que del array original, se filtre lo que se introduce,
  //  se pase a minuscula todo y que verifique letra por letra si lo que está asignado en name
  // , osea el pais del objeto original, en lo que está devolviendo
  //  el estado search y que todo se asigne en el array resultado
  resultado = datos.filter(i => i.name.toLowerCase().includes(search.toLowerCase()))

}








  return (
    <div className=' dark:bg-background-darkhard bg-background-lightsoft'>
    {resultado &&
    <section className=' h-auto mx-auto max-w-1400pxMaxW 
    gap-8 grid
        
        vsm:grid-cols-1 
        pt-[2rem]
        md:grid-cols-4 
    
       overflow-hidden'>
        {resultado.map(e => (


    // link agarra por enlace, el name exacto unico del objeto que se clickeó y pasa los por el enlace
    <Link key={e.name} to={`/America/${e.name}`} >{
  
        <div onClick={ClickCountry} className='z-30 slide-fwd-center dark:bg-background-darksoft bg-background-lighthard 
        rounded-[10px] hover:scale-110 ease-out duration-300 flex justify-center text-center
        w-[80%] h-auto  flex-col m-[2rem] pb-4   overflow-hidden  cursor-pointer ' key={e.numericCode} >
            <img className='div__img--flag flex justify-center  ' src={e.flags.png}></img>
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
