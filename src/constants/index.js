import { Crowd, GS, BC, wilshire} from "../assets/images";
import {

    C, 
    python, 
    sql,
    car,
    contact,
    css,
    estate,

    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,

    nextjs,
    nodejs,
    pricewise,
    react,
 
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: C,
        name: "C++",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Database",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
   
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
  
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Product Launch Intern",
        company_name: "CrowdStrike",
        icon: Crowd,
        iconBg: "#fbc3bc",
        date: "June 2023 - August 2023",
        points: [
            "Developed comprehensive marketing strategies for CrowdStrike's suite of security products, focusing on competitive differentiation, target market segmentation, and value proposition articulation to maximize market penetration and customer engagement.",
            "Conducted in-depth technical analysis of the mechanical and software engineering innovations underpinning CrowdStrike products, emphasizing their strategic application in cybersecurity solutions to enhance product positioning and customer trust.",
            "Leveraged the CrowdStrike Intelligence platform for advanced threat analysis, employing sophisticated query techniques and data analytics with Jax and Python to extract actionable insights, streamline threat intelligence processes, and improve data accuracy.",
            "Implemented robust security protocols by identifying and quarantining high-risk files using cutting-edge research and analysis, significantly enhancing network security and resilience against evolving cyber threats.",
        ],
    },
    {
        title: "Research Data Analyst",
        company_name: "Bridge Commercial",
        icon: BC,
        iconBg: "#cffafe",
        date: "June 2019 - June 2021",
        points: [
            "Implemented advanced research strategies and utilized sophisticated searching algorithms to meticulously scout for promising commercial properties across Southern California, optimizing the investment selection process through data-driven insights.",
            "Developed and refined complex analytical models using Python libraries such as NumPy and Pandas, enabling the extraction and interpretation of critical price margin data for potential investment properties, thereby facilitating informed decision-making for investors and new clients.",
            "Crafted comprehensive graphs and charts with Matplotlib to visually represent the financial metrics and price margins of each property, providing a sophisticated and nuanced analysis that enhances understanding and strategic planning for investment opportunities.",
            "Fostered a collaborative environment with fellow analysts to brainstorm innovative investment ideas, combining creative thinking with rigorous data analysis to identify unique opportunities in the commercial real estate market.",
        ],
    },
    {
        title: "Engineering Program",
        company_name: "Goldman Sachs",
        icon: GS,
        iconBg: "#7dd3fc",
        date: "December 2022 - December 2022",
        points: [
            "Participated in an exclusive Goldman Sachs week-long software engineering program, meticulously designed to enhance expertise in organizational management, foster an innovative corporate culture, and advocate for sustainable programming practices among emerging tech leaders.",
            "Mastered a cutting-edge programming language within a rigorous, time-constrained challenge, demonstrating exceptional adaptability and technical proficiency. This intensive exercise culminated in the successful decryption of complex passwords, showcasing advanced problem-solving capabilities.",
            "Engaged in hands-on projects focused on developing scalable and sustainable software solutions, employing best practices in code efficiency, maintainability, and environmental consciousness, thereby contributing to the firm’s commitment to technological innovation and sustainability.",
            "Collaborated with a select group of peers and industry veterans to devise strategic initiatives aimed at improving Goldman Sachs' software development lifecycle and operational efficiency, ensuring the alignment of technology projects with overarching business goals.",
        ],
    }, {
        title: "Software Engineering Intern",
        company_name: "Wilshire Advisory Group",
        icon: wilshire,
        iconBg: "#36454F",
        date: "April 2023 - June 2023",
        points: [
            "Spearheaded a strategic initiative to transition the existing backend database to a cutting-edge NoSQL architecture. This ambitious project involved in-depth analysis, design, and implementation, leveraging NoSQL's flexible data models to enhance data storage, retrieval, and scalability.",
            "Demonstrated exceptional analytical skills by executing complex data querying operations across various collections using sophisticated aggregation functions. ",
            "Engaged in an immersive learning experience by shadowing IT specialists in API creation and frontend development. This unique opportunity allowed me to gain hands-on experience in full stack development practices, understanding the intricacies of integrating backend services with user-facing interfaces.",

        ],
    },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Cademiller23',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'www.linkedin.com/in/cade-miller-60587824a',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];