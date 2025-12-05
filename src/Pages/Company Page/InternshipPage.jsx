import React from "react";

const InternshipPage = () => {
  return (
    <section className="py-6 sm:px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Internship @ CodSoft</h1>

      {/* Introduction */}
      <p className="text-lg mb-4">
        I completed a virtual internship at CodSoft from July 2023 to August 2023. This was an online program where I gained practical experience in web development and strengthened my foundational skills.
      </p>

      {/* Learning & Projects */}
      <p className="text-lg mb-4">
        During this internship, I learned HTML, CSS, and JavaScript, which helped me understand the basics of frontend development. I applied my learning by creating responsive landing pages, focusing on clean design, proper layout, and user-friendly interfaces. This experience also taught me how to work on projects independently in a virtual environment and manage my time efficiently.
      </p>

      {/* Responsibilities */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Key Responsibilities:</h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Learned and applied HTML, CSS, and JavaScript for web development.</li>
        <li>Created responsive landing pages with clean and modern designs.</li>
        <li>Implemented interactive elements using JavaScript.</li>
        <li>Worked independently in a virtual internship setup.</li>
      </ul>

      {/* Skills & Technologies */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Skills & Technologies:</h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>HTML5 & CSS3</li>
        <li>JavaScript fundamentals</li>
        <li>Responsive web design</li>
        <li>Basic UX/UI design principles</li>
        <li>Independent project development</li>
      </ul>

      {/* Achievements */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Achievements:</h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Successfully completed the virtual internship program at CodSoft.</li>
        <li>Built multiple responsive landing pages from scratch.</li>
        <li>Improved understanding of frontend development concepts.</li>
      </ul>

      <p className="text-lg mb-4">
        Overall, this internship helped me gain practical exposure to web development, improve my coding skills, and understand the process of building web pages from scratch.
      </p>
    </section>
  );
};

export default InternshipPage;
