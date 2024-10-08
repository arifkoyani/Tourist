"use client";
import Image from "next/image";
import profilePic from "/public/arif.png";
import b from "/public/b.png";
import e from "/public/e.png";


const Reviews = () => {
 

  return (
    <>
      <div className="flex justify-center items-center h-[210px] bg-[#10623d]">
        <div
          data-aos="zoom-in"
          className=" mx-auto bg-[#128586] text-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-4 text-center border-b pb-4">
            Reviews From Clients
          </h2>
          <p className="text-[15px] leading-relaxed text-center">
            Our clients love us! Here are some of the reviews from our valued
            customers.
          </p>
        </div>
      </div>

      <div className="flex  bg-[#10623d]  pt-[20px] pb-[20px] overflow-hidden relative">
        <div className="flex flex-col md:flex-row gap-5 md:px-5 text-white">

          <div className=" bg-transparent  w-fit text-white rounded-lg shadow-lg p-6 border-4 border-transparent hover:border-[#d78905] transition-all duration-300 relative overflow-hidden">
            <div className="relative flex  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none mx-auto">
              <div className="relative  mx-0 mt-4 flex flex-col items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
                <Image
                  src={profilePic}
                  alt="Profile Picture"
                  width={58}
                  height={58}
                  className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                />
                <div className="flex w-fit flex-col gap-0.5">
                  <div className="flex items-center justify-between">
                    <h6 className="block font-sans  leading-snug tracking-normal text-white ">
                      Alan Simmons
                    </h6>
                    <div className="flex items-center gap-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 text-yellow-700"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        ></path>
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 text-yellow-700"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        ></path>
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 text-yellow-700"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 text-yellow-700"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      {/* Repeat SVG for more stars */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 text-yellow-700"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <p className="block font-sans text-base font-light leading-relaxed text-white antialiased">
                    client from france
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm">
            I was blown away by the level of care and attention Travelatease.tae provided. They went above and beyond to ensure we had a fantastic trip
            </p>

            {/* Animated Border */}
            <div className="absolute inset-0 border-4 border-[#d78905] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>



          




























          

        
          <div className="relative mx-0 mt-4 flex flex-col items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border py-5 px-2   shadow-none">
            <Image
              src={b}
              alt="Profile Picture"
              width={58}
              height={58}
              className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <h6 className="block font-sans leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Satya Nadella
                </h6>
                <div className="flex items-center gap-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <p className="block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">
                Client from USA
              </p>
            </div>
            <p className="text-sm">
              Travelatease.tae is an exceptional travel company that transformed
              our vacation into an unforgettable adventure.
            </p>

            {/* Animated Border */}
            <div className="absolute inset-0 border-4 border-[#d78905] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className="relative mx-0 mt-4 flex flex-col p-2  items-center gap-1 overflow-hidden rounded-xl bg-clip-border  shadow-none">
            <Image
              src={e}
              alt="Profile Picture"
              width={58}
              height={58}
              className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <h6 className="block font-sans leading-snug tracking-normal text-blue-gray-900 antialiased">
                Emily Johnson
                </h6>
                <div className="flex items-center gap-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                
              
                </div>
              </div>
              <p className="block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">
                Client from Italy
              </p>
            </div>
            <p className="text-sm text-white">
            Travelatease.tae made traveling stress-free and enjoyable. Their professional service and attention to detail are unmatched.
            </p>
            {/* Animated Border */}
            <div className="absolute inset-0 border-4 border-[#d78905] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>





          <div className="relative mx-0 mt-4 flex flex-col p-2  items-center gap-1 overflow-hidden rounded-xl bg-clip-border  shadow-none">
            <Image
              src="https://marketplace.canva.com/EAFuJ5pCLLM/1/0/1600w/canva-black-and-gold-simple-business-man-linkedin-profile-picture-BM_NPo97JwE.jpg"
              alt="Profile Picture"
              width={58}
              height={58}
              className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <h6 className="block font-sans leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Tim Cook
                </h6>
                <div className="flex items-center gap-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                
                
              
                </div>
              </div>
              <p className="block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">
                Client from paris
              </p>
            </div>
            <p className="text-sm text-white">
            I was blown away by the level of care and attention Travelatease.tae provided
            </p>
            {/* Animated Border */}
            <div className="absolute inset-0 border-4 border-[#d78905] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>


          <div className="relative mx-0 mt-4 flex flex-col p-2  items-center gap-1 overflow-hidden rounded-xl bg-clip-border  shadow-none">
            <Image
              src={e}
              alt="Profile Picture"
              width={58}
              height={58}
              className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <h6 className="block font-sans leading-snug tracking-normal text-blue-gray-900 antialiased">
                  alan peeter
                </h6>
                <div className="flex items-center gap-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                 
                
              
                </div>
              </div>
              <p className="block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">
                Client from canada
              </p>
            </div>
            <p className="text-sm text-white">
              Travelatease.tae provided an unforgettable travel experience for
              me 
            </p>
            {/* Animated Border */}
            <div className="absolute inset-0 border-4 border-[#d78905] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className="relative mx-0 mt-4 flex flex-col p-2  items-center gap-1 overflow-hidden rounded-xl bg-clip-border  shadow-none">
            <Image
              src="https://images.unsplash.com/photo-1664575600850-c4b712e6e2bf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile Picture"
              width={58}
              height={58}
              className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <h6 className="block font-sans leading-snug tracking-normal text-blue-gray-900 antialiased">
                Sarah Thompson
                </h6>
                <div className="flex items-center gap-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                
              
                </div>
              </div>
              <p className="block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">
                Client from Italy
              </p>
            </div>
            <p className="text-sm text-white">
              Travelatease.tae provided an unforgettable travel experience for
              me and my family.
            </p>
            {/* Animated Border */}
            <div className="absolute inset-0 border-4 border-[#d78905] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>















          
        </div>
      </div>

      

      <span className="mt-5"></span>
    </>
  );
};

export default Reviews;
