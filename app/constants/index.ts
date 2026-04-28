export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work|Projects",
	},
	{
		id: "skills",
		title: "Skills",
	},
	{
		id: "certificates",
		title: "Certificates",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "UI/UX Designer",
		icon: "/backend.webp",
	},
	{
		title: "Full Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "Wordpress Developer",
		icon: "/mobile.webp",
	},
	{
		title: "Software Engineer",
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
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Three JS",
		icon: "/tech/threejs.webp",
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
		title: "Wordpress Developer & UI/UX Designer",
		company_name: "",
		icon: "/company/avm.webp",
		iconBg: "#383E56",
		date: "2023 -  2024",
		points: [
			"Self-Taught Expertise: Gained proficiency in WordPress and UI/UX design through independent learning.",
			"Collaborative Design: Worked closely with stakeholders to gather feedback and iterate on the portfolio website's interactivity.",
			"Successful Website Development: Designed and developed a visually appealing and user-friendly portfolio website using WordPress.",
			"Positive Business Impact: Contributed to +54.25% sales and overall business growth through the improved website."
		],
	},
	{
		title: "Full Stack Software Engineer",
		company_name: "Oly Technology",
		icon: "/company/sparkbright.webp",
		iconBg: "#E6DEDD",
		date: "2022 - 2025",
		points: [
			"Self-Taught Expertise: Gained proficiency in React.JS and Next.JS through independent learning.",
			"Successful Website Development: Designed and developed a visually appealing and user-friendly portfolio website using Next.JS.",
			"Collaborative Design: Worked closely with stakeholders to gather feedback and iterate on the portfolio website's interactivity."
		],
	},
];


const projects :{
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web"
}[] = [
	{
		name: "WeatherTracker",
		description:
			"A Designed and developed a visually appealing and user-friendly portfolio website using WordPress.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "google-translate",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/weather.webp",
		platform: "Wordpress",
		deploy_link: "",
	},
	{
		name: "Cofeeshop",
		description:
			" Designed and developed a visually appealing and user-friendly portfolio website using Next.JS.",
		tags: [
			{
				name: "next",
				color: "red-text-gradient",
			},
			{
				name: "Next UI",
				color: "orange-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
			{
				name: "nest",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/overviewcofee.png",
		source_code_link: "https://github.com/AZcodeGod/coffeeshop",
		platform: "Web",
		deploy_link: "",
	},
	{
		name: "Dasboard Analytics",
		description:
			"A responsive Bank HomePage showcasing different features such as various payment gateways integration, easy money transfer, advanced security, etc. It has a beautiful interface made using Tailwind CSS and React",
		tags: [
			{
				name: "next",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
			{
				name: "shadcn",
				color: "blue-text-gradient",
			},
			{
				name: "lucid icons",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/dashboard-preview.png",
		source_code_link: "https://github.com/AZcodeGod/dashboard",
		platform: "Vercel",
		deploy_link: "",
	},
	{
		name: "Ecommerce like amazon",
		description:
			" Designed and developed a visually appealing and user-friendly Data Analytics Dashboard using MERN",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "shadcn",
				color: "orange-text-gradient",
			},
			{
				name: "Thailwind",
				color: "blue-text-gradient",
			},
			{
				name: "prisma",
				color: "blue-text-gradient",
			},
			{
				name: "neonPostgress",
				color: "blue-text-gradient",
			},
			{
				name: "nestjs",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/overview.png",
		source_code_link: "https://github.com/AZcodeGod/Ecommerce",
		platform: "Web",
		deploy_link: "",
	},
	
];

export { services, technologies, experiences, projects };
