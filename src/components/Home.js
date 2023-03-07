import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faAngleDown, faArrowDown, faBars, faChartLine, faChartSimple, faContactBook, faContactCard, faFile, faHandshake, faHome, faLocation, faLocationPin, faMailBulk, faPercent, faThumbsUp, faUser, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


const Home = () => {

    



    return ( 
        <div className="home">
            
            {/* the navbar  */}

         

            
            {/* the first block  INTIAL */}

            <div className="one h-[400px] lg:h-[700px] bg-gray-400 px-[10%] md:px-[17%] flex justify-center flex-col text-slate-50 lg:mt-[60px] mt-[40px]">
                <h2 className="mb-[25px] text-2xl md:text-3xl font-semibold lg:text-[45px] lg:w-[50%] leading-[1.2]">To Protect Your Business <span className="mt-[20px]"> Always </span></h2>
                <p className="mb-[30px] text-sm md:text-base md:w-[50%]">  Ledgerpro Business Consultants is your friendly, accessible professional Tax, accounting,
                    Payroll, Internal Audit and advisory firm. We are masters at our craft.  </p>
                <button className="bbb"> Contact us</button>
            </div>


            {/* the second block COUNTER STATS AND BUMP */}


            <div className="two flex flex-col lg:px-[17%] lg:py-[50px] flex-col-reverse lg:flex-row lg:gap-[50px] ">
                <div className="twoleft lg:w-[50%] h-[300px] lg:h-[400px] bg-blue-200 flex items-end">
                    <div className="twodet w-[60%] md:w-[41%] bg-slate-50 shadow-md px-[13px] py-[7px]">
                        <h2 className="font-semibold md:font-bold">Professional Approach And Quality Serviceses</h2>
                        <p className="text-sm md:text-base mt-[5px]">Affordable accounting services for every business</p>
                    </div>
                </div>
                <div className="tworight lg:w-[40%] px-[10%] md:px-[17%] lg:px-[0] py-[20px] lg:flex lg:flex-col lg:justify-between">
                    <div className="trone">
                        <h3 className="mb-[10px] font-semibold text-green-500">WHO ARE WE</h3>
                        <h2 className="mb-[10px] text-xl font-semibold">Professionals in Tax, Accounting, Management and Business Consultancy.</h2>
                        <p className="text-sm md:text-base">Ledgerpro Business Consultants comprises of a team of experienced and diversely specialized 
                        professionals offering a wide range of tax and accounting advisory services.</p>
                    </div>
                    <div className="trtwo flex mt-[20px] gap-[30px] lg:gap-[40px] justify-center text-center">
                        <div className="statone sbb">
                            <h4 className="text-green-600 font-semibold text-[22px] md:text-[26px]">10</h4>
                            <p className="font-semibold text-sm md:text-base">Clients</p>
                        </div>
                        <div className="statone sbb">
                            <h4 className="text-green-600 font-semibold text-[22px] md:text-[26px]">10</h4>
                            <p className="font-semibold text-sm md:text-base">Partners</p>
                        </div>
                        <div className="statone sbb">
                            <h4 className="text-green-600 font-semibold text-[22px] md:text-[26px]">10</h4>
                            <p className="font-semibold text-sm md:text-base">Turnover</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* the third block  ICON DETAILS */}


            <div className="three px-[10%] md:px-[17%] py-[20px] lg:py-[40px] flex flex-col lg:flex-row gap-[20px]">
                <div className="threeone flex gap-[20px]">
                    <div className="threeicon">
                        <span className="thic"><FontAwesomeIcon icon={faThumbsUp}/></span>
                    </div>
                    <div className="threecap">
                        <h2 className="font-semibold">Best Taxation Service</h2>
                        <p className="mt-[10px] text-sm md:text-base">Strategic planning,line of business application tax support,
                         staff structure, marketing strategy and more</p>
                    </div>
                </div>
                <div className="threeone flex gap-[20px]">
                    <div className="threeicon">
                        <span  className="thic"><FontAwesomeIcon icon={faChartLine}/></span>
                    </div>
                    <div className="threecap">
                        <h2 className="font-semibold">Effecient Outsourced Services</h2>
                        <p className="mt-[10px] text-sm md:text-base">Cash flow management, financial modelling and analysis, risk management, loans and financing and more</p>
                    </div>
                </div>
                <div className="threeone flex gap-[20px]">
                    <div className="threeicon">
                        <span  className="thic"><FontAwesomeIcon icon={faUser}/></span>
                    </div>
                    <div className="threecap">
                        <h2 className="font-semibold">Competent Advisory</h2>
                        <p className="mt-[10px] text-sm md:text-base">Financial reporting, cost center tracking, budgeting/forecasting, estate planning, budget planning and more</p>
                    </div>
                </div>
            </div>



            {/* the fourth block PROBLEMS */}




            <div className="four text-slate-50 h-[400px] bg-teal-200 text-center flex flex-col justify-center lg:items-center px-[17%]">
                <h2 className="mb-[20px] text-[28px] font-semibold lg:w-[40%]">Solve All Your Tax Problems Under One Room </h2>
                <p className="mb-[20px] text-sm md:text-base lg:w-[40%]"> Whether you are a one-person shop or a multinational corporation, or anything in between, ledger pro can build a solution to meet you needs</p>
                <button className="border-4 text-bold mx-auto w-[150px] border-green-600 h-[45px] rounded-[25px] ">Discover More</button>
            </div>



            {/* the fifth block  OFFER*/}




            <div className="five py-[30px] lg:py-[70px] text-center flex flex-col lg:flex-row lg:justify-start justify-center lg:items-center px-[17%]">
                <div className="fiveone lg:w-[40%]">
                    <h3 className="mb-[20px] text-sm lg:text-left  md:text-base text-green-600 font-semibold">WHAT WE OFFFER </h3>
                    <h2 className="mb-[20px] text-xl md:text-2xl lg:text-left font-semibold">Professional and Quality Tax Consulting </h2>
                </div>
                <div className="fivetwo lg:flex lg:flex-col lg:text-left">
                    <p className="mb-[20px] text-sm md:text-base lg:w-[80%]">e are in a fast moving and significant regulatory 
                    development environment. We understand the impact of these
                     developments in your business operations and transactions</p>
                    <button className="bbb mx-auto lg:mx-[0]">ALL SERVICES</button>
                </div>
            </div>



            {/* the sixth block  SERVICE CARDS*/}




            <div className="six bg-gray-100 flex py-[30px] flex-col md:flex-row md:flex-wrap lg:justify-center lg:px-[15%] items-center justify-center gap-[30px]">
                <div className="sixone md:w-[40%] lg:w-[30%] xl:w-[30%px] bg-slate-50 flex flex-col justify-center items-center w-[90%] shadow-md p-[20px] gap-[10px] lg:gap-[25px]">
                    <div className="s1">
                        <span className="text-3xl text-green-600"><FontAwesomeIcon icon={faFile}/></span>
                    </div>
                    <div className="s2 text-xl font-semibold">
                        <h2 className="">Tax</h2>
                    </div>
                    <div className="s3 text-center text-sm md:text-base">
                        <p>We offer tax consulting, help with tax return filing, and answer anY questions or concerns the tax authority may have.</p>
                    </div>
                    <div className="s4">
                        <button className="bbb">LEARN MORE</button>
                    </div>
                </div>
                <div className="sixone md:w-[40%] lg:w-[30%] xl:w-[30%] bg-slate-50 flex flex-col justify-center items-center w-[90%] shadow-md p-[20px] gap-[10px] lg:gap-[25px]">
                    <div className="s1">
                        <span className="text-3xl text-green-600"><FontAwesomeIcon icon={faPercent}/></span>
                    </div>
                    <div className="s2 text-xl font-semibold">
                        <h2 className="">Outsourced Services</h2>
                    </div>
                    <div className="s3 text-center text-sm md:text-base">
                        <p>We relieve you of the responsibility for financial management,
                            compliance, and risk advisory and monitoring</p>
                    </div>
                    <div className="s4">
                        <button className="bbb">LEARN MORE</button>
                    </div>
                </div>
                <div className="sixone md:w-[40%] lg:w-[30%] xl:w-[30%] bg-slate-50 flex flex-col justify-center items-center w-[90%] shadow-md p-[20px] gap-[10px] lg:gap-[25px]">
                    <div className="s1">
                        <span className="text-3xl text-green-600"><FontAwesomeIcon icon={faChartSimple}/></span>
                    </div>
                    <div className="s2 text-xl font-semibold">
                        <h2 className="">Advisory</h2>
                    </div>
                    <div className="s3 text-center text-sm md:text-base">
                        <p>We assist organizations in seizing opportunities 
                            and averting costly errors by offering guidance and knowledge</p>
                    </div>
                    <div className="s4">
                        <button className="bbb">LEARN MORE</button>
                    </div>
                </div>
            </div>




            {/* the seventh block  TEAM*/}



            <div className="seven py-[20px] lg:flex lg:py-[60px] px-[17%] lg:justify-between">
                <div className="sevenone pb-[20px] lg:w-[30%] lg:text-left text-center flex flex-col justify-center ">
                    <h3 className="mb-[20px] text-sm md:text-base text-green-500 font-semibold">MEET OUT TEAM</h3>
                    <h2 className="mb-[20px] font-semibold text-xl md:text-2xl">We are a Team of Proffessionals</h2>
                    <p className="mb-[20px] text-sm md:text-base"> Our team of experienced proffessional accountants, with years in the game, 
                        provide expert services that your busines can benefit from.</p>
                    <button className="bbb mx-auto lg:mx-[0]">ALL MEMBERS</button>
                </div>
                <div className="seventwo py-[20px] flex md:flex-row md:justify-center lg:justify-center md:flex-wrap flex-col gap-[20px]">
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



            {/* the eight block  CARING*/}


            <div className="eight h-[400px] bg-gray-700 text-center flex flex-col justify-center lg:items-start px-[17%] text-slate-50">
                <h2 className="mb-[20px] text-2xl font-semibold lg:text-3xl lg:w-[35%] lg:text-left">Caring For Your Taxes, So You Don’t Have To </h2>
                <p className="mb-[20px] text-sm md:text-base lg:w-[45%] lg:text-left"> We take care of your books so that you can focus on the core aspect of your business.
                     No need to balance numbes on a book anymore or wonder why numbers are not adding up, 
                      let us stress about the numbers for you.</p>
                <button className="bbb mx-auto lg:mx-[0]">DISCOVER MORE</button>
            </div>



            {/* the ninth block  REVIEWS*/}


            <div className="nine px-[17%] flex flex-col gap-[30px] py-[20px] lg:py-[50px]">
                <div className="nineone">
                    <h3 className="mb-[10px] text-sm md:text-base text-green-500 font-semibold">TESTIMONIALS</h3>
                    <h2 className="mb-[10px] text-xl font-semibold md:text-2xl">Our clients Reviews</h2>
                    <p className="text-sm md:text-base"> Listen from our valued clients on how we served them and their businesses.</p>
                </div>
                <div className="ninetwo flex lg:justify-between justify-center items-center gap-[30px] text-sm md:text-base">
                    <div className="t1 flex flex-col md:w-[40%] lg:w-[30%] gap-[20px] shadow-md p-[15px]">
                        <div className="ttext text-gray-600">
                            <p> "Very proffessional, efficient and quick turnaround for filing returns. 
                            I wish we knew them sooner" </p>
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
                    <div className="t1 hidden md:flex flex flex-col md:w-[40%] lg:w-[30%] gap-[20px] shadow-md p-[15px]">
                        <div className="ttext text-gray-600">
                            <p> "Everyone on the team was so helpful and kind, considering I am a new business and I didn't know how to go through all the paperwork" </p>
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
                    <div className="t1 hidden lg:flex flex flex-col md:w-[40%] lg:w-[30%] gap-[20px] shadow-md p-[15px]">
                        <div className="ttext text-gray-600">
                            <p> "I am extremely happy with the quality of service and personalised tax services that they have provided my businesses" </p>
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



            {/* the tenth block SIGN UP  */}




            <div className="ten bg-teal-100 px-[17%] py-[30px] lg:py-[60px] flex flex-col lg:flex-row lg:justify-between gap-[30px] text-sm md:text-base">
                <div className="tenone lg:w-[40%] text-xl md:text-2xl lg:font-semibold md:w-[80%] md:text-center lg:text-left">
                    <p>Signup out newsletter to get udpdate information, insights or news</p>
                </div>
                <div className="tentwo flex lg:items-center">
                    <div>
                        <input className="h-[40px] lg:h-[50px] px-[14px] rounded-[30px] lg:w-[450px]" type="text" placeholder="Enter your email" />
                    </div>
                    <div>
                        <button className="bbb ml-[-40px] lg:ml-[20px]">Signup</button>
                    </div>
                </div>

            </div>



            {/* the eleventh block  - FOOTER */}





           


            



        </div>
        );
}
 
export default Home
