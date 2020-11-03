import React, { Component } from "react";
import { Button, Jumbotron } from "reactstrap";

class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blink: false
    };
  }

  blinkText = () => {
    let blink = !this.state.blink;
    this.setState({ blink: blink });
  };

  componentDidMount() {
    setInterval(this.blinkText, 500);
  }

  render() {
    return (
      <div className="container centered">
        <Jumbotron>
          <h2
            className="display-4"
            style={this.state.blink ? { color: "red" } : { color: "green" }}
          >
            ACTIVE RESEARCH WEBSITE !!!
          </h2>
          <p className="lead">
            This website is owned and operated by the System Modeling and
            Simulation Laboratory of the Department of Computer Science, UP
            Diliman.
          </p>
          <p>
            Data gathered and displayed here are curated by: <br />
            <br />
            <b>
              <a href='https://sites.google.com/a/dcs.upd.edu.ph/sms/vpbongolan'>
                Dr. Vena Pearl Bongolan
              </a>
            </b>, <i>College of Engineering</i> <br />
            <b>Dr. Rizalino B. Cruz</b>,{" "}
            <i>
              National College of Public Administration and Governance (NCPAG)
            </i>{" "}
            <br />
            <b>Prof. Roselle Leah K. Rivera</b>,{" "}
            <i>College of Social Work and Community Development</i>
            <br />
            <br />
            <p>
              <b>Contact Us / Consultation Availability:</b>
              <p>
                <a href='https://sites.google.com/a/dcs.upd.edu.ph/sms/vpbongolan'>
                  Dr. Vena Pearl Bongolan
                </a>
                {' '} <b>(vabongolan@up.edu.ph)</b> - Tuesday, Thursday: 2:40-6pm
              </p> 
              <p>
                <a href='https://arianv.com'>
                  Arian Allenson Valdez 
                </a>
                {' '} <b>(me@arianv.com)</b> - Wednesday, Friday: 6pm - 8pm</p> 
            </p>
          </p>
          <p>
            <b>Analysis is exclusively for the Philippine setting</b>, and
            individual respondents are <b>required a minimum of five years</b>{" "}
            in the practice or study of sustainability and development issues
            (may include years in graduate school). Foreign respondents are
            welcome if the Philippines is one of their study or practice areas,
            and have at least five years total experience (practice or study),
            including Philippine experience.
          </p>
          <p>
            For a background on our analysis and methods, your may refer to the
            study by{" "}
          </p>
          <p className="lead">
            <i>
              Chrome is the recommended browser for the software; we are working
              on compatibility issues with FireFox.
            </i>
          </p>
          <p>
            <b>Current Undergraduate Student</b>
            <br />
            <b>Arian Allenson Valdez</b>, <i> Undergraduate Student 2020</i>
            <br />
            <br />
            <b>Previous Undergraduate Students</b>
            <br />
            <a
              href="https://council.science/publications/a-guide-to-sdg-interactions-from-science-to-implementation"
              target="_blank"
              rel="noopener noreferrer"
            >
            <b>Nikki Fernandez</b> and <b>Carlo La Rosa</b>,{" "}
            </a>
            <i>Undergraduate Students (2019)</i> <br />
            <a
              href="https://drive.google.com/file/d/1u9ZQ0W_8WY7rtauS0xNbGvTvx0QLl2KR/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>Wystan Concepcion </b> and{" "}
              <b>James Gabriel Abaja </b>
            </a>
            ,<i>Undergraduate Students (2018)</i><br />{" "}
            <br />
          </p>
          <hr className="my-2" />
          <p className="lead">
            <Button outline color="primary" href="/signup">
              Signup{" "}
            </Button>{" "}
            <Button outline color="success" href="/login">
              Login
            </Button>{" "}
            <Button outline color="primary" href="/graph_query">
              Query and Study Goal Targets
            </Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default FrontPage;
