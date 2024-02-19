import  { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../BodyComponents/Home';
import { AfricaSection } from '../BodyComponents/AfricaInfo';
import { AmericaInfo } from '../BodyComponents/AmericaInfo';
import { AsiaInfo } from '../BodyComponents/AsiaInfo';
import { OceaniaInfo } from '../BodyComponents/OceaniaInfo';
import { EuropaInfo } from '../BodyComponents/EuropaInfo';
import  { useEffect, useState , createContext} from 'react';
import { CountryComponent } from '../BodyComponents/CountryComponent';
import { NavInputsComponent } from './NavInputsComponent';



export const Contexto = createContext()

export const SearchComponent = () => {
  const [dataCountries, setDataCountries] = useState([])
  const [search, setSearch] = useState("")

  const objetoDatos = "../assets/data.json"
    useEffect(() => {
        fetch(objetoDatos)
            .then(datosJson => datosJson.json())
            .then(json =>
                setDataCountries(json))
                
  
            }, [])


const DataFrom = (e) => { 
  setSearch(e.target.value)
  // console.log(e.target.value)
}
console.log(dataCountries)
// filtrado

let resultado = []
// si por el valor del input de busqueda, no se escribe nada
// que el array, tome los datos  del array original
if(!search ){
  resultado = dataCountries 
  // console.log(resultado)
  
}else{
  // sinó que del array original, se filtre lo que se introduce,
  //  se pase a minuscula todo y que verifique letra por letra si lo que está asignado en name
  // , osea el pais del objeto original, en lo que está devolviendo
  //  el estado search y que todo se asigne en el array resultado
  resultado = dataCountries.filter(i => i.name.toLowerCase().includes(search.toLowerCase()))

}
  return (
    <>
    <Contexto.Provider value={{dataCountries, setDataCountries,resultado,search }} >

    
    <HashRouter>

      
    <article className='dark:bg-background-darkhard bg-background-lightsoft '>

    <div className='  grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 md:justify-around md:max-w-1400pxMaxW md:w-full marker:content-center
      h-[10vh] dark:bg-[#202D36] bg-background-lightsoft px-[2rem]  md:px-[4rem] mx-auto py-[10vh]  md:py-[10vh] gap-[4.5rem] md:gap-[1.5rem]'>



      <section className='w-[5rem] flex justify-self-start'>


        <form method="post" action="/send/">
          
          <input list='items' onChange={DataFrom} value={search}
          className='div__section--input dark:bg-background-darksoft bg-background-lighthard
           scale-110 placeholder:text-[#000] p-[1.5rem] md:p-[2rem] cursor-pointer rounded-[.4rem] 
           
            dark:placeholder:text-[#fff] placeholder:text-[1rem] md:placeholder:text-[2rem]  w-[84vw]
            h-[2vh] md:w-[24rem] md:h-[4vh] '
          type="search" placeholder='Search for a country'/>

          <datalist id="items" className='h-[1rem] '>
            {
              
              dataCountries.map(e => (
                <div key={e.numericCode}>
                <option  className='dark:bg-background-darksoft bg-background-lighthard'>{e.name}</option>
                </div>
              ))
            }
            </datalist>
            </form>

      </section>
      <NavInputsComponent/>


            
    </div>
              </article>
      <Routes>

        <Route path="/Home" element={<Home />}/>
        {/* ac+a el /:name captura los datos del link de los componentes y pasa los datos con el hook useParamos directo a el componente 
        que estás renderizando */ }
        <Route path="/Home/:name" element={<CountryComponent />}/>
        <Route path="/Africa" element={<AfricaSection    />}/>
        <Route path="/Africa/:name" element={<CountryComponent />}/>
        <Route path="/America" element={<AmericaInfo    />}/>
        <Route path="/America/:name" element={<CountryComponent />}/>
        <Route path="/Asia" element={<AsiaInfo    />}/>
        <Route path="/Asia/:name" element={<CountryComponent />}/>
        <Route path="/Europa" element={ <EuropaInfo    /> }/>
        <Route path="/Europa/:name" element={ <CountryComponent /> }/>
        <Route path="/Oceania" element={<OceaniaInfo    />}/>
        <Route path="/Oceania/:name" element={<CountryComponent />}/>
        
      </Routes>  
        
    </HashRouter>
    </Contexto.Provider>
    </>

)
}