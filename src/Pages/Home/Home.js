import React from 'react'
import "./Home.css"
import Banner from '../../Component/Banner/Banner'
import Testimo from '../../Component/Testimo/Testimo'
import Need from '../../Component/Need/Need'
import Work from '../../Component/Work/Work'
import ChooseUs from '../../Component/ChooseUs/ChooseUs'
import News from '../../Component/News/News'
import AboutUs from '../../Component/AboutUs/AboutUs'
import HCategory from '../../Component/HCategory/HCategory'
import Walkthrough from '../../Component/Walkthrough/Walkthrough'

const Home = () => {
    return (<>

        <div className="home">
            <Banner />
            <ChooseUs />
            <HCategory/>
            {/* <AboutUs /> */}
            <Need />
            <Work />
            <Testimo />
            <Walkthrough/>
            <News />
        </div>

    </>
    )
}

export default Home
