import React from "react";
import { FaPlus } from "react-icons/fa";

const FAQSection = () => {
  const faqs = [
    { question: "What types of chairs do you offer?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ..." },
    { question: "Do your chairs come with a warranty?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ..." },
    { question: "Can I try a chair before purchasing?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ..." },
    { question: "How can we get in touch with you?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ..." },
    { question: "What will be delivered? And When?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ..." },
    { question: "How do I clean and maintain my Comfortly chair?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ..." },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Questions Looks Here</h2>
          <p className="text-gray-500 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-100 shadow-sm rounded-lg p-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <FaPlus className="text-gray-500" />
              </div>
              <p className="text-gray-500 mt-3 text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

