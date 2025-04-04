export const HEROTYPES = ['Full Stack Developer 📚', 
    'Open Source Aficionado 🚀', 
    'Linux Enthusiast 🐧', 
    'Frontend Developer 📲', 
    'Backend Developer 💽',
    'Tech Wizard 🧙‍♂️',
    'Very Cool Dude 😎', 
    'Mobile Developer 📱',
    'Coffee Addict ☕',
    'Optimization Advocate 🏃'
]

export const links = {
    linkedin: 'https://in.linkedin.com/in/silesh-ganesh',
    github: 'https://github.com/Ooblek',
    codepen: 'https://codepen.io/ooblek/',
    email: 'mailto:sileshg@gmail.com'
}

export const SKILLS = [
    {
        skill: 'Typescript',
        icon: 'typescript'
    },
    {
        skill: 'Javascript',
        icon: 'javascript'
    },
    {
        skill: 'CSharp',
        icon: 'csharp'
    },
    {
        skill: 'Python',
        icon: 'python',
        bg: true,
        borderRadius: '10'
    },
    {
        skill: 'Java',
        icon: 'java',
        bg: true,
        borderRadius: '50'
    },
    {
        skill: 'PHP',
        icon: 'php'
    },
    {
        skill: 'C Plus Plus',
        icon: 'c'
    },
    {
        skill: 'C Language',
        icon: 'c-p'
    },
    {
        skill: 'PostgreSQL',
        icon: 'postgres'
    },
    {
        skill: 'MongoDB',
        icon: 'mongodb'
    },
    {
        skill: 'BASH',
        icon: 'bash'
    },
    {
        skill: 'Powershell',
        icon: 'powershell'
    },
]

export const FRAMEWORKS = [
    {
        skill: 'React.JS',
        icon: 'react'
    },
    {
        skill: 'Redux',
        icon: 'redux',
         bg: true,
        borderRadius: '10'
    },
    {
        skill: 'Angular',
        icon: 'angular'
    },
    {
        skill: 'Next',
        icon: 'next',
        bg: true,
        borderRadius: '50'
    },
    {
        skill: 'NodeJS',
        icon: 'nodejs',
    },
    {
        skill: 'React Native',
        icon: 'react'
    },
    {
        skill: '.NET Core',
        icon: 'netcore'
    },
    {
        skill: 'StencilJS',
        icon: 'stencil'
    },
    {
        skill: 'Django',
        icon: 'django'
    },
    {
        skill: 'FastApi',
        icon: 'fastapi'
    },
    {
        skill: 'Electron',
        icon: 'electron'
    },
    {
        skill: 'GSAP',
        icon: 'gsap'
    },
    {
        skill: 'Tauri',
        icon: 'tauri'
    },
    
]

export const OTHERS = [
    {
        skill: 'Amazon Web Services',
        icon: 'aws'
    },
    {
        skill: 'Microsoft Azure',
        icon: 'azure'
    },
    {
        skill: 'Bamboo',
        icon: 'bamboo',
        bg: true,
        borderRadius: '10'
    },
    {
        skill: 'Docker',
        icon: 'docker'
    },
    {
        skill: 'Android App Development',
        icon: 'android'
    },
    {
        skill: 'Linux Administration',
        icon: 'linux'
    },
    {
        skill: 'Wordpress Plugin Development',
        icon: 'wordpress',
        bg: true,
        borderRadius: '50'
    },
    {
        skill: 'Github Actions',
        icon: 'github',
        bg: true,
        borderRadius: '50'
    },
    {
        skill: 'Blender',
        icon: 'blender'
    },
    {
        skill: 'Gimp',
        icon: 'gimp'
    },
    {
        skill: 'Adobe Photoshop',
        icon: 'photoshop'
    },
    {
        skill: 'Adobe After Effects',
        icon: 'ae'
    },
    {
        skill: 'Godot',
        icon: 'godot'
    },
]

export const WORK = [
    {
        fromTo: "2020-present",
        workEx: [
            {
                company: 'Wipro',
                imageUrls: ['wipro'], 
                designation: 'Developer L3 - Senior Project Engineer (current)', 
                team: 'Retail Client Messaging', 
                description: `I'm currently a part of the Retail Client Messaging Team for a top finance and wealth management client,
                 contracted out from Wipro.
                           I've worked on modernizing the Message Center, decoupling the applcation from the old Monolith 
                           to Angular 14, converting various parts of the application into reusable components that can be used anywhere on the site,
                          API Modernization and Maintainence, integrating AWS multipart uploads, and so much more!`, 
                languages: [
                    ".NET Core",
                          "Angular",
                          "StencilJS",
                          "React",
                          ".NET MVC",
                          "LaunchDarkly",
                ]
            },
            {
                company: 'Wipro - Topgear',
                imageUrls: ['wipro'], 
                designation: 'Developer', 
                account: 'AT&T', 
                team: 'NetLens', 
                description: `This project was taken as a part of Wipro's internal gig system, for a time period of 3 months. I was a 
                part of a team developing a prototype of a DNS filtering system for AT&T. I worked on fixing various bugs on the nodeJs server,
                the ReactJS frontend, and on implementing autoscaling scripts for the VMs in Azure.`, 
                languages: [
                    "ReactJS",
                          "NodeJS",
                          "BASH",
                          "Azure",
                          "Linux",
                ]
            },
        ]
        
    },
    {
        fromTo: "2019-2020",
        workEx: [
            {
                company: 'Urbanstop',
                imageUrls: ['urbanstop'], 
                designation: 'Junior FullStack Developer',  
                team: 'Mobile App Developement', 
                description: `My first Job! I started during my final year of my Bachelor's. I worked on developing mobile applications using React Native
                for various startups in my City.`, 
                languages: [
                    "React Native",
                    "Python - Django",
                    "MariaDB"
                ]
            },
        ]
        
    }
]

export const PROJECTS = [
    {
        title: 'Local Video Summarizer with Phi3.5', 
        imageCaption: 'Video Summarizer', 
        imageUrl: '/localslm.png', 
        description: 'A Video Lecture Summarizer that runs locally on mid to high end computers, running on a finetuned version of phi3.5', 
        languages: ['Microsoft Phi 3.5', 'Python', 'FastApi', 'Tauri', 'React']
    },
    {
        title: 'CodePen Demos', 
        imageCaption: 'My CodePen!', 
        imageUrl: '/codepen.svg', 
        description: 'Demos using various frameworks, or just plain HTML/CSS/JS. My most viewed Pen is a demo of GSAP\'s Scrolltrigger to animate text (viewed over 8000 times!). I like to think my code lives on in atleast 8000 projects', 
        languages: ['HTML', 'CSS', 'TS', 'GSAP', 'MatterJS', 'Phaser', '...and many more!'],
        url: 'https://codepen.io/ooblek'
    },

]


export const EDUCATION = [
    {
        education: 'Bachelor of Computer Applications',
        specialization: 'Mobile Application Development and Information Security',
        duration: '2017 - 2020',
        university:'Jain University, Bengaluru' 
    },
    {
        education: 'Master of Technology',
        specialization: 'Computing Systems and Infrastructure Design',
        duration: '2020 - 2024',
        university:'BITS Pilani - Work Integrated' 
    }
]
