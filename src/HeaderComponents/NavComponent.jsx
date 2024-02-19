
import{ useEffect , useState } from 'react';




export const NavComponent = () => {

  const [darklight, setDarklight] = useState("dark")


  useEffect(() => {
    
    if(darklight === "light"){
      document.querySelector("html").classList.add("light")
      document.querySelector("html").classList.remove("dark")
    }else{
      
      document.querySelector("html").classList.remove("light")
      document.querySelector("html").classList.add("dark")

    } 
  
  }, [darklight])
  
  
  
  
  
  
  
  const themeFunction = () => { 
  
    setDarklight(preVtheme => preVtheme === "dark" ? "light" : "dark" )
    
   }
  
  

  return (
    <>
    <section className=' dark:bg-background-darksoft bg-background-lighthard    h-[10vh] px-[.5rem]  md:px-[4rem]'>
        <nav className='
        mx-auto mt-0 
        max-w-1400pxMaxW
          
          flex justify-between flex-wrap content-center
          h-[10vh]'>
            <b className='md:hover:scale-110 ease-out duration-300 cursor-pointer dark:text-[#fff] text-[#000] text-[1rem] md:text-[2rem]'>Where in the world?</b>
        <figure className='figure__darkmode md:hover:scale-110 ease-out duration-300 cursor-pointer'>

     

                <button onClick={themeFunction} >  <b className='  dark:text-[#fff] text-[#000] text-[1rem] md:text-[2rem]'>Theme</b> </button>
            </figure>
        </nav>
    </section>
    </>
  )
}
