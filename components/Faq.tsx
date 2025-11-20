'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: 'What should I bring to my first appointment?',
    answer: 'Please bring your current glasses or contact lenses, a list of any medications you are taking, your insurance card, and a photo ID. If you have any previous medical records related to your eye health, those are also helpful.',
  },
  {
    question: 'How often should I have a comprehensive eye exam?',
    answer: 'The American Academy of Ophthalmology recommends a comprehensive eye exam every one to two years, depending on your age, risk factors, and overall health. Patients with conditions like diabetes or glaucoma may need more frequent exams.',
  },
  {
    question: 'Is my pupil dilation necessary for every exam?',
    answer: 'Pupil dilation is a crucial part of a comprehensive eye exam as it allows the doctor to get a wide, clear view of the retina and optic nerve. This helps in detecting serious conditions early. While not always required for routine check-ups, it is essential for a thorough health evaluation of your eyes.',
  },
  {
    question: 'What insurance plans do you accept?',
    answer: 'We accept a wide range of PPO insurance plans. Please visit our Insurance Information page or call our office directly with your insurance details, and our staff will be happy to verify your coverage.',
  },
];

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 py-4">
      <button
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-900 dark:text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <ChevronDown
          className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-600 dark:text-gray-300">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
