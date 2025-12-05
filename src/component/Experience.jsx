import React, { useState } from "react";
import Title from "../components-parts/Title";
import EducationComp from "../components-parts/Education";
import RootbixPage from "../Pages/Company Page/RootbixPage";
import WebsLoginPage from "../Pages/Company Page/WebsLoginPage";
import InternshipPage from "../Pages/Company Page/InternshipPage";

const Experience = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const openModal = (experience) => {
    setSelectedExperience(experience);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedExperience(null);
    setModalOpen(false);
  };

  const renderModalContent = () => {
    switch (selectedExperience) {
      case "rootbix":
        return <RootbixPage />;
      case "webslogin":
        return <WebsLoginPage />;
      case "internship":
        return <InternshipPage />;
      default:
        return null;
    }
  };

  return (
    <section className="experience">
      <Title title="Experience" />

      {/* Clickable Experiences */}
      <div className="cursor-pointer" onClick={() => openModal("rootbix")}>
        <EducationComp
          year="Dec 2024 - Present"
          course="Website Developer"
          college="Rootbix Infotech Pvt Ltd"
        />
      </div>

      <div className="cursor-pointer" onClick={() => openModal("webslogin")}>
        <EducationComp
          year="Oct 2023 - Dec 2024"
          course="Juinor Wordpress Developer"
          college="Webs Login Pvt Ltd"
        />
      </div>

      <div className="cursor-pointer" onClick={() => openModal("internship")}>
        <EducationComp
          year="July 2023 - Aug 2023"
          course="Internship"
          college="CodSoft"
        />
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={closeModal} // click on overlay closes modal
        >
          <div
            className="bg-white text-black w-11/12 md:w-3/4 lg:w-2/3 max-h-[90vh] overflow-y-auto p-6 rounded-xl relative"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
            >
              &times;
            </button>

            {/* Render Selected Modal Content */}
            {renderModalContent()}
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
