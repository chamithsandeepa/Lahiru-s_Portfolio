// ========== DATA STORAGE ==========

// Experience Data
const experienceData = [
  {
    role: "Project Manager",
    company: "Cenzios",
    date: "Mar 2025 - Present",
    details:
      "Leading cross-functional teams to deliver enterprise software solutions. Managing complex IT projects with Agile and Hybrid methodologies.",
    logo: "https://i.postimg.cc/HxBvBjDy/Cenzios-LG33-03.jpg",
  },
  // {
  //   role: "Founder",
  //   company: "Safer Technologies",
  //   date: "Jan 2024 - Present",
  //   details:
  //     "Building custom software solutions and IT services to help businesses leverage secure, innovative technology.",
  //   logo: "https://via.placeholder.com/50",
  // },
  {
    role: "Associate Project Manager",
    company: "Aventure IT",
    date: "Oct 2024 - Mar 2025",
    details:
      "Spearheaded project planning, resource allocation, and risk management for diverse client portfolios using JIRA.",
    logo: "https://i.postimg.cc/8z533RkX/aventure-it-logo.jpg",
  },
  {
    role: "Business Development Manager",
    company: "Our Nation PVT Ltd",
    date: "Oct 2022 - Oct 2024",
    details:
      "Managed operations for 25+ staff across multiple locations, driving sales, marketing, and strategic business growth.",
    logo: "https://i.postimg.cc/TPHW0X7N/Untitled-design.png",
  },
  {
    role: "President, SESA",
    company: "University of Kelaniya",
    date: "Jul 2022 - Jul 2023",
    details:
      "Led the largest 24-hour inter-university hackathon (Realhack) and managed multi-million rupee budgets.",
    logo: "https://i.postimg.cc/QdtPPQN4/1630661821828.jpg",
  },
  {
    role: "Business Analyst Intern",
    company: "ELZIAN AGRO",
    date: "Sep 2021 - Feb 2022",
    details:
      "Bridged business and technology in agribusiness, managing stakeholder communication and requirements.",
    logo: "https://i.postimg.cc/66zxm5Lp/Untitled-design-1.png",
  },
  {
    role: "Sales Manager & Executive",
    company: "AIA Sri Lanka",
    date: "Apr 2018 - Sep 2021",
    details:
      "Promoted through excellence in sales leadership, team building, and mentoring while completing university.",
    logo: "https://i.postimg.cc/NjMVV6GV/AIA.jpg",
  },
];

// Projects Data
const projectsData = [
  {
    title: "FlowSuite - Workflow Supervision System",
    description:
      "A comprehensive enterprise solution designed for manufacturing clients to streamline cross-departmental workflows. Features include real-time process tracking, automated notifications, role-based access control, and detailed analytics dashboards. Reduced operational bottlenecks by 90% and improved interdepartmental communication.",
    tech: [
      "Project Management",
      "Solution Design",
      "Business Analyst",
      "Stakeholder Management",
    ],
    link: "https://flowsuite.web.cenzios.com/",
    image: "https://i.postimg.cc/tRNXjtb5/Frame-1000005892-2.png",
  },
  {
    title: "Cenzios Learning Management System",
    description:
      "A full-scale LMS platform for educational institutes that eliminates administrative overhead. Includes course management, student enrollment automation, progress tracking, certificate generation, and integrated payment processing.",
    tech: [
      "Project Management",
      "Lead Business Analyst",
      "Solution Design",
      "Project Cordinator",
    ],
    link: "https://learner.cenzios.com/",
    image: "https://i.postimg.cc/J4jjmFnp/Frame-1000005892.png",
  },
];

const leadershipData = [
  
  {
    title:
      "Realhack 4.0 - 2023 - Sri Lanka's Largest 24 Hours Physical Inter-University Coding Hackathon",
    description:
      "Conceptualized and executed Sri Lanka's largest 24-hour physical inter-university hackathon. Managed a team of 150+ undergraduates, secured 2M+ LKR in sponsorships, coordinated with 15+ universities, and facilitated mentorship from industry leaders. Over 500 participants competed in various technology challenges.",
    tech: ["Team Leadership", "Event Management", "Sponsorship Hunting", "Coaching"],
    link: "https://lahiruseuok.github.io/Realhack4.0/memories.html/",
    image: "https://i.postimg.cc/rF47TqxY/341771126-961964308556251-5911081119357897708-n.jpg"
  },
];

// Education Data
const educationData = [
  {
    degree: "BSc Software Engineering",
    institute: "University of Kelaniya",
    duration: "2019 - 2023",
    logo: "images/edu1.png",
  },
  {
    degree: "MBA in Project Management",
    institute: "Cardiff Metropolitan University",
    duration: "2024 - 2026",
    logo: "images/edu2.png",
  },
  {
    degree: "HND in HR Management",
    institute: "CIPM Sri Lanka",
    duration: "2023 - 2024",
    logo: "images/edu3.png",
  },
];

// Certifications Data
const certificationsData = [
  {
    title: "Introduction to Basics of Disciplined Agile",
    issuer: "PMI",
    date: "Aug 2024",
    image: "https://i.postimg.cc/5tZdvbQh/channels4-profile.jpg",
  },
  
  {
    title: "The Basics of Scrum",
    issuer: "PMI",
    date: "Aug 2024",
    image: "https://i.postimg.cc/5tZdvbQh/channels4-profile.jpg",
  },
  {
    title: "Generative AI Overview for Project Managers",
    issuer: "PMI",
    date: "Aug 2024",
    image: "https://i.postimg.cc/5tZdvbQh/channels4-profile.jpg",
  },
  // {
  //   title: "Taming Bias",
  //   issuer: "PMI",
  //   date: "Aug 2024",
  //   image: "https://i.postimg.cc/5tZdvbQh/channels4-profile.jpg",
  // },
  {
    title: "Agile Scrum Master",
    issuer: "Simplilearn",
    date: "Sept 2024",
    image: "https://i.postimg.cc/6684t0Bp/unnamed.jpg",
  },
  // {
  //   title: "Introduction to Prompt Engineering",
  //   issuer: "Simplilearn",
  //   date: "Sept 2024",
  //   image: "https://i.postimg.cc/6684t0Bp/unnamed.jpg",
  // },
  
  {
    title: "PRINCE2 Certification Prepaaration ",
    issuer: "Alison",
    date: "Aug 2024",
    image: "https://i.postimg.cc/66PRvPMY/alison-icon-default.webp",
  },
  {
    title: "Projects in Controlled Environments",
    issuer: "Alison",
    date: "Aug 2024",
    image: "https://i.postimg.cc/66PRvPMY/alison-icon-default.webp",
  },
];
//
// Recommendations Data
const recommendationsData = [
  {
    name: "Lahiru Chamika",
    position: "CEO at Aventure",
    image: "https://i.postimg.cc/hG5n4V0s/1748153721826.jpg",
    text: `I’ve had the pleasure of working closely with Lahiru Sandeepa at Aventure IT Solutions, and I can confidently say he’s one of the most reliable and results-driven professionals I’ve worked with. As a Project Manager, Lahiru consistently demonstrates strong leadership, attention to detail, and a deep understanding of both technology and team dynamics.

He’s played a key role in delivering several critical projects on time and beyond expectations — always maintaining clear communication with clients and motivating the team to perform at their best. Lahiru’s ability to handle challenges with a calm and solution-oriented mindset makes him a true asset to any organization.

Highly recommended for any leadership or technical role in project delivery!`,
  },
  {
    name: "Pankajan Satkunam",
    position: "Associate Technical Lead - Sysco Labs",
    image: "https://i.postimg.cc/QMyDNcqb/1756793465335.jpg",
    text: 'Throughout his time at Elzian Agro, Lahiru demonstrated exceptional problem-solving skills and a keen ability to analyze complex business processes. He is a driven, analytical, and proactive professional. Lahiru took the initiative on the project, gathering requirements, performing thorough data analysis, and presenting findings to stakeholders clearly and concisely at Elzian Agro. His ability to communicate technical information to non-technical team members was invaluable. His work ethic and dedication to delivering high-quality results did not go unnoticed'
  },
];

// ========== RENDER FUNCTIONS ==========

// Render Experience
function renderExperience() {
  const container = document.getElementById("experience-container");
  experienceData.forEach((exp, index) => {
    const position = index % 2 === 0 ? "left" : "right";
    const timelineItem = document.createElement("div");
    timelineItem.className = `timeline-item ${position}`;
    timelineItem.innerHTML = `
            <div class="timeline-content">
              <div class="experience-card">
                <div class="card-header">
                  <img src="${exp.logo}" alt="${exp.company} Logo" class="company-logo" />
                  <div class="text-content">
                    <h3 class="role">${exp.role}</h3>
                    <p class="company">${exp.company}</p>
                  </div>
                  <span class="duration">${exp.date}</span>
                </div>
                <p class="description">${exp.details}</p>
              </div>
            </div>
          `;
    container.appendChild(timelineItem);
  });
}

// Render Projects
function renderProjects() {
  const container = document.getElementById("projects-container");
  for (let i = 0; i < projectsData.length; i++) {
    container.appendChild(createProjectCard(projectsData[i]));
  }

  // Row 1: First 2 projects
  // if (projectsData.length >= 2) {
  //   const row1 = document.createElement("div");
  //   row1.className = "projects-grid";

  //   for (let i = 0; i < 2 && i < projectsData.length; i++) {
  //     row1.appendChild(createProjectCard(projectsData[i]));
  //   }
  //   container.appendChild(row1);
  // }

  // // Row 2: Remaining projects
  // if (projectsData.length > 2) {
  //   const row2 = document.createElement("div");
  //   row2.className = "projects-grid single";

  //   for (let i = 2; i < projectsData.length; i++) {
  //     row2.appendChild(createProjectCard(projectsData[i]));
  //   }
  //   container.appendChild(row2);
  // }
}

function renderLeadership() {
  const container = document.getElementById("leadership-container");
  for (let i = 0; i < leadershipData.length; i++) {
    container.appendChild(createProjectCard(leadershipData[i]));
  }

  // Row 1: First 2 projects
  // if (projectsData.length >= 2) {
  //   const row1 = document.createElement("div");
  //   row1.className = "projects-grid";

  //   for (let i = 0; i < 2 && i < projectsData.length; i++) {
  //     row1.appendChild(createProjectCard(projectsData[i]));
  //   }
  //   container.appendChild(row1);
  // }

  // // Row 2: Remaining projects
  // if (projectsData.length > 2) {
  //   const row2 = document.createElement("div");
  //   row2.className = "projects-grid single";

  //   for (let i = 2; i < projectsData.length; i++) {
  //     row2.appendChild(createProjectCard(projectsData[i]));
  //   }
  //   container.appendChild(row2);
  // }
}

function createProjectCard(project) {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
          <img src="${project.image}" alt="${
    project.title
  }" class="project-image" />
          <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="tech-stack">
              ${project.tech
                .map((tech) => `<span class="tech-tag">${tech}</span>`)
                .join("")}
            </div>
            <a href="${project.link}" class="view-btn">
              View Work
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="arrow-icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
              </svg>
            </a>
          </div>
        `;
  return card;
}

// ======== New Case Studies Section =========
function renderCaseStudies() {
  const container = document.getElementById("case-studies-container");

  // Row 1: First 2 case studies
  if (caseStudiesData.length >= 2) {
    const row1 = document.createElement("div");
    row1.className = "projects-grid";

    for (let i = 0; i < 2 && i < caseStudiesData.length; i++) {
      row1.appendChild(createProjectCard(caseStudiesData[i]));
    }
    container.appendChild(row1);
  }

  // Row 2: Remaining case studies
  if (caseStudiesData.length > 2) {
    const row2 = document.createElement("div");
    row2.className = "projects-grid single";

    for (let i = 2; i < caseStudiesData.length; i++) {
      row2.appendChild(createProjectCard(caseStudiesData[i]));
    }
    container.appendChild(row2);
  }
}

// ======== Initialize Rendering ========
document.addEventListener("DOMContentLoaded", () => {
  renderCaseStudies();
});

// Render Education
function renderEducation() {
  const container = document.getElementById("education-container");
  educationData.forEach((edu) => {
    const item = document.createElement("div");
    item.className = "education-item";
    item.innerHTML = `
            <div class="education-icon">
              <img src="${edu.logo}" alt="${edu.institute} Logo" />
            </div>
            <div class="education-info">
              <h3 class="degree">${edu.degree}</h3>
              <p class="institute">${edu.institute}</p>
              <span class="edu-duration">${edu.duration}</span>
            </div>
          `;
    container.appendChild(item);
  });
}

// Render Certifications
function renderCertifications() {
  const container = document.getElementById("certifications-container");
  certificationsData.forEach((cert) => {
    const card = document.createElement("div");
    card.className = "cert-card";
    card.innerHTML = `
            <img src="${cert.image}" alt="${cert.title}" />
            <div class="cert-info">
              <h3 class="cert-title">${cert.title}</h3>
              <p class="cert-issuer">${cert.issuer}</p>
              <p class="cert-date">${cert.date}</p>
            </div>
          `;
    container.appendChild(card);
  });
}

// Render Recommendations
function renderRecommendations() {
  const container = document.getElementById("recommendations-container");
  recommendationsData.forEach((rec) => {
    const card = document.createElement("div");
    card.className = "recommendation-card";
    card.innerHTML = `
            <div class="profile">
              <img src="${rec.image}" alt="${rec.name}" />
              <div>
                <h4>${rec.name}</h4>
                <p>${rec.position}</p>
              </div>
            </div>
            <p class="rec-description">${rec.text}</p>
          `;
    container.appendChild(card);
  });
}

// ========== MOBILE MENU ==========
function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  const hamburger = document.getElementById("hamburger");
  menu.classList.toggle("active");
  hamburger.classList.toggle("active");
}

function closeMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  const hamburger = document.getElementById("hamburger");
  menu.classList.remove("active");
  hamburger.classList.remove("active");
}

// ========== INITIALIZE ==========
document.addEventListener("DOMContentLoaded", function () {
  // Render all sections
  renderExperience();
  renderProjects();
  renderLeadership();
  renderEducation();
  renderCertifications();
  renderRecommendations();

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
