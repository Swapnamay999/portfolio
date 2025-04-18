const Skills = () => (
    <section id="skills" className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="grid grid-cols-2 gap-x-8">
        <div>
          <h3 className="font-bold">Programming Languages</h3>
          <ul className="list-disc ml-5">
            <li>Python</li>
            <li>JavaScript</li>
            <li>SQL</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Web Development</h3>
          <ul className="list-disc ml-5">
            <li>Django, Django Rest Framework, React</li>
            <li>FastAPI, HTML, CSS</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Data Engineering</h3>
          <ul className="list-disc ml-5">
            <li>Pandas, Great Expectations</li>
            <li>Snowflake, SQL</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Machine Learning</h3>
          <ul className="list-disc ml-5">
            <li>PyTorch, chemical prediction models</li>
          </ul>
        </div>
      </div>
    </section>
  );

  export default Skills