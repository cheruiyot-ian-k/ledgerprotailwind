import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";



const Aboutmain = () =>{


return(
    <div className="aboutmain mt-[40px]">
        <div className="abone relative flex flex-col justify-center items-center text-center px-[10%] h-[260px] bg-gray-200">
            <div>
                <h2 className="text-[30px] font-semibold">Our Process</h2>
                <p className="text-sm">Here you can learn more about how we will work together</p>
            </div>
            <div className="abtwo text-left w-[70%] lg:w-[300px] lg:self-start lg:px-[20px] bg-teal-100 px-[10%] py-[20px] rounded-xl absolute bottom-[-100px] lg:bottom-[-200px]">
                <h3 className="mb-[15px] font-semibold ">About</h3>
               <Link to='/About/Process'> <p className="text-sm mt-[10px]">Our Process <span><FontAwesomeIcon icon={faArrowRight}/></span></p></Link>
               <Link to='/About/Profile'><p className="text-sm mt-[10px]">Firm Profile <span><FontAwesomeIcon icon={faArrowRight}/></span></p></Link>
               <Link to='/About/Team'><p className="text-sm mt-[10px]">Our Team <span><FontAwesomeIcon icon={faArrowRight}/></span></p></Link>
            </div>
        </div>
        
    </div>
)
}

export default Aboutmain;