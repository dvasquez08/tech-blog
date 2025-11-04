function About() {
  return (
    <div className="bg-gray-600 rounded-lg shadow-xl max-w-4xl mx-auto p-8 md:p-12">
      <h1 className="text-4xl md:text-5xl font-sans font-medium text-gray-200 mb-6">
        Welcome to Tech Things HQ!
      </h1>
      <div className="prose prose-lg max-w-none text-gray-200">
        <p>
          I’m David, the founder and editor of this site, and the founder of
          Davtek. My background is in software development and automation, and
          over the years I’ve developed a deep passion for exploring how
          technology shapes the way we work, create, and live. This site started
          as a personal project. A way to document what I was learning with n8n
          and coding, and to share those insights with a wider audience.
        </p>
        <p>
          Tech Things HQ started as an experiment and a living project to
          showcase what’s possible when you combine code with automation. Every
          article on this site is generated through an n8n workflow that I built
          from, pulling together APIs, data sources, and logic to automatically
          create, format, and publish posts.
        </p>
        <p>
          This isn’t a traditional tech blog. It’s a demonstration of real-world
          automation in action—an example of how low-code tools, modern
          frameworks, and cloud infrastructure can work together to build
          something that runs on its own. The goal is to inspire other
          developers, makers, and businesses to see how far automation can go
          when paired with creativity and code.
        </p>
        <p>
          Thanks for visiting and checking out the project. If you’re into
          automation, AI, or web development, I hope what you see here sparks
          some ideas for your own builds.
        </p>
        <div></div>
        <div className="mt-12 border-t border-gray-500 pt-8">
          <p className="font-medium text-gray-100">
            Checkout how I built this site here:
          </p>
          <a
            href="https://github.com/dvasquez08/tech-blog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 text-xl font-light transition-colors no-underline hover:underline"
          >
            Tech Blog Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
