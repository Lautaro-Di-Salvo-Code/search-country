import {useContext} from "react"
import {useParams , useNavigate} from "react-router-dom"
import {Contexto} from "../HeaderComponents/SearchComponent"



export const CountryComponent = () => {
  const {dataCountries } = useContext(Contexto)


  // name viene del objeto seleccionado y la informacion la otorga por parametros el hook useParams
  const {name} = useParams()
  // esta funcion filtra el dato unico que viene desde el useParams al que hicimos click
  const obtenerName = (name) => {
  return dataCountries.find(e => e.name === name)

  }

  const paisObtenido = obtenerName(name)

// llama al hook y lo declara
  const nav = useNavigate()
// para retroceder del pais seleccionado al home, osea una vez para atrás en el historial
const NavigateBack = () => { 
  nav(-1)

}

    let signo = "◀"
    
  return (
    <>  

    
      
    
        <section className="dark:bg-background-darkhard bg-background-lightsoft  h-[70vh]  border-gray-100">
          <div className="w-full flex  mx-auto md:justify-start h-[6rem] pl-[12vw]">

            <button className="text-[1rem] md:text-[3rem] h-[4rem] w-[7rem] md:w-[10rem] dark:bg-background-darksoft
             bg-background-lightsoft dark:hover:bg-[#41596c] hover:bg-background-lighthard
              dark:text-[#fff] text-[#000] rounded-xl" onClick={NavigateBack}>{signo}Back</button>
          </div>

          <article className=" grid h-[39vh] grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 mx-auto">

          <div className="w-[100%]  flex justify-center mx-auto md:m-[3rem]">
          

            <img  className="h-[14rem] w-auto md:w-auto  md:h-[26rem] " src={paisObtenido?.flags.png} alt="" />
          </div>



          <div className="flex  flex-col mx-auto  md:m-[3rem]">
            <p className="font-bold text-[2rem] md:text-[3rem] flex justify-center md:pl-[3rem] dark:text-[#fff] text-[#000]">{paisObtenido?.name}</p>

          <article className=" m-[3rem] grid grid-rows-2  grid-cols-1 h-[32vh] md:grid-rows-1 md:grid-cols-2" >
            <div  >

              <b className="font-bold flex text-[1.5rem] gap-4 dark:text-[#fff] text-[#000]">Population: <p className="text-[1rem] md:text-[1.3rem] font-light">{paisObtenido?.population}</p> </b>
              <b className="font-bold flex text-[1.5rem] gap-4 dark:text-[#fff] text-[#000]">Region: <p className="flex place-items-center text-[1rem] md:text-[1.3rem] font-light">{paisObtenido?.region}</p> </b>
              <b className="font-bold flex text-[1.5rem] gap-4 dark:text-[#fff] text-[#000]">SubRegion: <p className="flex place-items-center  text-[1rem] md:text-[1.3rem] font-light">{paisObtenido?.subregion}</p> </b>
              <b className="font-bold flex text-[1.5rem] gap-4 dark:text-[#fff] text-[#000]">Capital: <p className="flex place-items-center text-[1rem] md:text-[1.3rem] font-light">{paisObtenido?.capital}</p> </b>
            </div>
            <div>
              <b className="font-bold flex text-[1.5rem] gap-4 dark:text-[#fff] text-[#000]">Top Level Domain: <p className="flex place-items-center text-[1rem] md:text-[1.3rem] font-light">{paisObtenido?.topLevelDomain}</p> </b>
              <b className="font-bold flex text-[1.5rem] gap-4 dark:text-[#fff] text-[#000]">Currencies: <p className="flex place-items-center text-[1rem] md:text-[1.3rem] font-light">{paisObtenido?.currencies[0].name}</p> </b>
              <b className="font-bold flex text-[1.5rem] gap-4 dark:text-[#fff] text-[#000]">Languages: <p className="flex place-items-center text-[1rem] md:text-[1.3rem] font-light">{paisObtenido?.languages[0].name} </p> 
             
              </b>

            </div>  
          </article>




          </div>
          
          </article>
        </section>
      
      
   
    </>
  )
}
