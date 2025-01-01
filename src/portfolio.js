/* Change this file to get your personal Portfolio */
// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation


// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};


// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};


const greeting = {
  username: "Shane Galvin",
  title: "Hi all, I'm Shane",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having experience with Ruby on Rails / React / PostgreSQL / JavaScript and ready and eagerly willing to learn other tech stacks. I come from a wide background of careers ranging from military service to food service. I jumped into this career path because I enjoy the challenge of breaking down intangible ideas into tangible products."),
  subTitle2: 
    "I have an eye for seeing problems from multiple angles and wisdom to know that there are almost always multiple ways of solving any problem, particularly from other team members. I bring a calm among the chaos and a knack for conveying complex ideas in a manner that makes sense to the receiver. ",
  subTitle3: 
    "Currently living in Frederick, CO with my wife and two boys of 2 and a half years old, and 8 months old. We love the area and hope to stick around. Though with the right opportunity anything is possible.",
  resumeLink:
    "https://docs.google.com/document/d/1SzLEPZNdLFEGVwgfFhq2vtLTcPiwaLTua_eI1TFXedk/edit?tab=t.0", // Set to empty to hide the button
 displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/Sgalvin36",
  linkedin: "https://www.linkedin.com/in/shane-galvin36/",
  gmail: "Sgalvin36@gmail.com",
 // gitlab: "https://gitlab.com/saadpasta",
 // facebook: "https://www.facebook.com/saad.pasta7",
 // medium: "https://medium.com/@saadpasta",
 // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
 // Instagram, Twitter and Kaggle are also supported in the links!
 // To customize icons and social links, tweak src/components/SocialMedia
 display: true // Set true to display this section, defaults to false
};


// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "OPTIMISTIC FULL STACK DEVELOPER WHO ENJOYS EXPLORING NEW TECH STACKS",
  skills: [
    emoji(
      "⚡ Develop intuitive Back end APIs for your web and mobile applications"
    ),
    emoji("⚡ Test Driven Development allowing projects to progress with confidence")
   // emoji(
   //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
   // )
  ],
  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Ruby on Rails",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fab fa-deskpro"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
   // {
   //   skillName: "aws",
   //   fontAwesomeClassname: "fab fa-aws"
   // },
   // {
   //   skillName: "firebase",
   //   fontAwesomeClassname: "fas fa-fire"
   // },
   // {
   //   skillName: "python",
   //   fontAwesomeClassname: "fab fa-python"
   // },
   // {
   //   skillName: "docker",
   //   fontAwesomeClassname: "fab fa-docker"
   // }
  ],
 display: true // Set false to hide this section, defaults to true
};


// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Turing School of Software & Design",
      logo: require("./assets/images/turing-school.png"),
      subHeader: "Accredited Software Engineering Certificate",
      duration: "July 2024 - January 2025",
      desc: "Created multiple front-end and back-end projects over course of the program",
      descBullets: [
        "Heavy emphasis on Test Driven Development and OOP",
        "Discovered and implemented learning style when encountering new tech stacks"
      ]
    },
    {
      schoolName: "Denver Seminary",
      logo: require("./assets/images/denverseminary.png"),
      subHeader: "Masters in Biblical & Theological Studies",
      duration: "January 2018 - May 2020",
      desc: "Attended Seminary while working over 40 hours a week and finished with 3.75 GPA"
     // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "Park University",
      logo: require("./assets/images/park-university.png"),
      subHeader: "Bachelor of Arts in Psychology",
      duration: "January 2009 - Dec 2013",
      desc: "Did entire program while serving in the Marine Corps"
     // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Ruby on Rails", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "PostgreSQL",
      progressPercentage: "50%"
    },
    {
      Stack: "React",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Kitchen Director",
      company: "Chick-fil-A",
      companylogo: require("./assets/images/cfa-logo.png"),
      date: "Sept 2017 – May 2024",
      desc: "Managed 30+ people to produce product for $10 million annual sales and annual 10%+ growth.",
      descBullets: [
        "Implemented process to increase team member retention maintaining double digit growth while tripling profitability",
        "Balanced operations, labor, training and personal learning while consistently passing health inspections with over 95%"
        ]
    },
    {
      role: "Communication and Navigation Avionics Technician",
      company: "United States Marine Corps",
      companylogo: require("./assets/images/Marines-Logo.png"),
      date: "April 2008 – March 2013",
      desc: "Marine Corps trained avoinics technician capable of troubleshooting based off schematics down to the component level",
      descBullets: [
        "Developed personal process for quickly consuming and navigating dozens of technical manuals to achieve Quality Inspector qualifications",
        "Inspected all incoming and outgoing work in compliance with technical specifications to keep aircraft operations running"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
 showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
 display: true // Set false to hide this section, defaults to true
};


// Some big projects you have worked on
const bigProjects = {
  title: "Hands-on Projects",
  subtitle: "PROJECTS THAT I HAVE HAD A DIRECT IMPACT ON",
  projects: [
    {
      image: require("./assets/images/fresh-start-recipes.png"),
      projectName: "Fresh Start Recipes",
      projectDesc: "Fresh Start Recipes provides users a mobile focused recipe book written with a Rails backend and a React frontend (recently rewritten in Next.js) by our team of four developers initially over 11 days. Our main goal was to deliver an MVP for the concept that had several recipes built and local grocery store prices available on demand. We were expanding our understanding of building microservices while utilizing 3rd party APIs to gather the prices. My main focus was developing the back-end API for the application to store the recipes and the front-end recipe submission form to allow easy additions to the database.",
      projectStack: "Tech Used: Ruby on Rails, React, CSS, Heroku, Vercel",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://fresh-start-recipes-fe-git-main-jphill19s-projects.vercel.app/"
        },
        {
          name: "Front-end repo",
          url: "https://github.com/Sgalvin36/Fresh-Start-Recipes-Fe.git"
        },
        {
          name: "Back-end repo",
          url: "https://github.com/Sgalvin36/fresh_recipes_api.git"
        }
      ]
    },
    {
      image: require("./assets/images/battleship.png"),
      projectName: "Battleship",
      projectDesc: "Battleship is a CLI application that plays the classic board game by the same name. Written over a 6 day sprint with one other developer, the application has dynamic board size and fleet size to offer up different levels of difficulty. We were learning about OOP and initial computer logic. We stretched ourselves to write a different computer logic to be used with the game allowing the user a choice between random over a systematic approach. I am currently planning on reworking the project to work on building multiple computer players for the user to choose from.",
      projectStack: "Tech Used: Ruby",
      footerLink: [
        {
          name: "Back-end repo",
          url: "https://github.com/Sgalvin36/Battleship.git"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",


  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },


    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
  };


// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};


// Talks Sections


const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),


  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};


// Podcast Section


const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",


  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};


// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",


  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};


const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "307-920-0529",
  email_address: "Sgalvin36@gmail.com"
};


// Twitter Section


const twitterDetails = {
 userName: "twitter", //Replace "twitter" with your twitter username without @
 display: false // Set true to display this section, defaults to false
};


const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer


export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
