import { useState } from "react";
import "./Question.css";

function Questions() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Do I need a reservation?",
      answer:
        "Reservations are recommended, especially during weekends and busy evenings. You can reserve your table through our reservation page.",
    },
    {
      question: "Do you offer takeout or delivery?",
      answer:
        "Yes, we offer takeout for selected dishes. Delivery availability depends on your location.",
    },
    {
      question: "What are your opening hours?",
      answer:
        "We are open Monday to Friday from 12 PM to 11 PM and Saturday to Sunday from 11 AM to 12 AM.",
    },
    {
      question: "Can I modify my reservation?",
      answer:
        "Yes. You can contact us before your reservation time and we will help you modify your booking.",
    },
    {
      question: "Do you accommodate dietary restrictions?",
      answer:
        "Yes, our team can help with several dietary requirements. Please inform us when making your reservation.",
    },
    {
      question: "Do you host events or celebrations?",
      answer:
        "Yes, we welcome private dinners, birthdays, family gatherings and special celebrations.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, debit cards and major credit cards.",
    },
    {
      question: "Do you offer catering services?",
      answer:
        "Yes, catering is available for selected events. Contact our team for more details.",
    },
    {
      question: "Do you have parking available?",
      answer:
        "Yes, parking is available near the restaurant for our guests.",
    },
    {
      question: "Can I make changes to my order?",
      answer:
        "Yes, please speak with our staff as soon as possible and we will do our best to accommodate your request.",
    },
  ];

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