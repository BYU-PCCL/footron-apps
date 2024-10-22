const asteroids101Slides = [
  {
    id: "slide_1",
    type: "overlay",
    classList: ["opaque", "black"],
    content: [{ type: "title", title: "Asteroids and Comets 101" }],
  },
  {
    id: "slide_2",
    type: "overlay",
    classList: ["opaque", "black"],
    content: [
      {
        type: "image",
        src: "assets/images/outterAsteroidBelt.png",
        title: "Main Asteroid Belt. Credit: NASA/JPL",
        alt: "This image illustrates the millions of asteroids between the Sun and Jupiter — know as the asteroid belt.",
        clickable: !0,
      },
      {
        type: "description",
        description:
          'Asteroids and comets are remnants left over from the early formation of our solar system 4.6 billion years ago. Asteroids are mostly rocky bodies that formed closer to the Sun than Jupiter, while comets formed farther from the Sun and contain substantial amounts of frozen ices. The vast majority of these small bodies are asteroids, and most of them reside within the main belt, between the orbits of Mars and Jupiter. <br><br>The current number of known asteroids in the entire solar system is:<br><span class="big semi tween-count test">0</span><br><br>',
        onEnter: async (t, e) => {
          const s = e.element.querySelector(".tween-count"),
            n = await fetch(
              "https://solarsystem.nasa.gov/api/v1/static_stellar_counts/1/"
            ),
            o = (await n.json()).asteroids;
          i.AppUtils.tween(
            { i: 0 },
            { i: o },
            {
              onUpdate: (t) => {
                if (s) {
                  const e = Math.round(t.i);
                  s.innerHTML = Number(e).toLocaleString();
                }
              },
              duration: 3e3,
            }
          );
        },
      },
    ],
  },
  {
    id: "slide_3",
    type: "panel",
    content: [
      {
        type: "description",
        description:
          "Asteroids range in size from Vesta (shown here) – one of the largest at about 329 miles (530 kilometers) in diameter – to bodies that are as small as 3 feet (1 meter) across. Most asteroids are small: the total mass of all them combined is far less than that of the Earth’s Moon.<br>Asteroids less than about one meter across are called meteoroids, and are generally too small to be detected by telescopes. Meteoroids (or asteroids) that happen to hit Earth’s atmosphere become visible as meteors and largely disintegrate. Larger asteroids (car-sized or bus-sized) produce bright meteors called fireballs or bolides, but they also mostly disintegrate. Any solid leftover pieces that make it all the way to the ground are called meteorites.",
      },
    ],
  },
  {
    id: "slide_4",
    type: "panel",
    content: [
      {
        type: "description",
        description:
          "Comets (like 67P/Churyumov-Gerasimenko, shown here) also have dust and rock, but also contain large amounts of various frozen ices. Comets generally follow long elliptical orbits in which they spend most of their time far from the Sun, where the ices can remain frozen.<br>When a comet’s orbit brings it closer to the Sun, the ices start heating up, creating explosive jets which spew out gas and dust. The expelled material forms into a cloud around the solid nucleus called the “coma”, that can be larger than a planet. The material is also swept back away from the Sun into diffuse tails that can stretch for millions of miles (use Shift-S to zoom out quickly to see the tail, Shift-W to zoom in; pinch to zoom on mobiles). Eventually, after thousands of orbits, a comet’s ices will be depleted. Some objects now classified as asteroids may simply be “dead” comets.",
      },
    ],
  },
  {
    id: "slide_5",
    type: "panel",
    content: [
      {
        type: "description",
        description:
          'Many asteroids orbit nearby. On occasion, one impacts our planet. For example, the dinosaurs are thought to have been made extinct by the impact of a large asteroid 6-9 miles wide (10-15 km) that collided with Earth 66 million years ago.<br>NASA established the <a class="clickable" href="https://www.nasa.gov/planetarydefense/overview" target="_blank">Planetary Defense Coordination Office (PDCO)</a> to manage its ongoing mission of planetary defense, which includes tracking potentially hazardous objects. The PDCO has a lead role in coordinating U.S. government planning for response to an actual impact threat, and is supported by the <a class="clickable" href="https://cneos.jpl.nasa.gov" target="_blank">Center for Near-Earth Object Studies (CNEOS)</a>, which is NASA’s center for computing asteroid and comet orbits and their odds of impacting Earth. <br>For more on close approaches, click <a class="clickable" href="#/story/asteroids_close_approach">here</a>.',
      },
    ],
    rate: 604800,
  },
];

const closeApproachSlides = [
  {
    id: "slide_1",
    type: "overlay",
    classList: ["opaque", "black"],
    content: [{ type: "title", title: "What is a Close Approach?" }],
  },
  {
    id: "slide_2",
    type: "panel",
    content: [
      {
        type: "description",
        description:
          'Some asteroids will inevitably approach Earth, and these are tracked by NASA. The <a class="clickable" href="https://cneos.jpl.nasa.gov" target="_blank">Center for Near-Earth Object Studies (CNEOS)</a> computes the orbits of asteroids and comets and their odds of impacting Earth. The orbits of all asteroids seen here are publicly available from NASA’s <a class="clickable" href="https://ssd.jpl.nasa.gov" target="_blank">Solar System Dynamics (SSD)</a> group.',
      },
    ],
    rate: 259200,
  },
  {
    id: "slide_3",
    type: "panel",
    content: [
      {
        type: "description",
        description:
          "Apophis is a near-Earth asteroid more than 1000 feet (over 300 meters) in size that will harmlessly pass close to Earth on April 13, 2029. When it was discovered in 2004, the asteroid caused a stir because initial calculations indicated a small possibility it would impact Earth.",
      },
    ],
    time: "2029-04-13T14:40:12-07:00",
    rate: 60,
  },
  {
    id: "slide_4",
    type: "panel",
    content: [
      {
        type: "description",
        classList: ["large", "semi"],
        description:
          '<div><span>Distance: </span><span class="number highlight">{{distance}}</span><span> km</span></div>',
      },
      {
        type: "description",
        description:
          "It’s now predicted the asteroid will safely pass about 23,189 miles (37,320 kilometers) from our planet’s surface. While that’s a safe distance, it’s close enough that the asteroid will come between Earth and our Moon, which is about 238,855 miles (384,400 kilometers) away. It’s also near the distance that some spacecraft orbit Earth. <br>This asteroid has the official designation of being both a “Near Earth Object” and a “Potentially Hazardous Object.”",
      },
      { type: "replay" },
    ],
    time: "2029-04-12T12:00:00-07:00",
    camera: [
      async (t) => {
        await t
          .getManager("scene")
          .isListReady(["earth", "moon", "99942_apophis"]),
          t.getManager("time").pause(),
          await t.cameraScripts.goToSystem("earth", {
            duration: 2,
            planeId: "moon",
            otherEntityNames: ["moon"],
            distance: 962500,
            angle: 35,
            includeChildren: !1,
            isRelativeToPreviousCamera: !1,
          }),
          t.getManager("time").play();
      },
    ],
  },
  {
    id: "slide_5",
    type: "panel",
    content: [
      {
        type: "description",
        title: "What is a Near Earth Object (NEO)?",
        description:
          'Over millions of years, some main belt asteroids have been influenced by collisions and gravitational interactions with planets that have gradually changed their orbits so that they now pass through Earth’s general region of space. These are the Near-Earth Objects (NEOs).<br>Specifically, an NEO is defined as an asteroid or comet whose orbit brings it to within 1.3 astronomical units (<a class="clickable" key="auLink">AU</a>s) of the sun. Near-Earth Comets (NECs) are further restricted to only those with “short” orbital periods less than 200 years.',
      },
    ],
  },
  {
    id: "slide_6",
    type: "panel",
    content: [
      {
        type: "description",
        title: "What is a Potentially Hazardous Object?",
        description:
          "<span>A Potentially Hazardous Object (PHO) is a Near-Earth Object (NEO) that is at least 140 meters (460 feet) in size, and whose orbit approaches Earth’s orbit to within 0.05 AU (7,480,000 km or 4,675,000 miles). PHOs are “potentially hazardous” only in a long-term sense: almost all are not currently on Earth-crossing orbits, but their orbits are close enough that over hundreds or thousands of years, they may evolve to become Earth-crossing.<br>There are </span><span>{{phoCount}}</span><span> PHOs currently.</span>",
      },
    ],
  },
  {
    id: "slide_7",
    type: "panel",
    content: [
      {
        type: "description",
        description:
          'Explore the next 5 closest approaches <a class="clickable" href="#/watch">here</a>. These are continuously updated, as NASA is constantly on the lookout.',
      },
    ],
  },
];

const missionsSlides = [
  {
    id: "slide_1",
    type: "overlay",
    classList: ["opaque", "black"],
    content: [{ type: "title", title: "Asteroid and Comet Missions" }],
  },
  {
    id: "slide_2",
    type: "panel",
    time: "2015-02-14T08:14:00Z",
    content: [
      {
        type: "description",
        description:
          "NASA and other space agencies have sent spacecraft to visit, photograph, sample, and even collide with various asteroids like Bennu, Vesta, and Eros, and the comets Tempel 1, 19P/Borrelly, and 67P Churyumov-Gerasimenko (seen here with the Rosetta spacecraft).",
      },
    ],
  },
  {
    id: "slide_3",
    type: "panel",
    time: "2001-02-12T18:00:00Z",
    rate: 0,
    content: [
      {
        type: "description",
        description:
          "The very first mission to both orbit and land on an asteroid was the NEAR mission (Near Earth Asteroid Rendezvous, later renamed NEAR Shoemaker after the renowned geologist Eugene Shoemaker). The mission successfully orbited the asteroid Eros for a year, and ended the mission by landing on the surface on February 12th, 2001.",
      },
    ],
  },
  {
    id: "slide_4",
    type: "panel",
    time: "2005-07-04T05:44:20Z",
    content: [
      {
        type: "description",
        description:
          "NASA has also sent several missions to study comets. On the 4th of July, 2005, NASA’s Deep Impact mission actually collided with a comet named Tempel 1 (9P/Tempel). The spacecraft (Deep Impact) sent a washing-machine sized probe (the Deep Impact Impactor) to hit the comet itself, and then flew through the resulting cloud of space debris to analyze the composition. The comet’s nucleus had more dust and less ice than models had suggested.",
      },
      { type: "replay" },
    ],
  },
  {
    id: "slide_5",
    type: "panel",
    time: "2012-07-21T12:01:00Z",
    rate: 35,
    content: [
      {
        type: "description",
        description:
          "The Dawn mission was the first to orbit an object in the main asteroid belt, as well as the first mission to orbit two separate destinations.<br>Dawn spent over a year in orbit around Vesta, from July of 2011 until September of 2012. Dawn mapped Vesta's geology, composition, cratering record and more.",
      },
    ],
  },
  {
    id: "slide_6",
    type: "panel",
    time: "2016-03-18T13:30:00Z",
    rate: 40,
    content: [
      {
        type: "description",
        description:
          "Dawn then traveled to Ceres, which is the largest object in the asteroid belt. (Ceres is still considered to be an asteroid, but was designated as a dwarf planet in 2006.) The spacecraft arrived in 2015 and continued to collect data until running out of thruster fuel. <br>Dawn found abundant proof of water ice in the higher latitudes, as well as active geological features. Dawn remains in orbit around Ceres but will eventually impact the surface.",
      },
    ],
  },
  {
    id: "slide_7",
    type: "panel",
    time: "2003-12-24T00:00:00Z",
    rate: 90,
    content: [
      {
        type: "description",
        description:
          "Other missions actually take samples of asteroids and comets. The Stardust mission flew by the comet Wild 2 and collected samples from the dust trail of the comet, as well as interstellar dust. <br>These samples were later brought back to Earth via a detachable sample return capsule, which re-entered Earth’s atmosphere on January 15th, 2006. The sample capsule landed in Utah and the millions of dust particles are still being studied to this day.",
      },
    ],
  },
  {
    id: "slide_8",
    type: "panel",
    time: "2020-10-20T21:50:24Z",
    content: [
      {
        type: "description",
        description:
          "In October of 2020, the OSIRIS-REx mission successfully sampled the surface of the asteroid Bennu, collecting approximately 60 grams of surface material. The mission successfully dropped off the sample return capsule to Earth on September 24th, 2023, and is now on course to visit the asteroid Apophis.",
      },
    ],
  },
  {
    id: "slide_9",
    type: "panel",
    time: "2029-08-17T01:02:00Z",
    content: [
      {
        type: "description",
        description:
          "NASA has several new missions to investigate asteroids, including Lucy and Psyche. Each mission promises to unlock further secrets of the formation and evolution of our solar system by studying asteroids. The Lucy mission is investigating the ancient Trojan asteroids that share Jupiter’s orbit, and the Psyche mission (seen here) is en route to the unique metal asteroid 16 Psyche.",
      },
    ],
  },
  {
    id: "slide_10",
    type: "panel",
    time: "2022-09-26T23:14:11Z",
    content: [
      {
        type: "description",
        description:
          "The Double Asteroid Redirection Test, or DART, is a NASA mission that could be a plot from a Hollywood movie. As the very first planetary defense test mission, DART will test whether a spacecraft impact could deflect the orbit of an asteroid. Even a slight change in the orbit of an asteroid could avert a collision with Earth if the change happens early enough. DART successfully impacted the asteroid moon Dimorphos, which is in a binary system with the larger asteroid Didymos. The orbital period of Dimorphos changed by 33 minutes.",
      },
      { type: "replay" },
    ],
  },
  {
    id: "slide_11",
    type: "panel",
    content: [
      {
        type: "description",
        description:
          "NASA and other space agencies will continue to send robotic explorers throughout our solar system.  The journey of discovery is just beginning.",
      },
    ],
  },
];
