import React from "react";
import { ChevronDown, Plus, Minus, HelpCircle } from "lucide-react";
import { FAQS } from "../data";

export default function FAQs() {
  const [openId, setOpenId] = React.useState<string | null>("faq-1");

  return (
    <section id="faq" className="py-12 sm:py-20 bg-white dark:bg-slate-900 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-12">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-full uppercase tracking-widest mb-3 inline-block">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display mb-4">
            Intellectual Clarifications
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base font-sans">
            Have a question? We provided comprehensive breakdowns of our standard operation methodologies.
          </p>
        </div>

        {/* FAQs Accordion items */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id}
                className="bg-slate-50 dark:bg-slate-800/20 border border-slate-200/50 dark:border-slate-800 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-5 flex items-center justify-between text-left font-bold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base flex items-center gap-2.5 font-display">
                    <HelpCircle size={18} className="text-blue-600 dark:text-blue-400 shrink-0" />
                    {faq.question}
                  </span>
                  
                  <span className="text-slate-400 shrink-0 ml-3 bg-white dark:bg-slate-900 p-1.5 rounded-lg border border-slate-200/40 dark:border-slate-700">
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-550 dark:text-slate-400 leading-relaxed font-sans border-t border-slate-150 dark:border-slate-800/60 animate-fade-in">
                    {faq.answer}
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
