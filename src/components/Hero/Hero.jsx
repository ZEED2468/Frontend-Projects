import React from "react";

const Hero = () => {
  const [priceValue, setPriceValue] = React.useState(30);

  return (
    <div className=" bg-black/20 h-full">
      <div className="h-full flex justify-center items-center bg-primary/10">
        <div className="container grid grid-cols-1 gap-4 pt-10">
          <div className="text-white">

       
          <div className="text-center mb-20  mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            </p>
            <h1 className="text-3xl font-bold">ZEED Travel Suite</h1>
            <h4 className="text-xs text-gray-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veronesciunt explicabo a! Laborum delectus aliquam labore, earum rerum quam! Nulla? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, maiores nesciunt? Quis non assumenda, velit iste nam atque animi ex voluptatibus minima cum, nostrum reprehenderit et doloremque labore exercitationem  
          </h4>
          </div>
         
       
          
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="font-bold text-3xl"
            >
              Search Your Destination
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="space-y-4 bg-white rounded-md p-4 relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3">
              <div>
                <label htmlFor="destination" className="opacity-70">
                  Search your Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  placeholder="Nigeria"
                  className="w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
                />
              </div>
              <div className="flex flex-col items-start">
                <label htmlFor="destination" className="opacity-70">
                  Date
                </label>
                <input
                  type="date"
                  name="destination"
                  id="destination"
                  className="w-full placeholder-slate-400 bg-gray-100 my-2 range accent-primary focus:outline focus:outline-none outline-1 rounded-full p-2"
                  style={{ maxWidth: '100%', boxSizing: 'border-box', width: '1rem', height: '2.5rem', fontSize: '1rem' }}
                  />
                  {/* // className="w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-2" */}
              </div>
              <div>
                <label htmlFor="destination" className="opacity-70 block">
                  <div className="w-full flex justify-between items-center">
                    <p> Price</p>
                    <p className="font-bold text-xl">${priceValue}</p>
                  </div>
                </label>
                <div className=" bg-gray-100 rounded-full p-2 flex items-center justify-center ">
                  <input
                    type="range"
                    name="destination"
                    id="destination"
                    className="appearance-none w-full bg-gradient-to-r from-tertiary to-secondary h-2 rounded-full my-2"
                    min="150"
                    max="1000"
                    value={priceValue}
                    step="10"
                    onChange={(e) => setPriceValue(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
