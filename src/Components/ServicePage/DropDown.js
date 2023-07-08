import React, { useState } from 'react';


const FAQPage = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (questionId) => {
    if (selectedQuestion === questionId) {
      setSelectedQuestion(null); 
    } else {
      setSelectedQuestion(questionId);
    }
  };

  const faqs = [
    {
      id: 1,
      question: 'How long does it take to deliver?',
      answer: 'In the case of intracity deliveries, the distance & traffic play a major role in determining the delivery time however the instant availability of vehicles allows you to send goods up to 2500 kgs. Porter intercity courier services allows you to deliver goods at economical rates within a couple of days.',
    },
    {
      id: 2,
      question: 'Does Porter provide labour (loading/unloading) service?',
      answer: '"Yes, Porter has a service called the ""Driver-Helper"" category, where the driver-partner will help in loading and unloading the goods. We also have another category called “Driver-Helper + 1 Labour” category. Here, in addition to the driver-partner, a labour will accompany the driver-partner and will help with loading and unloading.Please note that our driver-helper and labour will assist you in transporting goods on the ground floor up to 25 metres only. Additionally, the driver-helpers will not be assisting with complete loading, while the driver-helper and labour option will help with loading and unloading.',
    },
    {
      id: 3,
      question: 'What are the charges for a Porter truck and Porter bike delivery service?',
      answer:
        'The charges for hiring a Porter truck or bike are based on the number of kilometres travelled and the type of vehicle chosen and this differs from locality to locality. You can also check the estimate tab on the Porter website to get an exact idea of your final trip amount. Alternatively, the final trip amount can be determined when making the booking on the app.',
    },
    {
      id: 4,
      question: 'Can I rent a mini truck for outstation trips from Pune?',
      answer:
        'You can rent a mini truck for outstation trips from Pune with Porter. We offer convenient and reliable services for transporting goods to various destinations at affordable prices.',
    },
    {
      id: 5,
      question: 'What does Porter deliver?',
      answer:
        'From a pin to an entire house, we will deliver anything, anywhere, anytime. However, Porter does not deliver item(s) which are illegal, dangerous or hazardous in nature or which are prohibited by any statue or law.',
    },
  ];

  return (
    <div className="faq-wrapper">
      <h1>Frequently Asked Questions</h1>
      <div className='faq'>Here are some of the top FAQs to support you. Please do feel free to reach out to us for any questions that you might have had but are not answered by the following.</div>
      <div className="faq-container">
      {faqs.map((faq) => (
          <div
            key={faq.id}
            onClick={() => handleQuestionClick(faq.id)}
            className={`faq-item ${selectedQuestion === faq.id ? 'selected' : ''}`}
          >
            <h4>{faq.question}</h4>
            {selectedQuestion === faq.id && <p>{faq.answer}</p>}
            <div className={`arrow-indicator ${selectedQuestion === faq.id ? 'rotate' : ''}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FAQPage;
