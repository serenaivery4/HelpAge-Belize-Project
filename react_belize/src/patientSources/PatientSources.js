import tropicalBanner from './images/tropicalBanner2.png'
import belize1 from './images/belize1.jpeg'
import belize2 from './images/belize2.jpeg'

import './patientSources.css';

function PatientSources() {
  return (
    <div className="tab">
        <div className="header">
            <div className="banner">
                <div className="title">Patient Sources</div>
                <img src={tropicalBanner} alt="Tropical Banner" className="tropicalBanner"/>
            </div>
        </div>
        <div className="contentWrapper"> 
            <div className="left">
                <div className="content1">
                    content1
                </div>
                <div className="content2">
                    content2
                </div>  
            </div>       
            <div className="content3">
                <img src={belize1} alt="Belize1" className="belize1"/>
                <img src={belize2} alt="Belize2" className="belize2"/>
            </div>
        </div>

    </div> 
  );
}

export default PatientSources;