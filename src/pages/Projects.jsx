import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import styled, {keyframes} from 'styled-components'
const animatedBackground = keyframes`
  0% { background-position: 0 0; }
  50% { background-position: 100% 100%; }
  66%  {background-position: 100% 100%; }
  100% { background-position: 0 0; }
`;

const AnimatedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(270deg, grey, #F0F0FF, black);
  background-size: 1000% 400%;
  animation: ${animatedBackground} 10s ease infinite;
  z-index: -1;
`;

const Projects = () => {
  return (
    <>
    <AnimatedBackground />
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='text-gradient drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        On my Projects Page below, you'll find a curated collection of programming projects that,
        while not numerous, have significantly contributed to my growth as a desired software engineer. Every
        Project displayed has a bigger scope of challenges which has enhanced my critical thinkng and problem solving skills.
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
    </>
  );
};

export default Projects;
