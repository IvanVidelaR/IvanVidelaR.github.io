const btnChangeColorMode = document.getElementById("btn-change-mode");
const imgChangeColorMode = document.querySelector(".img-change");
const imgGithub = document.querySelector(".github");
const imgSqlServer = document.querySelector(".sql-server");
const footer = document.getElementById("footer");
const navbar = document.getElementById("navbar");


const changeColorMode = () => {
    if(btnChangeColorMode.classList.contains("dark-mode"))
    {
        btnChangeColorMode.classList.remove('dark-mode');
        btnChangeColorMode.classList.add('light-mode');
        imgChangeColorMode.src = "media/sun-dark.png";
        imgGithub.src = "https://devicon-website.vercel.app/api/github/original.svg?color=%23094067";
        imgSqlServer.src = "https://devicon-website.vercel.app/api/microsoftsqlserver/plain.svg?color=%23094067";
        footer.classList.add("light-footer");
        footer.classList.remove("dark-footer");
        navbar.classList.add("light");
        navbar.classList.remove("dark");
        document.documentElement.style.setProperty('--neutral', '#FFFFFE');
        document.documentElement.style.setProperty('--neutral-transparency', '#f2f1ff');
        document.documentElement.style.setProperty('--headline', '#094067');
        document.documentElement.style.setProperty('--button', '#3da9fc');
        document.documentElement.style.setProperty('--button-transparency', '#3da9fc99');
        document.documentElement.style.setProperty('--tertiary', '#5f6c7b');
        document.documentElement.style.setProperty('--text', '#5f6c7b');
    }

    else
    {
        btnChangeColorMode.classList.add('dark-mode');
        btnChangeColorMode.classList.remove('light-mode');
        imgChangeColorMode.src = "media/moon-dark.png";
        imgGithub.src = "https://devicon-website.vercel.app/api/github/original.svg?color=%23FFFFFE";
        imgSqlServer.src = "https://devicon-website.vercel.app/api/microsoftsqlserver/plain.svg?color=%23FFFFFE";
        footer.classList.add("dark-footer");
        footer.classList.remove("light-footer");
        navbar.classList.add("dark");
        navbar.classList.remove("light");
        document.documentElement.style.setProperty('--neutral', '#0f0e17');
        document.documentElement.style.setProperty('--neutral-transparency', '#202021');
        document.documentElement.style.setProperty('--headline', '#fffffe');
        document.documentElement.style.setProperty('--button', '#ff8906');
        document.documentElement.style.setProperty('--button-transparency', '#ff890699');
        document.documentElement.style.setProperty('--tertiary', '#e53170');
        document.documentElement.style.setProperty('--text', '#a7a9be');
    }
}

btnChangeColorMode.addEventListener("click", changeColorMode);