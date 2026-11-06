// 010 Air Law: original practice questions written to the EASA learning objectives.
// These are NOT ECQB (official) questions. In each entry the FIRST option is the
// correct one; the app shuffles the options. Append new questions at the end of a
// topic block so existing ids stay stable (ids are "topic-number").
(function () {
  const Q = [];
  const count = {};
  function q(t, text, options, explain) {
    count[t] = (count[t] || 0) + 1;
    Q.push({ id: t + "-" + String(count[t]).padStart(2, "0"), t, q: text, a: options, e: explain });
  }

  // ---------- 010 01 International law ----------
  q("01", "The Convention on International Civil Aviation was signed in Chicago on:",
    ["7 December 1944", "4 April 1947", "1 November 1944", "7 December 1947"],
    "Signed on 7 December 1944 at the end of the Chicago conference. It came into force on 4 April 1947, which is when ICAO formally came into being.");
  q("01", "Article 1 of the Chicago Convention states that every State has:",
    ["complete and exclusive sovereignty over the airspace above its territory",
     "sovereignty over the airspace above its territory up to FL 660 only",
     "sovereignty over its airspace only for scheduled international services",
     "the right to close its airspace only with the approval of the ICAO Council"],
    "Article 1: every State has complete and exclusive sovereignty over the airspace above its territory. There is no altitude limit.");
  q("01", "Under the Chicago Convention, the territory of a State is:",
    ["the land areas and adjacent territorial waters under its sovereignty, suzerainty, protection or mandate",
     "the land areas only; territorial waters are international",
     "the land areas plus a 200 NM exclusive economic zone",
     "the land areas and all airspace within its FIR"],
    "Article 2: territory means the land areas and territorial waters adjacent to them under the sovereignty, suzerainty, protection or mandate of the State.");
  q("01", "The two 'technical' freedoms of the air are granted by the:",
    ["International Air Services Transit Agreement",
     "International Air Transport Agreement",
     "Tokyo Convention",
     "Article 5 of the Chicago Convention only"],
    "The Transit Agreement (the 'Two Freedoms Agreement') covers the 1st (overflight) and 2nd (technical stop) freedoms. The Transport Agreement covers the first five freedoms.");
  q("01", "The right to land in another State for non-traffic purposes, such as refuelling, is the:",
    ["second freedom of the air", "first freedom of the air", "third freedom of the air", "fifth freedom of the air"],
    "2nd freedom = technical stop (refuelling or maintenance) with no passengers, cargo or mail picked up or set down.");
  q("01", "An airline registered in State A carries passengers from State B to State C on a service that starts in State A. This is the:",
    ["fifth freedom", "fourth freedom", "sixth freedom", "eighth freedom"],
    "5th freedom: carrying traffic between two foreign States on a service that begins or ends in the airline's home State.");
  q("01", "Cabotage means:",
    ["carrying passengers or cargo for payment between two points within the territory of one State",
     "flying over a State without landing",
     "carrying passengers from the home State to a foreign State",
     "landing in a foreign State for technical reasons only"],
    "Cabotage is domestic traffic. Article 7 lets a State refuse cabotage rights to foreign aircraft.");
  q("01", "Which ICAO body adopts Standards and Recommended Practices and designates them as Annexes?",
    ["The Council", "The Assembly", "The Air Navigation Commission", "The Secretary General"],
    "The Council adopts SARPs (by a two-thirds vote). The Air Navigation Commission examines and recommends them. The Assembly is the sovereign body of all Contracting States.");
  q("01", "A Contracting State that finds it impracticable to comply with an ICAO Standard must:",
    ["notify ICAO of the differences between its own practice and the Standard",
     "comply anyway, because Standards cannot be departed from",
     "obtain the approval of the ICAO Assembly before departing from it",
     "publish the difference only in a NOTAM"],
    "Article 38: the State must give immediate notification to ICAO of the differences. Differences are also published in the AIP (GEN section).");
  q("01", "An ICAO Recommended Practice is a specification whose uniform application is:",
    ["desirable, and with which States should endeavour to conform",
     "necessary, and with which States shall conform",
     "mandatory within Europe only",
     "binding once the Assembly has ratified it"],
    "Standard = necessary ('shall'), differences must be notified. Recommended Practice = desirable ('should').");
  q("01", "The Tokyo Convention of 1963 deals with:",
    ["offences and certain other acts committed on board aircraft",
     "the unlawful seizure of aircraft",
     "damage caused by aircraft to third parties on the surface",
     "the liability of air carriers for passengers and baggage"],
    "Tokyo 1963: offences on board, and the PIC's powers. The Hague 1970: unlawful seizure. Rome 1952: third-party surface damage. Warsaw/Montreal 1999: carrier liability.");
  q("01", "Under the Tokyo Convention, a PIC who has reasonable grounds to believe that a person has committed an act jeopardising safety on board may:",
    ["impose reasonable measures on that person, including restraint",
     "only ask the cabin crew to warn the person",
     "restrain the person only after permission from the State of Registry",
     "take no action until the aircraft has landed"],
    "The PIC may impose reasonable measures, including restraint, and may disembark the person or hand them to the authorities. Crew and passengers who help in good faith are not liable.");
  q("01", "If an airline fails to issue a passenger ticket, the contract of carriage:",
    ["still exists and remains valid",
     "is void, and the passenger may not travel",
     "exists, but without any limit of liability",
     "becomes a contract under the law of the State of departure only"],
    "The ticket is evidence of the contract. Its absence or irregularity does not affect the existence or validity of the contract (Montreal Convention 1999).");
  q("01", "Regulation (EC) No 261/2004 concerns:",
    ["compensation and assistance to passengers for denied boarding, cancellation or long delay",
     "the liability limit for lost or damaged baggage",
     "security screening of passengers and cabin baggage",
     "flight time limitations for cabin crew"],
    "261/2004 sets common EU rules on passenger rights when flights are cancelled, delayed or boarding is denied.");
  q("01", "IATA is:",
    ["an international trade association of airlines",
     "a specialised agency of the United Nations",
     "the EU agency responsible for aviation safety",
     "an organisation of air navigation service providers"],
    "IATA (International Air Transport Association) represents airlines and cooperates with ICAO. ICAO is the UN agency. EASA is the EU agency.");
  q("01", "Within the EASA regulatory framework, which of the following is 'soft law'?",
    ["Acceptable Means of Compliance (AMC) and Guidance Material (GM)",
     "The Basic Regulation (EU) 2018/1139",
     "Implementing rules such as the Aircrew Regulation",
     "Delegated acts adopted by the European Commission"],
    "Hard law = the Basic Regulation and the delegated and implementing acts. Soft law = CS, AMC and GM, which are non-binding.");
  q("01", "Compliance with an EASA Acceptable Means of Compliance (AMC):",
    ["creates a presumption of compliance with the related implementing rule; alternative means may be used",
     "is mandatory; no other means of compliance may be used",
     "has no link to compliance with the implementing rule",
     "is required only for operators outside the EU"],
    "AMCs are non-binding. Following one is presumed to meet the rule, and alternative means of compliance can be approved.");
  q("01", "The main aim of the Single European Sky (SES) regulations is to:",
    ["reform European air traffic management to improve safety, capacity and efficiency by reducing airspace fragmentation",
     "harmonise the format of pilot licences across Europe",
     "regulate airline fares within the European Union",
     "merge all national aviation authorities into EASA"],
    "SES restructures European airspace and ATM, for example with functional airspace blocks and the Network Manager (EUROCONTROL).");
  q("01", "According to the Chicago Convention, certificates of airworthiness issued by the State of Registry shall be recognised as valid by other States provided that:",
    ["they were issued under requirements equal to or above the ICAO minimum standards",
     "the aircraft has been inspected by every State it overflies",
     "the certificate was issued less than 12 months ago",
     "the certificate has been endorsed by EASA"],
    "Article 33: certificates and licences are recognised if the requirements under which they were issued are equal to or above the minimum ICAO standards.");

  // ---------- 010 02 Airworthiness and registration ----------
  q("02", "A certificate of airworthiness is issued by the:",
    ["State of Registry", "State of Manufacture", "State of the Operator", "State of Design"],
    "The State of Registry issues or validates the CofA (Annex 8, Chicago Article 31). In the EU, this is the competent authority of the Member State of registry.");
  q("02", "Under EU rules, a certificate of airworthiness remains valid:",
    ["as long as it is not surrendered, suspended or revoked and the aircraft is maintained in accordance with the continuing-airworthiness requirements",
     "for 12 months from the date of issue",
     "for 36 months, then it must be renewed by a test flight",
     "until the aircraft changes operator"],
    "An EU CofA has no expiry date. Its validity depends on continuing airworthiness being maintained, including a current airworthiness review certificate (ARC).");
  q("02", "According to ICAO Annex 8, the continuing airworthiness of an aircraft is determined by the:",
    ["State of Registry", "State of Design", "aircraft manufacturer", "pilot-in-command before each flight"],
    "Annex 8: the State of Registry shall determine the continuing airworthiness of an aircraft against the appropriate airworthiness requirements.");
  q("02", "ICAO Annex 7 defines an 'aircraft' as any machine that can derive support in the atmosphere from:",
    ["the reactions of the air other than the reactions of the air against the earth's surface",
     "aerodynamic forces only",
     "the reactions of the air, including against the earth's surface",
     "engine thrust or aerodynamic lift"],
    "The exclusion of 'reactions against the earth's surface' is what excludes hovercraft.");
  q("02", "A heavier-than-air aircraft is defined as any aircraft deriving its lift in flight:",
    ["chiefly from aerodynamic forces", "only from fixed wings", "from engine power", "chiefly from buoyancy"],
    "Annex 7: heavier-than-air aircraft derive their lift in flight chiefly from aerodynamic forces. Balloons and airships are lighter-than-air.");
  q("02", "The nationality mark of an aircraft is selected from the series of radio call-sign symbols allocated to the State of Registry by the:",
    ["International Telecommunication Union (ITU)", "International Civil Aviation Organization (ICAO)", "International Air Transport Association (IATA)", "European Union Aviation Safety Agency (EASA)"],
    "Annex 7: nationality marks come from the ITU call-sign series. The registration mark is assigned by the State of Registry. Common marks are assigned by ICAO.");
  q("02", "When both the nationality mark and the registration mark consist of letters, they are:",
    ["separated by a hyphen", "written together without a space", "separated by a full stop", "written with the registration mark first"],
    "For example EI-DVM: nationality mark EI, a hyphen, then the registration mark.");
  q("02", "On the wings of a heavier-than-air aircraft, the nationality and registration marks shall be at least:",
    ["50 cm high", "30 cm high", "15 cm high", "1 m high"],
    "Annex 7: at least 50 cm on the wings and at least 30 cm on the fuselage or vertical tail surfaces.");
  q("02", "Which registration mark combination is NOT permitted?",
    ["A combination that could be confused with distress or urgency signals, such as SOS or PAN",
     "A combination of three letters after the nationality mark",
     "A combination including the letter Z",
     "A combination of letters and numbers"],
    "Annex 7 excludes combinations that could be confused with distress or urgency signals (SOS, PAN, XXX, TTT), five-letter International Code of Signals groups and three-letter Q codes.");
  q("02", "The aircraft identification plate shall be:",
    ["made of fireproof material, inscribed with at least the nationality (or common) mark and registration mark, and secured near the main entrance",
     "attached to the instrument panel and show the type certificate number",
     "painted on the vertical tail with the operator's name",
     "kept in the aircraft documents folder"],
    "Annex 7 requires a fireproof identification plate near the main entrance showing at least the nationality or common mark and the registration mark.");

  // ---------- 010 04 Personnel licensing ----------
  q("04", "The minimum age for the issue of an ATPL(A) is:",
    ["21 years", "18 years", "23 years", "19 years"],
    "Part-FCL: PPL 17, CPL 18, ATPL 21.");
  q("04", "The minimum age for the issue of a CPL(A) is:",
    ["18 years", "17 years", "21 years", "16 years"],
    "Part-FCL: PPL 17, CPL 18, ATPL 21.");
  q("04", "An applicant for an ATPL(A) shall have completed at least:",
    ["1,500 hours of flight time in aeroplanes, including at least 500 hours in multi-pilot operations",
     "1,000 hours of flight time, including 250 hours as PIC",
     "1,500 hours of flight time, including 1,000 hours in multi-pilot operations",
     "500 hours in multi-pilot operations; total time is not specified"],
    "FCL.510.A: 1,500 h in aeroplanes, of which at least 500 h in multi-pilot operations, plus further requirements for PIC, cross-country, instrument and night time.");
  q("04", "Which of the following is a privilege of the holder of a CPL(A)?",
    ["To act as PIC in commercial air transport of any single-pilot aeroplane",
     "To act as PIC in commercial air transport of a multi-pilot aeroplane",
     "To act as PIC in commercial air transport of any aeroplane after 500 hours",
     "To act only as co-pilot, never as PIC"],
    "CPL(A): PIC or co-pilot in non-CAT operations, PIC in CAT of single-pilot aeroplanes, and co-pilot in CAT. PIC of multi-pilot aeroplanes in CAT needs an ATPL.");
  q("04", "The privileges of an ATPL(A) holder include acting as:",
    ["PIC of aeroplanes engaged in commercial air transport",
     "PIC of single-pilot aeroplanes only",
     "co-pilot only, until 3,000 hours of flight time",
     "flight instructor without further rating"],
    "FCL.505: the ATPL(A) holder may exercise all PPL, CPL and IR privileges and act as PIC of aeroplanes engaged in commercial air transport.");
  q("04", "According to Part-FCL, the exercise of the privileges of a licence depends on:",
    ["the validity of the ratings contained in it and of the medical certificate",
     "the validity of the licence only",
     "a valid logbook and a recent proficiency check",
     "membership of an approved training organisation"],
    "FCL.040: the privileges depend on the validity of the ratings in the licence, if applicable, and of the medical certificate.");
  q("04", "When exercising the privileges of a licence, a pilot shall carry:",
    ["a valid licence, a valid medical certificate and a personal identification document with a photo",
     "a valid licence only",
     "a valid licence and the pilot logbook",
     "a valid medical certificate and the aircraft's certificate of registration"],
    "FCL.045: carry the licence, the medical certificate and personal ID containing a photo.");
  q("04", "A pilot who has reached the age of 65 may:",
    ["not act as pilot of an aircraft engaged in commercial air transport",
     "act as pilot in commercial air transport only as a member of a multi-pilot crew",
     "act as PIC in commercial air transport with a six-month medical",
     "act as pilot in commercial air transport without restriction"],
    "FCL.065: at 60–64, commercial air transport only as part of a multi-pilot crew. From 65, no commercial air transport at all.");
  q("04", "A pilot aged 62 may act as pilot of an aircraft engaged in commercial air transport:",
    ["only as a member of a multi-pilot crew", "only on single-pilot aircraft", "only on cargo flights", "without any restriction"],
    "FCL.065(b): from 60 to 64, only as a member of a multi-pilot crew.");
  q("04", "A pilot whose language proficiency was assessed at Level 4 (operational) must be re-evaluated every:",
    ["4 years", "6 years", "2 years", "never"],
    "FCL.055: Level 4 every 4 years, Level 5 every 6 years, and Level 6 (expert) needs no re-evaluation.");
  q("04", "To carry passengers as PIC, a pilot must have made in the preceding 90 days at least:",
    ["3 take-offs, approaches and landings in an aircraft of the same type or class, or an FFS",
     "1 take-off and landing in any aircraft",
     "5 take-offs and landings, including 1 at night",
     "3 take-offs and landings in the preceding 30 days"],
    "FCL.060 recency: 3 take-offs, approaches and landings in the preceding 90 days, as sole manipulator of the controls.");
  q("04", "Which class of medical certificate is required to exercise the privileges of a CPL, MPL or ATPL?",
    ["Class 1", "Class 2", "LAPL medical", "Class 3"],
    "Part-MED: Class 1 for commercial licences. Class 2 for PPL. Class 3 is for air traffic controllers.");
  q("04", "A Class 1 medical certificate issued to a 35-year-old airline co-pilot is valid for:",
    ["12 months", "6 months", "24 months", "60 months"],
    "MED.A.045: Class 1 is valid 12 months. It is reduced to 6 months at 60+, or at 40+ for single-pilot commercial air transport carrying passengers.");
  q("04", "The validity of a Class 1 medical certificate is reduced to 6 months for a pilot aged 42 who:",
    ["flies single-pilot commercial air transport carrying passengers",
     "flies multi-pilot commercial air transport",
     "holds an instrument rating",
     "flies cargo flights at night"],
    "MED.A.045: 6 months for holders aged 40 or more in single-pilot CAT carrying passengers, and for all holders aged 60 or more.");
  q("04", "After a surgical operation, a licence holder shall:",
    ["not exercise the licence privileges and seek aero-medical advice without undue delay",
     "wait 21 days and then resume flying",
     "inform the operator only",
     "continue flying, but only as co-pilot"],
    "MED.A.020: after surgery or an invasive procedure (and for illness, medication, pregnancy and so on), seek aero-medical advice from an AME or AeMC without undue delay.");
  q("04", "Under Part-FCL, 'night' means the period:",
    ["between the end of evening civil twilight and the beginning of morning civil twilight",
     "from sunset to sunrise",
     "from 30 minutes after sunset to 30 minutes before sunrise",
     "when the sun is more than 12° below the horizon"],
    "Night is defined by civil twilight (sun 6° below the horizon), or another period prescribed by the authority.");
  q("04", "For aeroplanes, 'flight time' is the total time from the moment the aircraft:",
    ["first moves for the purpose of taking off until it finally comes to rest at the end of the flight",
     "begins the take-off run until it touches down",
     "leaves the ground until it touches down",
     "starts its engines until they are shut down"],
    "Part-FCL definition: from first movement for the purpose of taking off until the aircraft finally comes to rest at the end of the flight.");
  q("04", "Which of the following is a 'category' of aircraft under Part-FCL?",
    ["Aeroplane", "Single-engine piston (land)", "Airbus A320", "Multi-engine piston (sea)"],
    "Category = aeroplane, helicopter, airship, sailplane or balloon. SEP and MEP are classes. A320 is a type.");
  q("04", "A single-engine piston (SEP) class rating is valid for:",
    ["24 months", "12 months", "36 months", "6 months"],
    "Single-pilot single-engine class ratings are valid for 2 years. Multi-engine class ratings and type ratings are valid for 1 year.");
  q("04", "An instrument rating (IR) is valid for:",
    ["1 year", "2 years", "3 years", "6 months"],
    "FCL.625: the IR is valid for 1 year. Revalidate within the 3 months before the expiry date.");
  q("04", "When a type rating is revalidated within the 3 months immediately before its expiry date, the new validity period:",
    ["runs from the original expiry date",
     "runs from the date of the proficiency check",
     "is reduced to 6 months",
     "starts at the end of the calendar month of the check"],
    "Revalidating in the 3-month window means no validity is lost. The new period counts from the old expiry date.");
  q("04", "The holder of an MPL(A) is entitled to act as:",
    ["co-pilot of an aeroplane required to be operated with a co-pilot",
     "PIC in commercial air transport of a single-pilot aeroplane",
     "PIC of any multi-pilot aeroplane",
     "flight instructor on multi-pilot aeroplanes"],
    "The MPL (multi-crew pilot licence) is designed to train airline co-pilots. Its privileges are to act as co-pilot in an aeroplane required to be operated with a co-pilot.");
  q("04", "The relationship between ICAO Annex 1 and the EU Aircrew Regulation is that:",
    ["the Aircrew Regulation implements the Annex 1 standards, and any differences are notified to ICAO",
     "Annex 1 overrides the Aircrew Regulation inside the EU",
     "Annex 1 applies only to licences issued outside the EU",
     "they are unrelated; Annex 1 covers air traffic controllers only"],
    "Annex 1 sets the minimum international standards. Part-FCL and Part-MED implement them in EU law, sometimes more demandingly.");

  // ---------- 010 05 Rules of the air ----------
  q("05", "Two power-driven aeroplanes are converging at approximately the same level. Which one shall give way?",
    ["The one that has the other on its right", "The one that has the other on its left", "The faster one", "The higher one"],
    "SERA.3210: when converging at about the same level, the aircraft that has the other on its right gives way.");
  q("05", "A power-driven aeroplane and a sailplane are converging at approximately the same level. Which one has the right of way?",
    ["The sailplane", "The aeroplane", "The one on the right", "The faster one"],
    "Power-driven heavier-than-air aircraft give way to airships, sailplanes and balloons.");
  q("05", "A sailplane and a free balloon are converging. Which shall give way?",
    ["The sailplane", "The balloon", "The one at the higher level", "The one that has the other on its left"],
    "The order of give way: power-driven aircraft, then airships, then sailplanes, then balloons. The balloon has priority over everything.");
  q("05", "Two aircraft are approaching head-on. Each shall:",
    ["alter its heading to the right", "alter its heading to the left", "climb", "descend"],
    "SERA.3210: when approaching head-on or nearly so, each aircraft alters its heading to the right.");
  q("05", "An aircraft is overtaking another in flight. The overtaking aircraft shall:",
    ["keep out of the way by altering its heading to the right", "keep out of the way by altering its heading to the left", "climb above the other aircraft", "flash its landing lights and continue"],
    "The aircraft being overtaken has the right of way. The overtaking aircraft passes by altering heading to the right.");
  q("05", "An 'overtaking aircraft' is one that approaches another from the rear on a line forming an angle with the other's plane of symmetry of less than:",
    ["70°", "45°", "90°", "110°"],
    "SERA.3210: within 70° of the plane of symmetry. At night it would then see only the other aircraft's white tail light, not its red or green wing lights.");
  q("05", "Two aeroplanes are approaching an aerodrome to land. Which has the right of way?",
    ["The one at the lower level, but it shall not cut in front of an aircraft on final", "The one at the higher level", "The faster one", "The one that called first"],
    "The higher aircraft gives way to the lower one. The lower one must not use this rule to cut in front of, or overtake, an aircraft on final.");
  q("05", "The aircraft that has the right of way shall:",
    ["maintain its heading and speed", "climb to increase separation", "turn right", "reduce speed"],
    "SERA.3210: the aircraft with the right of way maintains its heading and speed. It is still responsible for avoiding a collision.");
  q("05", "The white navigation light at the tail of an aeroplane is visible through an angle of:",
    ["140°, that is 70° either side of dead astern", "110° either side of dead astern", "180° in the rear hemisphere", "220° in the horizontal plane"],
    "Red (left) and green (right) each cover 110° from dead ahead. The white tail light covers the remaining 140°.");
  q("05", "Except for take-off and landing, a VFR flight over a congested area shall be flown at least:",
    ["1,000 ft above the highest obstacle within 600 m of the aircraft", "500 ft above the highest obstacle within 150 m of the aircraft", "1,500 ft above the ground", "2,000 ft above the highest obstacle within 8 km"],
    "SERA.5005(f): over congested areas or open-air assemblies of persons, 300 m (1,000 ft) above the highest obstacle within a radius of 600 m.");
  q("05", "Except for take-off and landing, a VFR flight away from congested areas shall be flown at least:",
    ["500 ft above the ground or water, or above the highest obstacle within 150 m", "1,000 ft above the ground", "300 ft above the highest obstacle within 600 m", "1,000 ft above the highest obstacle within 8 km"],
    "SERA.5005(f): 150 m (500 ft) above the ground or water, or 150 m above the highest obstacle within 150 m of the aircraft.");
  q("05", "Where no minimum flight altitude is published, an IFR flight over high terrain shall be flown at least:",
    ["2,000 ft above the highest obstacle within 8 km of the estimated position", "1,000 ft above the highest obstacle within 8 km", "2,000 ft above the highest obstacle within 5 NM", "1,500 ft above ground level"],
    "SERA.5015: 600 m (2,000 ft) above the highest obstacle within 8 km over high terrain or mountains, and 300 m (1,000 ft) elsewhere.");
  q("05", "Below FL 100 and above 3,000 ft AMSL in Class D airspace, the VMC minima for an aeroplane are:",
    ["5 km visibility, 1,500 m horizontally and 1,000 ft vertically from cloud", "8 km visibility, 1,500 m horizontally and 1,000 ft vertically from cloud", "5 km visibility, clear of cloud and in sight of the surface", "1,500 m visibility, clear of cloud"],
    "SERA.5001: below FL 100 in all classes, 5 km, 1,500 m and 300 m (1,000 ft). At or above FL 100 the visibility becomes 8 km.");
  q("05", "At or above FL 100, the minimum flight visibility for VFR is:",
    ["8 km", "5 km", "10 km", "1,500 m"],
    "SERA.5001: 8 km at or above 3,050 m (FL 100), with the same distance from cloud: 1,500 m horizontally and 1,000 ft vertically.");
  q("05", "In Class G airspace at 2,000 ft AMSL over flat terrain at sea level, the basic VMC minima for an aeroplane are:",
    ["5 km visibility, clear of cloud and in sight of the surface", "5 km visibility, 1,500 m horizontally and 1,000 ft vertically from cloud", "8 km visibility, clear of cloud", "3 km visibility, 1,000 m horizontally from cloud"],
    "In Classes F and G at or below 900 m (3,000 ft) AMSL or 300 m above terrain: 5 km, clear of cloud and in sight of the surface. The visibility can be reduced to 1,500 m at 140 kt IAS or less.");
  q("05", "Unless cleared for special VFR, a VFR flight shall not take off from an aerodrome within a control zone when:",
    ["the ceiling is below 1,500 ft or the ground visibility is below 5 km", "the ceiling is below 1,000 ft or the ground visibility is below 3 km", "the ceiling is below 2,000 ft or the ground visibility is below 8 km", "the cloud base is below 3,000 ft"],
    "SERA.5005(b): 450 m (1,500 ft) ceiling and 5 km ground visibility.");
  q("05", "A special VFR flight may take off from an aerodrome in a control zone when the ground visibility is at least:",
    ["1,500 m", "800 m", "3 km", "5 km"],
    "SERA.5010: ground visibility at least 1,500 m (800 m for helicopters), IAS 140 kt or less, clear of cloud and in sight of the surface.");
  q("05", "In which airspace class are VFR flights NOT permitted?",
    ["Class A", "Class B", "Class C", "Class D"],
    "Class A is IFR only.");
  q("05", "A VFR flight in level cruise above 3,000 ft above the ground on a magnetic track of 120° should fly at:",
    ["FL 55", "FL 60", "FL 50", "FL 65"],
    "Magnetic track 000–179°: IFR odd thousands, VFR odd thousands + 500 (FL 35, 55, 75 …).");
  q("05", "An IFR flight below FL 290 on a magnetic track of 250° should fly at:",
    ["FL 80", "FL 90", "FL 85", "FL 95"],
    "Magnetic track 180–359°: IFR even thousands (FL 60, 80, 100 …).");
  q("05", "In RVSM airspace, an IFR flight on a magnetic track of 270° should be assigned:",
    ["FL 360", "FL 350", "FL 370", "FL 390"],
    "In RVSM (FL 290–410), westbound tracks (180–359°) use FL 300, 320, 340, 360, 380, 400. Eastbound tracks use 290, 310 … 410.");
  q("05", "A steady green light directed from the tower to an aircraft in flight means:",
    ["cleared to land", "return for landing", "give way and continue circling", "land at this aerodrome and proceed to the apron"],
    "Steady green: in flight, cleared to land. On the ground, cleared for take-off.");
  q("05", "A series of green flashes directed to an aircraft on the ground means:",
    ["cleared to taxi", "cleared for take-off", "stop", "return to the starting point"],
    "Green flashes: in flight, return for landing. On the ground, cleared to taxi.");
  q("05", "A steady red light directed to an aircraft in flight means:",
    ["give way to other aircraft and continue circling", "aerodrome unsafe, do not land", "do not land for the time being", "stop"],
    "Steady red: in flight, give way and continue circling. On the ground, stop.");
  q("05", "A series of red flashes directed to an aircraft in flight means:",
    ["aerodrome unsafe, do not land", "give way to other aircraft and continue circling", "return to the starting point", "cleared to land"],
    "Red flashes: in flight, aerodrome unsafe, do not land. On the ground, taxi clear of the landing area in use.");
  q("05", "A series of white flashes directed to an aircraft in flight means:",
    ["land at this aerodrome and proceed to the apron", "return for landing", "aerodrome unsafe, do not land", "cleared to land"],
    "White flashes: in flight, land at this aerodrome and proceed to the apron (clearances will follow). On the ground, return to the starting point.");
  q("05", "A red pyrotechnic light directed to an aircraft in flight means:",
    ["notwithstanding any previous instructions, do not land for the time being", "aerodrome closed for the rest of the day", "you have been intercepted", "land immediately"],
    "Red pyrotechnic: do not land for the time being, whatever instructions you had before.");
  q("05", "By day, an aircraft in flight acknowledges an ATC light signal by:",
    ["rocking its wings, except on the base and final legs", "flashing its landing lights twice", "switching its navigation lights on and off", "making a full orbit"],
    "By day, rock the wings (not on base or final). By night, flash the landing lights or, if none, the navigation lights twice.");
  q("05", "Simulated instrument flight may only be carried out if:",
    ["fully functioning dual controls are installed and a qualified pilot occupies a control seat as safety pilot",
     "the flight is conducted under IFR in controlled airspace",
     "an instructor is on board, in any seat",
     "the aircraft carries an autopilot"],
    "SERA.3130: dual controls and a qualified safety pilot with adequate vision (or a competent observer in communication).");
  q("05", "A flight plan for a flight to be provided with an ATC service shall normally be submitted at least:",
    ["60 minutes before departure", "30 minutes before departure", "2 hours before departure", "10 minutes before departure"],
    "SERA.4001: at least 60 minutes before departure. A plan filed in flight must reach ATS at least 10 minutes before entering the controlled airspace.");
  q("05", "The appropriate ATS unit shall be informed if the average TAS at cruising level varies from the flight-planned TAS by:",
    ["5 % or more", "10 % or more", "10 kt or more", "15 kt or more"],
    "SERA.8020 (inadvertent changes): ±5 % TAS variation must be reported.");
  q("05", "If an ATC clearance is not satisfactory to the PIC, the PIC:",
    ["may request an amended clearance and, if practicable, one will be issued", "must accept it and file a complaint after landing", "may ignore it and inform ATC later", "must divert to the alternate"],
    "SERA.8015 and Doc 4444: the PIC may ask for an amended clearance. Until a new one is received, the PIC must not deviate from the current clearance except in an emergency.");
  q("05", "The PIC may depart from the rules of the air:",
    ["only when absolutely necessary in the interests of safety", "whenever ATC agrees by radio", "whenever the flight is VFR", "whenever the operator approves"],
    "The PIC is responsible for complying with the rules of the air but may depart from them when absolutely necessary in the interests of safety.");
  q("05", "Unless otherwise instructed, when approaching an aerodrome for landing and after take-off, an aircraft shall make:",
    ["all turns to the left", "all turns to the right", "a straight-in approach", "a full orbit over the aerodrome"],
    "SERA.3225: make all turns to the left unless otherwise indicated or instructed.");
  q("05", "An intercepted aircraft shall immediately:",
    ["follow the instructions given by the intercepting aircraft, interpreting and responding to its visual signals",
     "continue on its flight plan route and call the intercepting aircraft",
     "land at the nearest aerodrome",
     "climb to the minimum sector altitude"],
    "SERA.11015: follow the intercepting aircraft's instructions, notify ATS if possible, call on 121.5 MHz and squawk 7700 unless told otherwise.");
  q("05", "An intercepted aircraft should first try to establish radio contact with the intercepting aircraft on:",
    ["121.5 MHz", "the frequency of the current ATS unit only", "123.45 MHz", "243 MHz only"],
    "Make a general call on the emergency frequency 121.5 MHz (and repeat on 243 MHz if possible).");
  q("05", "Unless instructed otherwise, an intercepted aircraft equipped with SSR should select:",
    ["Mode A code 7700, with Mode C", "Mode A code 7600", "Mode A code 7500", "Mode A code 2000"],
    "SERA: select 7700 (Mode A) with Mode C, unless otherwise instructed by the appropriate ATS unit.");
  q("05", "An intercepting aircraft rocks its wings from a position slightly above, ahead and normally to the left of you, then makes a slow level turn. This means:",
    ["You have been intercepted. Follow me.", "You may proceed.", "Land at this aerodrome.", "Cannot comply."],
    "Series 1. You reply by rocking your wings and following.");
  q("05", "An intercepting aircraft makes an abrupt break-away: a climbing turn of 90° or more without crossing your line of flight. This means:",
    ["You may proceed.", "Follow me.", "Land at this aerodrome.", "Descend immediately."],
    "Series 2: you may proceed. You reply by rocking your wings.");
  q("05", "An intercepted aircraft switches all available lights on and off at regular intervals. This means:",
    ["Cannot comply.", "In distress.", "Understood, will comply.", "The aerodrome is inadequate."],
    "Regular intervals = cannot comply. Irregular flashing = in distress.");
  q("05", "A normal voice position report contains:",
    ["aircraft identification, position, time, level, next position and time over, ensuing significant point",
     "aircraft identification, position, time, fuel endurance, persons on board, destination",
     "aircraft identification, heading, airspeed, level, wind, temperature",
     "aircraft identification, position, level, squawk, cleared level, ATIS letter"],
    "The six standard items. Airspeed is added when asked for or when it differs from the plan.");
  q("05", "A controlled VFR flight finds that it can no longer continue in VMC. The pilot should:",
    ["request an amended clearance to continue in VMC or leave controlled airspace, request special VFR in a CTR, or request IFR",
     "continue under VFR and descend below cloud",
     "squawk 7600 and continue to destination",
     "change to IFR without telling ATC"],
    "SERA and Annex 2: stay in VMC and get an amended clearance, special VFR (in a CTR) or IFR if qualified.");
  q("05", "Unless authorised, VFR flights shall not be operated:",
    ["above FL 195", "above FL 245", "above FL 100", "above 10,000 ft AMSL in any class"],
    "SERA.5005: no VFR above FL 195 or at transonic and supersonic speeds, unless authorised.");

  // ---------- 010 06 Aircraft operations (PANS-OPS) ----------
  q("06", "An instrument approach procedure may have up to five segments. They are:",
    ["arrival, initial, intermediate, final and missed approach", "departure, initial, intermediate, final and landing", "arrival, holding, intermediate, final and landing", "initial, intermediate, final, circling and missed approach"],
    "Doc 8168: arrival, initial, intermediate, final and missed approach segments.");
  q("06", "The intermediate approach segment begins at the:",
    ["IF and ends at the FAF or FAP", "IAF and ends at the IF", "FAF and ends at the MAPt", "MAPt and ends at the start of climb"],
    "Initial: IAF to IF. Intermediate: IF to FAF/FAP. Final: FAF/FAP to the MAPt or landing.");
  q("06", "The main purpose of the intermediate approach segment is to:",
    ["adjust speed and configuration and position the aircraft for the final approach", "descend to the MDA", "enter the holding pattern", "establish the missed approach climb"],
    "The intermediate segment blends the initial segment into the final approach. The aircraft gets established, with speed and configuration adjusted.");
  q("06", "An aircraft with a V(AT) of 130 kt belongs to approach category:",
    ["C", "B", "D", "E"],
    "A < 91 kt, B 91–120, C 121–140, D 141–165, E 166–210.");
  q("06", "V(AT), used to define approach categories, is based on:",
    ["1.3 × the stall speed in landing configuration at maximum certificated landing mass", "1.2 × the stall speed at the actual landing mass", "the indicated approach speed flown on final", "1.3 × the stall speed at maximum take-off mass"],
    "V(AT) = 1.3 V(S0) (or 1.23 V(S1g)) at maximum certificated landing mass. Categories are fixed for the aircraft type, not the day's mass.");
  q("06", "A non-precision approach is classed as 'straight-in' if the angle between the final approach track and the runway centre line does not exceed:",
    ["30°", "15°", "45°", "5°"],
    "PANS-OPS: up to 30° for a straight-in non-precision approach. Beyond that, circling minima apply.");
  q("06", "A minimum sector altitude (MSA) provides a minimum obstacle clearance of:",
    ["1,000 ft (300 m) within 25 NM of the navaid or reference point", "2,000 ft within 25 NM", "1,000 ft within 10 NM", "500 ft within 25 NM"],
    "MSA: 300 m (1,000 ft) obstacle clearance within 46 km (25 NM).");
  q("06", "A decision height (DH) is referenced to:",
    ["the threshold elevation", "the aerodrome elevation", "mean sea level", "the highest obstacle in the approach area"],
    "DA is referenced to mean sea level and DH to the threshold elevation. DA/DH are used for precision and APV approaches.");
  q("06", "MDA/MDH are used for:",
    ["non-precision approaches and circling", "precision approaches only", "APV approaches only", "visual approaches only"],
    "Precision and APV approaches use DA/DH. Non-precision approaches and circling use MDA/MDH.");
  q("06", "The relationship between OCA/H and the operational decision altitude/height (DA/H) is that:",
    ["DA/H is never lower than OCA/H", "DA/H is always 200 ft below OCA/H", "OCA/H is always higher than the MDA/H", "they are always the same value"],
    "OCA/H meets the obstacle-clearance criteria. Operator minima (DA/H, MDA/H) add other factors but are never below OCA/H.");
  q("06", "The optimum glide path angle for a precision approach is:",
    ["3° (5.2 %)", "2.5° (4.4 %)", "3.5° (6.1 %)", "5° (8.7 %)"],
    "PANS-OPS: the optimum is 3°. The minimum is 2.5°, and steeper approaches need special approval.");
  q("06", "The three phases of a missed approach procedure are:",
    ["initial, intermediate and final", "climb, cruise and descent", "go-around, climb and hold", "decision, climb and turn"],
    "Initial: MAPt to start of climb. Intermediate: climb with 30 m MOC. Final: 50 m MOC. The nominal climb gradient is 2.5 %.");
  q("06", "If a missed approach is started before reaching the missed approach point (MAPt), the pilot should normally:",
    ["fly to the MAPt and then follow the missed approach procedure", "turn immediately onto the missed approach track", "climb straight ahead to the MSA", "enter the hold at the FAF"],
    "PANS-OPS: proceed to the MAPt (via the approach track) and then follow the published missed approach, unless otherwise specified.");
  q("06", "Regarding the height at which the missed approach point (MAPt) is crossed:",
    ["the pilot may cross the MAPt higher than the procedure requires", "the pilot must cross the MAPt exactly at the MDA", "the pilot must cross the MAPt at the OCA", "crossing the MAPt higher than the procedure is prohibited"],
    "Crossing the MAPt higher than the published altitude is allowed. Lower is not.");
  q("06", "During an ILS approach the glide path fails. The approach:",
    ["becomes a non-precision (localiser-only) approach using LOC minima", "may be continued to the published DA", "must be continued visually below cloud", "must be flown as a circling approach"],
    "Without the glide path, it is a localiser-only non-precision approach with its own minima.");
  q("06", "During a circling approach, visual reference is lost. The pilot should:",
    ["make an initial climbing turn towards the landing runway, then establish on the missed approach track", "climb straight ahead on the current heading", "descend to regain visual contact", "turn away from the runway and hold"],
    "PANS-OPS: climbing turn towards the landing runway, overhead the aerodrome, then join the missed approach. This keeps the aircraft in the protected circling area.");
  q("06", "In a holding pattern, turns should be made at:",
    ["3° per second or 25° of bank, whichever requires the lesser bank", "a bank angle of 30°", "2° per second", "a rate of 3° per second regardless of bank"],
    "PANS-OPS: 3°/s or 25° bank, whichever needs less bank. At high TAS, the 25° limit applies.");
  q("06", "Below 14,000 ft, the still-air outbound time in a holding pattern is:",
    ["1 minute", "1.5 minutes", "2 minutes", "30 seconds"],
    "1 minute up to and including 14,000 ft, and 1.5 minutes above.");
  q("06", "In a holding pattern, timing of the outbound leg starts:",
    ["over or abeam the fix, whichever occurs later", "when the inbound leg is established", "at the start of the outbound turn", "over the fix only"],
    "If abeam cannot be determined, start timing on completion of the outbound turn.");
  q("06", "The maximum holding speed (IAS) for a category C aircraft at FL 120 in normal conditions is:",
    ["230 kt", "240 kt", "265 kt", "210 kt"],
    "Up to 14,000 ft: 230 kt (170 kt for Cat A/B). Up to 20,000 ft: 240 kt. Up to 34,000 ft: 265 kt. Above: M 0.83.");
  q("06", "A holding pattern has an inbound track of 090° and right-hand turns. An aircraft arrives at the fix on a heading of 300°. The correct entry is:",
    ["parallel", "offset (teardrop)", "direct", "any entry at the pilot's discretion"],
    "With inbound track C = 090° and right-hand turns: headings 020–200° direct, 200–270° offset, 270–020° parallel. 300° is a parallel entry.");
  q("06", "A holding pattern has an inbound track of 270° and right-hand turns. An aircraft arrives at the fix on a heading of 060°. The correct entry is:",
    ["offset (teardrop)", "parallel", "direct", "reverse direct"],
    "C = 270°: direct from 200° through 360° to 020°, offset 020–090°, parallel 090–200°. 060° is an offset entry.");
  q("06", "In an offset (teardrop) entry, after crossing the fix the aircraft flies outbound on a track of:",
    ["30° from the reciprocal of the inbound track, on the holding side", "the reciprocal of the inbound track, on the non-holding side", "45° from the inbound track, on the non-holding side", "the inbound track"],
    "The offset entry uses a 30° offset into the holding side, then turns to intercept the inbound track.");
  q("06", "Before take-off, at least one altimeter shall be set to:",
    ["the latest QNH", "QFE", "1013.2 hPa", "the forecast lowest QNH"],
    "PANS-OPS: at least one altimeter is set to the latest QNH before take-off.");
  q("06", "During the climb, the altimeter setting is changed from QNH to 1013.2 hPa:",
    ["on passing the transition altitude", "on passing the transition level", "at the top of climb", "on leaving the control zone"],
    "Climbing: change to standard at the TA. Descending: change to QNH at the TRL.");
  q("06", "The transition layer is the airspace between the:",
    ["transition altitude and the transition level", "aerodrome elevation and the transition altitude", "transition level and FL 100", "lowest usable flight level and FL 195"],
    "Climbing through the layer, report flight levels. Descending through it, report altitudes.");
  q("06", "Consecutive flight levels are separated by a pressure interval corresponding to:",
    ["500 ft in the standard atmosphere", "1,000 ft in the standard atmosphere", "1 hPa", "100 ft"],
    "FL 0 is at the 1013.2 hPa pressure level, and flight levels are 500 ft apart (152.4 m) in the ISA.");
  q("06", "The calculated height of a transition altitude is:",
    ["rounded up to the next full 1,000 ft", "rounded down to the nearest 1,000 ft", "rounded to the nearest 500 ft", "not rounded"],
    "PANS-OPS: the TA should be as low as possible but normally not below 3,000 ft. The calculated height is rounded up to the next full 300 m (1,000 ft).");
  q("06", "The transition level is normally passed to an arriving aircraft:",
    ["in the approach clearance or by ATIS", "only on request by the pilot", "in the departure clearance", "only in the AIP"],
    "The TRL is set by the ATS unit and passed in approach clearances or on ATIS. It must be read back.");
  q("06", "QNH values provided to aircraft are rounded:",
    ["down to the nearest lower whole hectopascal", "up to the next whole hectopascal", "to the nearest whole hectopascal", "to one decimal place"],
    "Doc 4444 and PANS-OPS: altimeter settings are rounded down. It's the safe direction.");
  q("06", "In the absence of ATC directions or regional agreements, ICAO procedures require the transponder to be set to Mode A code:",
    ["2000", "7000", "1200", "7600"],
    "The ICAO default is 2000. In Europe, VFR flights use the VFR conspicuity code 7000.");
  q("06", "Which transponder code indicates radio communication failure?",
    ["7600", "7500", "7700", "7000"],
    "7500 hijack, 7600 radio failure, 7700 emergency.");
  q("06", "A pilot should 'SQUAWK IDENT':",
    ["only when requested by ATC", "on every frequency change", "when entering controlled airspace", "every 10 minutes during IFR flight"],
    "Use IDENT only on request. Unnecessary use confuses the controller's display.");
  q("06", "In an emergency, a pilot who has previously been given a specific SSR code by ATC should normally:",
    ["keep that code unless ATC instructs otherwise", "always change to 7700 immediately", "switch the transponder to standby", "select 7600"],
    "Doc 4444: the pilot normally keeps the assigned code, because the controller is already tracking it, unless instructed otherwise.");
  q("06", "On receiving an ACAS traffic advisory (TA) only, the pilot should:",
    ["not manoeuvre on the TA alone, but look out and prepare for a possible RA", "climb or descend immediately", "turn away from the traffic", "request a new clearance before manoeuvring"],
    "TAs alert the crew. Manoeuvres are made only in response to resolution advisories (RAs).");
  q("06", "An ACAS resolution advisory (RA) conflicts with an ATC instruction. The pilot should:",
    ["follow the RA promptly and inform ATC as soon as possible", "follow the ATC instruction", "ask ATC which to follow", "ignore both and maintain level"],
    "Respond to the RA immediately, even against ATC, unless that would endanger the aircraft. Report to ATC, and return to the clearance once clear of conflict.");
  q("06", "During independent parallel instrument approaches, the 'no transgression zone' (NTZ) is:",
    ["a corridor between the two extended runway centre lines; any penetration requires controller intervention", "the area around the threshold where vehicles may not enter", "the normal operating zone of each localiser", "the airspace above the missed approach point"],
    "Each aircraft has a normal operating zone (NOZ). The NTZ lies between them and is monitored. A penetration triggers instructions to the threatened aircraft.");
  q("06", "Which Part of the Air Operations Regulation (EU) 965/2012 covers operations that need a specific approval, such as RVSM, PBN or low-visibility operations?",
    ["Part-SPA", "Part-NCO", "Part-NCC", "Part-ORO"],
    "Part-SPA (Annex V): specific approvals. Part-NCC (Annex VI): non-commercial complex aircraft. Part-NCO (Annex VII): non-commercial other-than-complex aircraft.");
  q("06", "Part-NCO of the Air Operations Regulation applies to:",
    ["non-commercial operations with other-than-complex motor-powered aircraft", "commercial air transport with aeroplanes", "non-commercial operations with complex motor-powered aircraft", "specialised operations such as aerial photography"],
    "NCO = non-commercial, other-than-complex. NCC = non-commercial, complex. CAT = commercial air transport. SPO = specialised operations.");

  // ---------- 010 07 Air traffic services ----------
  q("07", "Air traffic services comprise:",
    ["air traffic control service, flight information service and alerting service", "area control, approach control and aerodrome control", "ATC service, search and rescue, and meteorological service", "flight information service, advisory service and AIS"],
    "Annex 11: the three ATS. Area, approach and aerodrome control are the three parts of the ATC service.");
  q("07", "The air traffic control service is divided into:",
    ["area control, approach control and aerodrome control service", "en-route, oceanic and terminal service", "flight information, alerting and advisory service", "radar, procedural and advisory service"],
    "Area control (ACC), approach control (APP) and aerodrome control (TWR).");
  q("07", "Which of the following is an objective of the air traffic services?",
    ["To notify appropriate organisations regarding aircraft in need of search and rescue aid", "To provide meteorological forecasts for all flights", "To issue aircraft certificates of airworthiness", "To investigate aircraft accidents"],
    "Annex 11 objectives: prevent collisions, prevent collisions on the manoeuvring area, expedite traffic, provide advice and information, and notify search and rescue organisations.");
  q("07", "In which airspace class are all flights separated from each other?",
    ["Class B", "Class C", "Class D", "Class E"],
    "Classes A and B: all flights separated. In Class A, only IFR is permitted.");
  q("07", "In Class C airspace, VFR flights are:",
    ["separated from IFR flights, and receive traffic information on other VFR flights", "separated from all other flights", "not separated from any flights", "not permitted"],
    "Class C: IFR separated from IFR and VFR. VFR separated from IFR, with traffic information on VFR.");
  q("07", "In Class D airspace, IFR flights are:",
    ["separated from other IFR flights and receive traffic information on VFR flights", "separated from all other flights", "separated from VFR flights only", "not separated, but receive traffic information"],
    "Class D: IFR separated from IFR, with traffic information on VFR. VFR receives traffic information on all other flights.");
  q("07", "In Class E airspace, VFR flights:",
    ["are not subject to an ATC clearance", "need an ATC clearance and continuous two-way radio", "are separated from IFR flights", "are not permitted"],
    "In Class E, ATC separates IFR from IFR. VFR flights need no clearance and get traffic information as far as practicable.");
  q("07", "In Class G airspace, the service provided is:",
    ["flight information service only", "air traffic advisory service", "ATC service to IFR flights", "ATC service to all flights"],
    "Class G is uncontrolled. FIS (and alerting) only.");
  q("07", "In which airspace class does the 250 kt IAS speed limit below FL 100 apply to IFR flights?",
    ["Class D", "Class A", "Class B", "Class C"],
    "It does not apply to Classes A and B, nor to IFR in Class C. It applies to IFR and VFR in D, E, F and G, and to VFR in C.");
  q("07", "The lower limit of a control area shall be established at a height above the ground or water of not less than:",
    ["200 m (700 ft)", "300 m (1,000 ft)", "150 m (500 ft)", "450 m (1,500 ft)"],
    "Annex 11: not less than 200 m (700 ft). It need not be uniform throughout the CTA.");
  q("07", "The lateral limits of a control zone shall extend from the centre of the aerodrome, in the directions from which approaches may be made, at least:",
    ["9.3 km (5 NM)", "18.5 km (10 NM)", "5 km (2.7 NM)", "25 NM"],
    "Annex 11: at least 9.3 km (5 NM).");
  q("07", "A control zone located within the lateral limits of a control area shall extend upwards to at least:",
    ["the lower limit of the control area", "FL 100", "3,000 ft AMSL", "the transition altitude"],
    "So that controlled airspace is continuous between the CTR and the CTA above it.");
  q("07", "Control areas and control zones established within a flight information region:",
    ["form part of that FIR", "are excluded from the FIR", "form part of the UIR", "belong to no FIR"],
    "Annex 11: CTAs and CTRs within an FIR form part of it. FIS and alerting service still apply.");
  q("07", "Which of the following is NOT one of the items of an ATC clearance?",
    ["The aircraft's fuel endurance", "The clearance limit", "The route of flight", "The level(s) of flight"],
    "The contents of a clearance: aircraft identification, clearance limit, route, level(s), and any other necessary instructions (approach or departure manoeuvres, communications, time of expiry).");
  q("07", "Which of the following must be read back to ATC?",
    ["An instruction to hold short of a runway", "The reported surface wind", "Traffic information", "The ATIS weather report"],
    "Read back: runway entry, landing, take-off, hold-short, crossing and backtrack clearances, route clearances, level, heading and speed instructions, SSR codes, altimeter settings, frequencies and the TRL.");
  q("07", "The 'clearance limit' is:",
    ["the point to which an aircraft is granted an ATC clearance", "the time at which a clearance expires", "the lowest level to which an aircraft is cleared", "the boundary of controlled airspace"],
    "Doc 4444 definition. It may be an aerodrome, a reporting point or a controlled airspace boundary.");
  q("07", "ATC clearances do not provide for the prevention of collision with terrain, except when:",
    ["an IFR flight is being radar vectored", "the flight is in Class A airspace", "the flight is VFR in a control zone", "the aircraft is below the MSA"],
    "Doc 4444: the pilot is responsible for terrain clearance, except when an IFR flight is vectored. Then the controller assigns safe levels.");
  q("07", "A pilot should not expect any speed control instructions after passing a point on final approach of:",
    ["4 NM from the threshold", "10 NM from the threshold", "2 NM from the threshold", "the FAF"],
    "Doc 4444: speed control should not be applied after a point 7 km (4 NM) from the threshold on final.");
  q("07", "An aircraft with a maximum certificated take-off mass of 140,000 kg is in wake turbulence category:",
    ["Heavy", "Medium", "Super", "Light"],
    "Light: 7,000 kg or less. Medium: more than 7,000 kg and less than 136,000 kg. Heavy: 136,000 kg or more. Super: A380.");
  q("07", "On initial radio contact with ATS, an aircraft in the Heavy wake turbulence category shall:",
    ["include the word 'HEAVY' immediately after its call sign", "state its maximum take-off mass", "squawk 7700 briefly", "say 'wake category H' after its position"],
    "Doc 4444: 'HEAVY' (or 'SUPER') goes after the call sign on initial contact.");
  q("07", "The radar wake turbulence separation minimum for a Light aircraft following a Heavy aircraft on approach is:",
    ["6 NM", "5 NM", "4 NM", "3 NM"],
    "Heavy behind Heavy 4 NM. Medium behind Heavy 5 NM. Light behind Heavy 6 NM. Light behind Medium 5 NM.");
  q("07", "Without radar, the wake turbulence separation for a Light aircraft landing behind a Medium aircraft is:",
    ["3 minutes", "2 minutes", "4 minutes", "1 minute"],
    "Arriving, non-radar: Medium behind Heavy 2 minutes. Light behind Heavy or Medium 3 minutes.");
  q("07", "Without radar, a Medium aircraft departing from the same runway behind a Heavy aircraft (full-length take-off) requires a wake turbulence separation of:",
    ["2 minutes", "3 minutes", "1 minute", "5 minutes"],
    "2 minutes for Light or Medium behind Heavy (and Light behind Medium). 3 minutes when taking off from an intermediate part of the runway.");
  q("07", "The vertical separation minimum between IFR flights below FL 290 is:",
    ["1,000 ft (300 m)", "500 ft (150 m)", "2,000 ft (600 m)", "1,500 ft (450 m)"],
    "1,000 ft below FL 290. 2,000 ft at or above FL 290, except 1,000 ft in RVSM airspace (FL 290–410).");
  q("07", "The basic horizontal radar separation minimum is:",
    ["5 NM", "3 NM", "10 NM", "2.5 NM"],
    "Doc 4444: 5 NM. It may be reduced to 3 NM (or less, where specified) when the radar's capabilities permit.");
  q("07", "Two aircraft at the same level have departed from the same VOR. Lateral separation exists when their tracks diverge by at least:",
    ["15° and at least one aircraft is 15 NM or more from the VOR", "30° and both aircraft are 15 NM from the VOR", "45° and at least one aircraft is 15 NM from the VOR", "15° and both aircraft are 5 NM from the VOR"],
    "Doc 4444: VOR 15°, NDB 30°, dead reckoning 45°, each with at least one aircraft 15 NM (28 km) or more from the facility.");
  q("07", "The Mach number technique is used to:",
    ["maintain longitudinal separation between aircraft on the same or diverging tracks", "provide lateral separation on parallel tracks", "provide vertical separation in RVSM airspace", "reduce wake turbulence separation"],
    "Aircraft on the same track fly assigned Mach numbers, so the time interval between them stays stable.");
  q("07", "When an IFR flight is cleared for a visual approach:",
    ["ATC continues to provide separation between it and other arriving and departing aircraft", "the pilot becomes responsible for separation from all aircraft", "the flight automatically becomes a VFR flight", "the flight plan is cancelled"],
    "Doc 4444: separation is still provided between an aircraft on a visual approach and other arriving and departing aircraft.");
  q("07", "The surface wind passed to a pilot by the aerodrome control tower is given in degrees:",
    ["magnetic", "true", "grid", "relative to the runway"],
    "TWR wind is magnetic, to match runway directions. Wind in METARs and TAFs is in degrees true.");
  q("07", "'Runway vacated' means that:",
    ["the entire aircraft is beyond the relevant runway-holding position", "the aircraft has slowed to taxi speed on the runway", "the nose wheel has left the runway edge", "the aircraft has turned onto any taxiway"],
    "The whole aircraft must be clear, beyond the runway-holding position.");
  q("07", "Flight information service shall be provided to:",
    ["all aircraft likely to be affected by the information which are provided with ATC or otherwise known to ATS", "IFR flights in controlled airspace only", "VFR flights in Class G only", "aircraft that request it in writing"],
    "Annex 11. FIS includes SIGMET and AIRMET information, volcanic activity, changes to navaids and aerodromes, and so on.");
  q("07", "An ATIS broadcast shall be:",
    ["identified by a letter of the ICAO spelling alphabet and updated immediately when a significant change occurs", "updated every hour at H+20", "read back in full by the pilot", "transmitted only on request"],
    "Each new ATIS message gets the next letter. Pilots confirm receipt of the current letter on first contact.");
  q("07", "The phase in which there is uncertainty about the safety of an aircraft is called:",
    ["INCERFA", "ALERFA", "DETRESFA", "MAYDAY"],
    "INCERFA (uncertainty), ALERFA (alert), DETRESFA (distress).");
  q("07", "The uncertainty phase is declared when no communication has been received from an aircraft within:",
    ["30 minutes after the time a communication should have been received", "5 minutes after the expected time", "15 minutes after the ETA", "60 minutes after the last position report"],
    "Annex 11. INCERFA also applies when an aircraft fails to arrive within 30 minutes of its ETA.");
  q("07", "An aircraft cleared to land fails to land within 5 minutes of the estimated time of landing, and communication has not been re-established. This is the:",
    ["alert phase (ALERFA)", "uncertainty phase (INCERFA)", "distress phase (DETRESFA)", "emergency phase"],
    "Annex 11 alert-phase trigger.");
  q("07", "An aircraft known or believed to be the subject of unlawful interference leads to the declaration of the:",
    ["alert phase", "uncertainty phase", "distress phase", "no phase; the police are informed instead"],
    "Annex 11: unlawful interference is an alert-phase (ALERFA) trigger.");
  q("07", "When it is considered that the fuel on board an aircraft is exhausted, the phase declared is the:",
    ["distress phase", "alert phase", "uncertainty phase", "fuel emergency phase"],
    "DETRESFA: fuel considered exhausted or insufficient to reach safety, or a forced landing is likely or has occurred.");
  q("07", "When an aircraft is considered to be in a state of emergency, the responsible ATS unit shall notify the:",
    ["rescue coordination centre", "operator's headquarters only", "State of Registry", "ICAO regional office"],
    "Alerting service: the ATS unit notifies the RCC and passes all relevant information.");
  q("07", "A pilot wishing to change from IFR to VFR transmits 'cancelling my IFR flight'. ATC should:",
    ["acknowledge, and inform the pilot if IMC is likely to be met along the route", "refuse unless the flight is in Class G", "suggest a new VFR route", "require a new flight plan before agreeing"],
    "ATC must not invite the change, but acknowledges it. If information suggests IMC ahead, ATC passes it on.");
  q("07", "Which of the following requires a special air-report?",
    ["Severe icing", "Light turbulence", "Flight in visible moisture", "Wind changing by 10°"],
    "Special air-reports cover severe turbulence, severe icing, severe mountain waves, thunderstorms, heavy dust or sandstorm, and volcanic ash or activity.");
  q("07", "The 'expected approach time' is the time at which ATC expects an arriving aircraft, following a delay, will:",
    ["leave the holding fix to complete its approach for a landing", "land on the runway", "reach the final approach fix", "enter the control zone"],
    "Doc 4444 definition. It is used in communication-failure procedures to time the start of the descent.");
  q("07", "Air traffic advisory service is provided:",
    ["in Class F airspace to participating IFR flights; it gives advice, not clearances", "in Class E to VFR flights", "in Class D to all flights", "only at uncontrolled aerodromes"],
    "Advisory service is a transitional service. It gives advisory information and separation advice, not ATC clearances.");
  q("07", "'AIRPROX' means a situation in which:",
    ["in the opinion of a pilot or ATS personnel, the distance between aircraft and their relative positions and speeds may have compromised safety", "two aircraft come within 1,000 ft vertically", "a TCAS RA has been issued", "an aircraft infringes controlled airspace"],
    "The definition is a matter of opinion, not a fixed distance. It is reported through an air traffic incident report.");
  q("07", "The prefix 'U' in an ATS route designator (for example UL612) indicates:",
    ["a route in the upper airspace", "an unpublished route", "a route available only to unmanned aircraft", "an RNAV route"],
    "Prefixes: K = helicopter low-level, U = upper airspace, S = supersonic. The letter L in L612 shows a regional RNAV route.");
  q("07", "The emergency frequency on which a pilot may expect ATC to call in an emergency is:",
    ["121.5 MHz", "123.45 MHz", "118.0 MHz", "406 MHz"],
    "121.5 MHz is the aeronautical emergency frequency (243 MHz military).");

  // ---------- 010 08 Aeronautical information ----------
  q("08", "The three parts of an AIP are:",
    ["GEN, ENR and AD", "GEN, MET and AD", "ENR, AD and NOTAM", "GEN, ATS and COM"],
    "Annex 15: Part 1 General (GEN), Part 2 En-route (ENR), Part 3 Aerodromes (AD).");
  q("08", "Differences from ICAO Standards, Recommended Practices and Procedures are published in the AIP part:",
    ["GEN", "ENR", "AD", "AIC"],
    "GEN 1.7 lists national differences from ICAO SARPs and procedures.");
  q("08", "AIRAC changes become effective on common dates at intervals of:",
    ["28 days", "14 days", "56 days", "one calendar month"],
    "The AIRAC cycle is 28 days, so everyone updates databases and charts at the same time.");
  q("08", "AIRAC information shall be distributed by the AIS at least:",
    ["42 days before the effective date", "28 days before the effective date", "7 days before the effective date", "56 days before the effective date"],
    "42 days in advance, so it reaches users at least 28 days before. For major changes, 56 days is recommended.");
  q("08", "Information that would normally be issued as a NOTAM but includes extensive text or graphics is published as:",
    ["an AIP Supplement", "an AIC", "an AIRAC amendment", "a Pre-flight Information Bulletin"],
    "AIP Supplements carry temporary changes of long duration (3 months or more) and short-term information with extensive text or graphics.");
  q("08", "Temporary changes to the AIP of long duration (three months or longer) are published as:",
    ["AIP Supplements", "AIP Amendments", "NOTAMs only", "AICs"],
    "AIP Amendment = permanent change. AIP Supplement = temporary change of long duration.");
  q("08", "Permanent changes to the AIP are published as:",
    ["AIP Amendments", "AIP Supplements", "AICs", "NOTAMs"],
    "AIP Amendments, often under the AIRAC system.");
  q("08", "A NOTAM is distributed:",
    ["by telecommunication (the aeronautical fixed service)", "by post to registered users", "only in the AIP", "by ATIS broadcast only"],
    "NOTAMs are telecommunication notices of the establishment of, condition of or change to facilities, services, procedures or hazards that must be known in good time.");
  q("08", "An ASHTAM contains information about:",
    ["volcanic activity and volcanic ash", "snow and ice on runways", "military exercises", "bird hazards"],
    "ASHTAM is a special NOTAM series for changes in volcanic activity, eruptions and ash clouds.");
  q("08", "Which information would typically be published in an Aeronautical Information Circular (AIC)?",
    ["A long-term forecast of a major change in legislation or procedures", "A runway closure starting tomorrow", "A permanent change of a VOR frequency", "A new SID effective on the next AIRAC date"],
    "AICs carry information that fits neither the AIP nor a NOTAM: long-term forecasts, explanatory or advisory material, administrative matters.");
  q("08", "Where an AIS is not available 24 hours a day, it shall be available during the whole period an aircraft is in flight in its area, plus at least:",
    ["2 hours before and after that period", "1 hour before and after that period", "30 minutes before and after that period", "3 hours before that period only"],
    "Annex 15 requirement.");
  q("08", "A recapitulation of current NOTAMs and other urgent information, prepared before flight, is called a:",
    ["Pre-flight Information Bulletin (PIB)", "AIC", "AIP Supplement", "Checklist of NOTAMs"],
    "The PIB is made available to flight crews as part of pre-flight information.");

  // ---------- 010 09 Aerodromes ----------
  q("09", "In the aerodrome reference code, the code letter is determined by the aeroplane's:",
    ["wingspan", "reference field length", "maximum take-off mass", "approach speed"],
    "Code number (1–4): aeroplane reference field length. Code letter (A–F): wingspan.");
  q("09", "An aeroplane with a wingspan of 34 m has the aerodrome reference code letter:",
    ["C", "B", "D", "E"],
    "A < 15 m, B 15 to < 24 m, C 24 to < 36 m, D 36 to < 52 m, E 52 to < 65 m, F 65 to < 80 m.");
  q("09", "An aerodrome reference code number 4 corresponds to an aeroplane reference field length of:",
    ["1,800 m or more", "1,200 m up to but not including 1,800 m", "800 m up to but not including 1,200 m", "less than 800 m"],
    "Code number: 1 < 800 m, 2 800–1,200 m, 3 1,200–1,800 m, 4 1,800 m or more.");
  q("09", "Under the ACN/PCN method, an aircraft may operate on a pavement without restriction when:",
    ["its ACN is equal to or less than the PCN", "its ACN is greater than the PCN", "its tyre pressure is below 1.5 MPa", "its mass is below 5,700 kg"],
    "ACN ≤ PCN means no restriction. Since November 2024 ICAO uses the equivalent ACR/PCR method.");
  q("09", "The bearing strength of a pavement for aircraft with an apron mass of 5,700 kg or less is reported as:",
    ["maximum allowable aircraft mass and maximum allowable tyre pressure", "the PCN only", "the ACN of the heaviest aircraft", "the runway surface type only"],
    "Annex 14: for light aircraft, report the maximum allowable mass and tyre pressure.");
  q("09", "TODA (take-off distance available) is:",
    ["TORA plus the length of the clearway, if provided", "TORA plus the length of the stopway, if provided", "the length of the runway plus the runway strip", "the length available for the ground run of a landing aeroplane"],
    "TODA = TORA + clearway. ASDA = TORA + stopway.");
  q("09", "ASDA (accelerate-stop distance available) is:",
    ["TORA plus the length of the stopway, if provided", "TORA plus the length of the clearway, if provided", "LDA plus the stopway", "the runway length minus a displaced threshold"],
    "The stopway is where an aircraft can stop after an abandoned take-off.");
  q("09", "A displaced threshold mainly reduces the:",
    ["LDA", "TORA", "ASDA", "TODA"],
    "Landing aircraft cannot use the pavement before a displaced threshold, so the LDA is shorter. Departures may still use it.");
  q("09", "A 'clearway' is an area:",
    ["over which an aeroplane may make a portion of its initial climb to a specified height", "in which an aircraft can be stopped after an abandoned take-off", "around the runway to reduce the risk of damage if an aircraft runs off", "at the end of the runway strip to reduce damage from an overrun"],
    "Clearway: initial climb. Stopway: abandoned take-off. Runway strip: runway excursions. RESA: overruns and undershoots.");
  q("09", "A runway with a magnetic direction of 247° is designated:",
    ["25", "24", "247", "07"],
    "The magnetic direction to the nearest one-tenth: 247° → 25. The opposite end would be 07.");
  q("09", "Runway markings are:",
    ["white", "yellow", "white or yellow, as the State chooses", "orange"],
    "Runway markings are white. Taxiway, runway-holding-position and apron markings are yellow.");
  q("09", "A closed taxiway is marked with:",
    ["a yellow cross", "a white cross", "red and white bands", "a yellow chevron"],
    "Closed runway: white X. Closed taxiway: yellow X.");
  q("09", "A pattern 'A' runway-holding position marking consists of:",
    ["two solid and two dashed yellow lines, with the solid lines on the holding side", "two solid yellow lines joined by perpendicular bars", "a single dashed white line", "two dashed lines on the holding side and two solid lines on the runway side"],
    "Stop before the solid lines. Pattern B (the 'ladder') is used at precision-approach runways.");
  q("09", "A pattern 'B' runway-holding position marking, at a precision approach runway, is supplemented by a:",
    ["category I, II or III holding position sign", "runway designation sign only", "NO ENTRY sign", "location sign"],
    "Annex 14: pattern A goes with a runway designation sign. Pattern B goes with a CAT I/II/III (or joint) holding position sign.");
  q("09", "Mandatory instruction signs have:",
    ["a white inscription on a red background", "a black inscription on a yellow background", "a yellow inscription on a black background", "a red inscription on a white background"],
    "They are the only signs on the movement area that use red.");
  q("09", "A location sign has:",
    ["a yellow inscription on a black background", "a black inscription on a yellow background", "a white inscription on a red background", "a white inscription on a blue background"],
    "Location sign: yellow on black (where you are). Direction and destination signs: black on yellow.");
  q("09", "Taxiway centre-line lights and taxiway edge lights are respectively:",
    ["green and blue", "blue and green", "green and white", "yellow and blue"],
    "Annex 14.");
  q("09", "Runway centre-line lights in the last 300 m before the runway end are:",
    ["red", "white", "alternating red and white", "yellow"],
    "White, then alternating red and white from 900 m to 300 m before the end, then red for the last 300 m.");
  q("09", "On an instrument runway, the runway edge lights over the last 600 m (or last third, if less) are:",
    ["yellow", "red", "white", "green"],
    "This yellow caution zone warns of the approaching runway end.");
  q("09", "Runway threshold lights and runway end lights are respectively:",
    ["green and red", "red and green", "white and red", "green and yellow"],
    "Threshold: green (towards approaching aircraft). Runway end: red.");
  q("09", "A pilot on a PAPI approach sees one white and three red lights. The aircraft is:",
    ["slightly below the glide path", "on the glide path", "slightly above the glide path", "well below the glide path"],
    "Four white: too high. Three white: slightly high. Two and two: on slope. One white: slightly low. Four red: too low.");
  q("09", "On the correct approach slope, an APAPI shows:",
    ["one red and one white light", "two red lights", "two white lights", "one red, one white and one green light"],
    "APAPI (abbreviated PAPI) has two units. On slope, the unit nearer the runway is red and the other white.");
  q("09", "A simple approach lighting system consists of a row of lights on the extended centre line extending, wherever possible, at least:",
    ["420 m from the threshold, with a crossbar 300 m from the threshold", "900 m from the threshold, with a crossbar at 300 m", "300 m from the threshold, with no crossbar", "600 m from the threshold, with crossbars every 150 m"],
    "A precision CAT I system extends 900 m. Both have a crossbar at 300 m.");
  q("09", "An aerodrome beacon at a land aerodrome shows:",
    ["white flashes, or white flashes alternating with green flashes", "green flashes only", "white flashes alternating with yellow flashes", "steady red light"],
    "Green alternating with white at land aerodromes, yellow alternating with white at water aerodromes.");
  q("09", "A horizontal white dumb-bell displayed in a signal area means:",
    ["aircraft are required to land, take off and taxi on runways and taxiways only", "landings are prohibited", "gliders are operating", "special precautions are needed on approach"],
    "Black bars across the discs mean: land and take off on runways only, other manoeuvres need not be confined to runways and taxiways.");
  q("09", "A horizontal red square panel with yellow diagonals displayed in a signal area means:",
    ["landings are prohibited and the prohibition is likely to be prolonged", "special precautions must be taken on approach and landing", "the aerodrome is used by gliders", "taxi on runways and taxiways only"],
    "With only one yellow diagonal, it means special precautions due to the bad state of the manoeuvring area.");
  q("09", "A landing direction indicator in the form of a 'T' indicates that aircraft shall land:",
    ["along the shaft of the T towards the crossbar", "along the shaft of the T away from the crossbar", "parallel to the crossbar", "into the wind regardless of the T"],
    "Land along the shaft, towards the crossbar.");
  q("09", "Low-intensity obstacle lights on fixed objects are:",
    ["steady red", "flashing white", "flashing blue", "flashing yellow"],
    "High-intensity obstacle lights are flashing white. Emergency vehicles flash blue and other vehicles flash yellow.");
  q("09", "Objects that need to be marked by colour are normally painted in:",
    ["alternating bands or chequers of orange and white, or red and white", "yellow and black stripes", "blue and white bands", "a single fluorescent green"],
    "Annex 14. Where colouring is not practical, markers or flags are used.");
  q("09", "The response time of the rescue and firefighting service to any point of each operational runway, in optimum conditions, shall not exceed:",
    ["3 minutes", "2 minutes", "5 minutes", "90 seconds"],
    "Operational objective: 3 minutes. Recommended: 2 minutes.");
  q("09", "The rescue and firefighting category of an aerodrome is based mainly on:",
    ["the overall length of the longest aeroplanes normally using it and their fuselage width", "the number of movements per hour", "the runway length", "the maximum take-off mass of the heaviest aircraft"],
    "Categories 1–10 by aeroplane length and fuselage width. Traffic frequency can lower the category.");
  q("09", "A runway condition code (RWYCC) of 5 indicates braking action:",
    ["good", "medium", "poor", "good to medium"],
    "RWYCC: 6 dry, 5 good, 4 good to medium, 3 medium, 2 medium to poor, 1 poor, 0 less than poor (Global Reporting Format).");

  // ---------- 010 10 Facilitation ----------
  q("10", "ICAO Annex 9 deals with:",
    ["facilitation: the entry and departure of aircraft, persons, cargo and other articles", "security against unlawful interference", "search and rescue", "aeronautical information services"],
    "Annex 9 aims to reduce delays and paperwork in border formalities.");
  q("10", "A crew member certificate (CMC) can be accepted by States as:",
    ["an identity document in place of a passport or visa for crew on duty", "a replacement for the pilot licence", "proof of medical fitness", "permission to carry weapons on board"],
    "With the CMC and licence, crew can usually enter for a layover without a passport or visa, provided they leave on the next flight.");
  q("10", "When a passenger is found to be inadmissible, the aircraft operator is responsible for:",
    ["transporting the person away from that State's territory", "paying the fine only; the State removes the person", "keeping the person on board until a court decides", "nothing; it is entirely a matter for the State"],
    "Annex 9: the operator must remove the inadmissible person, usually to the point of embarkation.");
  q("10", "The aircraft document that lists the flight and crew details for entry and departure purposes is the:",
    ["general declaration", "journey log book", "operational flight plan", "load sheet"],
    "The general declaration, passenger manifest and cargo manifest are the standard documents for the aircraft's entry and departure.");

  // ---------- 010 11 Search and rescue ----------
  q("11", "The three emergency phases used in search and rescue are:",
    ["uncertainty, alert and distress", "alert, emergency and distress", "uncertainty, emergency and urgency", "PAN, MAYDAY and SECURITE"],
    "INCERFA, ALERFA and DETRESFA (Annex 11 and Annex 12).");
  q("11", "A rescue coordination centre (RCC) is responsible for:",
    ["promoting the efficient organisation of SAR services and coordinating SAR operations within a search and rescue region", "issuing ATC clearances to SAR aircraft only", "investigating the cause of accidents", "operating the emergency locator transmitters"],
    "Annex 12 definition. One RCC serves each search and rescue region (SRR).");
  q("11", "Search and rescue services shall be available:",
    ["24 hours a day", "during daylight only", "during published ATS hours", "on request only"],
    "Annex 12: on a 24-hour basis.");
  q("11", "In the ground–air visual signal code used by survivors, the symbol 'V' means:",
    ["require assistance", "require medical assistance", "yes", "proceeding in this direction"],
    "V = require assistance, X = require medical assistance, N = no, Y = yes, arrow = proceeding in this direction.");
  q("11", "In the ground–air visual signal code used by survivors, the symbol 'X' means:",
    ["require medical assistance", "require assistance", "no", "landing impossible"],
    "V = assistance, X = medical assistance.");
  q("11", "By day, an aircraft indicates that it has understood a ground signal from survivors by:",
    ["rocking its wings", "flashing its landing lights twice", "making a complete right-hand orbit", "lowering its landing gear"],
    "By night, flash the landing or navigation lights twice. No acknowledgement means the signal was not understood.");
  q("11", "A PIC who arrives first at the scene of an accident should, among other things:",
    ["keep the craft in distress in sight, determine its position, and report to the RCC or ATS unit", "land immediately next to the wreckage", "leave the area to avoid disturbing the rescue", "wait for instructions before reporting anything"],
    "Annex 12: keep in sight, fix the position, report details (type of craft, survivors, condition), and act on the RCC's instructions.");
  q("11", "A PIC who intercepts a distress transmission should:",
    ["record the position of the craft in distress if given, take a bearing if possible, and inform the RCC or ATS", "ignore it unless addressed directly", "change to 7700 and divert immediately", "reply only on 121.5 MHz and continue"],
    "Then, at the PIC's discretion, proceed to the position given while awaiting instructions.");

  // ---------- 010 12 Security ----------
  q("12", "According to Annex 17, the primary objective in all matters related to safeguarding against acts of unlawful interference is:",
    ["the safety of passengers, crew, ground personnel and the general public", "the protection of the aircraft from damage", "the punctuality of flights", "the protection of cargo"],
    "Annex 17 general principle.");
  q("12", "If passengers who have been screened mix with unscreened persons after the screening point:",
    ["the passengers concerned and their cabin baggage shall be re-screened before boarding", "the flight must be cancelled", "the PIC decides whether to depart", "only the cabin baggage needs to be re-screened"],
    "Annex 17 preventive security measure.");
  q("12", "The operator and the PIC shall be informed when:",
    ["passengers obliged to travel because of judicial or administrative proceedings will be on board", "any passenger has checked hold baggage", "a passenger travels with a pet", "transit passengers remain on board"],
    "So that appropriate security controls can be applied. The same applies to armed law-enforcement officers on board.");
  q("12", "An isolated aircraft parking position should be located at least:",
    ["100 m from other parking positions, buildings or public areas", "50 m from the nearest taxiway", "300 m from the control tower", "1,000 m from the terminal"],
    "Annex 14: for aircraft known or believed to be the subject of unlawful interference.");
  q("12", "An approved, reinforced flight crew compartment door is required in aeroplanes with:",
    ["a maximum certificated take-off mass over 45,500 kg or more than 60 passenger seats", "more than 19 passenger seats", "a maximum certificated take-off mass over 5,700 kg", "two or more pilots"],
    "Annex 6: the door must be lockable from inside, with a way of monitoring the area outside.");
  q("12", "If an aircraft subjected to unlawful interference must leave its assigned cruising level and no regional procedure applies, it should proceed at a level that differs from normal IFR cruising levels by:",
    ["1,000 ft above FL 290, or 500 ft below FL 290", "500 ft at all levels", "2,000 ft above FL 290, or 1,000 ft below FL 290", "1,000 ft at all levels"],
    "Annex 2, Attachment B. Also broadcast warnings on 121.5 MHz and squawk 7500.");
  q("12", "A Contracting State shall assist an aircraft subjected to an act of unlawful seizure by providing:",
    ["navigation aids, air traffic services and permission to land, as necessary", "military escort to its destination", "fuel free of charge", "nothing until the aircraft has landed"],
    "Annex 17. The State should also try to keep the aircraft on the ground, unless its duty to protect human life requires otherwise.");

  // ---------- 010 13 Accident investigation ----------
  q("13", "According to Annex 13, the sole objective of the investigation of an accident or incident is:",
    ["the prevention of accidents and incidents", "to apportion blame", "to establish liability for compensation", "to prosecute those responsible"],
    "It is not the purpose of the investigation to apportion blame or liability.");
  q("13", "For accident statistics, an injury resulting in death within how many days of the accident is classified as a fatal injury?",
    ["30 days", "7 days", "10 days", "90 days"],
    "Annex 13: death within 30 days.");
  q("13", "A 'serious injury' includes an injury that requires hospitalisation for more than:",
    ["48 hours, commencing within 7 days of the injury", "24 hours, commencing within 3 days", "72 hours, commencing within 10 days", "7 days"],
    "Serious injury also includes most bone fractures (not simple fractures of fingers, toes or nose), severe burns, internal organ injuries, and so on.");
  q("13", "The difference between an accident and a serious incident lies in:",
    ["the result", "the cause", "the phase of flight", "the number of persons on board"],
    "A serious incident is one where there was a high probability of an accident. Only the outcome differs.");
  q("13", "Which of the following is an accident?",
    ["The aircraft is missing or completely inaccessible", "A tyre bursts on landing with no other damage", "A bird strike causes a small dent in the radome", "An engine fails in flight with damage limited to that engine"],
    "Damage limited to a single engine, tyres, small dents and similar parts is excluded from 'substantial damage'. A missing aircraft is an accident.");
  q("13", "The investigation of an accident is instituted by the:",
    ["State of Occurrence", "State of Registry", "State of the Operator", "State of Manufacture"],
    "The State of Occurrence may delegate it. The other States may appoint accredited representatives.");
  q("13", "If the final report of an investigation cannot be made public within 12 months, the State conducting the investigation shall:",
    ["make an interim statement public on each anniversary of the occurrence", "close the investigation", "transfer the investigation to ICAO", "publish the draft report"],
    "Annex 13.");
  q("13", "Under Regulation (EU) No 376/2014, a mandatory occurrence report shall be submitted within:",
    ["72 hours of becoming aware of the occurrence", "24 hours", "7 days", "30 days"],
    "376/2014 also encourages voluntary reporting, under a 'just culture'.");

  window.AIRLAW_QUESTIONS = Q;
})();
