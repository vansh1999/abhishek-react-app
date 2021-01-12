import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;
        return <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>ACADEMIC PROJECTS</h1>

            <div class="row">
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title"> <u>1. Hashtag Health</u></h4>
                    <h5 class="card-text">(01/2020 - 06/2020)</h5>
                    <h5 class="card-text">Contributed in the development of a web and mobile application to
                    provide an intuiting analytics service to harness twitter data effectively. Created business strategy and marketing plan for the
service in compliance with GDPR regulations.</h5>

                  </div>
                </div>
              </div>

              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title"> <u>2. Predictive Analysis</u></h4>
                    <h5 class="card-text">(01/2020 - 07/2020)</h5>
                    <h5 class="card-text">Created a detailed visual report by writing R codes to further perform predictive and complexity analysis. Boosted decision making process by comparing various prediction models with their accuracy rates and outcomes.</h5>

                  </div>
                </div>
              </div>

            </div>


          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
