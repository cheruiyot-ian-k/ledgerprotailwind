import Aboutmain from "./Aboutmain";




const Team = () =>{


    return(
        <div className="Team">
            <div className="teamimp">
                <Aboutmain/>
            </div>

            <div className="teamdet px-[10%] pb-[50px] text-sm lg:pt-[40px] w-screen lg:flex lg:flex-col lg:items-end bg-blue-100 pt-[150px]">
                <div className="team-cont lg:w-[65]">

                
                    <div className="teamdett">
                        <h3>About the Team</h3>
                        <p>We are comprising of a team of proffesionals</p>
                    </div>

                    <div className="teampicture pt-[50px] flex flex-col lg:flex-row md:flex-row gap-[30px]">

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

            </div>

    
        </div>
    )
    }
    
    export default Team;