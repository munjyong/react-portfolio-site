export default
    {
        //(Please Do Not Remove The comma(,) after every variable)
        //Change The Website Template
        name :'',
        headerTagline: 
        [
            'Hello! I am Edmund.',
            ' ',
            'Web Developer 👨‍💻',
            '',
            'from England 🇬🇧'
        ],
        //Contact Email
        contactEmail:'munjyong@gmail.com',
        // Add Your About Text Here
        abouttext: "I am a recent Computer Science graduate seeking to kickstart my web development career. My passion for learning drives me to challenge myself, experiment with new tools and most important... to create. The projects on this site demonstrate skills I have utilized through self-study and online courses, with each project presenting unique challenges I hope keep on diversifying this portfolio in the near future.",
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
                title: 'Real-Time Chatroom',
                service: 'Created with React & ChatKit API from Pusher',
                imageSrc: "./chatroom.gif",
                url: 'https://github.com/munjyong/chatroom-app'
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