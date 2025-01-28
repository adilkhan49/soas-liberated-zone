import { Component, useRef } from "react";
import { useLocation } from 'react-router-dom'
import Timeline from "/src/components/Timeline";
import { TIMELINE_EVENTS_API_URL } from "/src/constants";
import axios from "axios";
import logo from "/src/slz-logo.png";
import Statements from "/src/routes//statements";

class AboutComponent extends Component {

    state = {
      openDemands: false,
      openStatements: false,
      openTimeline: false,
      timeline_events: [],
    };

    componentDidMount() {
      this.resetState();
      this.props.state && this.setState({
        openDemands: this.props.state.demands,
        openStatements: this.props.state.statements,
        openTimeline: this.props.state.timeline
        })
    }

    getData = () => {
      axios.get(TIMELINE_EVENTS_API_URL).then(res => this.setState({ timeline_events: res.data }));
    };

    resetState = () => {
      this.getData();
    };

    demands = (
        <div class= "flex container px-8 md:px-12 lg:px-48 py-6 sm:py-14 min-w-full justify-center text-white bg-black bg-opacity-70  text-lg sm:text-xl lg:text-2xl xl:text-3xl   ">
          <ol class="list-none list-inside text-justify space-y-5">
            <li>
              <span class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-red-600"><span class='text-3xl sm:text-4xl lg:text-5xl'>▼ </span>Disclose</span> details of all University investments immediately and continue to do so on an annual basis.
            </li>
            <li>
              <span class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-red-600"><span class='text-3xl sm:text-4xl lg:text-5xl'>▼ </span>Divest</span> from companies complicit in Israel’s occupation and denial of Palestinian rights, including Accenture, Albemarle, Alphabet, Barclays, Microsoft, Newton Investment Management, RELX, and Sony, and commit to not reinvesting.
            </li>
            <li>
              <span class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-red-600"><span class='text-3xl sm:text-4xl lg:text-5xl'>▼ </span>Terminate</span> the university’s banking and lending arrangement with Barclays.
            </li>
            <li>
              <span class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-red-600"><span class='text-3xl sm:text-4xl lg:text-5xl'>▼ </span>Cut ties</span> with University of Haifa and boycott all Israeli academic institutions, which are complicit in the genocidal campaign on Gaza and in widespread violation of Palestinian rights.
            </li>
            <li>
              <span class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl  font-bold text-red-600"><span class='text-3xl sm:text-4xl lg:text-5xl'>▼ </span>Commit</span> to supporting Palestinian education and the rebuilding of Gaza’s destroyed schools, hospitals, and universities.  Establish partnerships and exchanges with Palestinian institutions and academics, increase scholarships for Palestinian students, and advocate for the removal of restrictions on Palestinian expression and movement.
            </li>
            <li>
              <span class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl  font-bold text-red-600"><span class='text-3xl sm:text-4xl lg:text-5xl'>▼ </span>Guarantee</span> the rights of students and staff to free expression and end the targeted repression of Palestine solidarity activism on campus.  Revoke the new SOAS protest policy.
            </li>
            <li>
              <span class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl  font-bold text-red-600"><span class='text-3xl sm:text-4xl lg:text-5xl'>▼ </span>Advocate</span> for the UK government to implement an immediate arms embargo on Israel and to use all leverage to effect an immediate, unconditional, and permanent ceasefire
            </li>      
          </ol>
        </div>     
    )
    render() {
      return (
        <div class="w-screen min-h-screen">
          <div class='py-5 sm:py-10'>
            <div class= "flex h-48 sm:h-96 container min-w-full justify-center">
                <img
                  src = {logo}
                />
            </div>
          </div>

          <div class="w-full">

          <hr class="border-black border-1"/>

            <details id='demands' open={this.state.openDemands} class="min-w-full bg-none border-none text-black duration-300">
                <summary class="bg-inherit min-w-full py-2 mx-5 sm:px-20 text-3xl font-kanit italic font-bold cursor-pointer open:bg-lime-800 open:text-amber-50">
                 Our Demands
                </summary>
                <div class="min-w-full text-black ">
                    <div class='min-w-full'>
                      {this.demands}
                    </div>
                </div>
            </details>

            <hr class="border-black border-1"/>

            <details id='statements' open={this.state.openStatements}  class="min-w-full bg-none border-none text-black duration-300">
                <summary class="bg-inherit min-w-full py-2 mx-5 sm:px-20 text-3xl font-kanit italic font-bold cursor-pointer open:bg-lime-800 open:text-amber-50">
                  Read our statements
                </summary>
                <div class="min-w-full text-black bg-black bg-opacity-70">
                    <div class="mx-2 sm:mx-20">
                      <Statements />
                    </div>
                </div>
            </details>

            <hr class="border-black border-1"/>

            <details id='timeline' open={this.state.openTimeline}  class="min-w-full bg-none border-none text-black duration-300">
                <summary class="bg-inherit min-w-full py-2 mx-5 sm:px-20 text-3xl font-kanit italic font-bold cursor-pointer open:bg-lime-800 open:text-amber-50">
                  Timeline of the struggle at SOAS
                </summary>
                <div class="min-w-full text-amber-50 bg-black bg-opacity-70">
                    <div class="mx-6 sm:mx-20">
                      <Timeline
                          events={this.state.timeline_events}
                      />
                    </div>
                </div>
            </details>

            <hr class="border-black border-1"/>

          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 bg-black text-center items-stretch">
            <img class="order-first sm:order-last w-full object-cover" src={"https://images2.imgbox.com/b3/75/KfXgLzSz_o.jpg"} />
            <div class="text-amber-50 bg-black text-center py-4 sm:py-10 px-4 sm:px-16 m-auto align-middle p-0
              bg-repeat bg-[url('/src/hariya-tile-lg-light.svg')]">
              <p class='sm:text-2xl text-left text-justify'>
                SOAS claims to be a decolonial university, yet it repeatedly fails both its students and staff, as well as the communities around the world that it claims to represent. This has been made abundantly clear by the devastating role SOAS has played alongside global institutions in the ongoing genocide in Gaza.
              </p>
              <p class='sm:text-2xl text-left text-justify'>
               SOAS fails to provide dignity to its students, investing our fees into the hands of war criminals and colluders against our wishes all whilst eroding our student democracy. SOAS fails to provide dignity to its staff, who work in precarious conditions, where advocacy is met with harsh repression and refusal. 
              </p> 
              <p class='sm:text-2xl text-left text-justify'>
                Most hypocritically, the 'School of Oriental and African Studies' fails to provide an education in service of the communities it claims to represent. Its inadequate curriculum is at best, decolonisation as metaphor, and therefore not decolonisation at all. 
              </p>              
              <p class='sm:text-2xl text-left text-justify m-0'>
                We demand anticolonial institutions in action, not in metaphor, and not as farce. They must be for the community by the community, with an immediate end to all  COLONIAL and GENOCIDAL COMPLICITY.  The tide is turning, and we are working alongside it to transform our institutions.  
              </p>
            </div>
          </div>

        </div>
      );
    };
  };

export default AboutComponent;