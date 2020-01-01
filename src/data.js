export default
    {
        //(Please Do Not Remove The comma(,) after every variable)
        //Change The Website Template
        name :'',
        headerTagline: 
        [
            'Hello! I am Edmund.',
            ' ',
            'Front End Web Developer 👨‍💻',
            '',
            'from England 🇬🇧'
        ],
        //Contact Email
        contactEmail:'munjyong@gmail.com',
        // Add Your About Text Here
        abouttext: "Tech enthusiast and recent Computer Science graduate seeking to kickstart web development career. I strive to develop functional applications accompanied by pleasant user experiences. The purpose of this website is to serve some of the projects that demonstrate the skills I have learned through self-study and online courses I have completed to help me learn web development.",
        aboutImage:'',
       //Change This To Hide The Image of About Section (True Or False)
        ShowAboutImage:true,//true or false (Change Here)
       // Change Projects Here 
        projects:[
            {
                id: 1,//DO NOT CHANGE THIS 
                title:'Tetris', //Project Title - Add Your Project Title Here
                service:'Created with React & React Hooks', // Add Your Service Type Here
                //Project Image - Add Your Project Image Here
                imageSrc:"./tetris.gif",
                //Project URL - Add Your Project Url Here
                url:'https://react-tetris-munjyong.netlify.com/'
            },
            {
                id: 2,//DO NOT CHANGE THIS 
                title: 'Persistent Todo List',
                service: 'Created with React & localStorage store local data',
                imageSrc: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                url: 'http://chetanverma.com/'
            },
            { 
                id: 3,//DO NOT CHANGE THIS 
                title: 'Project Three',
                service: 'Web App',
                imageSrc: "https://images.unsplash.com/photo-1511500118080-275313ec90a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                url: 'http://chetanverma.com/'
            },
            {
                id: 4,//DO NOT CHANGE THIS
                title: 'Project Four',
                service: 'Branding',
                imageSrc: "https://images.unsplash.com/photo-1558452919-08ae4aea8e29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                url: 'http://chetanverma.com/'
           }
        ],
        social: [
            // Add Or Remove The Link Accordingly
            {
                name: 'Email',
                url: 'mailto:munjyong@gmail.com',
                image: './email.svg'
            },
            {   name: 'GitHub',
                url: 'https://github.com/munjyong',
                image: './github.svg'
            },
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/mun-jun-edmund-yong-ab1861169/',
                image: './linkedin.svg'
            }
        ]
    }