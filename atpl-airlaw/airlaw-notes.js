// 010 Air Law: topic notes, structured on the EASA learning objectives
// (Appendix to AMC & GM to Part-FCL, ED Decision 2020/018/R).
// Study aid only: check figures against your ATO's notes.
window.AIRLAW_TOPICS = [
{
  id: "01", code: "010 01", title: "International law",
  sub: "Chicago Convention, ICAO, freedoms of the air, other conventions, EASA",
  weight: 4,
  html: `
<h3>The Chicago Convention</h3>
<ul>
<li>Convention on International Civil Aviation, signed in Chicago on <b>7 December 1944</b>, in force <b>4 April 1947</b>. It created <b>ICAO</b>, a UN specialised agency based in <b>Montreal</b>.</li>
<li><b>Article 1:</b> every State has <b>complete and exclusive sovereignty</b> over the airspace above its territory.</li>
<li><b>Article 2:</b> territory = land areas <b>and adjacent territorial waters</b> under the State's sovereignty, suzerainty, protection or mandate. Over the high seas, the ICAO rules of the air apply without exception.</li>
<li><b>Article 7 (cabotage):</b> a State may refuse foreign aircraft permission to carry passengers, mail or cargo for payment between two points within its own territory.</li>
<li><b>Article 29:</b> documents carried on international flights include the certificate of registration, certificate of airworthiness, crew licences, journey log book and radio station licence (plus passenger list and cargo manifest where carried).</li>
<li><b>Article 33:</b> certificates and licences issued by the State of Registry are recognised by other States if issued to standards <b>equal to or above</b> ICAO minimum standards.</li>
<li><b>Article 38:</b> a State that cannot comply with a Standard must <b>notify ICAO of the difference</b>.</li>
</ul>

<h3>How ICAO works</h3>
<table class="tbl"><tr><th>Body</th><th>Role</th></tr>
<tr><td>Assembly</td><td>Sovereign body of all Contracting States. Meets at least once every three years, elects the Council and votes the budget.</td></tr>
<tr><td>Council</td><td>Permanent executive body, elected by the Assembly. <b>Adopts Standards and Recommended Practices (SARPs)</b> as Annexes.</td></tr>
<tr><td>Air Navigation Commission</td><td>Technical body. Examines and recommends Annex amendments to the Council.</td></tr></table>
<div class="tip"><b>Standard</b> = necessary, States <b>shall</b> comply, and differences must be notified. <b>Recommended Practice</b> = desirable, States <b>should</b> comply.</div>

<h3>The 19 Annexes you must recognise</h3>
<table class="tbl"><tr><th>#</th><th>Annex</th><th>#</th><th>Annex</th></tr>
<tr><td>1</td><td>Personnel Licensing</td><td>11</td><td>Air Traffic Services</td></tr>
<tr><td>2</td><td>Rules of the Air</td><td>12</td><td>Search and Rescue</td></tr>
<tr><td>3</td><td>Meteorological Service</td><td>13</td><td>Aircraft Accident and Incident Investigation</td></tr>
<tr><td>4</td><td>Aeronautical Charts</td><td>14</td><td>Aerodromes</td></tr>
<tr><td>5</td><td>Units of Measurement</td><td>15</td><td>Aeronautical Information Services</td></tr>
<tr><td>6</td><td>Operation of Aircraft</td><td>16</td><td>Environmental Protection</td></tr>
<tr><td>7</td><td>Nationality and Registration Marks</td><td>17</td><td>Security</td></tr>
<tr><td>8</td><td>Airworthiness of Aircraft</td><td>18</td><td>Safe Transport of Dangerous Goods by Air</td></tr>
<tr><td>9</td><td>Facilitation</td><td>19</td><td>Safety Management</td></tr>
<tr><td>10</td><td>Aeronautical Telecommunications</td><td></td><td></td></tr></table>

<h3>Freedoms of the air</h3>
<table class="tbl"><tr><th>Freedom</th><th>Right</th><th>Example (Irish airline)</th></tr>
<tr><td>1st</td><td>Fly over another State without landing</td><td>Dublin–Rome over France</td></tr>
<tr><td>2nd</td><td>Land for non-traffic purposes (technical stop)</td><td>Refuelling stop, no passengers on or off</td></tr>
<tr><td>3rd</td><td>Carry traffic from home State to another State</td><td>Dublin → Paris</td></tr>
<tr><td>4th</td><td>Carry traffic from another State to home State</td><td>Paris → Dublin</td></tr>
<tr><td>5th</td><td>Carry traffic between two foreign States on a service starting or ending at home</td><td>Dublin → Paris → Rome, selling Paris–Rome seats</td></tr></table>
<ul>
<li>The <b>International Air Services Transit Agreement</b> ("Two Freedoms Agreement") gives the <b>two technical freedoms</b> (1 and 2).</li>
<li>The <b>International Air Transport Agreement</b> ("Five Freedoms Agreement") adds the <b>commercial freedoms</b> 3, 4 and 5.</li>
<li>Freedoms 6–9 are "so-called" freedoms, not in the Chicago agreements. Cabotage (8th/9th) is traffic between two points inside another State.</li>
</ul>

<h3>Other conventions</h3>
<table class="tbl"><tr><th>Convention</th><th>Subject</th></tr>
<tr><td>Tokyo 1963</td><td>Offences and certain other acts committed <b>on board</b> aircraft. Gives the PIC powers.</td></tr>
<tr><td>The Hague 1970</td><td>Unlawful <b>seizure</b> of aircraft (hijacking)</td></tr>
<tr><td>Montreal 1971</td><td>Unlawful acts against the safety of civil aviation (sabotage)</td></tr>
<tr><td>Rome 1952</td><td>Damage caused by foreign aircraft to <b>third parties on the surface</b></td></tr>
<tr><td>Warsaw 1929 / Montreal 1999</td><td>Air carrier <b>liability</b> to passengers, baggage and cargo</td></tr></table>
<ul>
<li><b>Tokyo Convention, PIC powers:</b> if the PIC has reasonable grounds to believe a person has committed, or is about to commit, an offence or an act that jeopardises safety on board, the PIC may impose <b>reasonable measures, including restraint</b>. The PIC may also disembark that person, or deliver them to the authorities if the offence is serious. The PIC, crew and passengers who act reasonably are not liable.</li>
<li><b>Contract of carriage:</b> the ticket or baggage document is <b>evidence of the contract</b>. If no document is issued, the contract is still valid and the liability rules still apply.</li>
<li><b>Regulation (EC) 261/2004:</b> EU passenger rights, meaning compensation and assistance for denied boarding, cancellation and long delays.</li>
<li>Baggage liability is limited and expressed in <b>Special Drawing Rights (SDR)</b>. The amount is revised periodically.</li>
</ul>

<h3>Organisations</h3>
<ul>
<li><b>IATA:</b> the international <b>trade association of airlines</b>. It promotes safe, regular and economical air transport and cooperation between airlines and with ICAO.</li>
<li><b>EASA</b> (Basic Regulation (EU) 2018/1139): the EU agency for aviation safety. It drafts rules, certifies aircraft designs and standardises national authorities.
  <ul><li><b>Hard law</b> (binding): the Basic Regulation, delegated and implementing acts (e.g. the Aircrew Regulation 1178/2011, Air Ops 965/2012, SERA 923/2012).</li>
  <li><b>Soft law</b> (non-binding): Certification Specifications (CS), Acceptable Means of Compliance (AMC) and Guidance Material (GM). Following an AMC gives a <b>presumption of compliance</b>, and alternative means are possible.</li></ul></li>
<li><b>EUROCONTROL:</b> the European Organisation for the Safety of Air Navigation. It is the Network Manager and supports the <b>Single European Sky (SES)</b>, which aims to reform European air traffic management for safety, capacity and efficiency by reducing airspace fragmentation.</li>
</ul>`
},
{
  id: "02", code: "010 02", title: "Airworthiness and registration",
  sub: "Certificate of airworthiness, Annex 7 nationality and registration marks",
  weight: 2,
  html: `
<h3>Certificate of Airworthiness (CofA)</h3>
<ul>
<li>Issued by the <b>State of Registry</b>, in the EU by the competent authority of the Member State of registry under Regulation (EU) 748/2012 (Part-21).</li>
<li>Every aircraft must carry a valid CofA for international flight (Chicago Article 31).</li>
<li>Prerequisites: the aircraft conforms to an approved type design (type certificate) and is in a condition for safe operation.</li>
<li>Annex 8: the <b>State of Registry determines continuing airworthiness</b>.</li>
<li>An EU CofA has no fixed expiry. It <b>remains valid</b> as long as it is not surrendered, suspended or revoked, the aircraft is maintained to the continuing-airworthiness rules, and the airworthiness review certificate (ARC) is current.</li>
</ul>

<h3>Annex 7: definitions</h3>
<ul>
<li><b>Aircraft:</b> any machine that can derive support in the atmosphere from the reactions of the air <b>other than the reactions of the air against the earth's surface</b>. This rules out hovercraft.</li>
<li><b>Heavier-than-air aircraft:</b> any aircraft deriving its lift in flight <b>chiefly from aerodynamic forces</b>.</li>
<li><b>State of Registry:</b> the State on whose register the aircraft is entered.</li>
</ul>

<h3>Marks</h3>
<ul>
<li>The <b>nationality mark</b> comes from the radio call-sign series the <b>ITU</b> allocates to the State of Registry (Ireland EI, UK G, France F).</li>
<li>The <b>registration mark</b> is assigned by the <b>State of Registry</b>. The <b>common mark</b> (for international operating agencies) is assigned by <b>ICAO</b>.</li>
<li>The nationality mark comes first. If the first character of the registration mark is a letter, a <b>hyphen</b> separates them: EI-DVM.</li>
<li>Combinations that could be confused with distress or urgency signals (SOS, PAN, XXX, TTT), five-letter International Code of Signals groups or three-letter Q codes are not allowed.</li>
<li><b>Location (heavier-than-air):</b> on the lower surface of the wing (left half if possible) and on the fuselage between wings and tail, or on the vertical tail.</li>
<li><b>Minimum height:</b> <b>50 cm</b> on the wings and <b>30 cm</b> on the fuselage or vertical tail.</li>
<li><b>Identification plate:</b> fireproof, inscribed with at least the nationality (or common) mark and registration mark, and secured in a prominent position near the main entrance.</li>
</ul>`
},
{
  id: "04", code: "010 04", title: "Personnel licensing",
  sub: "Annex 1, Part-FCL licences and ratings, Part-MED",
  weight: 5,
  html: `
<h3>Annex 1 and the Aircrew Regulation</h3>
<p>ICAO Annex 1 sets the minimum international licensing standards. In the EU they are implemented by the <b>Aircrew Regulation (EU) 1178/2011</b>: <b>Annex I = Part-FCL</b> (flight crew licensing) and <b>Annex IV = Part-MED</b> (medical). Where EU rules differ from Annex 1, the differences are notified to ICAO.</p>

<h3>Key definitions (Part-FCL)</h3>
<ul>
<li><b>Category:</b> aeroplane, helicopter, airship, sailplane or balloon. <b>Class:</b> single-pilot aircraft that don't need a type rating (e.g. SEP land, MEP land). <b>Type:</b> a specific aircraft needing a type rating (e.g. A320).</li>
<li><b>Flight time (aeroplanes):</b> from the moment the aircraft <b>first moves for the purpose of taking off</b> until it <b>finally comes to rest</b> at the end of the flight.</li>
<li><b>Night:</b> between the end of evening civil twilight and the beginning of morning civil twilight.</li>
<li><b>Instrument time:</b> instrument flight time or instrument ground time (in a simulator or training device).</li>
<li><b>Multi-pilot aircraft:</b> certificated to be operated with a minimum crew of at least two pilots.</li>
</ul>

<h3>General rules</h3>
<ul>
<li><b>FCL.040:</b> you can use a licence's privileges only while its <b>ratings and your medical certificate are valid</b>.</li>
<li><b>FCL.045:</b> carry your <b>licence, medical certificate and a personal ID with photo</b>.</li>
<li><b>FCL.055:</b> a language proficiency endorsement is needed for radiotelephony. Re-evaluate every <b>4 years at Level 4</b> and <b>6 years at Level 5</b>. Level 6 needs no re-evaluation.</li>
<li><b>FCL.060 recency:</b> to carry passengers as PIC or co-pilot, you need <b>3 take-offs, approaches and landings in the preceding 90 days</b> in the same type or class (or a full flight simulator).</li>
<li><b>FCL.065, age 60–64:</b> in commercial air transport you may fly only as a member of a <b>multi-pilot crew</b>. <b>Age 65 or older:</b> no commercial air transport at all.</li>
</ul>

<h3>Licences</h3>
<table class="tbl"><tr><th></th><th>Minimum age</th><th>Main privileges</th></tr>
<tr><td>PPL(A)</td><td>17</td><td>PIC or co-pilot, never for remuneration</td></tr>
<tr><td>CPL(A)</td><td>18</td><td>PIC or co-pilot in non-CAT operations. <b>PIC in commercial air transport of a single-pilot aeroplane</b>. Co-pilot in commercial air transport.</td></tr>
<tr><td>ATPL(A)</td><td>21</td><td><b>PIC in commercial air transport</b>, including multi-pilot aeroplanes. Needs <b>1,500 h</b>, including <b>500 h in multi-pilot operations</b>.</td></tr>
<tr><td>MPL</td><td>18</td><td><b>Co-pilot</b> of an aeroplane required to be operated with a co-pilot</td></tr></table>

<h3>Ratings: validity</h3>
<table class="tbl"><tr><th>Rating</th><th>Valid for</th></tr>
<tr><td>SEP class rating (single-engine piston)</td><td>24 months</td></tr>
<tr><td>MEP class rating (multi-engine piston)</td><td>12 months</td></tr>
<tr><td>Type rating</td><td>12 months</td></tr>
<tr><td>Instrument rating (IR)</td><td>12 months</td></tr></table>
<p>Revalidate within the <b>3 months before expiry</b> and the new validity counts from the old expiry date.</p>

<h3>Part-MED</h3>
<ul>
<li>A <b>Class 1</b> medical is required for CPL, MPL and ATPL. It is valid <b>12 months</b>, reduced to <b>6 months</b> if you are <b>40+ and fly single-pilot commercial air transport carrying passengers</b>, or once you are <b>60+</b>.</li>
<li><b>Decrease in medical fitness (MED.A.020):</b> don't exercise your privileges. Seek aero-medical advice from an AME or AeMC <b>without undue delay</b> after surgery or an invasive procedure, regular medication, significant injury or illness, pregnancy, hospital admission, or a first need for correcting lenses.</li>
</ul>`
},
{
  id: "05", code: "010 05", title: "Rules of the air",
  sub: "ICAO Annex 2 and SERA: right of way, lights, VFR, IFR, signals, interception",
  weight: 7,
  html: `
<p>In the EU the rules of the air are <b>SERA</b> (Standardised European Rules of the Air, Regulation (EU) 923/2012), which implements ICAO Annex 2. Over the high seas, Annex 2 applies without exception. The <b>PIC has final authority</b> and may depart from the rules only when <b>absolutely necessary in the interests of safety</b>.</p>

<h3>Right of way</h3>
<ul>
<li>The aircraft with right of way <b>maintains heading and speed</b>.</li>
<li><b>Converging, same level:</b> the aircraft that has the other <b>on its right</b> gives way.</li>
<li><b>The less manoeuvrable aircraft has priority:</b> power-driven heavier-than-air aircraft give way to airships, sailplanes and balloons. Airships give way to sailplanes and balloons. Sailplanes give way to balloons. Power-driven aircraft give way to aircraft seen towing.</li>
<li><b>Head-on:</b> both alter heading to the <b>right</b>.</li>
<li><b>Overtaking:</b> overtaking means approaching from the rear within <b>70°</b> of the other's plane of symmetry. The aircraft being overtaken has right of way, and the overtaking aircraft keeps out of the way by altering heading to the <b>right</b>.</li>
<li><b>Landing:</b> aircraft landing or on final have priority. Of two aircraft approaching to land, the <b>higher gives way to the lower</b>, but the lower must not cut in front of one on final. Power-driven aircraft always give way to sailplanes.</li>
</ul>

<figure class="dia">
<svg viewBox="0 0 400 270" role="img" aria-label="Navigation light sectors: red on the left wing over 110 degrees, green on the right wing over 110 degrees, white at the tail over 140 degrees">
<path class="f-red" d="M200,140 L200,30 A110,110 0 0 0 96.6,177.6 Z"/>
<path class="f-green" d="M200,140 L200,30 A110,110 0 0 1 303.4,177.6 Z"/>
<path class="f-white" d="M200,140 L303.4,177.6 A110,110 0 0 1 96.6,177.6 Z"/>
<path class="s-ink" d="M200,105 L200,180 M160,140 L240,140 M185,175 L215,175" stroke-width="5" stroke-linecap="round" fill="none"/>
<text x="140" y="95" class="t-lab" text-anchor="middle">Red 110°</text>
<text x="262" y="95" class="t-lab" text-anchor="middle">Green 110°</text>
<text x="200" y="232" class="t-lab" text-anchor="middle">White 140°</text>
<text x="200" y="20" class="t-sm" text-anchor="middle">dead ahead</text>
</svg>
<figcaption>Navigation lights: red on the left (port) wing and green on the right, each covering 110° from dead ahead. The white tail light covers 140° (70° either side of dead astern).</figcaption>
</figure>

<h3>Minimum heights</h3>
<table class="tbl"><tr><th></th><th>Rule</th></tr>
<tr><td>VFR over congested areas or open-air assemblies</td><td><b>1,000 ft</b> (300 m) above the highest obstacle within <b>600 m</b></td></tr>
<tr><td>VFR elsewhere</td><td><b>500 ft</b> (150 m) above ground or water, or above the highest obstacle within 150 m</td></tr>
<tr><td>IFR over high terrain or mountains</td><td><b>2,000 ft</b> (600 m) above the highest obstacle within <b>8 km</b></td></tr>
<tr><td>IFR elsewhere</td><td><b>1,000 ft</b> (300 m) above the highest obstacle within <b>8 km</b></td></tr></table>

<h3>VMC minima (SERA.5001)</h3>
<table class="tbl"><tr><th>Band</th><th>Class</th><th>Flight visibility</th><th>Distance from cloud</th></tr>
<tr><td>At or above FL 100</td><td>A*–G</td><td>8 km</td><td>1,500 m horizontal, 1,000 ft vertical</td></tr>
<tr><td>Below FL 100, above 3,000 ft AMSL or 1,000 ft above terrain (whichever is higher)</td><td>A*–G</td><td>5 km</td><td>1,500 m horizontal, 1,000 ft vertical</td></tr>
<tr><td>At or below 3,000 ft AMSL or 1,000 ft above terrain</td><td>A*–E</td><td>5 km</td><td>1,500 m horizontal, 1,000 ft vertical</td></tr>
<tr><td>At or below 3,000 ft AMSL or 1,000 ft above terrain</td><td>F, G</td><td>5 km**</td><td>Clear of cloud, surface in sight</td></tr></table>
<p class="small">* VFR is not permitted in Class A. ** May be reduced to 1,500 m at 140 kt IAS or less.</p>
<ul>
<li>VFR flights may not take off from, land at, or enter the circuit of an aerodrome in a control zone (CTR) when the <b>ceiling is below 1,500 ft</b> or the <b>ground visibility is below 5 km</b>, unless cleared special VFR.</li>
<li><b>Special VFR in a CTR:</b> ground visibility at least <b>1,500 m</b>, flight visibility at least 1,500 m, <b>IAS 140 kt or less</b>, clear of cloud with the surface in sight.</li>
<li>VFR flights may not operate <b>above FL 195</b> or at transonic or supersonic speeds, unless authorised.</li>
</ul>

<h3>Cruising levels (semicircular rule, magnetic track)</h3>
<table class="tbl"><tr><th>Magnetic track</th><th>IFR</th><th>VFR (above 3,000 ft above ground or water)</th></tr>
<tr><td>000°–179°</td><td>Odd thousands: FL 70, 90 … (RVSM: 290, 310 … 410)</td><td>Odd + 500: FL 55, 75, 95 …</td></tr>
<tr><td>180°–359°</td><td>Even thousands: FL 80, 100 … (RVSM: 300, 320 … 400)</td><td>Even + 500: FL 65, 85, 105 …</td></tr></table>
<p>Use flight levels at or above the lowest usable flight level (or above the transition altitude), and altitudes below it.</p>

<h3>Light signals from ATC</h3>
<table class="tbl light"><tr><th>Signal</th><th>To an aircraft in flight</th><th>To an aircraft on the ground</th></tr>
<tr><td><span class="lamp g"></span> Steady green</td><td>Cleared to land</td><td>Cleared for take-off</td></tr>
<tr><td><span class="lamp r"></span> Steady red</td><td>Give way to other aircraft and continue circling</td><td>Stop</td></tr>
<tr><td><span class="lamp g fl"></span> Green flashes</td><td>Return for landing</td><td>Cleared to taxi</td></tr>
<tr><td><span class="lamp r fl"></span> Red flashes</td><td>Aerodrome unsafe, do not land</td><td>Taxi clear of landing area in use</td></tr>
<tr><td><span class="lamp w fl"></span> White flashes</td><td>Land at this aerodrome and proceed to the apron</td><td>Return to starting point on the aerodrome</td></tr>
<tr><td>Red pyrotechnic</td><td>Notwithstanding any previous instructions, do not land for the time being</td><td></td></tr></table>
<p>To acknowledge in flight: by day <b>rock the wings</b> (not on base or final), by night <b>flash the landing or navigation lights twice</b>.</p>

<h3>Other general rules</h3>
<ul>
<li><b>Simulated instrument flight:</b> only with fully functioning dual controls and a qualified <b>safety pilot</b> in a control seat (or a competent observer in contact).</li>
<li><b>At an aerodrome:</b> conform to or avoid the traffic pattern, make <b>left turns</b> when approaching to land and after take-off (unless told otherwise), and land and take off into wind where practicable.</li>
<li><b>Flight plan:</b> required for any flight provided with an ATC service, among others. Submit it <b>at least 60 minutes before departure</b>.</li>
<li>Inform ATS if the average TAS varies by <b>±5 %</b> or more from the flight plan.</li>
<li>Make an <b>arrival report</b> as soon as possible after landing to close the flight plan.</li>
<li>If an ATC clearance is not satisfactory, the PIC may <b>request an amended clearance</b>.</li>
<li><b>Controlled VFR when VMC is no longer possible:</b> request an amended clearance to continue in VMC or leave controlled airspace, request special VFR (in a CTR), or request to change to IFR.</li>
<li><b>Position report (6 items):</b> aircraft identification, position, time, level, next position and time over, ensuing significant point.</li>
<li><b>Psychoactive substances:</b> no person may perform safety-critical duties while under their influence.</li>
</ul>
<div class="note"><b>Communication failure rules changed.</b> SERA.14083 (Regulation (EU) 2024/404, in force 1 May 2025) introduced a common 20-minute rule for IFR communication failure and a new code, 7601. Older material and some exam questions still use the ICAO version with 7 and 20 minutes. Check which version your school teaches. The basics haven't changed: squawk <b>7600</b>, and in VMC continue in VMC and land at the nearest suitable aerodrome.</div>

<h3>Interception (SERA, Appendix 2)</h3>
<ul>
<li>The intercepted aircraft must: <b>immediately follow the intercepting aircraft's instructions</b>, notify ATS if possible, try to call on <b>121.5 MHz</b>, and squawk <b>Mode A 7700</b> with Mode C, unless told otherwise.</li>
</ul>
<table class="tbl"><tr><th>Intercepting aircraft does</th><th>Meaning</th></tr>
<tr><td>Rocks wings from slightly above, ahead and normally to the left, then makes a slow level turn</td><td>You have been intercepted. <b>Follow me.</b></td></tr>
<tr><td>Abrupt break-away: climbing turn of 90° or more without crossing your line of flight</td><td><b>You may proceed.</b></td></tr>
<tr><td>Lowers gear, steady landing lights, overflies runway</td><td><b>Land at this aerodrome.</b></td></tr></table>
<table class="tbl"><tr><th>Intercepted aircraft does</th><th>Meaning</th></tr>
<tr><td>Raises gear and flashes landing lights while passing over the runway between 1,000 and 2,000 ft, then circles</td><td>The aerodrome you have designated is <b>inadequate</b></td></tr>
<tr><td>Switches all available lights on and off at <b>regular</b> intervals</td><td><b>Cannot comply</b></td></tr>
<tr><td>Flashes all available lights at <b>irregular</b> intervals</td><td><b>In distress</b></td></tr></table>`
},
{
  id: "06", code: "010 06", title: "Aircraft operations",
  sub: "PANS-OPS: approaches, holding, altimeter setting, transponder, ACAS, Air Ops",
  weight: 7,
  html: `
<h3>Instrument approach structure (ICAO Doc 8168)</h3>
<p>There are five segments: <b>arrival → initial → intermediate → final → missed approach</b>.</p>
<ul>
<li><b>Initial:</b> from the IAF to the IF, used to manoeuvre onto the intermediate track.</li>
<li><b>Intermediate:</b> from the IF to the FAF/FAP, used to <b>adjust speed and configuration</b> for the final approach.</li>
<li><b>Final:</b> alignment and descent for landing. It ends in either a straight-in landing or circling.</li>
<li><b>Missed approach:</b> initial, intermediate and final phases. The nominal climb gradient is <b>2.5 %</b>, with 30 m (98 ft) MOC in the intermediate phase and 50 m (164 ft) in the final phase.</li>
<li>A non-precision approach is <b>straight-in</b> if the final approach track is within <b>30°</b> of the runway centre line.</li>
<li>The optimum glide path for a precision approach is <b>3°</b> (5.2 %).</li>
<li><b>MSA</b> (minimum sector altitude) gives <b>1,000 ft (300 m) obstacle clearance within 25 NM</b> of the navaid or reference point.</li>
<li>If the ILS glide path fails during an approach, it becomes a <b>non-precision (localiser-only)</b> approach with LOC minima.</li>
</ul>
<table class="tbl"><tr><th>Approach category</th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th></tr>
<tr><td>V<sub>AT</sub> (kt)</td><td>&lt;91</td><td>91–120</td><td>121–140</td><td>141–165</td><td>166–210</td></tr></table>
<p class="small">V<sub>AT</sub> = 1.3 × stall speed (V<sub>S0</sub>) at maximum certificated landing mass (or 1.23 × V<sub>S1g</sub>).</p>

<h3>Minima terms</h3>
<ul>
<li><b>OCA/H</b> (obstacle clearance altitude/height): the lowest altitude or height that meets the obstacle-clearance criteria. Operational minima are never lower than it.</li>
<li><b>DA/DH</b> (decision altitude/height): for <b>precision and APV</b> approaches. DH is referenced to the <b>threshold elevation</b>.</li>
<li><b>MDA/MDH</b> (minimum descent altitude/height): for <b>non-precision and circling</b> approaches. MDH is referenced to the aerodrome elevation, or to the threshold if it is more than 2 m (7 ft) below aerodrome elevation. Circling always uses aerodrome elevation.</li>
<li>At the MAPt (missed approach point) without the required visual reference, <b>go around</b>. If you start the missed approach early, fly to the MAPt and then follow the procedure. You may cross the MAPt <b>higher</b> than the procedure requires.</li>
<li><b>Circling:</b> descend below MDA/H only with visual reference established and maintained, the threshold in sight and a landing possible. If you lose visual reference, make a <b>climbing turn towards the landing runway</b>, get overhead the aerodrome, then join the missed approach.</li>
</ul>

<h3>Holding</h3>
<ul>
<li>Turns use a rate of <b>3°/s or 25° bank, whichever needs less bank</b>.</li>
<li>Outbound time is <b>1 min up to 14,000 ft</b> and <b>1.5 min above 14,000 ft</b>. Timing starts <b>over or abeam the fix, whichever is later</b>. If you can't determine abeam, start timing when the outbound turn is complete.</li>
<li>Maximum holding speeds (IAS): up to 14,000 ft <b>230 kt</b> (170 kt for Cat A and B), up to 20,000 ft <b>240 kt</b>, up to 34,000 ft <b>265 kt</b>, above 34,000 ft <b>M 0.83</b>.</li>
<li><b>Offset (teardrop) entry:</b> fly outbound on a track <b>30°</b> from the reciprocal of the inbound track, on the holding side.</li>
</ul>
<figure class="dia">
<svg viewBox="0 0 400 300" role="img" aria-label="Holding entry sectors for a right-hand pattern with inbound track 360 degrees">
<path class="f-sec1" d="M200,120 L200,10 A110,110 0 0 1 303.4,157.6 Z"/>
<path class="f-sec2" d="M200,120 L96.6,82.4 A110,110 0 0 1 200,10 Z"/>
<path class="f-sec3" d="M200,120 L303.4,157.6 A110,110 0 0 1 96.6,82.4 Z"/>
<line x1="59" y1="69" x2="341" y2="171" class="s-muted" stroke-dasharray="5 4"/>
<line x1="200" y1="120" x2="200" y2="6" class="s-muted" stroke-dasharray="5 4"/>
<path class="s-accent" fill="none" stroke-width="3" d="M200,240 L200,120 A30,30 0 0 1 260,120 L260,240 A30,30 0 0 1 200,240"/>
<path class="f-accent" d="M200,175 l-6,12 h12 z"/>
<circle cx="200" cy="120" r="5" class="f-ink"/>
<text x="192" y="136" class="t-sm" text-anchor="end">fix</text>
<text x="268" y="62" class="t-lab">Parallel</text><text x="268" y="77" class="t-sm">110°</text>
<text x="128" y="52" class="t-lab">Offset</text><text x="128" y="67" class="t-sm">70°</text>
<text x="70" y="200" class="t-lab">Direct</text><text x="70" y="215" class="t-sm">180°</text>
<text x="208" y="292" class="t-sm">inbound track 360°, right-hand turns</text>
</svg>
<figcaption>The entry sectors show the side you arrive from. The dividing line runs through the fix at 70° to the inbound track. For a right-hand pattern with inbound track C: arriving on headings from C−70° to C+110° → <b>direct</b>. C+110° to C+180° → <b>offset</b>. C+180° to C−70° → <b>parallel</b>. There is ±5° of flexibility at the boundaries.</figcaption>
</figure>

<h3>Altimeter-setting procedures</h3>
<ul>
<li><b>QNH</b> → altitude above mean sea level. <b>QFE</b> → height above the aerodrome or threshold. <b>1013.2 hPa</b> → flight levels. FL 0 is at the 1013.2 hPa pressure level, and flight levels are 500 ft apart.</li>
<li><b>Transition altitude (TA):</b> at or below it, use altitudes. It is normally at least 3,000 ft above the aerodrome, the calculated height is rounded <b>up to the next 1,000 ft</b>, and it is published in the AIP.</li>
<li><b>Transition level (TRL):</b> the lowest flight level above the TA. It is set by the ATS unit and passed in approach clearances or on ATIS.</li>
<li><b>Transition layer:</b> the airspace between the TA and the TRL. Climbing through it, report <b>flight levels</b>. Descending through it, report <b>altitudes</b>.</li>
<li>Before take-off, set at least one altimeter to the latest <b>QNH</b>. Change to 1013.2 hPa <b>at the TA</b> in the climb, and back to QNH <b>at the TRL</b> in the descent.</li>
<li>QNH values given to aircraft are rounded <b>down</b> to the nearest whole hectopascal.</li>
</ul>

<h3>Transponder (SSR) and ACAS</h3>
<table class="tbl"><tr><th>Code</th><th>Meaning</th></tr>
<tr><td>7500</td><td>Unlawful interference (hijack)</td></tr>
<tr><td>7600</td><td>Radio communication failure</td></tr>
<tr><td>7700</td><td>Emergency</td></tr>
<tr><td>2000</td><td>No ATC instruction or regional agreement (ICAO default). In Europe, VFR flights use <b>7000</b>.</td></tr></table>
<ul>
<li>Operate <b>Mode C</b> continuously with Mode A unless told otherwise. <b>Squawk IDENT</b> only when ATC asks.</li>
<li>In an emergency, if ATC has given you a code, normally <b>keep that code</b> unless told otherwise.</li>
<li>If the transponder is unserviceable before departure and can't be repaired there, you may be allowed to fly to the nearest aerodrome where it can be repaired. Inform ATS first.</li>
<li><b>ACAS:</b> do <b>not</b> manoeuvre on a traffic advisory (TA) alone. Follow a resolution advisory (RA) <b>promptly</b>, even against an ATC instruction, unless that would endanger the aircraft or the intruder is visually identified and no deviation is needed. Tell ATC as soon as possible, and when clear of conflict return promptly to the clearance.</li>
</ul>

<h3>Parallel runways</h3>
<ul>
<li><b>Independent</b> parallel approaches: no radar separation is needed between aircraft on adjacent localisers, but they are monitored, with a <b>no transgression zone (NTZ)</b> between the runways. A penetration of the NTZ triggers controller intervention. Each aircraft has a <b>normal operating zone (NOZ)</b>.</li>
<li><b>Dependent</b> parallel approaches: minimum radar separation is required between aircraft on adjacent localisers.</li>
<li><b>Segregated</b> operations: one runway for approaches, the other for departures.</li>
</ul>

<h3>Air Operations Regulation (EU) 965/2012</h3>
<p>Covers commercial air transport (Part-CAT), specialised operations (Part-SPO) and non-commercial operations (Part-NCC for complex motor-powered aircraft, Part-NCO for other-than-complex). <b>Part-SPA</b> covers operations needing a <b>specific approval</b>, such as PBN, RVSM, low-visibility operations and dangerous goods.</p>`
},
{
  id: "07", code: "010 07", title: "Air traffic services",
  sub: "Annex 11 and Doc 4444: airspace, clearances, separation, alerting",
  weight: 8,
  html: `
<h3>The services</h3>
<ul>
<li>There are three air traffic services: the <b>ATC service</b>, the <b>flight information service (FIS)</b> and the <b>alerting service</b>.</li>
<li>The ATC service has three parts: <b>area control</b> (by an area control centre, ACC), <b>approach control</b> and <b>aerodrome control</b> (by the tower, TWR).</li>
<li>The objectives of ATS are to: prevent collisions between aircraft, and between aircraft and obstructions on the manoeuvring area; expedite and maintain an orderly flow of traffic; give advice and information; and notify organisations about aircraft needing search and rescue aid.</li>
<li>The emergency frequency is <b>121.5 MHz</b>.</li>
</ul>

<h3>Airspace classes</h3>
<table class="tbl"><tr><th>Class</th><th>Flights</th><th>Separation</th><th>250 kt below FL 100</th></tr>
<tr><td>A</td><td>IFR only</td><td>All separated</td><td>No</td></tr>
<tr><td>B</td><td>IFR, VFR</td><td>All separated from each other</td><td>No</td></tr>
<tr><td>C</td><td>IFR, VFR</td><td>IFR from IFR and VFR. VFR from IFR, with traffic information on VFR.</td><td>VFR only</td></tr>
<tr><td>D</td><td>IFR, VFR</td><td>IFR from IFR, with traffic information on VFR. VFR gets traffic information on all.</td><td>IFR and VFR</td></tr>
<tr><td>E</td><td>IFR, VFR</td><td>IFR from IFR. VFR <b>needs no clearance</b>.</td><td>IFR and VFR</td></tr>
<tr><td>F</td><td>IFR, VFR</td><td>IFR advisory service</td><td>IFR and VFR</td></tr>
<tr><td>G</td><td>IFR, VFR</td><td>None, FIS only</td><td>IFR and VFR</td></tr></table>

<h3>Airspace structure</h3>
<ul>
<li>A <b>flight information region (FIR)</b> or <b>upper FIR (UIR)</b> covers all airspace in which FIS and alerting service are provided. Control areas (CTAs) and control zones (CTRs) inside an FIR <b>form part of it</b>.</li>
<li>The lower limit of a CTA is <b>not less than 700 ft (200 m)</b> above ground or water. It need not be uniform.</li>
<li>A CTR extends at least <b>5 NM (9.3 km)</b> from the aerodrome centre in the directions approaches may be made. If it lies under a CTA, it reaches up to at least the CTA's lower limit.</li>
</ul>

<h3>Clearances</h3>
<ul>
<li>A clearance is based <b>solely on known traffic conditions</b>. It doesn't relieve the PIC of the duty to obey the rules. If a clearance isn't suitable, ask for an amended one.</li>
<li>A clearance has five parts: <b>aircraft identification, clearance limit, route, level(s), and any other instructions</b> (approach or departure manoeuvres, communications, the clearance's expiry time).</li>
<li><b>Clearance limit:</b> the point to which an aircraft is granted an ATC clearance.</li>
<li><b>Terrain:</b> clearances don't protect you from terrain, <b>except when an IFR flight is being vectored</b>.</li>
<li><b>Always read back:</b> route clearances; clearances to enter, land on, take off from, hold short of, cross, taxi on or backtrack on a runway; the runway in use; altimeter settings; SSR codes; frequencies; level, heading and speed instructions; and transition levels.</li>
<li><b>Speed control:</b> don't expect it within <b>4 NM of the threshold</b> on final.</li>
<li><b>IFR to VFR:</b> the pilot says "cancelling my IFR flight". ATC acknowledges but must not suggest the change. If IMC is likely along the route, ATC tells the pilot.</li>
</ul>

<h3>Separation</h3>
<ul>
<li>The vertical minimum is <b>1,000 ft</b> below FL 290 and <b>2,000 ft</b> at or above FL 290. In RVSM airspace (FL 290–410) it is 1,000 ft.</li>
<li>The radar (surveillance) minimum is <b>5 NM</b>, which may be reduced to 3 NM where approved.</li>
<li><b>Lateral separation on a VOR:</b> tracks diverging by at least <b>15°</b>, with at least one aircraft 15 NM or more from the facility. On an NDB it is 30°, and with dead reckoning 45°.</li>
<li><b>Longitudinal separation</b> uses time, distance (DME or GNSS) or the <b>Mach number technique</b>, where aircraft on the same track fly assigned Mach numbers.</li>
<li><b>Visual approach:</b> ATC still separates the aircraft from other arriving and departing traffic.</li>
<li>Landing aircraft (or those on final) have priority over departing aircraft.</li>
<li>The surface wind from the tower is given in degrees <b>magnetic</b>. "Runway vacated" means the whole aircraft is beyond the runway-holding position.</li>
</ul>

<h3>Wake turbulence</h3>
<table class="tbl"><tr><th>Category</th><th>Maximum certificated take-off mass</th></tr>
<tr><td>Light (L)</td><td>7,000 kg or less</td></tr>
<tr><td>Medium (M)</td><td>more than 7,000 kg and less than 136,000 kg</td></tr>
<tr><td>Heavy (H)</td><td>136,000 kg or more. Say "<b>HEAVY</b>" after your call sign on initial contact.</td></tr>
<tr><td>Super (J)</td><td>A380</td></tr></table>
<table class="tbl"><tr><th>Radar spacing (approach)</th><th>Distance</th></tr>
<tr><td>Heavy behind heavy</td><td>4 NM</td></tr><tr><td>Medium behind heavy</td><td>5 NM</td></tr>
<tr><td>Light behind heavy</td><td>6 NM</td></tr><tr><td>Light behind medium</td><td>5 NM</td></tr></table>
<p><b>Non-radar, arriving:</b> medium behind heavy <b>2 minutes</b>. Light behind heavy or medium <b>3 minutes</b>. <b>Departing</b> from the same runway: <b>2 minutes</b> (3 minutes when taking off from an intermediate point).</p>

<h3>Flight information and alerting</h3>
<ul>
<li><b>FIS</b> goes to all aircraft likely to be affected by the information that are provided with ATC or otherwise known to ATS. It includes SIGMET and AIRMET information.</li>
<li><b>ATIS</b> (automatic terminal information service): each broadcast is identified by a letter, updated immediately when something significant changes, and acknowledged by the pilot on first contact.</li>
<li><b>Alerting service</b> goes to all aircraft provided with ATC and, as far as practicable, other known aircraft. The ATS unit notifies the <b>rescue coordination centre (RCC)</b>.</li>
</ul>
<table class="tbl"><tr><th>Phase</th><th>Typical trigger</th></tr>
<tr><td><b>INCERFA</b> (uncertainty)</td><td>No communication within <b>30 min</b> of when it was due, or the aircraft fails to arrive within <b>30 min</b> of its ETA</td></tr>
<tr><td><b>ALERFA</b> (alert)</td><td>Inquiries after INCERFA fail. Or the aircraft was cleared to land but didn't land within <b>5 min</b> and contact is lost. Or efficiency is impaired. Or there is <b>unlawful interference</b>.</td></tr>
<tr><td><b>DETRESFA</b> (distress)</td><td>Further inquiries fail. Or <b>fuel is considered exhausted</b>. Or a forced landing is likely or has happened.</td></tr></table>

<h3>Other terms</h3>
<ul>
<li><b>Special air-report:</b> report severe turbulence, severe icing, severe mountain waves, thunderstorms (obscured, embedded, widespread or in a squall line), heavy dust or sandstorm, and volcanic ash or activity.</li>
<li><b>Expected approach time:</b> when ATC expects a delayed arriving aircraft to leave the holding fix to complete its approach.</li>
<li><b>Air traffic advisory service</b> (Class F): advisory information for participating IFR flights, not clearances.</li>
<li><b>AIRPROX:</b> a situation where, in the opinion of a pilot or ATS personnel, the distance between aircraft may have compromised their safety.</li>
<li><b>RNP</b> (required navigation performance): the navigation performance needed in an airspace. RNP 4 means within 4 NM for 95 % of the flight time. The RNP type is <b>not</b> part of the route designator. Prefix <b>U</b> means upper airspace.</li>
</ul>`
},
{
  id: "08", code: "010 08", title: "Aeronautical information",
  sub: "Annex 15: AIP, NOTAM, AIRAC, AIC, pre-flight information",
  weight: 3,
  html: `
<ul>
<li>An AIS (aeronautical information service) provides the information needed for safe, regular and efficient air navigation. Where it doesn't run 24 hours, it must be available for the whole time an aircraft is in flight in its area, <b>plus at least 2 hours before and after</b>.</li>
</ul>
<h3>Products</h3>
<table class="tbl"><tr><th>Product</th><th>Use</th></tr>
<tr><td><b>AIP</b> (aeronautical information publication)</td><td>Lasting information essential to air navigation, in three parts: <b>GEN</b> (general, including <b>differences from ICAO SARPs</b>), <b>ENR</b> (en-route) and <b>AD</b> (aerodromes).</td></tr>
<tr><td>AIP Amendment</td><td><b>Permanent</b> changes to the AIP</td></tr>
<tr><td>AIP Supplement</td><td><b>Temporary changes of long duration (3 months or more)</b>, or short-term information with extensive text or graphics</td></tr>
<tr><td><b>NOTAM</b></td><td>Sent by telecommunication (the AFS network). The establishment of, condition of, or change to any facility, service, procedure or hazard that flight operations must know about promptly.</td></tr>
<tr><td>ASHTAM</td><td>A NOTAM series for <b>volcanic activity and ash</b></td></tr>
<tr><td><b>AIC</b> (aeronautical information circular)</td><td>Information that fits neither the AIP nor a NOTAM: long-term forecasts of major changes in legislation or procedures, explanatory or advisory information, administrative matters. Numbered each calendar year.</td></tr></table>
<h3>AIRAC</h3>
<ul>
<li>AIRAC (aeronautical information regulation and control) groups significant changes onto <b>common effective dates every 28 days</b>.</li>
<li>AIRAC information is distributed <b>at least 42 days</b> before the effective date, to reach users at least 28 days before. For major changes, 56 days is recommended.</li>
</ul>
<h3>Pre- and post-flight</h3>
<ul>
<li><b>Pre-flight information bulletin (PIB):</b> a summary of current NOTAMs and other urgent information, prepared before the flight.</li>
<li><b>Post-flight:</b> report inadequacies of facilities and the presence of birds to AIS.</li>
<li>Regulation (EU) 2017/373 sets the requirements for air navigation service providers, including AIS.</li>
</ul>`
},
{
  id: "09", code: "010 09", title: "Aerodromes",
  sub: "Annex 14: reference code, declared distances, markings, signs, lights, RFF",
  weight: 4,
  html: `
<h3>Aerodrome data</h3>
<ul>
<li><b>Aerodrome reference code:</b> the <b>number</b> (1–4) comes from the aeroplane reference field length (4 = 1,800 m or more). The <b>letter</b> (A–F) comes from the <b>wingspan</b> (C = 24 m up to but not including 36 m).</li>
<li>The <b>aerodrome reference point</b> is near the initial or planned geometric centre of the aerodrome and normally stays where it was first placed.</li>
<li><b>Pavement strength:</b> an aircraft with ACN (aircraft classification number) ≤ PCN (pavement classification number) can operate without restriction. Since November 2024, ICAO uses the newer ACR/PCR method. For aircraft of 5,700 kg or less, the maximum allowable mass and tyre pressure are reported.</li>
</ul>
<h3>Declared distances</h3>
<table class="tbl"><tr><th>Distance</th><th>Meaning</th></tr>
<tr><td>TORA</td><td>Take-off run available: runway length suitable for the ground run on take-off</td></tr>
<tr><td>TODA</td><td>TORA + <b>clearway</b></td></tr>
<tr><td>ASDA</td><td>Accelerate-stop distance available: TORA + <b>stopway</b></td></tr>
<tr><td>LDA</td><td>Landing distance available: runway length suitable for the ground run on landing. A displaced threshold reduces it.</td></tr></table>
<ul>
<li><b>Clearway:</b> an area over which an aeroplane may make part of its initial climb. <b>Stopway:</b> a prepared area beyond the TORA where an aircraft can stop after an abandoned take-off.</li>
<li><b>Runway strip:</b> surrounds the runway (and stopway) to reduce damage if an aircraft runs off it, and to protect aircraft flying over it. <b>RESA</b> (runway end safety area): beyond the strip end, against undershoots and overruns.</li>
<li><b>Runway condition code (RWYCC):</b> 6 dry, 5 good, 4 good to medium, 3 medium, 2 medium to poor, 1 poor, 0 less than poor.</li>
</ul>
<h3>Markings and signs</h3>
<ul>
<li>Runway markings are <b>white</b>. Taxiway and runway-holding-position markings are <b>yellow</b>.</li>
<li>The <b>runway designator</b> is the magnetic direction divided by 10 and rounded (a runway on 247° is 25).</li>
<li>Closed runway: <b>white X</b>. Closed taxiway: <b>yellow X</b>. Unusable surface before the threshold: <b>yellow chevrons</b>.</li>
<li><b>Mandatory instruction signs:</b> <b>white inscription on red</b>. They are the only signs on the movement area that use red: runway designation, CAT I/II/III holding position, runway-holding position, road-holding position and NO ENTRY signs.</li>
<li><b>Location sign:</b> yellow on black. <b>Direction and destination signs:</b> black on yellow.</li>
</ul>
<figure class="dia">
<svg viewBox="0 0 400 190" role="img" aria-label="Runway holding position markings: pattern A with two solid and two dashed lines, pattern B as a ladder">
<rect x="30" y="20" width="140" height="140" class="f-pave"/><rect x="230" y="20" width="140" height="140" class="f-pave"/>
<g class="s-yellow" stroke-width="4">
<line x1="30" y1="112" x2="170" y2="112"/><line x1="30" y1="100" x2="170" y2="100"/>
<line x1="30" y1="80" x2="170" y2="80" stroke-dasharray="14 8"/><line x1="30" y1="68" x2="170" y2="68" stroke-dasharray="14 8"/>
<line x1="230" y1="100" x2="370" y2="100"/><line x1="230" y1="72" x2="370" y2="72"/>
<line x1="240" y1="72" x2="240" y2="100"/><line x1="265" y1="72" x2="265" y2="100"/><line x1="290" y1="72" x2="290" y2="100"/><line x1="315" y1="72" x2="315" y2="100"/><line x1="340" y1="72" x2="340" y2="100"/><line x1="362" y1="72" x2="362" y2="100"/>
</g>
<text x="100" y="15" class="t-sm" text-anchor="middle">runway side ↑</text><text x="300" y="15" class="t-sm" text-anchor="middle">runway side ↑</text>
<text x="100" y="178" class="t-lab" text-anchor="middle">Pattern A</text><text x="300" y="178" class="t-lab" text-anchor="middle">Pattern B</text>
<text x="100" y="140" class="t-sm" text-anchor="middle">hold here: solid lines</text>
</svg>
<figcaption><b>Pattern A</b>: two solid and two dashed lines. Stop at the solid lines. It is used on non-instrument, non-precision and take-off runways, together with a runway designation sign. <b>Pattern B</b>: a "ladder" at precision-approach runways (protecting the ILS critical area), together with a CAT I/II/III holding position sign.</figcaption>
</figure>
<h3>Lights</h3>
<table class="tbl"><tr><th>Lights</th><th>Colour</th></tr>
<tr><td>Threshold and wing bars</td><td>Green</td></tr>
<tr><td>Runway end and stopway</td><td>Red</td></tr>
<tr><td>Runway edge</td><td>White. On an instrument runway, the last 600 m or last third (whichever is less) is <b>yellow</b>.</td></tr>
<tr><td>Runway centre line</td><td>White, then alternating red and white from 900 m to 300 m before the end, then <b>red for the last 300 m</b></td></tr>
<tr><td>Touchdown zone</td><td>White</td></tr>
<tr><td>Taxiway centre line / edge</td><td><b>Green</b> / <b>blue</b></td></tr>
<tr><td>Aerodrome beacon</td><td>White flashes, or white alternating with green at land aerodromes (yellow at water aerodromes)</td></tr></table>
<ul>
<li><b>Simple approach lighting:</b> a centre line at least <b>420 m</b> long with a crossbar <b>300 m</b> from the threshold. <b>Precision CAT I:</b> extends <b>900 m</b>, with a crossbar at 300 m. CAT II and III add extra light rows in the inner 300 m.</li>
</ul>
<figure class="dia">
<svg viewBox="0 0 400 200" role="img" aria-label="PAPI indications from well above to well below the glide path">
<g class="t-sm">
<text x="10" y="30">Too high</text><text x="10" y="66">Slightly high</text><text x="10" y="102">On glide path</text><text x="10" y="138">Slightly low</text><text x="10" y="174">Too low</text></g>
<g>
<circle cx="200" cy="25" r="11" class="f-wl"/><circle cx="235" cy="25" r="11" class="f-wl"/><circle cx="270" cy="25" r="11" class="f-wl"/><circle cx="305" cy="25" r="11" class="f-wl"/>
<circle cx="200" cy="61" r="11" class="f-wl"/><circle cx="235" cy="61" r="11" class="f-wl"/><circle cx="270" cy="61" r="11" class="f-wl"/><circle cx="305" cy="61" r="11" class="f-rl"/>
<circle cx="200" cy="97" r="11" class="f-wl"/><circle cx="235" cy="97" r="11" class="f-wl"/><circle cx="270" cy="97" r="11" class="f-rl"/><circle cx="305" cy="97" r="11" class="f-rl"/>
<circle cx="200" cy="133" r="11" class="f-wl"/><circle cx="235" cy="133" r="11" class="f-rl"/><circle cx="270" cy="133" r="11" class="f-rl"/><circle cx="305" cy="133" r="11" class="f-rl"/>
<circle cx="200" cy="169" r="11" class="f-rl"/><circle cx="235" cy="169" r="11" class="f-rl"/><circle cx="270" cy="169" r="11" class="f-rl"/><circle cx="305" cy="169" r="11" class="f-rl"/>
</g>
<rect x="335" y="10" width="40" height="180" class="f-pave"/><text x="355" y="198" class="t-sm" text-anchor="middle">runway</text>
</svg>
<figcaption>PAPI (precision approach path indicator): four units in a wing bar beside the runway. On the glide path you see two white and two red. The two red units are nearest the runway. An APAPI has two units: on the glide path, one red and one white.</figcaption>
</figure>
<h3>Signal area and indicators</h3>
<ul>
<li><b>Horizontal white dumb-bell:</b> land, take off and taxi on runways and taxiways only.</li>
<li><b>Red square with yellow diagonals:</b> landing prohibited, likely to be prolonged. <b>Red square with one yellow diagonal:</b> take special care on approach and landing (bad state of the manoeuvring area).</li>
<li><b>Landing T:</b> land along the shaft towards the crossbar.</li>
<li>The <b>signalling lamp</b> can show red, green and white and is aimed by hand.</li>
</ul>
<h3>Obstacles and services</h3>
<ul>
<li>Objects are marked in <b>orange and white or red and white</b> bands or chequers. Low-intensity obstacle lights on fixed objects are <b>steady red</b>. High-intensity lights are <b>flashing white</b>. Emergency vehicles flash <b>blue</b> and other vehicles flash <b>yellow</b>.</li>
<li><b>Rescue and firefighting (RFF):</b> the main aim is to save lives. The aerodrome RFF category depends on the <b>overall length of the longest aeroplanes</b> normally using it and their <b>fuselage width</b>. The response time to any point of each runway must be at most <b>3 minutes</b> (2 minutes recommended).</li>
<li><b>Apron:</b> vehicles give way to emergency vehicles and to aircraft taxiing or being pushed or towed.</li>
</ul>`
},
{
  id: "10", code: "010 10", title: "Facilitation",
  sub: "Annex 9: entry and departure of aircraft, crew, passengers and cargo",
  weight: 1,
  html: `
<ul>
<li><b>Annex 9 (Facilitation)</b> aims to speed up the entry and departure of aircraft, crew, passengers and cargo by cutting paperwork and delays.</li>
<li><b>General declaration:</b> the aircraft document covering the flight and crew. Together with the passenger manifest and cargo manifest, it is the standard set of documents a State may ask for. No other documents should be required.</li>
<li><b>Crew member certificate (CMC):</b> crew on duty in international air transport may use their CMC and licence as an <b>identity document instead of a passport or visa</b>, when they stay at the airport or within the city limits during a layover and leave on the next flight.</li>
<li><b>Inadmissible person:</b> the State tells the operator, and the <b>operator is responsible</b> for removing the person to the point of embarkation or another place where they will be admitted.</li>
<li>Passengers need valid travel documents (passport and visa where required). States should keep checks on departure to a minimum.</li>
<li><b>Unruly passengers:</b> the Tokyo Convention (1963) gives the PIC the authority to restrain and disembark them.</li>
</ul>`
},
{
  id: "11", code: "010 11", title: "Search and rescue",
  sub: "Annex 12: organisation, procedures for non-SAR crews, signals",
  weight: 1,
  html: `
<ul>
<li>States provide <b>SAR services 24 hours a day</b> within their search and rescue regions (SRRs). A <b>rescue coordination centre (RCC)</b> organises SAR and coordinates operations in each SRR.</li>
<li>The emergency phases are <b>uncertainty (INCERFA), alert (ALERFA) and distress (DETRESFA)</b>. See the ATS topic for their triggers.</li>
</ul>
<h3>If you are first on scene</h3>
<ul>
<li>Keep the craft in distress in sight, fix its position, and report to the RCC or ATS: type of craft, position, number and condition of survivors, and so on. Then act on the RCC's instructions.</li>
<li>If you hear a distress call: record the position, take a bearing if possible, inform the RCC or ATS, and at your discretion go to the position given.</li>
</ul>
<h3>Ground–air visual signals (used by survivors)</h3>
<table class="tbl"><tr><th>Symbol</th><th>Meaning</th></tr>
<tr><td><b>V</b></td><td>Require assistance</td></tr>
<tr><td><b>X</b></td><td>Require medical assistance</td></tr>
<tr><td><b>N</b></td><td>No (negative)</td></tr>
<tr><td><b>Y</b></td><td>Yes (affirmative)</td></tr>
<tr><td><b>↑</b></td><td>Proceeding in this direction</td></tr></table>
<p>An aircraft shows it has understood a ground signal by <b>rocking its wings</b> by day, or by <b>flashing its landing or navigation lights twice</b> at night. No acknowledgement means the signal was not understood.</p>`
},
{
  id: "12", code: "010 12", title: "Security",
  sub: "Annex 17 and related provisions on unlawful interference",
  weight: 1,
  html: `
<ul>
<li><b>Objective:</b> the <b>safety of passengers, crew, ground personnel and the general public</b> is the primary objective in safeguarding against acts of unlawful interference.</li>
<li><b>Screening:</b> technical or other means used to identify or detect weapons, explosives or other dangerous devices. <b>Security restricted area:</b> an airside area where access is controlled and other security controls apply.</li>
<li>If screened and unscreened passengers mix, the screened passengers and their cabin baggage must be <b>re-screened</b> before boarding.</li>
<li>The operator and the <b>PIC must be told</b> about passengers travelling under judicial or administrative proceedings (people in custody), and about armed law-enforcement officers on board, including their seats.</li>
<li>A State must <b>assist an aircraft subject to unlawful seizure</b>: navigation aids, ATS and permission to land. It should keep the aircraft on the ground unless its duty to protect human life requires otherwise.</li>
<li>Operators must have a <b>written security programme</b>.</li>
<li><b>Flight crew compartment door:</b> aeroplanes over <b>45,500 kg</b> maximum certificated take-off mass, or with <b>more than 60 passenger seats</b>, need an approved reinforced door, lockable from inside, with a way to monitor the area outside.</li>
<li><b>Isolated aircraft parking position:</b> at least <b>100 m</b> from other parking positions, buildings and public areas.</li>
</ul>
<h3>In flight (Annex 2, Attachment B)</h3>
<ul>
<li>Squawk <b>7500</b> and tell ATS. Keep to your assigned track and level unless you can't.</li>
<li>If you must leave your track or level: broadcast warnings on <b>121.5 MHz</b> and fly at a level that differs from normal IFR cruising levels by <b>1,000 ft above FL 290</b> or <b>500 ft below FL 290</b> (unless regional procedures say otherwise).</li>
<li>On the ground, ATC may direct the aircraft to an isolated parking position.</li>
</ul>`
},
{
  id: "13", code: "010 13", title: "Accident investigation",
  sub: "Annex 13, Regulation (EU) 996/2010 and 376/2014",
  weight: 1,
  html: `
<ul>
<li><b>Sole objective:</b> preventing future accidents and incidents. It is <b>not to apportion blame or liability</b>.</li>
<li><b>Accident</b> (manned aircraft): an occurrence between boarding with the intention of flight and disembarkation in which:
  <ul><li>a person is <b>fatally or seriously injured</b> by being in or in contact with the aircraft, or by jet blast (not natural causes, self-inflicted injuries or stowaways); or</li>
  <li>the aircraft suffers <b>damage or structural failure</b> affecting its strength, performance or flight characteristics that would normally need major repair. Damage limited to a single engine, propellers, wing tips, antennas, tyres, brakes, fairings or small dents doesn't count; or</li>
  <li>the aircraft is <b>missing or completely inaccessible</b>.</li></ul></li>
<li><b>Serious incident:</b> an incident where circumstances show there was a <b>high probability of an accident</b>. The difference from an accident is only the outcome.</li>
<li><b>Fatal injury:</b> death within <b>30 days</b>. <b>Serious injury:</b> hospital stay of <b>more than 48 hours starting within 7 days</b>, most bone fractures, severe burns (or burns on more than 5 % of the body), internal organ injury, and so on.</li>
<li>The <b>State of Occurrence</b> runs the investigation and may delegate it. The States of Registry, Operator, Design and Manufacture may appoint accredited representatives.</li>
<li><b>Reports:</b> a preliminary report within <b>30 days</b>. The final report is published as soon as possible, ideally within <b>12 months</b>. If it's later, an interim statement is published on each anniversary.</li>
<li><b>Regulation (EU) 996/2010:</b> investigations by an independent national safety investigation authority. <b>Regulation (EU) 376/2014:</b> occurrence reporting. Mandatory reports go in <b>within 72 hours</b>, and voluntary reporting is encouraged ("just culture").</li>
</ul>`
}
];
