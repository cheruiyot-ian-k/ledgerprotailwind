import { faAngleDown, faBars, faContactCard, faHandshake, faHome, faUser, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


const Navbar = () =>{

    const [menu,setMenu] = useState("true");

    const menucl = () => {
        if (menu == "true"){
          document.querySelector(".mbb").classList.add('hidden');
          document.querySelector(".mxb").classList.remove('hidden');
          document.querySelector(".listnav").classList.remove('hidden');
        //   document.querySelector(".App").classList.add('h-screen');
        //   document.querySelector(".App").classList.add('overflow-hidden');
          setMenu("false");
        }else{
            document.querySelector(".mbb").classList.remove('hidden');
            document.querySelector(".mxb").classList.add('hidden');
            document.querySelector(".listnav").classList.add('hidden');
            // document.querySelector(".App").classList.remove('h-screen');
            // document.querySelector(".App").classList.remove('overflow-hidden');
            setMenu("true");
        }
    }

    return(
        <div className="navbar fixed top-px w-screen mt-[-1px]">

        
        <div className="nav relative  flex justify-between px-[2%] lg:py-[13px] py-[3px] lg:pr-[70px] md:py-[8px] bg-slate-50">
            <div className="logonav">
                <img className="h-[32px] lg:h-[40px]" src={require("../images/logo/logolp.jpg")} alt="" />
            </div>
            <div className="namenav text-[15px] flex justify-center items-center font-mono font-bold md:text-[20px] lg:text-[25px]">
                <h2> <span className="text-green-500"> Ledgerpro </span>Business Consultants</h2>
            </div>
            <div className="listnav slsd absolute lg:relative hidden mt-[42px] lg:mt-[6px] ml-[-39px] lg:ml-[0] bg-slate-50 
            h-screen w-[70%] lg:w-[45%] px-[30px] lg:px-[0] lg:py-[0] py-[30px] lg:block lg:bg-transparent lg:h-[0] lg:bg-slate-50">
                <ul className="flex flex-col lg:flex-row lg:justify-between gap-[30px] pl-[25px] lg:pl-[0] font-semibold
                lg:text-xl text-green-500 lg:text-neutral-900">
                    <li className="flex gap-[10px]">
                        <div className="lg:hidden"><FontAwesomeIcon icon={faHome}/></div>
                        <div>Home</div>
                    </li>
                    <li className="flex gap-[10px]">
                        <div className="lg:hidden"><FontAwesomeIcon icon={faUser}/></div>
                        <div>About Us</div>
                    </li>
                    <li className="flex gap-[10px]">
                        <div className="lg:hidden"><FontAwesomeIcon icon={faHandshake}/></div>
                        <div>Services <span className="lg:inline lg:mt-[5px] sm:hidden md:hidden"><FontAwesomeIcon icon={faAngleDown}/></span></div>
                        
                    </li>
                    <li className="border-t border-gray-400 lg:hidden"></li>
                    <li className="flex gap-[10px] lg:border lg:p-[12px] lg:mt-[-12px] lg:bg-green-500 lg:rounded-full lg:w-[160px] lg:flex lg:justify-center lg:align-center">
                        <div className="mt-[1px] lg:hidden "><FontAwesomeIcon icon={faContactCard}/></div>
                        <div>Contact Us</div>
                    </li>
                </ul>
            </div>
            <div className="menunav lg:hidden text-[20px] bg-green-500 p-[5px] w-[40px] flex justify-center items-center rounded-full" onClick={menucl}>
                <span className="mbb"><FontAwesomeIcon icon={faBars}/></span>
                <span className="mxb hidden"><FontAwesomeIcon icon={faX}/></span>
            </div>
       

        </div>
        </div>
    );
}

export default Navbar;