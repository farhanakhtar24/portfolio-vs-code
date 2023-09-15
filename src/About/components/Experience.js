import React from "react";

const ExperienceData = [
  {
    logo: "https://media.licdn.com/dms/image/C560BAQE4A_Fcvu8oDg/company-logo_200_200/0/1606851847004?e=1703116800&v=beta&t=hnGnEVUK6txek-KOhAq0Ejc3cyXlp47_Ltcudya6fpE",
    company: "Rancho Labs",
    position: "SDE Intern",
    duration: "Jul 2023 - Sep 2023",
    description: [
      "During my internship, I had the privilege of developing interactive learning experiences tailored for students in grades 4-8. These experiences encompassed a diverse range of activities, including fill-in-the-blank exercises, flashcards, and drag-and-drop challenges, all aimed at fostering engaging and effective learning.",
      "I also took a central role in enhancing security measures by successfully implementing strong authentication mechanisms through NextAuth.js. As a dedicated member of a 4-person team, I contributed significantly to the creation of a comprehensive content management system catering to robotics and AI instructors. My responsibilities extended across both frontend and backend development, showcasing my versatility and collaborative skills.",
      "In addition to my internship experience, I developed interactive activities specifically designed for grades 4-8 students, which included fill-in-the-blanks, flashcards, and drag-and-drop exercises.",
      "I played a key role in implementing robust authentication mechanisms using NextAuth.js and contributed to a comprehensive content management system for robotics and AI instructors. This work involved handling both frontend and backend development within a 4-member team.",
      "In the past, I led the creation of an MVP prototype, integrating engaging activities, advanced authentication, and an innovative content management system. This project utilized technologies such as Next.js, TypeScript, React Query, Prisma, MongoDB, and NextAuth.js to build a truly impactful educational platform.",
    ],
    skills: ["Prisma", "MongoDB", "Next.js ", "Tailwind CSS"],
    location: "New Delhi, India",
  },
  {
    logo: "https://media.licdn.com/dms/image/C4D0BAQGXbmvCYwrMLg/company-logo_200_200/0/1669141153627?e=1703116800&v=beta&t=sWuMNli4x6kGQu6BdkZ0Dx8Q54SOxnl-Pab_Faol2A0",
    company: "Prixled",
    position: "SDE Intern",
    duration: "Sep 2022 - Nov 2022",
    description: [
      "I served as a Frontend Development Engineer at PRIXLED during the fall of 2022.",
      "My responsibilities included working on front-end technologies and contributing to the development of their beta web application. Notably, I implemented image cropping functionality from scratch in the edit profile page, improving the user experience. I also redesigned the preview Artilog page for a more visually appealing interface.",
      "I led the migration of our existing Redux code to the newly implemented Redux toolkit, resulting in a substantial 40% reduction in development time.",
      "During my internship, I created over 100 Redux toolkit reducers and thunks to enhance the user experience and resolved various bugs, ensuring a stable and efficient beta deployment.",
      "My time at PRIXLED allowed me to showcase my technical skills and make a tangible impact on the development process, contributing to the success of the project.",
    ],
    skills: [
      "React.js ",
      "Redux toolkit",
      "MERN Stack",
      "JavaScript",
      "Cascading Style Sheets (CSS)",
    ],
    location: "New Delhi, India",
  },
];

const Experience = () => {
  return (
    <div className="flex w-full flex-col items-center justify-start rounded-3xl bg-page-navbar-blue p-5 shadow-2xl">
      {ExperienceData.map((experience, index) => (
        <div className="h-full w-full"></div>
      ))}
    </div>
  );
};

export default Experience;
