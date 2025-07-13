import React, { useRef, useState } from "react";
import "../css-files/other services.css";

const Services = () => {
  const otherServicesRef = useRef(null);
  const [showMore, setShowMore] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const services = [
    {
      title: "Foundational Courses",
      description:
        "For beginners looking to build a strong base in technical and analytical thinking..",
      icon: "🧱",
      showReadMore: true,
    },
    {
      title: "Custom SaaS Development",
      description:
        "Transform your business with our SaaS expertise—streamlined, scalable, and user-focused solutions.",
      icon: "🔧",
      showReadMore: true,
    },
    {
      title: "Custom SaaS Development",
      description:
        "Transform your business with our SaaS expertise—streamlined, scalable, and user-focused solutions.",
      icon: "🔧",
      showReadMore: true,
    },
  ];

  const handleKnowMoreClick = () => {
    setShowMore(true);
  };

  const openModal = (service) => {
    setModalContent(service);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <section
      ref={otherServicesRef}
      id="OtherServices"
      className="services-section"
    >
      <h2 className="services-heading">Our Other Programmes</h2>
      <p className="services-subheading">Our other range of programmes.</p>

      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">📕</div>
          <h3 className="service-title">E-Shikshana</h3>
          <p className="service-description">
            A transformative learning programme.
          </p>
        </div>
      </div>

      <h3 className="services-know-more-heading">
        Want to Know More? About our courses
      </h3>

      {!showMore && (
        <button className="know-more-button" onClick={handleKnowMoreClick}>
          Find here
        </button>
      )}

      {showMore && (
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              {service.showReadMore && (
                <a
                  className="read-more-link"
                  onClick={() => openModal(service)}>
                  Read More
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {modalContent && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{modalContent.title}</h2>
            <p>In recent years, Artificial Intelligence (AI) has shifted from being a futuristic concept to an integral part of modern society. Its influence is especially significant in the realm of work and employment. From automation of routine tasks to the emergence of entirely new roles, AI is reshaping the workplace in profound ways. This article explores how AI is transforming the workforce, the opportunities and challenges it presents, and what the future might look like as human labor and machine intelligence increasingly coexist.

🚀 The Rise of Artificial Intelligence
AI refers to the simulation of human intelligence in machines that are programmed to think, learn, and solve problems. With advancements in machine learning, natural language processing, and computer vision, AI systems are now capable of performing tasks that were once considered uniquely human.

Businesses across sectors—from finance and healthcare to manufacturing and retail—are adopting AI to enhance efficiency, reduce costs, and gain competitive advantages. Whether it's through chatbots handling customer service or algorithms optimizing logistics, AI is becoming ubiquitous.

💼 AI and Job Automation
One of the most discussed effects of AI on work is job automation. Tasks that are repetitive, predictable, and rule-based are especially vulnerable. For example:

In manufacturing, robots assemble cars with precision and speed.

In finance, algorithms process transactions and detect fraud faster than humans.

In customer support, AI-powered virtual assistants handle basic queries.

A report by McKinsey Global Institute suggests that up to 30% of the tasks in 60% of all occupations could be automated with currently available technology. This does not necessarily mean that 60% of jobs will disappear, but that many roles will be redefined.

🧠 Augmentation, Not Just Replacement
While automation is a real concern, a more nuanced view is that AI often augments rather than replaces human workers. It takes over mundane aspects of a job, allowing people to focus on tasks that require creativity, emotional intelligence, and complex decision-making.

For instance:

Doctors can use AI tools to analyze medical images more accurately, enabling them to diagnose faster and focus more on patient interaction.

Journalists can rely on AI for data collection, allowing them to spend more time on in-depth storytelling.

Teachers can use AI to tailor learning experiences to individual student needs.

Thus, AI can be a productivity booster, complementing human skills rather than rendering them obsolete.

📈 Emerging Job Categories
AI is also giving rise to new kinds of jobs that didn’t exist a decade ago. Roles such as machine learning engineers, AI ethicists, data scientists, and prompt engineers are in high demand. These positions require a blend of technical expertise, domain knowledge, and problem-solving skills.

Furthermore, AI is transforming traditional roles. For example:

Marketers now use AI to personalize campaigns at scale.

HR professionals employ AI tools for screening resumes and predicting employee attrition.

Legal teams use AI to sift through massive volumes of documents during discovery.

As AI continues to evolve, upskilling and reskilling will be key for workers to remain relevant in a changing job market.

⚖️ Ethical and Societal Considerations
The integration of AI into the workforce raises important ethical questions. Who is accountable when an AI system makes a mistake? How do we ensure that AI decisions are free from bias? Will AI widen the gap between rich and poor?

One major concern is algorithmic bias. If AI systems are trained on biased data, they can perpetuate and even amplify existing inequalities. This is particularly concerning in hiring, lending, or criminal justice, where biased outcomes can have serious real-world implications.

Another issue is privacy. With AI collecting and analyzing vast amounts of data, safeguarding personal information becomes critical.

Regulators and policymakers are increasingly recognizing the need for ethical AI frameworks that prioritize transparency, fairness, and accountability.

🛡️ Preparing for the Future
The future of work in the age of AI is not set in stone. Its impact will largely depend on how businesses, governments, and individuals respond.

For Governments:
Invest in education and digital infrastructure

Support lifelong learning and workforce transition programs

Create regulatory environments that encourage responsible AI use

For Businesses:
Adopt AI responsibly, with a focus on human-centered design

Train employees to work alongside intelligent systems

Promote diversity in AI development teams to reduce bias

For Individuals:
Embrace continuous learning and adaptability

Cultivate uniquely human skills like creativity, empathy, and critical thinking

Stay informed about how AI is being used in your field

By proactively preparing for AI’s integration into the workplace, we can maximize its benefits while minimizing its risks.</p>
            <button className="close-modal" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
