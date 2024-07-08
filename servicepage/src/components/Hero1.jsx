import React, { PureComponent } from 'react'

class Hero1 extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <>
            <div className="flex flex-col mt-20 max-md:mt-6 content-center items-center">
                <h1 className="font-semibold text-3xl max-md:text-2xl">Data Sourcing</h1>
                <img src="src/images/hero1.jpg" alt="hero" className="h-[500px] w-[500px] mt-10 max-md:h-[180px] max-md:w-[180px]" />
            </div>
            </>
        )
    }
}

export default Hero1