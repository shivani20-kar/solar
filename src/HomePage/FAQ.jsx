import React, { useState } from "react";
import "./CSs/FAQ.css";

const faqData = [
  {
    question: "What maintenance do solar panels require?",
    answer:
      "Solar panels require minimal maintenance. It’s a good idea to clean the panels a few times a year to ensure they’re free of dirt.",
  },
  {
    question: "Can I install solar panels on a flat roof?",
    answer:
      "Yes, installing solar panels on a flat roof is possible; tilted mounting structures optimize sunlight exposure, while proper spacing, secure installation, and adequate roof strength ensure efficient performance and long-term durability.",
  },
  {
    question: "Do solar panels require a lot of space?",
    answer:
      "Solar panels do require some space, but not excessively; most homes can install enough panels on available roof area, though flat roofs need extra spacing between rows to prevent shading.",
  },
  {
    question: "What happens if I move to a new home?",
    answer:
      "If you move to a new home, you can either leave the solar panels and increase property value, transfer the system to the new owner, or relocate the panels, though moving them can be costly.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <div className="faq-left">
        <button className="faq-tag">✦ FAQ</button>

        <h1>
          Let’s Answer Your Solar
          <br />
          Questions in Detail
        </h1>

        <p>
          We know that choosing solar energy for your home or business is a
          big decision, & having the right information is key. Our FAQ section
          is filled with the answers to the most common questions about solar
          systems.
        </p>
      </div>

      <div className="faq-right">
        {faqData.map((item, index) => (
          <div
            className={`faq-item ${
              activeIndex === index ? "active" : ""
            }`}
            key={index}
          >
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>
                {index + 1}. {item.question}
              </span>

              <span className="icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            <div
              className={`faq-answer-wrapper ${
                activeIndex === index ? "show" : ""
              }`}
            >
              <div className="faq-answer">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}