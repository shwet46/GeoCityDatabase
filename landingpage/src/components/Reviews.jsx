import React, { PureComponent } from 'react'

class Reviews extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <>
            <div class="flex flex-row max-md:flex-col bg-white py-8 ">
                <div class="ml-28 max-md:ml-6 max-md:mr-6 mr-10">
                <div className="flex flex-row content-center justify-center">
                    <img width="20" height="20" src="https://img.icons8.com/color/48/000000/filled-star--v1.png" alt="filled-star--v1"/>
                    <img width="20" height="20" src="https://img.icons8.com/color/48/filled-star--v1.png" alt="filled-star--v1"/>
                    <img width="20" height="20" src="https://img.icons8.com/color/48/filled-star--v1.png" alt="filled-star--v1"/>
                    <img width="20" height="20" src="https://img.icons8.com/color/48/filled-star--v1.png" alt="filled-star--v1"/>
                    <img width="20" height="20" src="https://img.icons8.com/color/48/star-half-empty.png" alt="star-half-empty"/>
                    </div>
                    <p class="mt-4 max-md:text-xs  text-slate-700 text-sm text-balance">
                        GeoCityDatabase's data sourcing services have helped us gain valuable insights into our industry. Thier comprehensive city characteristics database is an excellent resource, and thier team is always helpful and responsive.
                    </p>

                    <div class="flex items-center space-x-2 max-md:space-x-1 mt-4">
                        <img class="inline-block h-10 max-md:h-6 max-md:w-6 w-10 rounded-full" src="src/photos/dp1.jpg" alt="Dan_Abromov"/>
                        <span class="flex flex-col">
                        <span class="text-sm max-md:text-xs font-semibold text-gray-900 uppercase">julie robinson</span>
                        </span>
                    </div>
                </div>

                <div class="mr-24 ml-10 max-md:ml-6 max-md:mr-6 max-md:mt-4">
                <div className="flex flex-row content-center justify-center">
                    <img width="20" height="20" src="https://img.icons8.com/color/48/000000/filled-star--v1.png" alt="filled-star--v1"/>
                    <img width="20" height="20" src="https://img.icons8.com/color/48/filled-star--v1.png" alt="filled-star--v1"/>
                    <img width="20" height="20" src="https://img.icons8.com/color/48/filled-star--v1.png" alt="filled-star--v1"/>
                    <img width="20" height="20" src="https://img.icons8.com/color/48/filled-star--v1.png" alt="filled-star--v1"/>
                    <img width="20" height="20" src="https://img.icons8.com/color/48/star-half-empty.png" alt="star-half-empty"/>
                    </div>
                    <p class="mt-4 max-md:text-xs text-slate-700 text-sm text-balance">
                       We rely on GeoCityDatabase's global information services to support our business decisions. THier platform provides accurate and reliable data, and thier team is always available to assist with our needs.
                    </p>

                    <div class="flex items-center space-x-2 max-md:space-x-1 mt-4">
                        <img class="inline-block h-10 w-10 max-md:h-6 max-md:w-6 rounded-full" src="src/photos/dp1.jpg" alt="Dan_Abromov"/>
                        <span class="flex flex-col">
                        <span class="text-sm font-semibold max-md:text-xs text-gray-900 uppercase">james brook</span>
                        </span>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Reviews