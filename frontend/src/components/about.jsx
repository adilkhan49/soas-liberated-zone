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
        <div class= "flex container px-8 sm:px-48 py-6 sm:py-14 min-w-full justify-center text-white bg-black bg-opacity-70  text-xl sm:text-2xl   ">
          <ol class="list-none list-inside text-justify space-y-5">
            <li>
              <span class="text-xl sm:text-3xl font-bold text-red-600"><span class='text-3xl sm:text-5xl'>⧨ </span>Disclose</span> details of all University investments immediately and continue to do so on an annual basis.
            </li>
            <li>
            <span class="text-xl sm:text-3xl font-bold text-red-600"><span class='text-3xl sm:text-5xl'>⧨ </span>Divest</span> from companies complicit in Israel’s occupation and denial of Palestinian rights, including Accenture, Albemarle, Alphabet, Barclays, Microsoft, Newton Investment Management, RELX, and Sony, and commit to not reinvesting.
            </li>
            <li>
              <span class="text-xl sm:text-3xl font-bold text-red-600"><span class='text-3xl sm:text-5xl'>⧨ </span>Terminate</span> the university’s banking and lending arrangement with Barclays.
            </li>
            <li>
            <span class="text-xl sm:text-3xl font-bold text-red-600"><span class='text-3xl sm:text-5xl'>⧨ </span>Cut ties</span> with University of Haifa and boycott all Israeli academic institutions, which are complicit in the genocidal campaign on Gaza and in widespread violation of Palestinian rights.
            </li>
            <li>
              <span class="text-xl sm:text-3xl font-bold text-red-600"><span class='text-3xl sm:text-5xl'>⧨ </span>Commit</span> to supporting Palestinian education and the rebuilding of Gaza’s destroyed schools, hospitals, and universities.  Establish partnerships and exchanges with Palestinian institutions and academics, increase scholarships for Palestinian students, and advocate for the removal of restrictions on Palestinian expression and movement.
            </li>
            <li>
              <span class="text-xl sm:text-3xl font-bold text-red-600"><span class='text-3xl sm:text-5xl'>⧨ </span>Guarantee</span> the rights of students and staff to free expression and end the targeted repression of Palestine solidarity activism on campus.  Revoke the new SOAS protest policy.
            </li>
            <li>
              <span class="text-xl sm:text-3xl font-bold text-red-600"><span class='text-3xl sm:text-5xl'>⧨ </span>Advocate</span> for the UK government to implement an immediate arms embargo on Israel and to use all leverage to effect an immediate, unconditional, and permanent ceasefire
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
            <img class="order-first sm:order-last w-full object-cover" src={"https://i.postimg.cc/pdzq7FmB/kidz-1.jpg"} />
            <div class="text-amber-50 bg-black text-center py-4 sm:py-10 px-4 sm:px-16 m-auto align-middle p-0
              bg-repeat bg-[url('/src/hariya-tile-lg-light.svg')]">
              <p class='sm:text-3xl sm:leading-loose sm:pb-8 '>
                Everyone from our community is needed to end the complicity that puts blood on all of our hands.
              </p>
              <p class='sm:text-3xl  sm:leading-loose sm:pb-8'>
                Everyone at SOAS and beyond is needed in the process of transforming our institution.  
              </p>
              <p class='sm:text-3xl  sm:leading-loose'>
              Together we can create a university of dignified working and learning conditions, which serves the anticolonial purpose it claims to support.
              </p>
            </div>
          </div>

        </div>
      );
    };
  };

export default AboutComponent;