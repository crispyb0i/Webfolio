/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji"

const illustration = {
	animated: true, // set to false to use static SVG
}

const greeting = {
	username: "David Shin",
	title: "Hey, I'm David!",
	subTitle: emoji(
		"I am a Bay Area-based Web Developer. As a naturally curious person, I love to take on new projects that challenge my analytical and technological capacities. I love to code and I am on a journey to make the web a better place, one line of code at a time."
	),
	//importing PDF directly in Greeting.js
	// resumeLink: "http://bit.ly/web-dev-resume-2021",
	displayGreeting: true, // Set false to hide this section, defaults to true
}

// Social Media Links

const socialMediaLinks = {
	github: "https://github.com/crispyb0i",
	linkedin: "https://www.linkedin.com/in/david-shin/",
	gmail: "xdavidshinx@gmail.com",
	// medium: "https://medium.com/@david-shin",
	// twitter: "https://www.twitter.com/crispyb0i",
	instagram: "https://www.instagram.com/crispyb0i",
	// Instagram and Twitter are also supported in the links!
	display: true, // Set true to display this section, defaults to false
}

// Skills Section

const skillsSection = {
	title: "What I do",
	subTitle: "",
	skills: [
		emoji(
			"⚡ Build responsive and performant websites using HTML5, CSS3, and Javascript"
		),
		emoji(
			"⚡ Code and deploy applications in a cross-platform, cross-browser environment"
		),
		emoji(
			"⚡ Utilize advanced Web Development technologies such as React, Gatsby,and Next.js"
		),
	],

	/* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

	softwareSkills: [
		{
			skillName: "HTML5",
			fontAwesomeClassname: "fab fa-html5",
			color: "rgb(227, 79, 38)",
		},
		{
			skillName: "CSS3",
			fontAwesomeClassname: "fab fa-css3-alt",
			color: "rgb(21, 114, 182)",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "fab fa-js",
			color: "rgb(247, 223, 30)",
		},
		{
			skillName: "React",
			fontAwesomeClassname: "fab fa-react",
			color: "rgb(97, 218, 251)",
		},
		{
			skillName: "NPM",
			fontAwesomeClassname: "fab fa-npm",
			color: "rgb(203, 56, 55)",
		},
		{
			skillName: "Yarn",
			fontAwesomeClassname: "fab fa-yarn",
			color: "rgb(24, 49, 82, 1)",
		},
		{
			skillName: "Git",
			fontAwesomeClassname: "fab fa-git",
			color: "rgb(84, 12, 0)",
		},
	],
	display: true, // Set false to hide this section, defaults to true
}

// Education Section

const educationInfo = {
	display: true, // Set false to hide this section, defaults to true
	schools: [
		{
			schoolName: "Epicodus",
			logo: require("./assets/images/epicodusLogo.png"),
			subHeader: "Web and Mobile Development",
			duration: "March 2017 - September 2017",
			desc: "Intensive 6-month program. Clocked 1,000+ hours of classroom and internship development work.",
			descBullets: [],
		},
		{
			schoolName: "University of California, Davis",
			logo: require("./assets/images/davisLogo.png"),
			subHeader: "Bachelor of Arts in Film Studies",
			duration: "September 2012 - June 2014",
			desc: "Emphasis in Film Production",
			descBullets: [],
		},
	],
}

// Your top 3 proficient stacks/tech experience

const techStack = {
	viewSkillBars: true, //Set it to true to show Proficiency Section
	experience: [
		{
			Stack: "HTML", //Insert stack or technology you have experience in
			progressPercentage: "87%", //Insert relative proficiency in percentage
		},
		{
			Stack: "CSS",
			progressPercentage: "87%",
		},
		{
			Stack: "Git",
			progressPercentage: "85%",
		},
		{
			Stack: "Javascript",
			progressPercentage: "80%",
		},
		{
			Stack: "React",
			progressPercentage: "80%",
		},
	],
	displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
}

// Work experience section

const workExperiences = {
	display: true, //Set it to true to show workExperiences Section
	experience: [
		{
			role: "Software Engineer",
			company: "Sessions",
			companylogo: require("./assets/images/sessionsLogo.png"),
			date: "Aug 2022 - Dec 2022",
			// desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			descBullets: [
				"Designed and built new features using React, React Native, Typescript, and MobX State Tree.",
				"Worked with Xcode and Android Studio to create additional features and contributed to bug fixes for the mobile app.",
				"Collaborated with the team to build and ship the Next Music platform from scratch using Next.js, MobX State Tree, and Chakra UI in six weeks",
			],
		},
		{
			role: "Front-End Engineer",
			company: "breathing.ai",
			companylogo: require("./assets/images/breathingaiLogo.png"),
			date: "Mar 2021 - Mar 2022",
			// desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			descBullets: [
				"Took the lead on the initial website codebase and improved the Lighthouse score by 20 points which resulted in an increase of page views by 400% over the span of a year.",
				"Enhanced website user accessibility to a broader audience by incorporating Spanish localization using i18next.",
				"Implemented the functionality to add, update, or delete blog posts using Contentful CMS which opened the door for non-technical members to make website changes.",
			],
		},
		{
			role: "Front-End Engineer",
			company: "PIICKED",
			companylogo: require("./assets/images/piickedLogo.png"),
			date: "Jun 2019 - Jun 2020",
			// desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			descBullets: [
				"Created the Piicked landing page from scratch using React and contributed to building the desktop version of the Piicked mobile app.",
				"Collaborated with designers to create clean interfaces and simple, intuitive interactions and experiences for users.",
			],
		},
	],
}

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
	githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
	githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
	showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
	display: false, // Set false to hide this section, defaults to true
}

// Some big projects you have worked on

const bigProjects = {
	title: "Projects",
	subtitle: "",
	projects: [
		// {
		// 	image: require("./assets/images/piickedLogo.png"),
		// 	link: "http://www.piicked.com/",
		// 	title: "Piicked",
		// },
		{
			image: require("./assets/images/Shinflix.png"),
			link: "https://classy-hotteok-354138.netlify.app/",
		},
		{
			image: require("./assets/images/smartBrainLogo.png"),
			link: "http://bit.ly/smartbrain-web",
		},
		{
			image: require("./assets/images/burgerLogo.png"),
			link: "https://bit.ly/burger-builder-app",
		},
	],
	display: true, // Set false to hide this section, defaults to true
}

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
			footerLink: [
				{
					name: "Certification",
					url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing",
				},
				{
					name: "Award Letter",
					url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing",
				},
				{
					name: "Google Code-in Blog",
					url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html",
				},
			],
		},
		{
			title: "Google Assistant Action",
			subtitle:
				"Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
			image: require("./assets/images/googleAssistantLogo.webp"),
			footerLink: [
				{
					name: "View Google Assistant Action",
					url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en",
				},
			],
		},

		{
			title: "PWA Web App Developer",
			subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
			image: require("./assets/images/pwaLogo.webp"),
			footerLink: [
				{ name: "Certification", url: "" },
				{
					name: "Final Project",
					url: "https://pakistan-olx-1.firebaseapp.com/",
				},
			],
		},
	],
	display: false, // Set false to hide this section, defaults to true
}

// Blogs Section

const blogSection = {
	title: "Blogs",
	subtitle:
		"With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

	blogs: [
		{
			url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
			title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
			description:
				"Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
		},
		{
			url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
			title: "Why REACT is The Best?",
			description:
				"React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
		},
	],
	display: false, // Set false to hide this section, defaults to true
}

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
			event_url: "https://www.facebook.com/events/2339906106275053/",
		},
	],
	display: false, // Set false to hide this section, defaults to true
}

// Podcast Section

const podcastSection = {
	title: emoji("Podcast 🎙️"),
	subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

	// Please Provide with Your Podcast embeded Link
	podcast: [
		"https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
	],
	display: false, // Set false to hide this section, defaults to true
}

const contactInfo = {
	title: emoji("Contact Me"),
	subtitle: "HELLO ",
	emailAddress: "xdavidshinx@gmail.com",
	display: true,
}

// Twitter Section

const twitterDetails = {
	userName: "twitter", //Replace "twitter" with your twitter username without @
	display: false, // Set true to display this section, defaults to false
}

export {
	illustration,
	greeting,
	socialMediaLinks,
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
}
