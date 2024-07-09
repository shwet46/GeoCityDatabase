import React, { PureComponent } from 'react'

class Features extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
            <div className="features  justify-center items-center">
            <div className="flex justify-center items-center my-8 max-md:my-4">
                <div className="flex items-center w-full max-w-screen-lg max-md:max-w-screen-sm mx-auto">
                <div className="flex-grow border-t border-gray-600"></div>
                <span className="mx-2 text-gray-700 uppercase max-md:text-xs">Features & Benefits</span>
                <div className="flex-grow border-t border-gray-600"></div>
                </div>
            </div>

            <div className="flex flex-row max-md:flex-col mb-6">
                <div className="w-[250px] max-md:w-[160px] max-md:ml-6 border ml-20 ">
                <div className="p-4 max-md:p-2">
                <h1 className="text-lg font-semibold max-md:text-base">Features</h1>
                <div className="text-gray-600 text-sm mt-4 max-md:mt-2 max-md:text-xs">
                
                    <ul className=" list-disc list-outside">
                    <li>Comprehensive City Characteristics Database</li>
                    <li>Data sourcing services</li>
                    <li>GLobal information services</li>
                    <li>User-friendly platform</li>
                    <li>Valuable resource for academics and analysts</li>
                    </ul>
                
                </div>
                </div>
                </div>

                <div className="w-[250px] max-md:w-[160px] max-md:ml-6  border ml-12">
                <div className="p-4 max-md:p-2">
                <h1 className="text-lg font-semibold max-md:text-base">Features</h1>
                <div className="text-gray-600 text-sm mt-4 max-md:mt-2 max-md:text-xs">
                
                    <ul className=" list-disc list-outside">
                    <li>Accurate and Up-to-Date information</li>
                    <li>Easy access to valuable data</li>
                    <li>Support for wise judgement and snart studies</li>
                    <li>Reliable insights for various sectors</li>
                    <li>Essential resource for businesses and academia</li>
                    </ul>
                
                </div>
                </div>
                </div>

                <div className="w-[300px] max-md:w-[160px] max-md:ml-6  border ml-12">
                <div className="p-4 max-md:p-3">
                <img src="src/photos/city.jpg" alt="Laptop" class="h-[px] w-full rounded-md object-cover" />
                </div>
                </div>
            </div>
            </div>
            </div>
            </>
        )
    }
}

export default Features