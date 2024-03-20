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

    
      
    
        <section className="dark:bg-background-darkhard bg-background-lightsoft pt-[3rem]  h-[70vh]  border-gray-100">
          <div className="w-[100%]  mx-auto lg:w-full flex lg:justify-around   h-[6rem]">

            <button className="text-[1.5rem] mx-auto  lg:text-[3rem] h-[4rem] w-[10rem] lg:w-[10rem] dark:bg-background-darksoft
             bg-background-lighthard dark:hover:bg-[#41596c] hover:bg-background-lighthard
              dark:text-[#fff] text-[#000] rounded-xl" onClick={NavigateBack}>{signo}Back</button>
            
          </div>

          <article className=" grid h-[39vh] grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 ">

          <div className="w-[100%]  flex justify-center  lg:m-[3rem]">
          

            <img  className="h-auto w-[28rem] lg:w-[43rem]  lg:h-auto " src={paisObtenido?.flags.png} alt="" />
          </div>



          <div className="flex  flex-col mx-auto  lg:m-[3rem]">
            <p className="font-bold text-[2rem] lg:text-[3rem] flex justify-center  dark:text-[#fff] text-[#000]">{paisObtenido?.name}</p>

          <article className=" m-[3rem] grid grid-rows-2  grid-cols-1 h-[32vh] lg:grid-rows-1 lg:grid-cols-2" >
            <div className="mb-[2rem]" >

              <b className="font-bold flex text-[1.5rem] gap-4 dark:text-[#fff] text-[#000]">Population: <p className="text-[1rem] lg:text-[1.3rem] font-light">{paisObtenido?.population}</p> </b>
              <b className="font-bold flex text-[1.5rem] gap-4 dark:text-[#fff] text-[#000]">Region: <p className="flex place-items-center text-[1rem] lg:text-[1.3rem] font-light">{paisObtenido?.region}</p> </b>
              <b className="font-bold flex text-[1.5rem] gap-4 dark:text-[#fff] text-[#000]">SubRegion: <p className="flex place-items-center  text-[1rem] lg:text-[1.3rem] font-light">{paisObtenido?.subregion}</p> </b>
              <b className="font-bold flex text-[1.5rem] gap-4 dark:text-[#fff] text-[#000]">Capital: <p className="flex place-items-center text-[1rem] lg:text-[1.3rem] font-light">{paisObtenido?.capital}</p> </b>
            </div>
            <div>
              <b className="font-bold flex text-[1.5rem] gap-4 dark:text-[#fff] text-[#000]">Top Level Domain: <p className="flex place-items-center text-[1rem] lg:text-[1.3rem] font-light">{paisObtenido?.topLevelDomain}</p> </b>
              <b className="font-bold flex text-[1.5rem] gap-4 dark:text-[#fff] text-[#000]">Currencies: <p className="flex place-items-center text-[1rem] lg:text-[1.3rem] font-light">{paisObtenido?.currencies[0].name}</p> </b>
              <b className="font-bold flex text-[1.5rem] gap-4 dark:text-[#fff] text-[#000]">Languages: <p className="flex place-items-center text-[1rem] lg:text-[1.3rem] font-light">{paisObtenido?.languages[0].name} </p> 

              </b>

            </div>  
          </article>
          </div>
          
          </article>
        </section>
      
      
   
    </>
  )
}
