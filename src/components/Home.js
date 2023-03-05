import { faBars, faFile, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Home = () => {
    return ( 
        <div className="home">
            
            {/* the navbar  */}

            <div className="nav flex justify-between px-[10%] py-[20px] bg-gray-200">
                <div className="logonav">
                    <h1>Jether</h1>
                </div>
                <div className="namenav text-[13px]">
                    <h2>Ledgerpro Business Consultants</h2>
                </div>
                <div className="listnav">

                </div>
                <div className="menunav">
                    <FontAwesomeIcon icon={faBars}/>
                </div>

            </div>


            <div className="one h-[400px] bg-gray-400 px-[10%] flex justify-center flex-col">
                <h2 className="mb-[10px]">ledgerpro bueisnes asdc sef dc</h2>
                <p className="mb-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vitae, </p>
                <button className="border w-[140px] h-[50px]"> Contact us</button>
            </div>



            <div className="two flex flex-col flex-col-reverse">
                <div className="twoleft h-[300px] bg-blue-200 flex items-end">
                    <div className="twodet w-[60%] bg-slate-50 shadow-md">
                        <h2>proffessional approach and quality services</h2>
                        <p>Affordable accounting services for every business</p>
                    </div>
                </div>
                <div className="tworight px-[10%] py-[20px]">
                    <div className="trone">
                        <h3 className="mb-[10px]">Who we are</h3>
                        <h2 className="mb-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quidem eum, rerum sit id explicabo facilis tenetur autem, dolores corporis eligendi non atque, recusandae ab provident culpa quo exercitationem totam?</p>
                    </div>
                    <div className="trtwo flex mt-[20px] gap-[30px] justify-center text-center">
                        <div className="statone sbb">
                            <h4>10</h4>
                            <p>Clients</p>
                        </div>
                        <div className="statone sbb">
                            <h4>10</h4>
                            <p>Clients</p>
                        </div>
                        <div className="statone sbb">
                            <h4>10</h4>
                            <p>Clients</p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="three px-[10%] py-[20px] flex flex-col gap-[20px]">
                <div className="threeone flex gap-[20px]">
                    <div className="threeicon">
                        <span><FontAwesomeIcon icon={faThumbsUp}/></span>
                    </div>
                    <div className="threecap">
                        <h2>Best Tax Service</h2>
                        <p className="mt-[10px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam officia cupiditate obcaecati tempore nostrum accusamus.</p>
                    </div>
                </div>
                <div className="threeone flex gap-[20px]">
                    <div className="threeicon">
                        <span><FontAwesomeIcon icon={faThumbsUp}/></span>
                    </div>
                    <div className="threecap">
                        <h2>Best Tax Service</h2>
                        <p className="mt-[10px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam officia cupiditate obcaecati tempore nostrum accusamus.</p>
                    </div>
                </div>
                <div className="threeone flex gap-[20px]">
                    <div className="threeicon">
                        <span><FontAwesomeIcon icon={faThumbsUp}/></span>
                    </div>
                    <div className="threecap">
                        <h2>Best Tax Service</h2>
                        <p className="mt-[10px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam officia cupiditate obcaecati tempore nostrum accusamus.</p>
                    </div>
                </div>
            </div>

            <div className="four h-[400px] bg-teal-200 text-center flex flex-col justify-center px-[10%]">
                <h2 className="mb-[20px]">Solve All Your Problems </h2>
                <p className="mb-[20px]"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusantium reiciendis illum enim totam nesciunt distinctio aliquam repellat doloremque</p>
                <button className="border mx-auto w-[150px] border-red-900 p-[13px] ">Discover More</button>
            </div>


            <div className="five py-[20px] text-center flex flex-col justify-center px-[10%]">
                <h3 className="mb-[20px]">What we offer </h3>
                <h2 className="mb-[20px]">Solve All Your Problems </h2>
                <p className="mb-[20px]"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusantium reiciendis illum enim totam nesciunt distinctio aliquam repellat doloremque</p>
                <button className="border mx-auto w-[150px] border-red-900 p-[13px] ">Discover More</button>
            </div>

            <div className="six bg-gray-100 flex py-[30px] flex-col items-center justify-center gap-[30px]">
                <div className="sixone flex flex-col justify-center items-center w-[90%] shadow-md p-[20px] gap-[10px]">
                    <div className="s1">
                        <FontAwesomeIcon icon={faFile}/>
                    </div>
                    <div className="s2">
                        <h2>Tax</h2>
                    </div>
                    <div className="s3 text-center">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quis ad suscipit laborum optio unde voluptate</p>
                    </div>
                    <div className="s4">
                        <button className="border border-red-900 bg-red-900 text-slate-50 p-[10px]">Learn More</button>
                    </div>
                </div>
                <div className="sixone flex flex-col justify-center items-center w-[90%] shadow-md p-[20px] gap-[10px]">
                    <div className="s1">
                        <FontAwesomeIcon icon={faFile}/>
                    </div>
                    <div className="s2">
                        <h2>Tax</h2>
                    </div>
                    <div className="s3 text-center">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quis ad suscipit laborum optio unde voluptate</p>
                    </div>
                    <div className="s4">
                        <button className="border border-red-900 bg-red-900 text-slate-50 p-[10px]">Learn More</button>
                    </div>
                </div>
                <div className="sixone flex flex-col justify-center items-center w-[90%] shadow-md p-[20px] gap-[10px]">
                    <div className="s1">
                        <FontAwesomeIcon icon={faFile}/>
                    </div>
                    <div className="s2">
                        <h2>Tax</h2>
                    </div>
                    <div className="s3 text-center">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quis ad suscipit laborum optio unde voluptate</p>
                    </div>
                    <div className="s4">
                        <button className="border border-red-900 bg-red-900 text-slate-50 p-[10px]">Learn More</button>
                    </div>
                </div>
            </div>



            <div className="seven py-[20px]">
                <div className="sevenone pb-[20px] text-center flex flex-col justify-center px-[10%]">
                    <h3 className="mb-[20px]">Meet Our Team</h3>
                    <h2 className="mb-[20px]">Solve All Your Problems </h2>
                    <p className="mb-[20px]"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusantium reiciendis illum enim totam nesciunt distinctio aliquam repellat doloremque</p>
                    <button className="border mx-auto w-[150px] border-red-900 p-[13px] ">All members</button>
                </div>
                <div className="seventwo py-[20px] flex flex-col gap-[30px]">
                    <div className="p1 flex flex-col items-center justify-center relative">
                        <div className="p1div bg-gray-200 h-[300px] w-[70%]">
                            <img src="" alt="" />
                        </div>
                        <div className="p1det text-center bg-slate-50 absolute bottom-px p-[10px]">
                            <h2>Ian Jether</h2>
                            <p>Founder and CEO</p>
                        </div>
                    </div>
                    <div className="p1 flex flex-col items-center justify-center relative">
                        <div className="p1div bg-gray-200 h-[300px] w-[70%]">
                            <img src="" alt="" />
                        </div>
                        <div className="p1det text-center bg-slate-50 absolute bottom-px p-[10px]">
                            <h2>Ian Jether</h2>
                            <p>Founder and CEO</p>
                        </div>
                    </div>
                    <div className="p1 flex flex-col items-center justify-center relative">
                        <div className="p1div bg-gray-200 h-[300px] w-[70%]">
                            <img src="" alt="" />
                        </div>
                        <div className="p1det text-center bg-slate-50 absolute bottom-px p-[10px]">
                            <h2>Ian Jether</h2>
                            <p>Founder and CEO</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="eight h-[400px] bg-teal-200 text-center flex flex-col justify-center px-[10%]">
                <h2 className="mb-[20px]">Caring for your taxex </h2>
                <p className="mb-[20px]"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusantium reiciendis illum enim totam nesciunt distinctio aliquam repellat doloremque</p>
                <button className="border mx-auto w-[150px] border-red-900 p-[13px] ">Discover More</button>
            </div>


            <div className="nine px-[10%] flex flex-col gap-[30px] py-[20px]">
                <div className="nineone">
                    <h3 className="mb-[10px]">Testimonials</h3>
                    <h2 className="mb-[10px]">Our clients Reviews</h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusantium reiciendis illum enim totam nesciunt distinctio aliquam repellat doloremque</p>
                </div>
                <div className="ninetwo flex overflow-scroll items-center justify-center gap-[30px]">
                    <div className="t1 w-[80%] flex flex-col gap-[20px] shadow-md p-[15px]">
                        <div className="ttext">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis provident, facere veritatis saepe laudantium tempore doloribus adipisci incidunt labore, </p>
                        </div>
                        <div className="ttdet flex gap-[20px]">
                            <div className="ttimage h-[50px] w-[50px] bg-gray-900 rounded-full">

                            </div>
                            <div className="ttdetts">
                                <h2>Steve Kombo</h2>
                                <p>Finetek</p>
                            </div>
                        </div>
                    </div>
                   
                   
                </div>
            </div>


            



        </div>
        );
}
 
export default Home
