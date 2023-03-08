import Aboutmain from './Aboutmain';


const Process = () =>{


    return(
        <div className="process ">
            <div className="proimp">
                <Aboutmain/>

            </div>


            
            <div className="abtwo pt-[150px] lg:pt-[40px] bg-gray-300 px-[10%] text-sm w-screen lg:flex lg:flex-col lg:items-end">

                <div className="abtwocont lg:w-[65%]">

                
                    <div className="promain">
                        <h2 className="text-[22px] mb-[20px]">Our Process</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam assumenda expedita voluptatem eos corporis quis quaerat quisquam beatae? Vel possimus numquam vero soluta dolorum magni, quo aliquam deserunt beatae ratione?</p>
                    </div>

                    <div className="proone mt-[40px] border-b border-gray-600 pb-[40px]">
                        <img className="h-[130px]" src={require('../images/processsteps/step1.png')} alt="" />
                        <h3 className="mt-[20px] mb-[10px] font-semibold">Step 1 - Get Things Started</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus veniam amet eveniet impedit odio quaerat minima vitae similique error et. Cum ullam obcaecati iure, ex praesentium sapiente est quae incidunt!</p>
                    </div>
                    <div className="proone mt-[40px] border-b border-gray-600 pb-[40px]">
                        <img className="h-[130px]" src={require('../images/processsteps/step2.png')} alt="" />
                        <h3 className="mt-[20px] mb-[10px] font-semibold">Step 1 - Get Things Started</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus veniam amet eveniet impedit odio quaerat minima vitae similique error et. Cum ullam obcaecati iure, ex praesentium sapiente est quae incidunt!</p>
                    </div>
                    <div className="proone mt-[40px] border-b border-gray-600 pb-[40px]">
                        <img className="h-[130px]" src={require('../images/processsteps/step3.png')} alt="" />
                        <h3 className="mt-[20px] mb-[10px] font-semibold">Step 1 - Get Things Started</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus veniam amet eveniet impedit odio quaerat minima vitae similique error et. Cum ullam obcaecati iure, ex praesentium sapiente est quae incidunt!</p>
                    </div>
                    <div className="proone mt-[40px] border-b border-gray-600 pb-[40px]">
                        <img className="h-[130px]" src={require('../images/processsteps/step4.png')} alt="" />
                        <h3 className="mt-[20px] mb-[10px] font-semibold">Step 1 - Get Things Started</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus veniam amet eveniet impedit odio quaerat minima vitae similique error et. Cum ullam obcaecati iure, ex praesentium sapiente est quae incidunt!</p>
                    </div>
                    <div className="proone mt-[40px] border-b border-gray-600 pb-[40px]">
                        <img className="h-[130px]" src={require('../images/processsteps/step5.png')} alt="" />
                        <h3 className="mt-[20px] mb-[10px] font-semibold">Step 1 - Get Things Started</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus veniam amet eveniet impedit odio quaerat minima vitae similique error et. Cum ullam obcaecati iure, ex praesentium sapiente est quae incidunt!</p>
                    </div>
                    <div className="proone mt-[40px] border-b border-gray-600 pb-[40px]">
                        <img className="h-[130px]" src={require('../images/processsteps/step6.png')} alt="" />
                        <h3 className="mt-[20px] mb-[10px] font-semibold">Step 1 - Get Things Started</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus veniam amet eveniet impedit odio quaerat minima vitae similique error et. Cum ullam obcaecati iure, ex praesentium sapiente est quae incidunt!</p>
                    </div>

                </div>

            </div>
        </div>
    )
    }
    
    export default Process
;