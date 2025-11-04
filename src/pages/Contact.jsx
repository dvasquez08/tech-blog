function Contact() {
  const contactEmail = "info@davtek.io"; //
  return (
    <div className="bg-gray-600 rounded-lg shadow-xl max-w-4xl mx-auto p-8 md:p-12 text-center">
      <h1 className="text-4xl md:text-5xl font-sans font-medium text-gray-200 mb-6">
        Contact Us
      </h1>
      <div className="prose prose-lg max-w-none text-gray-200 mx-auto">
        <p>
          Have questions, suggestions, or feedback? I'd love to hear from you.
          Whether there's a project you'd like me to on, or just want to say
          hello, feel free to reach out.
        </p>
        <p className="font-medium text-gray-100">
          The best way to get in touch is by email. I'll do my best to get back
          to you as soon as possible.
        </p>
        <a
          href={`mailto:${contactEmail}`}
          className="text-blue-400 hover:text-blue-300 text-2xl font-light transition-colors no-underline hover:underline"
        >
          {contactEmail}
        </a>
      </div>
    </div>
  );
}

export default Contact;
