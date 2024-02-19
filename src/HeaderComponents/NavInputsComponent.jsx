import {NavLink} from 'react-router-dom'

export const NavInputsComponent = () => {
  return (
    <div className='w-[14rem] relative flex justify-self-end'>


{/* los estilos que están sin dark, son los que cargan en 
el light, con los dark: son cuando se aprieta el dark
 ya que es una pagina en modo escuro por defecto */}
    <label  htmlFor="label-input" className=' label-class rounded-[.4rem] 
    flex cursor-pointer justify-center h-[3rem] w-[11rem] md:h-[4rem] md:w-[14rem]  p-3 text-[1rem] md:text-[2rem]
     dark:bg-background-darksoft bg-background-lighthard  text-[#000] dark:text-[#fff]' >All</label>
    <input type="checkbox" name="" id="label-input" />

      <div  className='z-50 div--nav-options__navlink absolute top-[3.4rem] md:top-[4.4rem] right-[3.2rem]  md:right-[0.2rem] left-[0.2rem] flex flex-col justify-evenly  dark:bg-background-darksoft bg-background-lighthard  rounded-[.4rem] cursor-pointer nav-style'>
      <NavLink   className={ ({ isActive})=> isActive ? "bg-blue-500 shadow-lg shadow-[#a29e9e] rounded-[6px] transition-colors delay-75 ease-in-out  " : null} to="/Home">Home</NavLink>
      <NavLink  className={ ({ isActive})=> isActive ? "bg-blue-500 shadow-lg shadow-[#a29e9e]  rounded-[6px] transition-colors delay-75 ease-in-out  " : null} to="/Africa">Africa</NavLink>
      <NavLink  className={({ isActive})=> isActive ? "bg-blue-500 shadow-lg shadow-[#a29e9e]  rounded-[6px] transition-colors delay-75 ease-in-out " : null} to="/America">America</NavLink>
      <NavLink  className={({ isActive})=> isActive ? "bg-blue-500 shadow-lg shadow-[#a29e9e]  rounded-[6px] transition-colors delay-75 ease-in-out " : null} to="/Asia">Asia</NavLink>
      <NavLink  className={({ isActive})=> isActive ? "bg-blue-500 shadow-lg shadow-[#a29e9e]  rounded-[6px] transition-colors delay-75 ease-in-out " : null} to="/Europa">Europa</NavLink>
      <NavLink  className={({ isActive})=> isActive ? "bg-blue-500 shadow-lg shadow-[#a29e9e]  rounded-[6px] transition-colors delay-75 ease-in-out " : null} to="/Oceania">Oceania</NavLink>


      </div>
    </div>
  ) 
}
