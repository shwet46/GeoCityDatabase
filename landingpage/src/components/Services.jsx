import React, { PureComponent } from 'react'

class Services extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
          <>

            

            

          <div className="flex flex-row max-w-fit max-md:flex-col">  
          <h1 className="my-6 mr-40 max-md:mr-2 text-3xl ps-20 max-md:ps-8 max-md:text-2xl font-semibold">
            Our Sevices
          </h1>
          </div>

          <div className="flex flex-row max-md:flex-col">
          <div className="w-[250px] max-md:w-[160px]  border ml-20 max-md:ml-6 ">
            <img src="src/photos/computer.jpg" alt="Laptop" class="h-[px] w-full  object-cover" />
            <div className="p-4 max-md:p-2">
            <h1 classname="text-lg font-semibold">Global Information</h1>
            <p className="mt-3 max-md:mt-2 max-md:text-xs text-sm text-gray-600 text-balance ">
            Our Global Information service provides a range of information on various nations and regions, including economic indicators, demographics, political enviornment and more, supporting your research ....
            </p>
            <button type="button" 
            className="mt-4 max-md:mt-2 rounded-sm bg-transparent px-2.5 py-1 text-[12px]  text-green-600 shadow-sm hover:bg-white/80 
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
            Read More </button>
            </div>
          </div>

          <div className="w-[250px] max-md:w-[160px] border ml-20 max-md:ml-6 max-md:mt-4">
            <img src="src/photos/map.jpg" alt="Laptop" class="h-[px] w-full  object-cover"/>
            <div className="p-4 max-md:p-2">
            <h1 className="text-lg font-semibold">City Database</h1>
            <p className="mt-3 text-sm text-gray-600 text-balance max-md:mt-2 max-md:text-xs">
            Our City Database provides comprehensive information on cities worldwide, making it an excellent resource for academics, analysts, and others seeking accurate and current information.
            </p>
            <button type="button"
            className="mt-4 max-md:mt-2 rounded-sm bg-transparent px-2.5 py-1 text-[12px]  text-green-600 shadow-sm hover:bg-white/80 
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
            Read More </button>
            </div>
          </div>

          <div className="w-[250px] max-md:w-[160px] border ml-20 max-md:ml-6 max-md:mt-4">
            <img src="src/photos/computer.jpg" alt="Laptop" class="h-[px] w-full  object-cover"/>
            <div className="p-4 max-md:p-2">
            <h1 className="text-lg font-semibold">Data Sourcing</h1>
            <p className="mt-3 text-sm text-gray-600 text-balance max-md:mt-2 max-md:text-xs">
            Our Data Sourcing services provide high quality, accurate and comprehensive datato support your research and analysis needs.
            </p>
            <button type="button"
            className="mt-4 max-md:mt-2 rounded-sm bg-transparent px-2.5 py-1 text-[12px]  text-green-600 shadow-sm hover:bg-white/80 
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
            Read More</button>
            </div>
          </div>   
          </div>
          </> 
        )
    }
}

export default Services