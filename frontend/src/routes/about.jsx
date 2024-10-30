import { Component } from "react";
import Timeline from "../components/Timeline";
import { TIMELINE_EVENTS_API_URL } from "../constants";
import axios from "axios";

class About extends Component {

    state = {
      timeline_events: []
    };

    componentDidMount() {
      this.resetState();
    }

    getData = () => {
      axios.get(TIMELINE_EVENTS_API_URL).then(res => this.setState({ timeline_events: res.data }));
    };

    resetState = () => {
      this.getData();
    };

    render() {
      return (
        <div class="m-5">
          <h1>About</h1>
          <h2 class='font-tourney text-5xl'>Demands</h2>

          <p class= "flex container min-w-screen bg-amber-50 text-black mx-auto sm:text-2xl p-10 border-2 border-red-700  ">


            <ol class="list-none list-inside text-justify space-y-5">
              <li>
                <span class="text-xl sm:text-3xl font-bold text-red-700">Disclose</span> details of all University investments immediately and continue to do so on an annual basis.
              </li>
              <li>
              <span class="text-xl sm:text-3xl font-bold text-red-700">Divest</span> from companies complicit in Israel’s occupation and denial of Palestinian rights, including Accenture, Albemarle, Alphabet, Barclays, Microsoft, Newton Investment Management, RELX, and Sony, and commit to not reinvesting.
              </li>
              <li>
                <span class="text-xl sm:text-3xl font-bold text-red-700">Terminate</span> the university’s banking and lending arrangement with Barclays.
              </li>
              <li>
               <span class="text-xl sm:text-3xl font-bold text-red-700">Cut ties</span> with University of Haifa and boycott all Israeli academic institutions, which are complicit in the genocidal campaign on Gaza and in widespread violation of Palestinian rights.
              </li>
              <li>
                <span class="text-xl sm:text-3xl font-bold text-red-700">Commit</span> to supporting Palestinian education and the rebuilding of Gaza’s destroyed schools, hospitals, and universities.  Establish partnerships and exchanges with Palestinian institutions and academics, increase scholarships for Palestinian students, and advocate for the removal of restrictions on Palestinian expression and movement.
              </li>
              <li>
                <span class="text-xl sm:text-3xl font-bold text-red-700">Guarantee</span> the rights of students and staff to free expression and end the targeted repression of Palestine solidarity activism on campus.  Revoke the new SOAS protest policy.
              </li>
              <li>
                <span class="text-xl sm:text-3xl font-bold text-red-700">Advocate</span> for the UK government to implement an immediate arms embargo on Israel and to use all leverage to effect an immediate, unconditional, and permanent ceasefire
              </li>      
            </ol>
          </p>

          <h2 class='font-tourney'>Timeline</h2>
          <div class = "container bg-amber-50 p-10 border-2 border-black">
            <Timeline
              events={this.state.timeline_events}
          />
          </div>

        </div>
      );
    };
  };

export default About;