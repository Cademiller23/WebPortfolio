import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      //  bg-gradient-to-r from-blue-400 to-blue-600 This is for linearGradient
      <h1 className='sm:text-xl sm:leading-snug text-center  py-4 px-8 grey-gradient mx-5 rounded-lg shadow-lg hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
  Hi, I'm
  <span className='font-semibold mx-2 text-gradient shadow-sm'>Cade Miller</span>
  <br />
  Welcome To My Website!
</h1>
    );
    if (currentStage === 2) {
      return (
        <div> 
          <h1 className="sm:text-xl sm:leading-snug text-center py-4 px-8 grey-gradient mx-5 rounded-lg shadow-lg hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            Devoted Algorithm
            <br />
            Architect
          </h1>
          <Link to="/about" className="sm:text-xl sm:leading-snug text-center py-4 px-8 grey-gradient mx-5 rounded-lg shadow-lg hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" style={{ marginTop: '20px', textDecoration: 'none' }}>
            Click to learn more
         {/*  <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />*/}  
          </Link>
        </div>
      );
    }

    if (currentStage === 3) {
      return (
        <div> 
          <h1 className="sm:text-xl sm:leading-snug text-center py-4 px-8 grey-gradient mx-5 rounded-lg shadow-lg hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            Crafting Tomorrow's
            <br />
            Code Today
          </h1>
          <Link to="/projects" className="sm:text-xl sm:leading-snug text-center py-4 px-8 grey-gradient mx-5 rounded-lg shadow-lg hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" style={{ marginTop: '20px', textDecoration: 'none' }}>
            Click to see
            <br/>
            my projects
         {/*  <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />*/}  
          </Link>
        </div>
      );
    }

    if (currentStage === 4) {
      return (
        <div> 
          <h1 className="sm:text-xl sm:leading-snug text-center py-4 px-8 grey-gradient mx-5 rounded-lg shadow-lg hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            Seeking Collaborative
            <br />
            Ventures
          </h1>
          <Link to="/contact" className="sm:text-xl sm:leading-snug text-center py-4 px-8 grey-gradient mx-5 rounded-lg shadow-lg hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" style={{ marginTop: '20px', textDecoration: 'none' }}>
            Click to
            <br/>
            contact me
         {/*  <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />*/}  
          </Link>
        </div>
      );
    }

  return null;
};

export default HomeInfo;
