function About() {
  return (
    <div className="bg-gray-600 rounded-lg shadow-xl max-w-4xl mx-auto p-8 md:p-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-200 mb-6">
        About Tech Things HQ
      </h1>
      <div className="prose prose-lg max-w-none text-gray-200">
        <p>Welcome to Tech Things HQ</p>
        <p>
          I'm David, the founder and editor of this site. My passion for
          technology and automation led me to create this project as a unique
          way to explore and share the latest happenings in the tech world.
        </p>
        <p>
          The content you see here is curated and processed by a custom-built
          automated system I designed. This system uses advanced language models
          to synthesize information from sources I've selected across the web,
          allowing me to bring you timely and diverse perspectives.
        </p>
        <p>
          While technology does the heavy lifting, I oversee the entire process
          to ensure the content is relevant and insightful for you, the reader.
        </p>
        <p>Thank you for stopping by, and I hope you enjoy the content!</p>
      </div>
    </div>
  );
}

export default About;
