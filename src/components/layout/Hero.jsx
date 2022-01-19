const Hero = () => (
  <div className="bg-gray-100">
    <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
      <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
          Some demo app made for{" "}
          <span className="text-indigo-700">Iconosquare</span>
        </h1>
        <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
          There it is, I don't have time to make a modal to post something on
          the API. The main part is made, I have to optimize some request and
          maybe the cache system. Let me know if you want to see something more.
          I made entirely{" "}
          <a
            className="text-indigo-700 no-underline hover:underline"
            href="https://platform.tresorio.com/signin"
            target="_blank"
            rel="noopener"
          >
            platform.tresorio.com
          </a>{" "}
          which is quite similar !
        </p>
      </div>
    </div>
  </div>
);

export default Hero;
