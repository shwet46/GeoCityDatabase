import React, { PureComponent } from 'react'

class Hero extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="flex max-w-fit max-md:text-center flex-col items-center justify-center md:flex-row  ps-20 mt-8 max-md:ps-4 max-md:mt-6">
            
            <div>
              <div className="md:w-[500px]">
                <h1 className="inline-flex items-center text-5xl font-email font-semibold max-md:text-2xl max-md:mt-4 max-md:mx-2">
                  Comprehensive City Characteristics Database
                </h1>
                <p className="mt-8 text-sm font-reg text-gray-600 max-md:text-xs max-md:mt-4 max-md:mx-2 ">
                  GeoCityDatabase simplifies access to a comprehensive city characteristic database, offering information on various nations and regions worldwide. Our platform is an excellent resource for academics, analysts, and others seeking accurate and current information worldwide.
                </p>
                <div className="mt-4 max-md:mt-2">
                 <button className="btn btn-primary shadow-sm bg-sky-700 px-4 py-3 text-white rounded-md text-xs my-3 hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black max-md:text-[10px]  max-md:px-3 max-md:py-[8px]">View all services</button>
                </div>
                
              </div>
            </div>
            <div className="md:h-[px] md:w-[330px] me-20 ms-8 my-14 max-md:w-[160px] max-md:me-4 max-md:ms-2 max-md:my-4 max-md:pb-2">
              <img
                src="src/photos/globe.jpg"
                alt="Laptop"
                className="h-full w-full rounded-md object-cover"
              />
            </div>
          </div>
           
        )
    }
}

export default Hero