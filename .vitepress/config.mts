import mdItTaskLists from "markdown-it-task-lists";
import { defineConfig, type DefaultTheme } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "th-TH",
  title: "T.T. Software Solution",
  description: "T.T. Software Solution - Portal",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],

  locales: {
    root: {
      label: 'ภาษาไทย',
      lang: 'th'
    },
    en: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: "Home", link: "https://agreeable-meadow-038a31900.5.azurestaticapps.net/" },
          { text: "Learning Resources", link: "/en/blogs" }
        ],
      }
    }
  },

  vite: {
    ssr: {
      noExternal: [
        // If there are other packages that need to be processed by Vite, you can add them here.
        "@nolebase/vitepress-plugin-enhanced-readabilities",
      ],
    },
  },

  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "Home", link: "https://agreeable-meadow-038a31900.5.azurestaticapps.net/" },
      { text: "แหล่งเรียนรู้", link: "/blogs" }
    ],

    sidebar: {

      "/blogs": {
        base: "/blogs/",
        items: sidebarBlogs(),
      },

      "/blogs/aspnet-core": {
        base: "/blogs/aspnet-core/",
        items: sidebarASPNetCore(),
      },

      "/blogs/azure": { 
        base: "/blogs/azure/", 
        items: sidebarAzure() 
      },

      "/blogs/cloud-computing": {
        base: "/blogs/cloud-computing/",
        items: sidebarCloudComputing(),
      },
      "/blogs/web-guideline": {
        base: "/blogs/web-guideline/",
        items: sidebarWebGuideline(),
      },
      "/blogs/sourcecodecontrol": {
        base: "/blogs/sourcecodecontrol/",
        items: sidebarSourceCodeControl(),
      },
      "/blogs/career": {
        base: "/blogs/career/",
        items: sidebarCareer()
      }
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/T-T-Software-Solution/portal" },
      { icon: "facebook", link: "https://www.facebook.com/ttsoftwaresolution/" },
    ],

    search: {
      provider: "local",
    },
  },

  markdown: {
    config: (md) => {
      md.use(mdItTaskLists);
    },
  },
});

function sidebarBlogs(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "แหล่งเรียนรู้",
      items: [
        {
          text: "Web Development Guideline",
          collapsed: false,
          link: "web-guideline/",
        },
        {
          text: "Source Code Control",
          collapsed: false,
          link: "sourcecodecontrol/",
        },
        {
          text: "ASP.Net Core",
          collapsed: false,
          link: "aspnet-core/",
        },
        {
          text: "Cloud Computing",
          collapsed: false,
          link: "cloud-computing/",
        },
        {
          text: "Azure",
          collapsed: false,
          link: "azure/",
        },
        {
          text: "ตำแหน่งสายงาน IT",
          collapsed: false,
          link: "career/",
        },
      ],
    },
  ];
}
function sidebarASPNetCore(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "ASP.NET Core",
      items: [
        {
          text: "2024 Bonus Track",
          collapsed: true,
          base: "/blogs/aspnet-core/2024-bonus-track/",
          items: [
            { text: "C# Fundamentals", link: "fundamentals" },
            { text: "Test Driven Development (TDD)", link: "tdd" },
            { text: "เริ่มต้นอีกครั้งกับ .NET 6 Web API", link: "webapi" },
            { text: "Clean Architecture", link: "clean-architecture" },
            { text: "Beginner Playlist", link: "playlist" },
            { text: "Awesome .NET", link: "awesome" },
          ],
        },
        {
          text: "เรื่องพื้นฐานที่ควรรู้เกี่ยวกับ C#",
          collapsed: true,
          base: "/blogs/aspnet-core/basics-of-csharp/",
          items: [
            { text: "ภาษา C# คืออะไร", link: "100-csharp" },
            { text: "Dotnet คืออะไร", link: "101-dotnet" },
            { text: "Dotnet CLI คืออะไร", link: "102-dotnet-cli" },
          ],
        },
        {
          text: "ความรู้เบื้องต้นที่สำคัญที่ช่วยในการศึกษา C# ได้ดียิ่งขึ้น",
          collapsed: true,
          base: "/blogs/aspnet-core/general-development-skills/",
          items: [
            {
              text: "ความรู้เบื้องต้นที่สำคัญที่ช่วยในการศึกษา C# ได้ดียิ่งขึ้น",
              link: "000-index",
            },
            { text: "Git", link: "100-git" },
            {
              text: "Azure Devops Services",
              link: "101-azure-devops-services",
            },
            { text: "Repo Hosting Services", link: "102-vcs-hosting-services" },
            { text: "HTTPS", link: "103-http-https" },
            {
              text: "Data Structures",
              link: "104-datastructures-and-algorithms",
            },
          ],
        },
        {
          text: "Database fundamentals",
          collapsed: true,
          base: "/blogs/aspnet-core/database-fundamentals/",
          items: [
            { text: "Database fundamentals", link: "000-index" },
            {
              text: "Database design basics",
              link: "100-database-design-basics",
            },
            { text: "Sql basics", link: "101-sql-basics" },
            { text: "Stored Procedures", link: "102-stored-procedures" },
            { text: "Constraints", link: "103-constraints" },
            { text: "Triggers", link: "104-triggers" },
          ],
        },
      ],
    },
  ];
}
function sidebarAzure(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Azure",
      items: [
        {
          text: "Fundamentals",
          collapsed: true,
          base: "/blogs/azure/fundamental/",
          items: [
            { text: "Introduction", link: "000-index" },
            { text: "Cloud Concepts", link: "001-cloud-concepts" },
            {
              text: "Azure Account, Support Options, Architecture, Service Guarantees, Manage Services Tools",
              link: "002-architecture-service-guarantees",
            },
            {
              text: "Core Cloud Services (Compute Options, Data Storage Options, Networking Options)",
              link: "003-core-cloud-services",
            },
            {
              text: "Security, Responsibility and Trust in Azure",
              link: "004-security-responsibility-trust",
            },
            {
              text: "Standards Infrastructure, Resources Organization",
              link: "005-standards-infrastructure",
            },
            {
              text: "Predict Costs and Optimize Spending",
              link: "006-predict-optimize-costs",
            },
          ],
        },
        {
          text: "Certifications Path",
          collapsed: true,
          base: "/blogs/azure/certification/",
          items: [{ text: "Certifications Path", link: "000-index" }],
        },
      ],
    },
  ];
}
function sidebarCloudComputing(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Cloud Computing",
      items: [
        {
          text: "Fundamentals",
          collapsed: true,
          base: "/blogs/cloud-computing/fundamental/",
          items: [{ text: "Fundamental", link: "fundamental" }],
        },
      ],
    },
  ];
}
function sidebarWebGuideline(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Web Development Guideline",
      items: [
        {
          text: "Introduction",
          collapsed: true,
          base: "/blogs/web-guideline/intro/",
          items: [
            { text: "ทำเว็บต้องรู้อะไรบ้าง", link: "intro" },
            { text: "ภาษาอังกฤษ", link: "english" },
            { text: "เตรียมเครื่องให้พร้อม", link: "setupgear" },
            { text: "Learning Path", link: "learningpath" },
            { text: "Software Engineer", link: "softwareengineer" },
            { text: "Salary Report", link: "devreport" },
            { text: "พิมพ์สัมผัส", link: "typing" },
            { text: "Soft Skills", link: "softskill" },
          ],
        },
        {
          text: "Front End",
          collapsed: true,
          base: "/blogs/web-guideline/frontend/",
          items: [
            { text: "Front End", link: "intro" },
            { text: "HTML", link: "html" },
            { text: "CSS", link: "css" },
            { text: "JavaScript", link: "javascript" },
            { text: "Typescript", link: "typescript" },
            { text: "React", link: "react" },
            { text: "Next.js", link: "nextjs" },
          ],
        },
        {
          text: "Back End",
          collapsed: true,
          base: "/blogs/web-guideline/backend/",
          items: [
            { text: "Back End", link: "intro" },
            { text: "Problem Solving", link: "problemsolving" },
            { text: "RESTful Web API", link: "restful" },
            { text: "Node.js", link: "nodejs" },
            { text: "ASP.NET", link: "aspnet" },
            { text: "Typescript", link: "typescript" },
          ],
        },
        {
          text: "Database",
          collapsed: true,
          base: "/blogs/web-guideline/database/",
          items: [
            { text: "Fundamental", link: "database" },
            { text: "Microsoft SQL Server", link: "mssql" },
            { text: "Database Design", link: "design" },
            { text: "SQL", link: "sql" },
            { text: "Stored Procedures", link: "storedprocedures" },
            { text: "Constraint", link: "constraint" },
            { text: "Trigger", link: "trigger" },
            { text: "PostgreSQL", link: "postgresql" },
            { text: "MongoDB", link: "mongodb" },
          ],
        },
        {
          text: "Source Code Control",
          collapsed: true,
          base: "/blogs/web-guideline/scm/",
          items: [
            { text: "Source Code Control", link: "scm" },
            { text: "Git and GitHub", link: "git" },
          ],
        },
        {
          text: "Deployment",
          collapsed: true,
          base: "/blogs/web-guideline/deployment/",
          items: [
            { text: "Deployment", link: "deployment" },
            { text: "FTP/SFTP", link: "ftp" },
            { text: "CI/CD", link: "cicd" },
            { text: "Git", link: "git" },
            { text: "Cloud", link: "cloud" },
            { text: "Container", link: "container" },
            { text: "Static Site", link: "staticsite" },
          ],
        },
        {
          text: "Cloud Computing",
          collapsed: true,
          base: "/blogs/web-guideline/cloudcomputing/",
          items: [
            { text: "Cloud Computing", link: "cloudcomputing" },
            { text: "Microsoft Azure", link: "azure" },
          ],
        },
        {
          text: "SSH",
          collapsed: true,
          base: "/blogs/web-guideline/ssh/",
          items: [{ text: "SSH", link: "ssh" }],
        },
        {
          text: "Community",
          collapsed: true,
          base: "/blogs/web-guideline/community/",
          items: [{ text: "Community", link: "community" }],
        },
      ],
    },
  ];
}
function sidebarSourceCodeControl(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Source Code Control",
      items: [
        {
          text: "Git ขั้นพื้นฐาน",
          collapsed: true,
          base: "/blogs/sourcecodecontrol/git-basics/",
          items: [
            {
              text: "Version Control คืออะไร",
              link: "what-is-version-control",
            },
            { text: "Git คืออะไร", link: "what-is-git" },
            { text: "Git common terms", link: "git-common-terms" },
            {
              text: "การ Setup Git และ GitHub ให้พร้อมสำหรับการทำงานร่วมกับทีม",
              link: "setup-git-and-github",
            },
            { text: "คำสั่ง Git ที่จำเป็น", link: "git-essential-commands" },
            { text: "Conventional Commits", link: "conventional-commits" },
            {
              text: "เริ่มต้นสร้าง Pull Request แรกกัน!",
              link: "create-first-pull-request",
            },
          ],
        },
      ],
    },
  ];
}
function sidebarCareer(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "ตำแหน่งสายงาน IT",
      items: [
        {
          text: "Management",
          collapsed: true,
          base: "/blogs/career/management/",
          items: [
            { text: "Chief Technology Officer", link: "cto" },
            { text: "Chief Information Officer", link: "cio" },
            { text: "Cyber Security Officer", link: "cso" },
            { text: "IT Director", link: "director" },
            { text: "Product Owner", link: "po" },
            { text: "IT Project Manager", link: "pm" },
            { text: "IT Security Manager", link: "securitymanager" },
            { text: "IT Auditor", link: "auditor" },
          ],
        },
        {
          text: "Designer",
          collapsed: true,
          base: "/blogs/career/designer/",
          items: [
            { text: "Product Designer", link: "product" },
            { text: "UX Designer ", link: "ux" },
            { text: "UI Designer", link: "ui" },
            
          ],
        },
        {
          text: "Analyst",
          collapsed: true,
          base: "/blogs/career/analyst/",
          items: [
            { text: "Business Analyst", link: "ba" },
            { text: "System Analyst", link: "sa" },
          ],
        },
        {
          text: "Developer",
          collapsed: true,
          base: "/blogs/career/developer/",
          items: [
            { text: "Software Engineer", link: "engineer" },
            { text: "Front-end Developer", link: "frontend" },
            { text: "Back-end Developer", link: "backend" },
            { text: "Full-stack Developer", link: "fullstack" },
            { text: "Mobile Developer", link: "mobile" },
            { text: "Game Developer", link: "game" },
             { text: "IoT Developer", link: "iot" },
             { text: "DevOps Engineer", link: "devops" },
             { text: "Platform Engineer", link: "platform" },
             { text: "Data Engineer", link: "dataengineer" },
             { text: "Data Scientist", link: "datascientist" },
             { text: "AI Engineer", link: "aiengineer" },
             { text: "Blockchain Developer", link: "blockchain" },
          ],
        },
        {
          text: "Data",
          collapsed: true,
          base: "/blogs/career/data/",
          items: [
            { text: "Data Engineer", link: "de" },
            { text: "Data Scientist", link: "ds" },
            { text: "Data Analyst", link: "da" },
            { text: "Business Intelligence Analyst", link: "bi" },
          ],
        },
        {
          text: "QA/Tester",
          collapsed: true,
          base: "/blogs/career/qa/",
          items: [
            { text: "Manual Tester", link: "manual" },
            { text: "Automation Tester", link: "automation" },
            { text: "QA Lead / QA Manager", link: "manager" },
            { text: "Performance Tester", link: "performance" },
          ],
        },
        {
          text: "Security",
          collapsed: true,
          base: "/blogs/career/security/",
          items: [
            { text: "Security Analyst", link: "analyst" },
            { text: "Security Engineer", link: "engineer" },
            { text: "Security Consultant", link: "consultant" },
            { text: "Security Architect", link: "architect" },
            { text: "Penetration Tester", link: "pentest" },
          ],
        },
        {
          text: "Infrastructure",
          collapsed: true,
          base: "/blogs/career/infrastructure/",
          items: [
            { text: "System Administrator", link: "systemadministrator" },
            { text: "Network Administrator", link: "networkadministrator" },
            { text: "Database Administrator", link: "dba" },
            { text: "Cloud Engineer", link: "cloudengineer" },
          ],
        },
        {
          text: "Support",
          collapsed: true,
          base: "/blogs/career/support/",
          items: [
            { text: "Application Support", link: "application" },
            { text: "IT Support", link: "it" },
            { text: "IT Helpdesk", link: "helpdesk" },
          ],
        },
        {
          text: "Consulting & Sales",
          collapsed: true,
          base: "/blogs/career/consulting/",
          items: [
            { text: "Pre-sale Consultant", link: "presale" },
            { text: "Sales Engineer", link: "sale" },
            { text: "Solution Architect", link: "solution" },
            { text: "Technical Consultant", link: "technical" },
          ],  
        }
      ],
    },
  ];
}