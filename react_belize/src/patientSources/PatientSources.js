import tropicalBanner from './images/tropicalBanner.jpeg'

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
            <div className="content1">
                content1
            </div>
            <div className="content2">
                content2
            </div>
            <div className="content3">
                content3
            </div>
        </div>

    </div> 
  );
}

export default PatientSources;