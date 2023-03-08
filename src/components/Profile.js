import Aboutmain from "./Aboutmain";


const Profile = () =>{


    return(
        <div className="Profile">
            <div className="profimport">
                <Aboutmain/>
            </div>

            <div className="profmain lg:pt-[40px] w-screen lg:flex lg:flex-col lg:items-end pt-[150px] px-[10%] text-sm bg-neutral-100 pb-[60px]">
                <div className="procontmain lg:w-[65%]">

                
                <h3>Welcome to ledgerpro consultants Business accountants</h3>

                <p>Ledgerpro Business Consultants provides professional accountancy, business advisory, tax
                     and other government statutory services. <br /> <br />
                        Specifically, managing the tax and other statutory compliance obligations of your 
                        corporation(s), and preparing and filing the personal tax returns for the owner or directors and their family. <br /> <br />

                        The firm is dedicated to providing quality services to its clients so that they can achieve their goals. 
                        This is accomplished by obtaining an in-depth knowledge of the client’s business and establishing
                         a strong vantage point from which to provide customized services. By using the latest information
                          technology, such as paperless filing systems, encrypted email services, and professional
                           accounting and tax software, the quality of service remains high for clients. <br /> <br />

                        Ledgerpro is able to support clients in  <br /> <br />
                        Construction. <br />
                        Manufacturing. <br />
                        Independent Consultants in other professions, <br />
                        Oil and Gas, <br />
                        Information Technology <br />
                        Traders, <br />
                        Hospitality, <br />
                        Schools. <br />
                        Transport and Logistic Services. <br />
                </p>

                </div>

            </div>
        </div>
    )
    }
    
    export default Profile;