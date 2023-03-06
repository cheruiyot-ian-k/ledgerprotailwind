import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBars, faContactCard, faFile, faHandshake, faHome, faThumbsUp, faUser, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


const Home = () => {

    const [menu,setMenu] = useState("true");

    const menucl = () => {
        if (menu == "true"){
          document.querySelector(".mbb").classList.add('hidden');
          document.querySelector(".mxb").classList.remove('hidden');
          document.querySelector(".listnav").classList.remove('hidden');
          document.querySelector(".home").classList.add('h-screen');
          document.querySelector(".home").classList.add('overflow-hidden');
          setMenu("false");
        }else{
            document.querySelector(".mbb").classList.remove('hidden');
            document.querySelector(".mxb").classList.add('hidden');
            document.querySelector(".listnav").classList.add('hidden');
            document.querySelector(".home").classList.remove('h-screen');
            document.querySelector(".home").classList.remove('overflow-hidden');
            setMenu("true");
        }
    }



    return ( 
        <div className="home">
            
            {/* the navbar  */}

            <div className="nav relative flex justify-between px-[2%] py-[3px] md:py-[8px] bg-slate-50">
                <div className="logonav">
                    <img className="h-[32px] xl:h-[40px]" src={require("../images/logo/logolp.jpg")} alt="" />
                </div>
                <div className="namenav text-[15px] flex justify-center items-center font-mono font-bold md:text-[20px] xl:text-[25px]">
                    <h2> <span className="text-green-500"> Ledgerpro </span>Business Consultants</h2>
                </div>
                <div className="listnav slsd absolute hidden mt-[42px] ml-[-39px] bg-slate-50 h-screen w-[70%] px-[30px] py-[30px]">
                    <ul className="flex flex-col gap-[30px] pl-[25px] font-semibold text-green-500">
                        <li className="flex gap-[10px]">
                            <div><FontAwesomeIcon icon={faHome}/></div>
                            <div>Home</div>
                        </li>
                        <li className="flex gap-[10px]">
                            <div><FontAwesomeIcon icon={faUser}/></div>
                            <div>About Us</div>
                        </li>
                        <li className="flex gap-[10px]">
                            <div><FontAwesomeIcon icon={faHandshake}/></div>
                            <div>Services</div>
                        </li>
                        <li className="border-t border-gray-400"></li>
                        <li className="flex gap-[10px]">
                            <div className="mt-[1px]"><FontAwesomeIcon icon={faContactCard}/></div>
                            <div>Contact Us</div>
                        </li>
                    </ul>
                </div>
                <div className="menunav text-[20px] bg-green-500 p-[5px] w-[40px] flex justify-center items-center rounded-full" onClick={menucl}>
                    <span className="mbb"><FontAwesomeIcon icon={faBars}/></span>
                    <span className="mxb hidden"><FontAwesomeIcon icon={faX}/></span>
                </div>

            </div>


            <div className="one h-[400px] xl:h-screen bg-gray-400 px-[10%] flex justify-center flex-col text-slate-50">
                <h2 className="mb-[20px] text-2xl md:text-3xl font-bold xl:text-[40px]">ledgerpro bueisnes asdc sef dc</h2>
                <p className="mb-[30px] text-sm md:text-base md:w-[50%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vitae, </p>
                <button className="bbb"> Contact us</button>
            </div>



            <div className="two flex flex-col xl:px-[10%] xl:py-[50px] flex-col-reverse xl:flex-row xl:gap-[50px] ">
                <div className="twoleft xl:w-[50%] h-[300px] xl:h-[400px] bg-blue-200 flex items-end">
                    <div className="twodet w-[60%] md:w-[41%] bg-slate-50 shadow-md px-[13px] py-[7px]">
                        <h2 className="font-semibold md:font-bold">proffessional approach and quality services</h2>
                        <p className="text-sm md:text-base mt-[5px]">Affordable accounting services for every business</p>
                    </div>
                </div>
                <div className="tworight xl:w-[40%] px-[10%] xl:px-[0] py-[20px] xl:flex xl:flex-col xl:justify-between">
                    <div className="trone">
                        <h3 className="mb-[10px] font-semibold text-green-500">Who we are</h3>
                        <h2 className="mb-[10px] text-xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
                        <p className="text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quidem eum, rerum sit id explicabo facilis tenetur autem, dolores corporis eligendi non atque, recusandae ab provident culpa quo exercitationem totam?</p>
                    </div>
                    <div className="trtwo flex mt-[20px] gap-[30px] xl:gap-[40px] justify-center text-center">
                        <div className="statone sbb">
                            <h4 className="text-green-600 font-semibold text-[22px] md:text-[26px]">10</h4>
                            <p className="font-semibold text-sm md:text-base">Clients</p>
                        </div>
                        <div className="statone sbb">
                            <h4 className="text-green-600 font-semibold text-[22px] md:text-[26px]">10</h4>
                            <p className="font-semibold text-sm md:text-base">Clients</p>
                        </div>
                        <div className="statone sbb">
                            <h4 className="text-green-600 font-semibold text-[22px] md:text-[26px]">10</h4>
                            <p className="font-semibold text-sm md:text-base">Clients</p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="three px-[10%] py-[20px] xl:py-[40px] flex flex-col xl:flex-row gap-[20px]">
                <div className="threeone flex gap-[20px]">
                    <div className="threeicon">
                        <span className="thic"><FontAwesomeIcon icon={faThumbsUp}/></span>
                    </div>
                    <div className="threecap">
                        <h2 className="font-semibold">Best Tax Service</h2>
                        <p className="mt-[10px] text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam officia cupiditate obcaecati tempore nostrum accusamus.</p>
                    </div>
                </div>
                <div className="threeone flex gap-[20px]">
                    <div className="threeicon">
                        <span  className="thic"><FontAwesomeIcon icon={faThumbsUp}/></span>
                    </div>
                    <div className="threecap">
                        <h2 className="font-semibold">Best Tax Service</h2>
                        <p className="mt-[10px] text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam officia cupiditate obcaecati tempore nostrum accusamus.</p>
                    </div>
                </div>
                <div className="threeone flex gap-[20px]">
                    <div className="threeicon">
                        <span  className="thic"><FontAwesomeIcon icon={faThumbsUp}/></span>
                    </div>
                    <div className="threecap">
                        <h2 className="font-semibold">Best Tax Service</h2>
                        <p className="mt-[10px] text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam officia cupiditate obcaecati tempore nostrum accusamus.</p>
                    </div>
                </div>
            </div>

            <div className="four text-slate-50 h-[400px] bg-teal-200 text-center flex flex-col justify-center xl:items-center px-[10%]">
                <h2 className="mb-[20px] text-[28px] font-semibold xl:w-[40%]">Solve All Your Problems </h2>
                <p className="mb-[20px] text-sm md:text-base xl:w-[40%]"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusantium reiciendis illum enim totam nesciunt distinctio aliquam repellat doloremque</p>
                <button className="border-4 text-bold mx-auto w-[150px] border-green-600 h-[45px] rounded-[25px] ">Discover More</button>
            </div>


            <div className="five py-[30px] xl:py-[70px] text-center flex flex-col xl:flex-row xl:justify-start justify-center xl:items-center px-[10%]">
                <div className="fiveone xl:w-[40%]">
                    <h3 className="mb-[20px] text-sm xl:text-left  md:text-base text-green-600 font-semibold">What we offer </h3>
                    <h2 className="mb-[20px] text-xl md:text-2xl xl:text-left font-semibold">Solve All Your Problems </h2>
                </div>
                <div className="fivetwo xl:flex xl:flex-col xl:text-left">
                    <p className="mb-[20px] text-sm md:text-base xl:w-[80%]"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusantium reiciendis illum enim totam nesciunt distinctio aliquam repellat doloremque</p>
                    <button className="bbb mx-auto xl:mx-[0]">Discover More</button>
                </div>
            </div>

            <div className="six bg-gray-100 flex py-[30px] flex-col md:flex-row md:flex-wrap xl:justify-between xl:px-[10%] items-center justify-center gap-[30px]">
                <div className="sixone md:w-[40%] xl:w-[450px] bg-slate-50 flex flex-col justify-center items-center w-[90%] shadow-md p-[20px] gap-[10px] xl:gap-[25px]">
                    <div className="s1">
                        <span className="text-3xl text-green-600"><FontAwesomeIcon icon={faFile}/></span>
                    </div>
                    <div className="s2 text-xl font-semibold">
                        <h2 className="">Tax</h2>
                    </div>
                    <div className="s3 text-center text-sm md:text-base">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quis ad suscipit laborum optio unde voluptate</p>
                    </div>
                    <div className="s4">
                        <button className="bbb">Learn More</button>
                    </div>
                </div>
                <div className="sixone md:w-[40%] xl:w-[450px] bg-slate-50 flex flex-col justify-center items-center w-[90%] shadow-md p-[20px] gap-[10px] xl:gap-[25px]">
                    <div className="s1">
                        <span className="text-3xl text-green-600"><FontAwesomeIcon icon={faFile}/></span>
                    </div>
                    <div className="s2 text-xl font-semibold">
                        <h2 className="">Tax</h2>
                    </div>
                    <div className="s3 text-center text-sm md:text-base">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quis ad suscipit laborum optio unde voluptate</p>
                    </div>
                    <div className="s4">
                        <button className="bbb">Learn More</button>
                    </div>
                </div>
                <div className="sixone md:w-[40%] xl:w-[450px] bg-slate-50 flex flex-col justify-center items-center w-[90%] shadow-md p-[20px] gap-[10px] xl:gap-[25px]">
                    <div className="s1">
                        <span className="text-3xl text-green-600"><FontAwesomeIcon icon={faFile}/></span>
                    </div>
                    <div className="s2 text-xl font-semibold">
                        <h2 className="">Tax</h2>
                    </div>
                    <div className="s3 text-center text-sm md:text-base">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quis ad suscipit laborum optio unde voluptate</p>
                    </div>
                    <div className="s4">
                        <button className="bbb">Learn More</button>
                    </div>
                </div>
            </div>



            <div className="seven py-[20px] xl:flex xl:py-[60px]">
                <div className="sevenone pb-[20px] xl:w-[50%] xl:text-left text-center flex flex-col justify-center px-[10%]">
                    <h3 className="mb-[20px] text-sm md:text-base text-green-500 font-semibold">Meet Our Team</h3>
                    <h2 className="mb-[20px] font-semibold text-xl md:text-2xl">We are a team of proffessionals</h2>
                    <p className="mb-[20px] text-sm md:text-base"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusantium reiciendis illum enim totam nesciunt distinctio aliquam repellat doloremque</p>
                    <button className="bbb mx-auto xl:mx-[0]">All members</button>
                </div>
                <div className="seventwo py-[20px] flex md:flex-row md:justify-center md:flex-wrap flex-col gap-[30px]">
                    <div className="p1 ppcd">
                        <div className="ppim">
                            <img src={require("../images/people/man1.jpg")} alt="" />
                        </div>
                        <div className="p1det text-center bg-slate-50 absolute bottom-px p-[10px] shadow-md">
                            <h2 className="font-semibold">Ian Jether</h2>
                            <p>Founder and CEO</p>
                        </div>
                    </div>
                    <div className="p1 ppcd">
                        <div className="ppim">
                            <img src={require("../images/people/man2.jpg")} alt="" />
                        </div>
                        <div className="p1det text-center bg-slate-50 absolute bottom-px p-[10px] shadow-md">
                            <h2 className="font-semibold">Ian Jether</h2>
                            <p>Founder and CEO</p>
                        </div>
                    </div>
                    <div className="p1 ppcd">
                        <div className="ppim">
                            <img src={require("../images/people/man3.jpg")} alt="" />
                        </div>
                        <div className="p1det text-center bg-slate-50 absolute bottom-px p-[10px] shadow-md">
                            <h2 className="font-semibold">Ian Jether</h2>
                            <p>Founder and CEO</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="eight h-[400px] bg-gray-700 text-center flex flex-col justify-center xl:items-start px-[10%] text-slate-50">
                <h2 className="mb-[20px] text-2xl font-semibold">Caring for your taxex </h2>
                <p className="mb-[20px] text-sm md:text-base xl:w-[50%] xl:text-left"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusantium reiciendis illum enim totam nesciunt distinctio aliquam repellat doloremque</p>
                <button className="bbb mx-auto xl:mx-[0]">Discover More</button>
            </div>


            <div className="nine px-[10%] flex flex-col gap-[30px] py-[20px]">
                <div className="nineone">
                    <h3 className="mb-[10px] text-sm md:text-base text-green-500 font-semibold">Testimonials</h3>
                    <h2 className="mb-[10px] text-xl font-semibold md:text-2xl">Our clients Reviews</h2>
                    <p className="text-sm md:text-base"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusantium reiciendis illum enim totam nesciunt distinctio aliquam repellat doloremque</p>
                </div>
                <div className="ninetwo flex xl:justify-between justify-center items-center gap-[30px] text-sm md:text-base">
                    <div className="t1 flex flex-col md:w-[40%] xl:w-[30%] gap-[20px] shadow-md p-[15px]">
                        <div className="ttext text-gray-600">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis provident, facere veritatis saepe laudantium tempore doloribus adipisci incidunt labore, </p>
                        </div>
                        <div className="ttdet flex gap-[20px]">
                            <div className="ttimage h-[50px] w-[50px] rounded-full overflow-hidden">
                                <img src={require("../images/people/steveone.png")} alt="" />
                            </div>
                            <div className="ttdetts">
                                <h2 className="font-semibold"> Steve Kombo</h2>
                                <p>Finetek</p>
                            </div>
                        </div>
                    </div>
                    <div className="t1 hidden md:flex flex flex-col md:w-[40%] xl:w-[30%] gap-[20px] shadow-md p-[15px]">
                        <div className="ttext text-gray-600">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis provident, facere veritatis saepe laudantium tempore doloribus adipisci incidunt labore, </p>
                        </div>
                        <div className="ttdet flex gap-[20px]">
                            <div className="ttimage h-[50px] w-[50px] rounded-full overflow-hidden">
                                <img src={require("../images/people/steveone.png")} alt="" />
                            </div>
                            <div className="ttdetts">
                                <h2 className="font-semibold"> Steve Kombo</h2>
                                <p>Finetek</p>
                            </div>
                        </div>
                    </div>
                    <div className="t1 hidden xl:flex flex flex-col md:w-[40%] xl:w-[30%] gap-[20px] shadow-md p-[15px]">
                        <div className="ttext text-gray-600">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis provident, facere veritatis saepe laudantium tempore doloribus adipisci incidunt labore, </p>
                        </div>
                        <div className="ttdet flex gap-[20px]">
                            <div className="ttimage h-[50px] w-[50px] rounded-full overflow-hidden">
                                <img src={require("../images/people/steveone.png")} alt="" />
                            </div>
                            <div className="ttdetts">
                                <h2 className="font-semibold"> Steve Kombo</h2>
                                <p>Finetek</p>
                            </div>
                        </div>
                    </div>
                   
                   
                </div>
            </div>


            <div className="ten bg-teal-100 px-[10%] py-[30px] xl:py-[60px] flex flex-col xl:flex-row xl:justify-between gap-[30px] text-sm md:text-base">
                <div className="tenone xl:w-[40%] text-xl md:text-2xl xl:font-semibold md:w-[80%] md:text-center xl:text-left">
                    <p>Signup out newsletter to get udpdate information, insights or news</p>
                </div>
                <div className="tentwo flex xl:items-center">
                    <div>
                        <input className="h-[40px] xl:h-[50px] px-[14px] rounded-[30px] xl:w-[450px]" type="text" placeholder="Enter your email" />
                    </div>
                    <div>
                        <button className="bbb ml-[-40px] xl:ml-[20px]">Sign up</button>
                    </div>
                </div>

            </div>



            <div className="eleven flex flex-col xl:flex-row xl:justify-between  gap-[30px] px-[10%] py-[30px] xl:py-[60px] bg-neutral-900 text-slate-50 xl:border-b border-green-500">
                <div className="elevenone flex flex-col xl:w-[34%] gap-[20px]">
                   <div>
                    <h3 className="font-mono text-xl font-bold"><span className="text-green-600 text-2xl"> Ledgerpro </span> business consultants</h3>
                   </div>
                   <div className="text-sm md:text-base">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi soluta id ipsa veniam modi explicabo vel a praesentium harum </p>
                   </div>
                   <div className="flex gap-[10px] justify-around text-[26px] xl:text-[18px] xl:w-[50%]">
                        <div><FontAwesomeIcon icon={faFacebook}/></div>
                        <div className="border-l-2 border-green-600"></div>
                        <div><FontAwesomeIcon icon={faInstagram}/></div>
                        <div className="border-l-2 border-green-600"></div>
                        <div><FontAwesomeIcon icon={faTwitter}/></div>
                        <div className="border-l-2 border-green-600"></div>
                        <div><FontAwesomeIcon icon={faLinkedin}/></div>
                   </div>
                </div>
                <div className="elevencont xl:justify-between xl:w-[50%] flex flex-col gap-[30px] md:flex-row md:justify-between">

                
                <div className="eleventwo text-sm md:text-base flex flex-col gap-[6px]">
                    <div className="text-xl font-semibold"><h3>Services</h3></div>
                    <div className="etw flex gap-[14px]">
                        <div className="etic">

                        </div>
                        <div className="ettwo">
                            <p>Tax</p>
                        </div>
                    </div>
                    <div className="etw flex gap-[14px]">
                        <div className="etic">

                        </div>
                        <div className="ettwo">
                            <p>Out services</p>
                        </div>
                    </div>
                    <div className="etw flex gap-[14px]">
                        <div className="etic">

                        </div>
                        <div className="ettwo">
                            <p>Adv</p>
                        </div>
                    </div>
                </div>
                <div className="eleventwo text-sm md:text-base flex flex-col gap-[6px]">
                    <div className="text-xl font-semibold"><h3>Services</h3></div>
                    <div className="etw flex gap-[14px]">
                        <div className="etic">

                        </div>
                        <div className="ettwo">
                            <p>Tax</p>
                        </div>
                    </div>
                    <div className="etw flex gap-[14px]">
                        <div className="etic">

                        </div>
                        <div className="ettwo">
                            <p>Out services</p>
                        </div>
                    </div>
                    <div className="etw flex gap-[14px]">
                        <div className="etic">

                        </div>
                        <div className="ettwo">
                            <p>Adv</p>
                        </div>
                    </div>
                </div>
                <div className="eleventwo text-sm md:text-base flex flex-col gap-[6px]">
                    <div className="text-xl font-semibold"><h3>Services</h3></div>
                    <div className="etw flex gap-[14px]">
                        <div className="etic">

                        </div>
                        <div className="ettwo">
                            <p>Tax</p>
                        </div>
                    </div>
                    <div className="etw flex gap-[14px]">
                        <div className="etic">

                        </div>
                        <div className="ettwo">
                            <p>Out services</p>
                        </div>
                    </div>
                    <div className="etw flex gap-[14px]">
                        <div className="etic">

                        </div>
                        <div className="ettwo">
                            <p>Adv</p>
                        </div>
                    </div>
                </div>

                </div>
            
            </div>


            <div className="twelve flex flex-col xl:flex-row justify-center items-center bg-neutral-900 text-slate-50 py-[20px] text-sm md:text-base  ">
                <div className="twelveone">
                    <p>Ledgerpro Consulting 2022</p>
                </div>
                <div className="twelveone">
                    <p>. Developed by fineteklabs</p>
                </div>
            </div>



            



        </div>
        );
}
 
export default Home
