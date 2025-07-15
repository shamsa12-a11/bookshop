import { Link, NavLink } from "react-router-dom"

function Headar(){
    return <div className="flex justify-between px-[150px] ">
     <div className="flex gap-5" >
       
        <Link to="/"> <i class="fa-solid fa-book text-3xl bg-orange-500 text-white mt-2 px-1 py-1 rounded-xl"></i></Link>
       
        <div className="font-semibold text-3xl pt-2">
            <h3>book <span className="text-orange-500">shop</span></h3>
        </div>
        </div>
        <div>
    
        <ul className=" sm:flex gap-7 text-3xl font-semibold mt-2">
         <li><NavLink to="/">home</NavLink></li>
        <Link to="/about"><li>about</li></Link>
      <NavLink to="/shop"><li>shop</li></NavLink>
       <li><Link to="/contact">contact</Link></li>
        </ul>

        </div>
       

    </div>
}

export default Headar
