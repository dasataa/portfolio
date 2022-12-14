import googleclone from '../public/googleclone.png';
import huluclone from '../public/huluclone.png';
import weatherapp from '../public/weatherapp.png';
import Image from 'next/image';
import { CodeIcon } from '@heroicons/react/outline';

export const Projects = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center '>
        <h1 className='text-3xl font-medium text-indigo-500'>Projects</h1>

        <p className='text-gray-600 text-md mt-4 text-center'>
          Here are some Projects I have been woriking on so far.
        </p>
      </div>

      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4'>
            <div className='p-4 md:w-1/3'>
              <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                <Image
                  className='lg:h-48 md:h-36 w-full object-cover object-center'
                  src={googleclone}
                  alt='google image'
                />
                <div className='p-6'>
                  <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
                    #nexjs #tailwindcss #searchApi
                  </h2>
                  <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                    Google Search Clone
                  </h1>
                  <p className='leading-relaxed mb-3'>
                    Google Search clone using NextJS, Tailwind-CSS, and Google’s
                    search results Api.
                  </p>
                  <div className='flex items-center flex-wrap '>
                    <a
                      className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer'
                      href='https://google-cloneee.netlify.app'
                      target='_blank'
                    >
                      View demo
                      <svg
                        className='w-4 h-4 ml-2'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        stroke-width='2'
                        fill='none'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      >
                        <path d='M5 12h14'></path>
                        <path d='M12 5l7 7-7 7'></path>
                      </svg>
                    </a>

                    <a
                      className='ml-3 text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer'
                      href='https://github.com/dasataa/google-clone'
                      target='_blank'
                    >
                      View Code
                      {/* <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg> */}
                      <CodeIcon className='w-5 h-5 ml-2' />
                    </a>
                    {/* <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                
                
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span> */}
                    {/* <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span> */}
                  </div>
                </div>
              </div>
            </div>

            <div className='p-4 md:w-1/3'>
              <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                <Image
                  className='lg:h-48 md:h-36 w-full object-cover object-center'
                  src={weatherapp}
                  alt='google image'
                />
                <div className='p-6'>
                  <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
                    #nexjs #tailwindcss #openweathermap.orgApi
                  </h2>
                  <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                    Weather App
                  </h1>
                  <p className='leading-relaxed mb-3'>
                    Weather App using NextJS, Tailwind-CSS, and
                    openweathermap.org Api.
                  </p>
                  <div className='flex items-center flex-wrap '>
                    <a
                      className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer'
                      href='https://weather-appe.netlify.app'
                      target='_blank'
                    >
                      View demo
                      <svg
                        className='w-4 h-4 ml-2'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        stroke-width='2'
                        fill='none'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      >
                        <path d='M5 12h14'></path>
                        <path d='M12 5l7 7-7 7'></path>
                      </svg>
                    </a>

                    <a
                      className='ml-3 text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer'
                      href='https://github.com/dasataa/weather-app'
                      target='_blank'
                    >
                      View Code
                      {/* <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg> */}
                      <CodeIcon className='w-5 h-5 ml-2' />
                    </a>
                    {/* <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                
                
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span> */}
                    {/* <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span> */}
                  </div>
                </div>
              </div>
            </div>

            <div className='p-4 md:w-1/3'>
              <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                <Image
                  className='lg:h-48 md:h-36 w-full object-cover object-center'
                  src={huluclone}
                  alt='google image'
                />
                <div className='p-6'>
                  <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
                    #nexjs #tailwindcss #themoviedb.orgApi
                  </h2>
                  <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                    Hulu Clone
                  </h1>
                  <p className='leading-relaxed mb-3'>
                    Hulu clone using NextJS, Tailwind-CSS, and themoviedb.org
                    Api.
                  </p>
                  <div className='flex items-center flex-wrap '>
                    <a
                      className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer'
                      href='https://hulu-clonee.netlify.app'
                      target='_blank'
                    >
                      View demo
                      <svg
                        className='w-4 h-4 ml-2'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        stroke-width='2'
                        fill='none'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      >
                        <path d='M5 12h14'></path>
                        <path d='M12 5l7 7-7 7'></path>
                      </svg>
                    </a>

                    <a
                      className='ml-3 text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer'
                      href='https://github.com/dasataa/hulu-clone'
                      target='_blank'
                    >
                      View Code
                      {/* <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg> */}
                      <CodeIcon className='w-5 h-5 ml-2' />
                    </a>
                    {/* <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                
                
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span> */}
                    {/* <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
