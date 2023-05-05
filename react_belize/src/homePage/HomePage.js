import tropicalBanner from '../patientSources/images/tropicalBanner2.png';

import './homePage.css';

function HomePage() {
  return (
    <div className="tab">
        <div className="header">
            <div className="banner">
                <div className="title">Home Page</div>
                <img src={tropicalBanner} alt="Tropical Banner" className="tropicalBanner"/>
            </div>
        </div>
        <div className="homeContentWrapper">        
            <div className="homeContent1">
                content1
            </div>
            <div className="homeContent2">
                content2
            </div>
            <div className="homeContent3">
                content3
            </div>
        </div>

    </div> 
  );
}

export default HomePage;