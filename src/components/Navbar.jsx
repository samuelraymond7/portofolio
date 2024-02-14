import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import {styles} from '../style'
import {navLinks} from '../constants'
import { logo,menu,close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const [navScroll, setNavScroll] = useState(false)
  const changeColor=()=>{
    if (window.scrollY>=76){
      setNavScroll(true)
    }else{
      setNavScroll(false)
    }
  }
  window.addEventListener("scroll",changeColor)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20  ${navScroll?"bg-primary":"bg-transparent"}`}>
      <div className=' w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2' onClick={()=>{setActive('');window.scrollTo(0,0)}}>
          <img src={logo} alt="logo" className='w-9 h-9 object-contain'/>
          <p className=' text-white text-[18px] font-bold cursor-pointer flex'>Samuel Raymond &nbsp;<span className=' lg:block hidden'>| Web Developer</span></p>
        </Link>

        <ul className=' list-none hidden md:flex flex-row gap-10'>
          {navLinks.map((link)=>(
            <li key={link.id} className={`${active===link.title?"text-white":"text-secondary"} hover:text-white cursor-pointer font-medium text-[18px]`} onClick={()=>setActive(link.title)}>
              <a href={link.link} target={link.target} rel={link.rel}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className=' md:hidden flex flex-1 justify-end items-center'>
          <img src={toggle?close:menu} alt="menu" className=' w-[28px] h-[28px] object-contain cursor-pointer' onClick={()=>setToggle((prev)=>(!prev))}/>
          <div className={`${!toggle?'hidden':'flex'} p-6 black-gradient absolute top-20 ring-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className=' list-none flex flex-col gap-4'>
              {navLinks.map((link)=>(
                <li key={link.id} className={`${active===link.title?"text-white":"text-secondary"} hover:text-white cursor-pointer font-medium text-[16px]`} onClick={()=>{setActive(link.title);setToggle((prev)=>(!prev))}}>
                  <a href={link.link} target={link.target} rel="noopener noreferrer">{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar