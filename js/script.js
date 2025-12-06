function navigateTo(page) {
    const pages = {
        home: { id: 'home-page', name: 'Home' },
        profile: { id: 'profile-page', name: 'Our Profile' },
        portfolio: { id: 'portfolio-page', name: 'Portfolio' },
        message: { id: 'message-page', name: 'Message Us' }
    };
    
    if (!pages[page]) {
        alert("Invalid page!");
        return;
    }
    
    const section = document.querySelector(`.${pages[page].id}`);
    
    if (!section) {
        alert(`${pages[page].name} section not found!`);
        return;
    }
    
    section.scrollIntoView({ behavior: 'smooth' });
    alert(`✅ Navigating to ${pages[page].name}!`);
}

function welcomeMessage() {
    const nameInput = document.getElementById("name-input").value.trim();
    
    if (nameInput === "") {
        alert("Please enter your name!");
        return;
    }
    
    const welcomeSpeech = `Welcome, ${nameInput}! 🎉 Thanks for visiting Akbar's Portfolio. We're excited to have you here and hope you enjoy exploring our work!`;
    document.getElementById("welcome-speech").innerText = welcomeSpeech;
}

function validateProfile() {
    const jobTitle = document.getElementById("profile-input").value.trim();
    
    if (jobTitle === "") {
        alert("Please enter a job title!");
        return;
    }
    
    const profileResult = `Great! You're interested in ${jobTitle}. We have skilled professionals in this field. Let's connect! 💼`;
    document.getElementById("profile-result").innerText = profileResult;
}

function validateProject() {
    const projectId = document.getElementById("project-id").value.trim();
    
    if (projectId === "") {
        alert("Please enter a project number!");
        return;
    }
    
    const projectNum = parseInt(projectId);
    
    if (isNaN(projectNum) || projectNum < 1 || projectNum > 3) {
        alert("Please enter a number between 1 and 3!");
        return;
    }
    
    const projectDetails = {
        1: "Project 1: E-Commerce Website - Built with HTML, CSS, and JavaScript. Features include product catalog, shopping cart, and checkout system.",
        2: "Project 2: Weather App - Real-time weather data using APIs. Shows temperature, humidity, and forecast information.",
        3: "Project 3: Task Manager - A productivity app with to-do lists, reminders, and task tracking features."
    };
    
    const projectResult = `📌 ${projectDetails[projectNum]}`;
    document.getElementById("project-result").innerText = projectResult;
}

function handleMessageSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById("user-name").value.trim();
    const email = document.getElementById("user-email").value.trim();
    const message = document.getElementById("user-message").value.trim();
    
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields!");
        return;
    }
    
    const resultDisplay = `✅ Thank you, ${name}! Your message has been received. We'll contact you at ${email} soon!`;
    document.getElementById("message-result").innerText = resultDisplay;
    
    // Clear form
    document.getElementById("user-name").value = "";
    document.getElementById("user-email").value = "";
    document.getElementById("user-message").value = "";
}


