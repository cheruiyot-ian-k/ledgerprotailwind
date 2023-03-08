import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";



const Aboutmain = () =>{


    const [clicked,setClick] = useState("procc");

    const [mh2,setMh2] = useState("Our Process");
    const [mp,setMp] = useState("Here you can learn more about our processes")


    // const proocl = () => {
    //     if()
    // }

    const procl = () => {
        if(clicked == !("procc")){
            setMh2("Our Process");
            setMp("Here you can learn more about our processes")
            setClick("procc");
            // document.querySelector(".prol").classList.add('text-green-500');
            // document.querySelector(".profc").classList.remove('text-green-500');
            // document.querySelector(".teamc").classList.remove('text-green-500');
        }else{
           
        }

    }


    const profcl = () => {
        if(clicked !== "profcl"){
            setMh2("Our Profile");
            setMp("Here you can learn more about our firm profile")
            setClick("profcl");
            // document.querySelector(".prol").classList.remove('text-green-500');
            // document.querySelector(".profc").classList.add('text-green-500');
            // document.querySelector(".teamc").classList.remove('text-green-500');
        }else{
           
        }

    }
    

    const teamcl = () => {
        if(clicked !== "teamcl"){
            setClick("teamcl");
            setMh2("Our Team");
            setMp("Here you can learn more about our team members")
            // document.querySelector(".prol").classList.remove('text-green-500');
            // document.querySelector(".profc").classList.remove('text-green-500');
            // document.querySelector(".teamc").classList.add('text-green-500');
        }else{
           
        }

    }

const [aboutKeyValue, setAboutKeyValue] = useState(1)
const aboutList = [
    {
    key: 1, 
        label: 'Our Process', 
        linkTo: '/About/Process'
    }, 
        key: 2, 
        label: 'Firm Profile', 
        linkTo: '/About/Profile'
    }, 
          key: 3, 
        label: 'Our Team', 
        linkTo: '/About/Team'
    }, 
]
const returnHeadingText = (value) => {
switch(value){
    case 1: 
        return 'Our Process'
    case 2: 
        return 'Firm Profile'
    case 3: 
        return 'Our Team'
    default: 
        reuturn ''
}
}
const returnHeadingSubText = (value) => {
switch(value){
    case 1: 
        return 'Here you can learn about Our Process'
    case 2: 
        return 'Here you can learn about Firm Profile'
    case 3: 
        return ' Here you can learn about Our Team'
    default: 
        reuturn ''
}
}


return(
    <div className="aboutmain mt-[40px]">
        <div className="abone relative flex flex-col justify-center items-center text-center px-[10%] h-[260px] bg-gray-200">
            <div>
                <h2 className="text-[30px] font-semibold">{returnHeadingText(aboutKeyValue)}</h2>
                <p className="text-sm">{returnHeadingSubText(aboutKeyValue)}</p>
            </div>
            <div className="abtwo text-left w-[70%] lg:w-[300px] lg:self-start lg:px-[20px] bg-teal-100 px-[10%] py-[20px] rounded-xl absolute bottom-[-100px] lg:bottom-[-200px]">
                <h3 className="mb-[15px] font-semibold ">About</h3>
                                        {aboutList.map((item, index, arr) => {
                                        return   <Link to={item.linkTo}> <p onClick={() => {setAboutKeyValue(item.key}} className=`prol text-sm mt-[10px] ${item.key === aboutKeyValue ? 'text-green-500' : 'text-black' }`>{item.label} <span><FontAwesomeIcon icon={faArrowRight}/></span></p></Link>
    }}
//                <Link to='/About/Process'> <p onClick={procl} className="prol text-sm mt-[10px] text-green-500">Our Process <span><FontAwesomeIcon icon={faArrowRight}/></span></p></Link>
//                <Link to='/About/Profile'><p onClick={profcl} className="profc text-sm mt-[10px]">Firm Profile <span><FontAwesomeIcon icon={faArrowRight}/></span></p></Link>
//                <Link to='/About/Team'><p onClick={teamcl} className="teamc text-sm mt-[10px]">Our Team <span><FontAwesomeIcon icon={faArrowRight}/></span></p></Link>
            </div>
        </div>
        
    </div>
)
}

export default Aboutmain;
