import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is Skill Sprint?",
    answer: "Skill Sprint is a 2-day hackathon focused on building innovative LMS (Learning Management System) platforms with specific company constraints. It's organized by Hubexus and Tech Projects Hub."
  },
  {
    question: "Who can participate?",
    answer: "This hackathon is open to anyone from any state in India. Teams can have 2 to 4 members."
  },
  {
    question: "What is the hackathon theme?",
    answer: "The theme is LMS Platform Development with Company Constraints. You'll need to build learning management systems that meet specific business requirements."
  },
  {
    question: "What are the prizes?",
    answer: "1st Prize: ₹25,000, 2nd Prize: ₹15,000, 3rd Prize: ₹10,000. Top 3 teams also get compulsory internships and placement assistance. Teams 4th-10th get interview-based internships."
  },
  {
    question: "Is accommodation provided?",
    answer: "Yes, accommodation is provided for participants from other states with minimal charges."
  },
  {
    question: "When does registration close?",
    answer: "Registration opens on September 11th and closes on September 20th, 2025."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left py-4 pr-10 flex items-center justify-between group"
              >
                <span className="font-medium text-lg group-hover:text-blue-400 transition-colors">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-1/2 -translate-y-1/2"
                >
                  <ChevronDown className="w-5 h-5 text-blue-400" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="py-3 text-gray-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <motion.div
                initial={false}
                animate={{ opacity: openIndex === index ? 1 : 0 }}
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-400/20 via-blue-400/10 to-transparent"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}