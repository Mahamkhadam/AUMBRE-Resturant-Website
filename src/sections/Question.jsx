import { useState } from "react";
import "./Question.css";

import { faqData } from "../data";

function Questions() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="questions-section">

      <div className="questions-container">

        <div className="questions-column">
          {faqData
            .filter((_, index) => index % 2 === 0)
            .map((item, index) => {
              const realIndex = index * 2;

              return (
                <div
                  className={`question-item ${
                    openIndex === realIndex ? "open" : ""
                  }`}
                  key={realIndex}
                >
                  <button
                    className="question-btn"
                    onClick={() => toggleFAQ(realIndex)}
                  >
                    <span>{item.question}</span>
                    <span className="arrow">
                      {openIndex === realIndex ? "⌃" : "⌄"}
                    </span>
                  </button>

                  {openIndex === realIndex && (
                    <div className="answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
        </div>

        <div className="questions-column">
          {faqData
            .filter((_, index) => index % 2 !== 0)
            .map((item, index) => {
              const realIndex = index * 2 + 1;

              return (
                <div
                  className={`question-item ${
                    openIndex === realIndex ? "open" : ""
                  }`}
                  key={realIndex}
                >
                  <button
                    className="question-btn"
                    onClick={() => toggleFAQ(realIndex)}
                  >
                    <span>{item.question}</span>
                    <span className="arrow">
                      {openIndex === realIndex ? "⌃" : "⌄"}
                    </span>
                  </button>

                  {openIndex === realIndex && (
                    <div className="answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
        </div>

      </div>

    </section>
  );
}

export default Questions;