// src/pages/Contact.jsx

function Contact() {
  const contactEmail = "info@davtek.io";
  return (
    <div className="bg-gray-600 rounded-lg shadow-xl max-w-4xl mx-auto p-8 md:p-12 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-200 mb-6">
        Contact Us
      </h1>
      <div className="prose prose-lg max-w-none text-gray-200 mx-auto">
        <p>
          Have questions, suggestions, or feedback? We'd love to hear from you.
        </p>
        <p>
          Please feel free to reach out to us by email. We'll do our best to get
          back to you as soon as possible.
        </p>
        <a
          href={`mailto:${contactEmail}`}
          className="text-blue-400 hover:text-blue-300 text-2xl font-bold transition-colors"
        >
          {contactEmail}
        </a>
      </div>
    </div>
  );
}

export default Contact;
