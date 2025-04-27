import React from 'react';
import { FaLightbulb, FaPencilRuler, FaCode, FaRocket } from 'react-icons/fa';
import '../css/Process.css'; // Create this CSS file

const Process = () => {
  const steps = [
    {
      icon: <FaLightbulb />,
      title: "Plan",
      description: "We brainstorm and plan creative ideas to match your vision."
    },
    {
      icon: <FaPencilRuler />,
      title: "Design",
      description: "Our team designs user-friendly and attractive UI/UX for your project."
    },
    {
      icon: <FaCode />,
      title: "Develop",
      description: "We develop robust, scalable, and high-performance products."
    },
    {
      icon: <FaRocket />,
      title: "Launch",
      description: "We launch and monitor your project to ensure success."
    }
  ];

  return (
    <section id="process" className="process-section">
      <h2>OUR PROCESS <span>HOW WE WORK?</span></h2>
      <div className="process-container">
        {steps.map((step, index) => (
          <div className="process-box" key={index}>
            <div className="process-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
