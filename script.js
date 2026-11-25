

// Get the navigation elements
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Open and close the mobile menu
menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

});

// Close menu after clicking a navigation link
const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");

    });

});

// Automatically display current year
document.getElementById("year").textContent =
    new Date().getFullYear();

/* ================= MIKA CHATBOT BRAIN ================= */

const chatbotToggle = document.getElementById("chatbot-toggle");
const chatWindow = document.getElementById("chat-window");
const closeChat = document.getElementById("close-chat");

const chatInput = document.getElementById("chat-input");
const sendMessage = document.getElementById("send-message");
const chatMessages = document.getElementById("chat-messages");


// Open chatbot
chatbotToggle.addEventListener("click", function () {
    chatWindow.classList.toggle("active");
});


// Close chatbot
closeChat.addEventListener("click", function () {
    chatWindow.classList.remove("active");
});


// Add message to chat
function addMessage(message, sender) {

    const messageDiv = document.createElement("div");

    messageDiv.className =
        sender === "bot" ? "bot-message" : "user-message";

    const content = document.createElement("div");
    content.className = "message-content";
    content.textContent = message;

    if (sender === "bot") {
        const avatar = document.createElement("span");
        avatar.className = "message-avatar";
        avatar.textContent = "🌸";

        messageDiv.appendChild(avatar);
    }

    messageDiv.appendChild(content);
    chatMessages.appendChild(messageDiv);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}


// Mika's responses
function getMikaResponse(question) {

    const q = question.toLowerCase();

    if (q.includes("who") || q.includes("about theja")) {
        return "Konnichiwa! 💜 Theja S Menon is an aspiring software developer interested in Artificial Intelligence, Web Development and innovative technologies. She enjoys building creative projects and exploring new ideas!";
    }

    if (q.includes("caseweaver") || q.includes("investigation")) {
        return "🔍 CaseWeaver is Theja's flagship project! It is an AI-powered evidence connection platform that helps investigators analyse evidence, discover hidden relationships and build investigation timelines. It explores Python, Streamlit, OCR, NLP, Gemini AI and Knowledge Graphs!";
    }

    if (q.includes("archaeologist") || q.includes("future")) {
        return "🔮 Future Archaeologist is a creative AI project! Imagine an archaeologist discovering today's objects in the year 2526. The application generates imaginative archaeological interpretations and futuristic museum reports.";
    }

    if (q.includes("skill") || q.includes("technology")) {
        return "✨ Theja is exploring HTML, CSS, JavaScript, Python, C Programming, Artificial Intelligence, Machine Learning and GitHub. She is continuously learning and improving!";
    }

    if (q.includes("project")) {
        return "🚀 Theja's featured projects include CaseWeaver, Future Archaeologist and other creative technology experiments. CaseWeaver is her flagship project!";
    }

    if (q.includes("github") || q.includes("code")) {
        return "You can explore Theja's projects on GitHub! 💻 Visit: https://github.com/Theja-coder-beep";
    }

    if (q.includes("contact") || q.includes("email")) {
        return "💌 You can contact Theja using the Contact section of this portfolio. Let's connect and create something amazing!";
    }

    if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
        return "Hiii! 🌸 Welcome to Theja's portfolio! I'm Mika, your friendly anime assistant. What would you like to explore?";
    }

    if (q.includes("thank")) {
        return "Awww! You're welcome! 💜 Happy to help. Have a wonderful day!";
    }

    return "Hehe! 🌸 I'm still learning! You can ask me about Theja, CaseWeaver, Future Archaeologist, her skills or projects. I'll try my best to help!";
}


// Send a message
function handleChat() {

    const message = chatInput.value.trim();

    if (message === "") {
        return;
    }

    // Show visitor's message
    addMessage(message, "user");

    chatInput.value = "";

    // Mika replies
    setTimeout(function () {

        const response = getMikaResponse(message);

        addMessage(response, "bot");

    }, 500);
}


// Send button
sendMessage.addEventListener("click", handleChat);


// Press Enter to send
chatInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        handleChat();
    }

});


// Suggested questions
document.querySelectorAll(".quick-btn").forEach(function (button) {

    button.addEventListener("click", function () {

        chatInput.value = button.dataset.question;

        handleChat();

    });

});

/* ============== THEJA.OS TERMINAL BRAIN ============== */

const terminalToggle = document.getElementById("terminal-toggle");
const terminalWindow = document.getElementById("terminal-window");
const terminalClose = document.getElementById("terminal-close");
const terminalInput = document.getElementById("terminal-input");
const terminalOutput = document.getElementById("terminal-output");

// Open terminal
terminalToggle.addEventListener("click", function () {
    terminalWindow.classList.toggle("active");

    if (terminalWindow.classList.contains("active")) {
        terminalInput.focus();
    }
});

// Close terminal
terminalClose.addEventListener("click", function () {
    terminalWindow.classList.remove("active");
});

// Display terminal output
function terminalPrint(message, className = "") {
    const line = document.createElement("p");
    line.className = className;
    line.textContent = message;

    terminalOutput.appendChild(line);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

// Available commands
function runCommand(command) {

    const cmd = command.toLowerCase().trim();

    terminalPrint("visitor@theja:~$ " + command, "terminal-green");

    switch (cmd) {

        case "help":
            terminalPrint("AVAILABLE COMMANDS:", "terminal-cyan");
            terminalPrint("about      - About Theja");
            terminalPrint("projects   - Explore projects");
            terminalPrint("skills     - Technical skills");
            terminalPrint("experience - Development experience");
            terminalPrint("contact    - Contact Theja");
            terminalPrint("clear      - Clear terminal");
            terminalPrint("exit       - Close terminal");
            break;

        case "about":
            terminalPrint(
                "Theja S Menon | Aspiring Software Developer",
                "terminal-purple"
            );
            terminalPrint(
                "Interested in AI, Machine Learning and Web Development."
            );
            break;

        case "projects":
            terminalPrint("FEATURED PROJECTS:", "terminal-cyan");
            terminalPrint("01. CaseWeaver - AI Investigation Platform");
            terminalPrint("02. Future Archaeologist - Generative AI");
            terminalPrint("03. Creative Innovation");
            document.getElementById("projects").scrollIntoView({
                behavior: "smooth"
            });
            break;

        case "skills":
            terminalPrint("TECHNICAL SKILLS:", "terminal-cyan");
            terminalPrint("HTML | CSS | JavaScript | Python");
            terminalPrint("C Programming | AI | Machine Learning");
            break;

        case "experience":
            terminalPrint("DEVELOPMENT EXPERIENCE:", "terminal-cyan");
            terminalPrint("Backend Developer - Plastic Free Campus");
            document.getElementById("experience").scrollIntoView({
                behavior: "smooth"
            });
            break;

        case "contact":
            terminalPrint("Opening contact section...", "terminal-purple");
            document.getElementById("contact").scrollIntoView({
                behavior: "smooth"
            });
            break;

        case "clear":
            terminalOutput.innerHTML = "";
            break;

        case "exit":
            terminalWindow.classList.remove("active");
            break;

        case "":
            break;

        default:
            terminalPrint(
                "Command not found. Type 'help' to see available commands.",
                "terminal-purple"
            );
    }
}

// Execute command using Enter
terminalInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        const command = terminalInput.value;

        if (command.trim() !== "") {
            runCommand(command);
        }

        terminalInput.value = "";
    }

});

// ==========================================
// SCROLL REVEAL ANIMATIONS
// ==========================================

const revealElements = document.querySelectorAll(
    ".section-title, .section-subtitle, " +
    ".about-container, .skill-card, " +
    ".experience-card, .hackathon-card, " +
    ".featured-project, .project-card, " +
    ".contact-card"
);

revealElements.forEach((element, index) => {
    element.classList.add("reveal");

    if (
        element.classList.contains("skill-card") ||
        element.classList.contains("hackathon-card") ||
        element.classList.contains("project-card")
    ) {
        element.style.transitionDelay = `${(index % 4) * 120}ms`;
    }
});

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {
    revealObserver.observe(element);
});

// ==========================================
// THEJA.OS - PARTICLE NETWORK
// ==========================================

const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");

let particles = [];
let animationFrame;

const mouse = {
    x: null,
    y: null,
    radius: 120
};

const colors = [
    "0, 229, 255",
    "168, 85, 247",
    "80, 150, 255"
];

function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;

    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    createParticles();
}

class Particle {
    constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;

        this.size = Math.random() * 2 + 0.5;

        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;

        this.color = colors[
            Math.floor(Math.random() * colors.length)
        ];
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap particles around screen edges

        if (this.x < 0) this.x = window.innerWidth;
        if (this.x > window.innerWidth) this.x = 0;

        if (this.y < 0) this.y = window.innerHeight;
        if (this.y > window.innerHeight) this.y = 0;

        // Gentle mouse interaction

        if (mouse.x !== null && mouse.y !== null) {
            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;

            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouse.radius && distance > 0) {
                const force = (mouse.radius - distance) / mouse.radius;

                this.x += (dx / distance) * force * 0.8;
                this.y += (dy / distance) * force * 0.8;
            }
        }
    }

    draw() {
        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = `rgba(${this.color}, 0.8)`;

        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${this.color}, 0.5)`;

        ctx.fill();

        ctx.shadowBlur = 0;
    }
}


function createParticles() {
    particles = [];

    const count = Math.min(
        110,
        Math.floor(
            window.innerWidth * window.innerHeight / 10000
        )
    );

    for (let i = 0; i < count; i++) {
        particles.push(new Particle());
    }
}


function connectParticles() {

    for (let a = 0; a < particles.length; a++) {

        for (let b = a + 1; b < particles.length; b++) {

            const dx = particles[a].x - particles[b].x;
            const dy = particles[a].y - particles[b].y;

            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {

                const opacity = 1 - distance / 120;

                ctx.beginPath();

                ctx.strokeStyle =
                    `rgba(0, 229, 255, ${opacity * 0.18})`;

                ctx.lineWidth = 0.7;

                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);

                ctx.stroke();
            }
        }
    }
}


function animateParticles() {

    ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
    );

    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    connectParticles();

    animationFrame = requestAnimationFrame(animateParticles);
}


// Mouse tracking

window.addEventListener("mousemove", event => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

window.addEventListener("mouseout", event => {
    if (!event.relatedTarget) {
        mouse.x = null;
        mouse.y = null;
    }
});


// Touch devices do not need mouse interaction

window.addEventListener("touchstart", () => {
    mouse.x = null;
    mouse.y = null;
}, { passive: true });


// Resize handling

window.addEventListener("resize", resizeCanvas);


// Respect reduced-motion preferences

if (
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
    resizeCanvas();
    animateParticles();
} else {
    resizeCanvas();
}

