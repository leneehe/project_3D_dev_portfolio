export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Full Stack Web Development",
		icon: "/web.webp",
	},
	{
		title: "Frontend Engineering",
		icon: "/mobile.webp",
	},
	{
		title: "UX/UI Design",
		icon: "/backend.webp",
	},
	{
		title: "Graphic Design",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: 'Angular',
		icon: '/tech/angular.webp'
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Ruby On Rails",
		icon: "/tech/ruby-on-rails.webp",
	},
	{
		name: "PostgreSQL",
		icon: "/tech/postgresql.webp",
	},
	{
		name: "SASS",
		icon: "/tech/sass.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "figma",
		icon: "/tech/figma.webp",
	},
	{
		name: "wordpress",
		icon: "/tech/wordpress.webp",
	},
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
];

const experiences = [
	{
		title: "🎨 Graphic Designer",
		company_name: "Freelance / In-house",
		icon: "/company/graphic-design2.png",
		iconBg: "#ffe9ec",
		date: "2012 -  2017",
		points: [
			"I began my career as a designer for both in-house and freelance works.",
			"I took lead on graphic design and art direction on brand development, website & mobile UI, advertisements, annual reports and small collateral projects/publications.",
			"What started with web design quickly evolved into creating CMS/wordpress sites for clients with simple scripts.",
		],
	},
	{
		title: "🎓 Graduated from Full Stack Web Development Immersive",
		company_name: "General Assembly | Bitmaker",
		icon: "/company/general_assembly.png",
		iconBg: "#E6DEDD",
		date: "Oct 2017 - Jan 2018",
		points: [
			"I completed a 12-week full-time web development immersive program with over 468+ hours of coding, specializing in HTML/CSS, Javascript/JQuery, AJAX, Ruby on Rails, PostgreSQL, and Github.",
			`I built several projects, including the launch of full-stack collaborative web app project "Baking with Mary" for Cannabis receipe reviews.`
		],
	},
	{
		title: "👩‍💻 Software Coordinator / Web Developer",
		company_name: "MacroMind Media / Contract",
		icon: "/company/macromind-media.jpeg",
		iconBg: "#FFF",
		date: "Feb 2018 - Nov 2019",
		points: [
			"I worked contract part-time and freelance on sevreal web app projects.",
			"Developed and deployed progressive web applications for custom-designed EdTech, Ecommerce-tech influence and patient-care projects, including scope and design contribution.",
			"Designed and developed web applications using MVC-style frameworks like Ruby on Rails for the back-end.",
			"Developing and maintaining Wordpress Site for small businesses."
		],
	},
	{
		title: "👩‍💻 UI UX Developer",
		company_name: "iSmart Technology",
		icon: "/company/ismarttechnology_logo.jpeg",
		iconBg: "#383E56",
		date: "May 2018 - Oct 2021",
		points: [
			"Collaborated with cross-functional team in early stages of concept development and brainstorming adapting to Lean UX processes",
			"Developed, tested and maintained the IoT cloud platform consisting of new and legacy web applications, integration UI, and automated reporting services; utilizing Angular front-end, Javascript chart & grid libraries and SendGrid templates",
			"Enhanced user experience to facilitate the use of equipment Fullness monitoring by analyzing activity tracking analytics & funnel tool to adapt to UI changes",
		],
	},
	{
		title: "👩‍💻 Software Engineer",
		company_name: "Singuli",
		icon: "/company/singuli.png",
		iconBg: "#FFF",
		date: "May 2018 - Oct 2021",
		points: [
			"Developed complex, reusable UI components utilizing Angular 15, SCSS, HandsonTable, AgGrid, ChartJS and MDC libraries, while customizing CSS styles for Material Design components to enhance user experience.",
			"Ensured seamless data handling with export/import features and sophisticated data displays, while improved the reliability and consistency of frontend by delivering organized quality code structures and maintaining best practices and design system documentation.",
			"Technical contributions as a lead frontend engineer to ensure continuous improvement and alignment with team and company goals. Duties include daily tasks on bug fixes, peer PR reviews, and maintaining high-quality code with Jasmin unit tests and Cypress E2E tests.",
			"Created wireframe prototypes and UX design flows of new frontend features to bring cross-functional team together in project kick-off meetings",
		],
	}
];

const testimonials = [
	{
		id: 1,
		testimonial:
			"Behance is a social media platform owned by Adobe whose main focus is to showcase and discover creative work.",
		name: "Om Patel",
		image: "/socialmedia/behance.svg",
		link: "https://www.behance.net/omthecreator",
	},
	{
		id: 2,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
		name: "Om Patel",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/om-patel-401068143/",
	},
	{
		id: 3,
		testimonial:
			"Dribbble is a self-promotion and social networking platform for digital designers and creatives. It serves as a design portfolio.",
		name: "Om Patel",
		image: "/socialmedia/dribble.svg",
		link: "https://dribbble.com/om2121",
	},
	{
		id: 4,
		testimonial:
			"Also do check out my UI/UX Portfolio where I have shared by design studies.",
		name: "Om Patel",
		image: "/socialmedia/portfolio.svg",
		link: "https://omthecreator.netlify.app/",
	},
	{
		id: 5,
		testimonial:
			"Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
		name: "Om Patel",
		image: "/tech/github.webp",
		link: "https://github.com/omunite215",
	},
];

const projects = [
	{
		name: "Random Quote Generator",
		description:
			"A Fully Responsive Random Quote generating website project given by Free Code Camp while completing Front-End Libraries Certifications built using React.JS , Bootstrap CSS and HTML.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "bootstrap",
				color: "pink-text-gradient",
			},
			{
				name: "quoteapi",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/quote.webp",
		source_code_link:
			"https://github.com/omunite215/FCC-Random-Quote-Generator",
		netlify_link: "https://randomquotegeneratorbyom.netlify.app/",
	},
	{
		name: "Admin Dashboard UI",
		description:
			"React Admin Dashboard is a stunning web application that has a beautiful User Interface and has been built using advanced JavaScript concepts, React, and Tailwind CSS which has different graphs, stats and themes.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "Syncfusion UI",
				color: "orange-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/dashboard.webp",
		source_code_link: "https://github.com/omunite215/React-Admin-DashBoard",
		netlify_link: "https://reactadmindashboardbyom.netlify.app/",
	},
	{
		name: "HooBank",
		description:
			"A responsive Bank HomePage showcasing different features such as various payment gateways integration, easy money transfer, advanced security, etc. It has a beautiful interface made using Tailwind CSS and React",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/hoobank.webp",
		source_code_link: "https://github.com/omunite215/hoobank",
		netlify_link: "https://hoobankbyom.netlify.app/",
	},
	{
		name: "Provid A Youtube Clone",
		description:
			"Provid is a YouTube clone project built with React, Material UI, and Tailwind CSS. The platform has been designed with a stunning dark mode that enhances the viewing experience. The user interface is intuitive and easy to navigate, ensuring that users can easily find the content they're looking for.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "materialui",
				color: "orange-text-gradient",
			},
			{
				name: "rapidapi",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/provid.webp",
		source_code_link: "https://github.com/omunite215/Provid-A-YouTube-Clone",
		netlify_link: "https://providbyom.netlify.app/",
	},
	{
		name: "A 3D Developer Portfolio",
		description:
			"A responsive 3D Portfolio website which is made using Three.js a cross-browser JavaScript library and application programming interface used to create and display animated 3D computer graphics in a web browser using WebGL. It has a beautiful interface made using Tailwind CSS and React.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "threejs",
				color: "orange-text-gradient",
			},
			{
				name: "emailjs",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/portfoliosample.webp",
		source_code_link: "https://github.com/omunite215/portfolio",
		netlify_link: "https://portfoliobyompatel.netlify.app/",
	},
];

export { services, technologies, experiences, testimonials, projects };
