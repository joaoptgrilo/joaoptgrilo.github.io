// src/components/Contact.tsx
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section 
      id="contact"
      className="w-full py-20 md:py-32 bg-secondary-bg text-center min-h-[300px] md:min-h-[400px] flex flex-col justify-center items-center"
    >
        <div className="container mx-auto px-4">
            <h2 className="font-fira-code text-3xl md:text-4xl font-bold text-primary mb-10 md:mb-12">
              Contact
            </h2>
            <p className="text-center text-secondary max-w-lg mx-auto mb-8">
                Have a project in mind or just want to say hi? Feel free to reach out!
            </p>
            <div className="space-y-4">
                <p className="text-lg text-primary">
                    Email: <a href="mailto:joao.grilo.dev@gmail.com" className="text-accent hover:underline">joao.grilo.dev@gmail.com</a>
                </p>
                <p className="text-lg text-primary">
                    Connect on <a href="https://www.linkedin.com/in/joaoptgrilo/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">LinkedIn</a>
                </p>
            </div>
        </div>
    </section>
  );
};
export default Contact;