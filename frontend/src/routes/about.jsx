const TimelineText = `6 May 2024|The Soas liberated zone begins an encampment at the Walter Rodney freedom square, alongside a global wave of student encampments for Gaza
10 May 2024|700+ people join a protest in support of the SLZ, the largest protest ever recorded on campus. 
15 May 2024|SLZ builds a disability ramp into the Walter Rodney freedom square which SOAS has historically failed to do. They have since removed the ramp, making the green once again inaccessible. 
16 May 2024|Commemoration of 76 years since the Nakba, students block Tottenham Court Road
28 May 2024|Students pickett the SOAS finance offices, and are forced to leave the building under threat of disciplinary action  
29 May 2024|SLZ Pickett Barclays Bank on Tottenham Court Road
23 May 2024|Students disrupt the board of investors meeting 
4 June 2024|SOAS security physically assault students as they protest on the campus steps
8 June| 2024Day 245 of the genocide, Day 35 of the SLZ, Al Jazeera reports 36,801 Palestinians killed and 83,680 injured 
24 June 2024|SOAS director Adam Habib physically threatens a student, this is shortly followed by a UCU vote of no confidence(?) 
X July 2024|SU officers dismissed (?)
9 July 2024|The MET police arrest 7 SLZ members after being called to the SLZ by zionist agitators 
2 August 2024|SOAS threaten 7 students with expulsion for questioning the Student Union for their dismissal of two democratically elected Student Union co-presidents who were targeted for their Palestinian activism. 
5 August 2024|University of London evict SLZ from the Walter Rodney freedom camp 
5 August 2024|Phase two of the SLZ begins with a relocation to the green between SOAS and the IOE  
7 August 2024|University of London hire private bailiffs and illegally and violently evict the encampment.
8 August 2024|SLZ resists eviction through relocation next to Gordan square, phase 3 begins 
15 August 2024|Day 313 of the genocide, Day 103 of the SLZ, Al Jazeera reports over 40,000 Palestinians killed 16,456 of them children`;

const TimelineArray = TimelineText.split('\n').map(i => i.split('|'));
const TimelineListItems = TimelineArray.map(([date,desc]) => (
  <div class="mb-6 ms-4">
    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-black"></div>
    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-red-800">{date}</time>
    <p class="text-lg text-gray-900 dark:text-white">{desc}</p>
  </div>));
const TimelineDiv = (
    <div>
      <ol class="relative border-s border-gray-200 dark:border-gray-700">
        {TimelineListItems}
      </ol>
    </div>
)

const About = props => {
    return (
      <div>
        <h1>About</h1>
        <h2>Demands</h2>

        <p>
  These are our demands to SOAS University:
  <br></br>

<ol class="list-decimal list-inside text-justify">
  <li>
    <b>Disclose</b> details of all University investments immediately and continue to do so on an annual basis.
  </li>
  <li>
    <b>Divest</b> from companies complicit in Israel’s occupation and denial of Palestinian rights, including Accenture, Albemarle, Alphabet, Barclays, Microsoft, Newton Investment Management, RELX, and Sony, and commit to not reinvesting.
  </li>
  <li>
    <b>Terminate</b> the university’s banking and lending arrangement with Barclays.
  </li>
  <li>
    <b>Cut ties</b> with University of Haifa and boycott all Israeli academic institutions, which are complicit in the genocidal campaign on Gaza and in widespread violation of Palestinian rights.
  </li>
  <li>
    <b>Commit</b> to supporting Palestinian education and the rebuilding of Gaza’s destroyed schools, hospitals, and universities.  Establish partnerships and exchanges with Palestinian institutions and academics, increase scholarships for Palestinian students, and advocate for the removal of restrictions on Palestinian expression and movement.
  </li>
  <li>
    <b>Guarantee</b> the rights of students and staff to free expression and end the targeted repression of Palestine solidarity activism on campus.  Revoke the new SOAS protest policy.
  </li>
  <li>
    <b>Advocate</b> for the UK government to implement an immediate arms embargo on Israel and to use all leverage to 
  </li>      
</ol>
</p>

      <h2>Timeline</h2>

{TimelineDiv}
      


      </div>
    );
};

export default About;