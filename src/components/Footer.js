import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faContactBook, faLocationPin, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () =>{

    return(
        <div className="footer">
             <div className="eleven flex flex-col lg:flex-row lg:justify-between  gap-[30px] px-[17%] py-[30px] lg:py-[60px] bg-neutral-900 text-slate-50 ">
                <div className="elevenone flex flex-col lg:w-[35%] gap-[20px]">
                   <div>
                    <h3 className="font-mono text-sm md:text-xl font-bold"><span className="text-green-600 md:text-2xl"> Ledgerpro </span> business consultants</h3>
                   </div>
                   <div className="text-sm">
                        <p>Our tax compliant services offerings include advice on timing and amounts
                                    of taxes payable, computation of tax as well as preparation and filing of returns</p>
                   </div>
                   <div className="flex gap-[10px] justify-around text-[26px] lg:text-[18px] lg:w-[50%]">
                        <div><FontAwesomeIcon icon={faFacebook}/></div>
                        <div className="border-l-2 border-green-600"></div>
                        <div><FontAwesomeIcon icon={faInstagram}/></div>
                        <div className="border-l-2 border-green-600"></div>
                        <div><FontAwesomeIcon icon={faTwitter}/></div>
                        <div className="border-l-2 border-green-600"></div>
                        <div><FontAwesomeIcon icon={faLinkedin}/></div>
                   </div>
                </div>
                <div className="elevencont lg:justify-between lg:w-[55%] flex flex-col gap-[30px] md:flex-row md:justify-between">

                
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
                            <p>Outsource Services</p>
                        </div>
                    </div>
                    <div className="etw flex gap-[14px]">
                        <div className="etic">

                        </div>
                        <div className="ettwo">
                            <p>Advisory</p>
                        </div>
                    </div>
                </div>
                <div className="eleventwo text-sm md:text-base flex flex-col gap-[6px]">
                    <div className="text-xl font-semibold"><h3>Quick Links</h3></div>
                    <div className="etw flex gap-[14px]">
                        <div className="etic">

                        </div>
                        <div className="ettwo">
                            <p>Home</p>
                        </div>
                    </div>
                    <div className="etw flex gap-[14px]">
                        <div className="etic">

                        </div>
                        <div className="ettwo">
                            <p>About Us</p>
                        </div>
                    </div>
                    <div className="etw flex gap-[14px]">
                        <div className="etic">

                        </div>
                        <div className="ettwo">
                            <p>Services</p>
                        </div>
                    </div>
                </div>
                <div className="eleventwo text-sm md:text-base flex flex-col gap-[6px]">
                    <div className="text-xl font-semibold"><h3>Contact Us</h3></div>
                    <div className="etw flex gap-[14px]">
                        <div className="text-green-500">
                            <span><FontAwesomeIcon icon={faContactBook}/></span>
                        </div>
                        <div className="ettwo">
                            <p>+254722658806</p>
                        </div>
                    </div>
                    <div className="etw flex gap-[14px]">
                        <div className="text-green-500">
                             <span><FontAwesomeIcon icon={faLocationPin}/></span>
                        </div>
                        <div className="ettwo">
                            <p>Repen Complex, Nairobi</p>
                        </div>
                    </div>
                    <div className="etw flex gap-[14px]">
                        <div className="text-green-500">
                            <span><FontAwesomeIcon icon={faMailBulk}/></span>
                        </div>
                        <div className="ettwo">
                            <p>info@ledgerpro.co.ke</p>
                        </div>
                    </div>
                </div>

                </div>
            
            </div>

            <div className=" bg-neutral-900 lg:pb-[10px]">   
                <div className="border-t border-green-500 lg:mx-[17%]">

                </div>

            </div>


            {/* still footer  */}

            <div className="twelve flex flex-col lg:flex-row justify-center items-center bg-neutral-900 text-slate-50 py-[20px] text-sm md:text-base  ">
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

export default Footer;