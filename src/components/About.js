import React from 'react';

function about() {
    return (
        <div className="row about-me mx-0">
            <div className="col-xs-12 col-sm-6 col-md-4 pr-4 about-me-pic"><a name="targetabout" aria-hidden="true"></a>
                <img className="profile-pic rounded-circle justify-content-end" src="/profile-picture.png" alt="Valentina Arango Eastman" />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-8 px-5 about-me-info">
                <h2><b>About me</b></h2>
                <p className="about-me-text">Advertising and communications professional with more than 5 years of experience in marketing,
                social media, graphic design, and advertising campaigns. Lifelong learner, traveler, and passionate about technology. <br/>
                <br />
                    Creative, proactive, and responsible professional with
                    extensive international work experience.
            </p>
                <a href="https://www.linkedin.com/in/valentina-arango-eastman-76735568/" aria-hidden="true" target="_blank" rel="noopener noreferrer" className="button btn btn-primary read-more mt-2">Read more</a>
            </div>
        </div>

    )
}

export default about;