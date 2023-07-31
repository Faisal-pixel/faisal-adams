import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {BsFillMoonStarsFill} from "react-icons/bs"
import {AiFillTwitterCircle, AiFillLinkedin, AiFillMail, AiFillGithub} from "react-icons/ai";
import faisal from "../public/Faisal-wave.png"
import design from "../public/design.png"
import code from "../public/code.png"
import consulting from "../public/consulting.png"
import balmid from "../public/balmid.png"
import web2 from "../public/web2.png"
import web3 from "../public/web3.png"
import web4 from "../public/web4.png"
import web5 from "../public/web5.png"
import web6 from "../public/web6.png"
import { useState } from 'react';
import ExternalLink from '../public/external-link.svg';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Faisal Adams Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`bg-white px-5 center md:px-20 lg:px-40 ${darkMode && "main bg-primary"}`}>
        <section className=' min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className=' text-xl font-burtons'>Code Crushed</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill className=' cursor-pointer text-2xl' onClick={() => setDarkMode(!darkMode)}/> </li>
              <li><a href="https://drive.google.com/file/d/1Cv94ub0zrqQDU7yQPCxJUCzIEw4NCZlh/view?usp=sharing" target="blank" download className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>Resume</a></li>
            </ul>
          </nav>

          <div className='text-center sm:p-10'>
            <h2 className='text-4xl py-2 text-teal-600 font-medium md:text-6xl dark:text-orange-400'>Faisal Adams</h2>
            <h3 className=' text-2xl py-2 md:text-3xl'>Developer and designer.</h3>
            <p className=' text-md py-5 leading-7 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white'>I am a problem solver with over three years of coding experience building, and creating amazing web experiences for agro businesses and schools. I am passionate about web technologies and developer communities. I am also really interested in ML and AI aspect so i began my self study on python. Time not spent infront of a computer is spent binging 24 hours, yes the well known Jack bauer, or defending the honor of amala as the best swallow in Africa( I hope Bami forgives me for this, but we on the same team lol).</p>
          </div>

          <div className='text-5xl flex justify-center sm:gap-16 py-3 text-gray-600'>
              <a href='https://twitter.com/code_crushed'><AiFillTwitterCircle className=' cursor-pointer'/></a>
              <a href='https://www.linkedin.com/in/faisal-adams-921aa5196/'><AiFillLinkedin className=' cursor-pointer'/></a>
              <a href='mailto:adamsfaisal2003@gmail.com'><AiFillMail className=' cursor-pointer'/></a>
              <a href='https://github.com/Faisal-pixel'><AiFillGithub className=' cursor-pointer'/></a>
          </div>
          <div className='relative container mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 sm:w-80 sm:h-80 mt-20 mb-20 overflow-hidden'>
              <Image src={faisal} layout="fill" objectFit='cover'/>
          </div>
        </section>



        <section>
            <div>
              <h3 className='text-3xl py-1'>Services I offer</h3>
              <p className='text-md py-2 leading-8 text-grey-800'>Since the beginning of my jounrey as a freelance designer and developer, I&apos;ve done remote work for <span className=' text-teal-500'>Agro businesses, schools, startups</span> and collaborated with talented people to create digital products for a better user experience.</p>
            </div>
            <div className='lg:flex gap-10'>
              <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                <Image src={design} width={100} height={100} className="mx-auto"/>
                <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
                <p className='py-2'>Developing nice and lovely designs suited for your needs following code design theory.</p>
                <h4 className='py-4 text-teal-600'>Design tools I use</h4>
                <p className=' text-gray-800 py-1 dark:text-white'>Figma</p>
              </div>

              <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                <Image src={code} width={100} height={100} className="mx-auto"/>
                <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
                <p className='py-2'>Developing nice and lovely designs suited for your needs following code design theory.</p>
                <h4 className='py-4 text-teal-600'>Design tools I use</h4>
                <div className='flex flex-wrap gap-1 text-sm'>
                  <p className=' text-gray-800 py-0.5 px-1  border-solid border-2 rounded-md dark:text-white'>Html</p>
                  <p className=' text-gray-800 py-0.5 px-1  border-solid border-2 rounded-md dark:text-white'>CSS</p>
                  <p className=' text-gray-800 py-0.5 px-1  border-solid border-2 rounded-md dark:text-white'>JavasScript</p>
                  <p className=' text-gray-800 py-0.5 px-1  border-solid border-2 rounded-md dark:text-white'>Bootstrap</p>
                  <p className=' text-gray-800 py-0.5 px-1  border-solid border-2 rounded-md dark:text-white'>jQuery</p>
                  <p className=' text-gray-800 py-0.5 px-1  border-solid border-2 rounded-md dark:text-white'>Scss</p>
                  <p className=' text-gray-800 py-0.5 px-1  border-solid border-2 rounded-md dark:text-white'>Tailwindcss</p>
                  <p className=' text-gray-800 py-0.5 px-1  border-solid border-2 rounded-md dark:text-white'>Nodejs</p>
                  <p className=' text-gray-800 py-0.5 px-1  border-solid border-2 rounded-md dark:text-white'>Redux</p>
                  <p className=' text-gray-800 py-0.5 px-1  border-solid border-2 rounded-md dark:text-white'>Nextjs</p>
                  <p className=' text-gray-800 py-0.5 px-1  border-solid border-2 rounded-md dark:text-white'>Typescript</p>
                </div>
              </div>
            </div>
        </section>


        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-orange-400'>Portfolio</h3>
            <p className=' text-md py-2 leading-8 text-gray-800 dark:text-white'>I offer from a wide range of services, like devloping user end interface of websites, teaching programming in schools and freelancing</p>
          </div>

          <div className='flex flex-col center gap-10 py-10 lg:flex-row lg:flex-wrap'>

            <div className='basis-1/4 py-8 px-7 flex-1 rounded-md bg-zinc-50 dark:bg-badge shadow-sm box-border'>

              <div>
                <div className=' flex row justify-between'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder text-3xl text-orange" data-v-3857230a=""><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                  <a href='https://code-crushed-wears.netlify.app' target="blank" className='transition ease-in-out hover:scale-150 hover:text-orange-400 cursor-pointer'><svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                </div>
                <h2 className=' text-teal-500 font-semibold text-2xl mt-5 mb-2 font-burtons dark:text-white'>Code Crushed wears</h2>
                <p className=' text-gray-800 dark:text-zinc-300'>This is my first major React project. Created an ecommerce site. Code crushed wears allows you to order different clothings and pay for them online.</p>
              </div>
              <div className=' mt-3 flex row flex-wrap gap-2'>
                <span className=' rounded-md py-0.5 px-1 border-2 border-gray-700'>ReactJs</span>
                <span className=' rounded-md py-0.5 px-1 border-2 border-gray-700'>Firebase</span>
                <span className=' rounded-md py-0.5 px-1 border-2 border-gray-700'>Html</span>
                <span className=' rounded-md py-0.5 px-1 border-2 border-gray-700'>Styled components</span>
                <span className=' rounded-md py-0.5 px-1 border-2 border-gray-700'>Sass</span>
              </div>

            </div>

            <div className='basis-1/4 py-8 px-7 flex-1 rounded-md bg-zinc-50 dark:bg-badge shadow-sm box-border'>

              <div>
                <div className=' flex row justify-between'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder text-3xl text-orange" data-v-3857230a=""><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                  <a href='https://faisal-pixel.github.io/monster-rolodex-app/' target="blank" className='transition ease-in-out hover:scale-150 hover:text-orange-400 cursor-pointer'><svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                </div>
                <h2 className=' text-teal-500 font-semibold text-2xl mt-5 mb-2 font-burtons dark:text-white'>Monsters Rolodex</h2>
                <p className=' text-gray-800 dark:text-zinc-300'>This is my first React project. Created a landing page with a list of monsters. This project was to test my React skills.</p>
              </div>
              <div className=' mt-3 flex row flex-wrap gap-2'>
                <span className=' rounded-md py-0.5 px-1 border-2 border-gray-700'>ReactJs</span>
                <span className=' rounded-md py-0.5 px-1 border-2 border-gray-700'>Sass</span>
                <span className=' rounded-md py-0.5 px-1 border-2 border-gray-700'>Html</span>
              </div>

            </div>

            <div className='basis-1/4 py-8 px-7 flex-1 rounded-md bg-zinc-50 dark:bg-badge shadow-sm box-border'>

              <div>
                <div className=' flex row justify-between'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder text-3xl text-orange" data-v-3857230a=""><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                  <a href='https://faisal-pixel.github.io/Balmid3/' target="blank" className='transition ease-in-out hover:scale-150 hover:text-orange-400 cursor-pointer'><svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                </div>
                <h2 className=' text-teal-500 font-semibold text-2xl mt-5 mb-2 font-burtons dark:text-white'>Balmid</h2>
                <p className=' text-gray-800 dark:text-zinc-300'>I worked on a agro-business website for a startup called Balmid. It is also mobile friendly</p>
              </div>
              <div className=' mt-3 flex row flex-wrap gap-2'>
                <span className=' rounded-md py-0.5 px-1 border-2 border-gray-700'>Html</span>
                <span className=' rounded-md py-0.5 px-1 border-2 border-gray-700'>CSS</span>
                <span className=' rounded-md py-0.5 px-1 border-2 border-gray-700'>Bootstrap</span>
                <span className=' rounded-md py-0.5 px-1 border-2 border-gray-700'>VanillaJs</span>
              </div>

            </div>

            <div className='basis-1/4 py-8 px-7 flex-1 rounded-md bg-zinc-50 dark:bg-badge shadow-sm box-border'>

              <div>
                <div className=' flex row justify-between'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder text-3xl text-orange" data-v-3857230a=""><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                  <a href='https://faisal-pixel.github.io/Todo-App/' target="blank" className='transition ease-in-out hover:scale-150 hover:text-orange-400 cursor-pointer'><svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                </div>
                <h2 className=' text-teal-500 font-semibold text-2xl mt-5 mb-2 font-burtons dark:text-white'>Todo App</h2>
                <p className=' text-gray-800 dark:text-zinc-300'>This is my first project. It is a very basic Todo app that utilisis local storage to store added todos so as to avoid loosing them.</p>
              </div>
              <div className=' mt-3 flex row flex-wrap gap-2'>
                <span className=' rounded-md py-0.5 px-1 border-2 border-gray-700'>Html</span>
                <span className=' rounded-md py-0.5 px-1 border-2 border-gray-700'>CSS</span>
                <span className=' rounded-md py-0.5 px-1 border-2 border-gray-700'>VanillaJs</span>
              </div>

            </div>

            <div className='basis-1/4 py-8 px-7 flex-1 rounded-md bg-zinc-50 dark:bg-badge shadow-sm box-border'>

              <div>
                <div className=' flex row justify-between'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder text-3xl text-orange" data-v-3857230a=""><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                  <a href='https://faisal-pixel.github.io/Beatmaker-Project/' target="blank" className='transition ease-in-out hover:scale-150 hover:text-orange-400 cursor-pointer'><svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                </div>
                <h2 className=' text-teal-500 font-semibold text-2xl mt-5 mb-2 font-burtons dark:text-white'>Beatmaker project</h2>
                <p className=' text-gray-800 dark:text-zinc-300'>Created a beatmaker project just for fun. It is very basic. Created it to imporve my VanillaJs skills.</p>
              </div>
              <div className=' mt-3 flex row flex-wrap gap-2'>
                <span className=' rounded-md py-0.5 px-1 border-2 border-gray-700'>Html</span>
                <span className=' rounded-md py-0.5 px-1 border-2 border-gray-700'>CSS</span>
                <span className=' rounded-md py-0.5 px-1 border-2 border-gray-700'>VanillaJs</span>
              </div>

            </div>

            <div className='basis-1/4 py-8 px-7 flex-1 rounded-md bg-zinc-50 dark:bg-badge shadow-sm box-border'>

              <div>
                <div className=' flex row justify-between'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder text-3xl text-orange" data-v-3857230a=""><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                  <a href='https://faisal-pixel.github.io/COLORS-PROJECT/' target="blank" className='transition ease-in-out hover:scale-150 hover:text-orange-400 cursor-pointer'><svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                </div>
                <h2 className=' text-teal-500 font-semibold text-2xl mt-5 mb-2 font-burtons dark:text-white'>Color Pallete Generator</h2>
                <p className=' text-gray-800 dark:text-zinc-300'>Created a color pallete generator. Users can generate colors by moving along a slider until they get their preferred color and then copy it by clicking on the color name itself.</p>
              </div>
              <div className=' mt-3 flex row flex-wrap gap-2'>
                <span className=' rounded-md py-0.5 px-1 border-2 border-gray-700'>Html</span>
                <span className=' rounded-md py-0.5 px-1 border-2 border-gray-700'>CSS</span>
                <span className=' rounded-md py-0.5 px-1 border-2 border-gray-700'>VanilaJs</span>
                <span className=' rounded-md py-0.5 px-1 border-2 border-gray-700'>ChromaJs</span>
              </div>

            </div>

            <div className='basis-1/4 max-w-sm py-8 px-7 flex-1 rounded-md bg-zinc-50 dark:bg-badge shadow-sm box-border'>

              <div>
                <div className=' flex row justify-between'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder text-3xl text-orange" data-v-3857230a=""><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                  <a href='https://faisal-pixel.github.io/Photon-Project/' target="blank" className='transition ease-in-out hover:scale-150 hover:text-orange-400 cursor-pointer'><svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                </div>
                <h2 className=' text-teal-500 font-semibold text-2xl mt-5 mb-2 font-burtons dark:text-white'>Photon</h2>
                <p className=' text-gray-800 dark:text-zinc-300'>I worked on a photo generator site. It makes use of pexels api to generate photos based on input from the search box. Users can also generate more pictures using the generate more button.</p>
              </div>
              <div className=' mt-3 flex row flex-wrap gap-2'>
                <span className=' rounded-md py-0.5 px-1 border-2 border-gray-700'>Html</span>
                <span className=' rounded-md py-0.5 px-1 border-2 border-gray-700'>CSS</span>
                <span className=' rounded-md py-0.5 px-1 border-2 border-gray-700'>API</span>
                <span className=' rounded-md py-0.5 px-1 border-2 border-gray-700'>VanillaJs</span>
                <span className=' rounded-md py-0.5 px-1 border-2 border-gray-700'>Async</span>
              </div>

            </div>

            <div className='basis-1/4 max-w-sm py-8 px-7 flex-1 rounded-md bg-zinc-50 dark:bg-badge shadow-sm box-border'>

              <div>
                <div className=' flex row justify-between'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder text-3xl text-orange" data-v-3857230a=""><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                  <a href='https://faisal-react-music-player.netlify.app/' target="blank" className='transition ease-in-out hover:scale-150 hover:text-orange-400 cursor-pointer'><svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                </div>
                <h2 className=' text-teal-500 font-semibold text-2xl mt-5 mb-2 font-burtons dark:text-white'>Study Musicr</h2>
                <p className=' text-gray-800 dark:text-zinc-300'>Created a Music player using react.</p>
              </div>
              <div className=' mt-3 flex row flex-wrap gap-2'>
                <span className=' rounded-md py-0.5 px-1 border-2 border-gray-700'>Html</span>
                <span className=' rounded-md py-0.5 px-1 border-2 border-gray-700'>CSS</span>
                <span className=' rounded-md py-0.5 px-1 border-2 border-gray-700'>VanilaJs</span>
                <span className=' rounded-md py-0.5 px-1 border-2 border-gray-700'>React</span>
                <span className=' rounded-md py-0.5 px-1 border-2 border-gray-700'>SASS</span>
              </div>

            </div>
            
          </div>
        </section>
      </main>
    </div>
  )
}
