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
		title: "🎨 Started with graphic design",
		company_name: "Freelance / In-house",
		icon: "/company/graphic-design2.png",
		iconBg: "#ffe9ec",
		date: "2012 -  2017",
		points: [
			"I began my career as a designer for both in-house and freelance works.",
			"I worked on graphic design and art direction for brand development, website & mobile UI, advertisements, annual reports and small collateral projects/publications.",
			"What started with web design quickly evolved into creating CMS/wordpress sites for clients with responsive UI & simple scripts.",
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
			`I built several projects, including the launch of full-stack collaborative web app project "Baking with Mary" - a cannabis-infused receipe review platform.`
		],
	},
	{
		title: "👩‍💻 Software Coordinator / Web Developer",
		company_name: "MacroMind Media / Contract",
		icon: "/company/macromind-media.jpg",
		iconBg: "#FFF",
		date: "Feb 2018 - Nov 2019",
		points: [
			"I worked contract and freelance on multiple web app projects, including EdTech, Ecommerce-tech, and patient-care platforms.",
			"I developed and deployed progressive web apps, including scope and design contribution, utilized MVC-style frameworks like Ruby on Rails for the back-end.",
			"I also developed and maintained Wordpress sites with marketing contents to support SEO and responsive views."
		],
	},
	{
		title: "👩‍💻 Fulltime UI UX Developer",
		company_name: "iSmart Technology",
		icon: "/company/ismarttechnology_logo.jpeg",
		iconBg: "#FAD305",
		date: "May 2018 - Oct 2021",
		points: [
			"I led the frontend development for the startup's IoT cloud platform consisting of new and legacy web applications, integration UI, and automated reporting services.",
			"I collaborated closely with the product manager and the cross-functional team in the early stages of concept development and brainstorming to implement new features, test, and fix bugs to ensure business and user outcomes, resulting in shortened work orders and increased IOT product delivery capacity.",
			"Enhanced user experience by transforming design from wireframes to UI iterations, and analyzing web analytics data & funnel tool to adapt to UI changes",
		],
	},
	{
		title: "👩‍💻 Fulltime Software Engineer",
		company_name: "Singuli Inc.",
		icon: "/company/singuli.png",
		iconBg: "#FFF",
		date: "Dec 2021 - Apr 2024",
		points: [
			"As a founding employee and Angular developer at Singuli, I developed complex, reusable UI components to ensure seamless data handling from the backend to display on the frontend UI with sophisticated grids and charts.",
			"While improving the reliability and consistency of the frontend with best practice implementations and design system documentation, daily tasks include building new features, fixing bugs, conducting peer PR reviews, and maintaining organized, high-quality code with Jasmine unit tests and Cypress E2E tests.",
			"I led new frontend features and created wireframe prototypes and UX design flows to bring cross-functional team together in project kick-off meetings.",
		],
	},
	{
		title: "🔎 Searching for my next role",
		company_name: "",
		icon: "/girl_laptop.png",
		iconBg: "#00A486",
		date: "Now",
		points: [
			"Due to company financial decisions, my previous employment ended sooner than expected. I'm eager to tackle new challenges and opportunities. I'm looking for a role where I can continue to grow, learn, and make a positive impact.",
			"If you think I'd be a good fit for your team, let's get in touch! 👇"
		],
		cta: {text: "✉️ Email Me", link: "mailto:qy.lena@gmail.com"}
	}
];

const testimonials = [
	{
		id: 1,
		testimonial:
			"Connect with me on LinkedIn! Let’s share insights, grow our networks, and explore opportunities to collaborate. Looking forward to connecting with you!",
		name: "Lena He",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/lenahe",
	},
	{
		id: 2,
		testimonial:
			"Also do check out my Github where I have shared all my codes from basic to advanced. Follow me to explore projects, share ideas, or to collaborate on code. Excited to see what we can build together!",
		name: "leneehe",
		image: "/tech/github.webp",
		link: "https://github.com/leneehe",
	},
	{
		id: 3,
		testimonial:
			"Let's connect on X! Follow me for insights, updates, and conversations on all things Dev & Design. I look forward to engaging with you there!",
		name: "leneehe",
		image: "/socialmedia/x-white.png",
		link: "https://x.com/leneehe",
	}
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
