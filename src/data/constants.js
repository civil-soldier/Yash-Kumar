import { name } from "ejs";

export const Bio = {
  name: "Yash Kumar",
  roles: [
    "Software Developer",
    "Programmer",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/civil-soldier",
  resume:
    "https://drive.google.com/file/d/1j2GrOPmo3O3RHLQLUwofDDto3W2CFVba/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/yash-kumar-3495302a5/",
  insta: "https://www.instagram.com/falcon_heir/",
  leetcode: "https://leetcode.com/u/EagleYash/"
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },

      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Semantic UI",
        image:
          "https://symbols.getvecta.com/stencil_25/78_semantic-ui.b3a02ff612.jpg",
      },
      {
        name: "Passport.js",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/passport/passport-original.svg",
      },
      {
        name: "Mapbox",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mapbox/mapbox-original.svg",
      },
      {
        name: "Babel",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg",
      },
      
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Embedded JS",
        image: "https://img.icons8.com/color/512/clr_ejs_1.png",
      },
      {
        name: "Express Js",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "MySQL",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      },
      {
        name: "Axios",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1024px-Git_icon.svg.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "vercel",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg"
      },
      {
        name: "Render",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///9G47c84rQt4bGY7dKQ7NCi79ju/fg44rPC9OT3/vz6/v3p/PaI681Q5Lp76cjO9+rZ+O596smr8Nq48+BY5b3G9ecg4K4D36vT9+zj+vNo58K99OKb7tXD9OWv8d1v6MNEnehfAAADXklEQVR4nO3d23aiMBhA4RpPUesBFa0HRt//KTu9mbVif1RyDrO/a0qzJ4INOvDxAQAAAAAAAAAAAORnWm2ut93kXU1l/PRM3GhhbNNIu/kTo21+2m1r/ZfqYHg19rGUflibhUdpk2XwvGpy+UkbdKVnZqG0B2UWDqVNxmHzzs1Kd48rp3B2sc0ro3C/0tZ5JRReB0592Reease+zAvnW+l39ajwYPHeUFTh2MME5lw4rX1MYMaFlae+bAsPzqfQzAuvfg7BfAtvHgOzLPQ5g1kWHrwGZlhY+TvJ5Fk49fY2kWth7Tkwu8LxO1OolH7f0bxOsz0OBWbhl7DF0dN1mtdnGaXVZXzbVOfPd839DM2P+asZ1Hq5yWrEXW2fFip9P6QeoaPT09eoXp9TD9DZ6tkE1tXrHeTu9uS9XjepR+dD+0Go1Cn14Hxon0JVF33+/Kf1KFSXxeufLkDrsl5dUg/Nk3vLYahW/ZjBj8/WKZymHponk5Yp1L04i/5oWTXpSeqB+XJueZHWKQajVr8NRo473ckvUp3kT7UgK+CLfJZZexlxVyEKFy1TmGY1EaLwJB6GiaYwSKF8GOqNnxF3FaJQXtwrPwPuLESh+G6oXE/QtkIUiodhsj9nAhRO5RNNqlVhgEL5s4pkq6YAheLaMNlhGKJwL36YsPc04M4CFIpvh+nWTdEKk10ADlAoLn91ssU9hRYojIxCC7kVSv8boVeF97Vg57TLzAoDoLB8FJaPwvJRWD4Ky0dh+TIrPGwEbtfFMis8Cl+mHrp9Czqzwv9gjU9hdxRGRqEFCiOj0AKFkVFogcLIKLRAYWQUWqAwsv5fp7nOBG7fssusMAAKy0dh+SgsH4Xlo7B8FJYvs8LtUnBz2mVmheJd53u1Au7/Gp9CCxRGRqEFCiOj0AKFkVFogcLIKLRAYWQUWhALh70qlB7Zl64wwHWaxVziabzdiaPpyX1iAQAAgF5rpAdpfZnbaOlZW+ZNXDfSbvJ4Zpe8Aja3ER9hcjc2Ee8Knsdz1yikkEIKKaSQQgoppJBCCimkkMJ+FDbSp9xHc5uB9NHzQ6F0u/jhQ6H0qx4KxU+53a7THMaj3x7+0Rphk5F5K/izuBvzAYN7aTcjs1Dazci8oAUAAAAAAAAAAAAE8w39zlW3oYFBQgAAAABJRU5ErkJggg==",
      },
      {
        name: "npm",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX////LODfXdHPKMTDIJCP56+vKNDPRVlX77+/IIiDafHz02trKMzLJJybJLCrTXVzin5/twsLQUE/HGxn++fn34+PXbm3PSUjmrq7qubn89PTJLSzvycnglJTptLTNPj3ORUPHFRPz1tVK8UCsAAACEElEQVR4nO3b3VLiMACAUbGVH5fCCigCLuK+/0OuM0uTOhZKmMUt9RwvZFKS9POqMPHmBgAAAAAAAAAAAAAAAAAAAKDzbrvgaGG2ya7dJjta2Ov3rl2/p/DaKVTYfgq/U2F+uklcf5wwLYvTNgnT6qUX5sO7Uw1finJWdrs+fdqvTTltsj19twOLTZILR0ff99GPUSi8T5j2M9xV8ZAwrV6hcE9hPYUHKEyisKSwnsIDWlm4fp3tLZ/iaGPhw66cttvG0cbC+2U57fUxjk5nYXTx7wuHb/29bJBQuMrLaflzQuHTppw2rxTusnL07RKF8/L6eJpSGPYvkgrDp49RpXAZ7nGuUKFChQoVKlSoUKFChQoVKvziwvAtRmcLw/6TjhbeLD696FphLYUKFdZSqFDhB60sXHeoMF8PazyGlv5gUQ6uX8KpsgOFi7q11vHUV7Gq223xNA538zu8YRELR3dxsfRTX70iz4v9T3hRhL/U+0pFeamIJ/cOFG7fPq7z91f15F7xaa/3dSsHJSdFeak6WpkV7+uypy8bn7wvT6HCBgq/gEKFDdpfOA6ncZIkFJ61fopsfLRwcJZZSKw/qz98js9Uy/O2SHG08DzxafXA/1uEB9DeZNu8XAvFzxaNqt8IXxGFCttPocL2+waF8/Gp8ussfJxNTzVY/e+bBQAAAAAAAAAAAAAAAAAAAOiCP4KhccZVE+xKAAAAAElFTkSuQmCC",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "IntelliJ IDEA",
        image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg"
      },
      {
        name: "Android Studio",
        image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg"
      },
      {
        name: "Java",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      },
      {
        name: "kotlin",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
      },
      {
        name: "Cloudinary",
        image:
          "https://www.theladders.com/s3proxy/company-photo.theladders.com/52097/0f6c2c36-3a00-4c0b-8d22-c2ca924b9299.png",
      },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYc4t2R5tZq6D82MYMQKxRQqwXpdCb0yz5zA&s",
    school: "SRM Institute of Science and Technology, Kattankulathur",
    date: "Sept 2022 - May 2026",
    grade: "7.89 CGPA",
    desc: "I am currently pursuing a Bachelor's degree in Electronics and Communication Engineering at SRMIST KTR campus , kattankulathur , chennai. I have completed 6 semesters and have a CGPA of 7.89.",
    degree: "Bachelor of Technology - BTech, Electronics and Communication Engineering",
  },
];

export const projects = [
  {
    id: 9,
    title: "BlogSphere",
    date: "Jun 2025 - Jul 2025",
    description:
      "BlogSphere – A clean and responsive blog platform built with Express.js and EJS using RESTful CRUD operations.",
    image:
      "https://github.com/civil-soldier/mini-blog-crud/raw/main/public/assets/preview.png",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node JS",
      "Express JS",
    ],
    category: "web app",
    github: "https://github.com/civil-soldier/mini-blog-crud",
    webapp: "https://blogsphere-tnir.onrender.com/",
  },
  {
    id: 0,
    title: "Wanderlust",
    date: "Aug 2025 - Sept 2025",
    description:
      "Wanderlust is a full-stack web application designed to let users explore, list, and manage stays, rooms, and vacation rentals, similar to Airbnb.It connects owners who want to rent their properties with travelers searching for stays, providing a modern, responsive interface with secure backend functionality. The platform leverages Node.js, Express.js, MongoDB, EJS, Bootstrap, and Cloudinary, and includes Progressive Web App (PWA) features for an installable, offline-ready experience.",
    image:
      "https://github.com/civil-soldier/Wanderlust/raw/main/public/assets/pwa.png",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node JS",
      "Express JS",
      "MongoDB",
      "EJS",
      "Bootstrap",
      "Cloudinary",
      "PWA",
    ],
    category: "web app",
    github: "https://github.com/civil-soldier/Wanderlust",
    webapp: "https://wanderlust-1-anj6.onrender.com/",
  },
  {
    id: 1,
    title: "spotify-clone",
    date: "Jul 2025 - Aug 2025",
    description:
      "A visually stunning Spotify clone built using HTML and CSS, designed to replicate the classic Spotify web player experience. This project includes a responsive sidebar, music library, sticky navigation, trending songs, and a functional music player, all crafted with clean, modern styling.",
    image:
      "https://github.com/civil-soldier/spotify-demo/raw/main/Assets/preview.png",
    tags: [
      "HMTL",
      "CSS",
    ],
    category: "web app",
    github: "https://github.com/civil-soldier/spotify-demo",
    webapp: "https://spotify-demo-uojx.onrender.com/",
  },
];
