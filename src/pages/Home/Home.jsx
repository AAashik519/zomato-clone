import React, { useState } from 'react'
import Footer from '../../components/common/Footer/Footer';
import Header from '../../components/common/Header/Header';
import TabOptions from '../../components/common/TabOtions/TabOptions';
 
import Delivary from '../../components/Delivary/Delivary';
import DiningOut from '../../components/DiningOut/DiningOut';
import NightLife from '../../components/nightLife/NightLife';

const Home = () => {
    const [activeTab,setActiveTab]=useState('Delivary')

    const getCorrectScrren=(tab)=>{
        switch(tab){
            case "Delivary":
                return <Delivary /> 
                case "Dining Out":
                    return <DiningOut />
                    case "Nightlife" :
                        return <NightLife />

                        default:
                            return <Delivary />
        }
    }
    return (
        <div>
          <Header />
          <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />

            {getCorrectScrren(activeTab)}


          <Footer />
        </div>
    )
}

export default Home;
