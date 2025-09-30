import Image from "next/image";

export default function Home() {
  return (
   <>
   {/* main section */}
   <section
  id="home"
  className="bg-[#F8F9FA] min-h-screen flex items-center justify-center px-6 py-20"
>
  <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
    {/* Text Content */}
    <div className="flex-1 text-center md:text-left">
    <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1D3557] leading-tight mb-4">
  Hi, I’m <span className="text-[#bc5003]">Anjali Choudhary</span>
</h1>

      <p className="text-lg text-[#6C757D] mb-6 max-w-xl">
        A front-end developer who builds clean, responsive, and accessible websites with a focus on performance. Let’s create something great together.
      </p>

      <div className="flex justify-center md:justify-start gap-4">
        <a
          href="/resume.pdf"
          target="_blank"
         className="border border-[#bc5003] text-[#bc5003] px-6 py-2 rounded-full font-semibold hover:bg-[#bc5003] hover:text-white transition"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="border border-[#1D3557] text-[#1D3557] px-6 py-2 rounded-full font-semibold hover:bg-[#1D3557] hover:text-white transition"
        >
          Contact Me
        </a>
      </div>
    </div>

    {/* Profile Image */}
    <div className="flex-1">
  <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-[#1D3557] shadow-xl relative">
    <Image
      src="/image/WhatsApp Image 2025-07-23 at 13.06.53.jpeg" 
      alt="Anjali's Profile"
      fill
      className="object-cover object-top"
      priority
    />
  </div>
</div>

  </div>
</section>




<hr />
{/* about the section */}
  
   <section id="about" className="bg-[#fdfaf5] py-24 px-6">
  <div className="max-w-5xl mx-auto grid md:grid-cols-2 items-center gap-16">
    
   
    <div>
      <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1D3557] mb-6 leading-tight">
        About <span className="text-[#1D3557]]">Me</span>
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        I'm a front-end developer who cares deeply about beautiful design, clean code, and excellent user experience.
        My strength lies in turning concepts into pixel-perfect, accessible interfaces.
      </p>
      
      <ul className="space-y-4 text-sm text-gray-600">
        <li className="flex items-start">
          <span className="text-[#bc5003] font-bold mr-2">▸</span>
          Building responsive websites with modern technologies.
        </li>
        <li className="flex items-start">
          <span className="text-[#bc5003] font-bold mr-2">▸</span>
          Writing clean, maintainable, and scalable front-end code.
        </li>
        <li className="flex items-start">
          <span className="text-[#bc5003] font-bold mr-2">▸</span>
          Bridging the gap between design and development.
        </li>
      </ul>

      <div className="mt-6 flex flex-wrap gap-3">
        {["HTML", "CSS", "JavaScript", "React", "Tailwind", "jQuery"].map((tech) => (
          <span
            key={tech}
            className="border border-[#bc5003] text-[#bc5003] px-4 py-1 rounded-full text-xs font-medium hover:bg-[#bc5003] hover:text-white transition"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>

    {/* Right Side: Image */}
    <div className="relative w-full h-80 rounded-3xl overflow-hidden shadow-xl border-4 border-[#bc5003]">
      <Image
        src="/image/WhatsApp Image 2025-07-23 at 13.06.53.jpeg" // make sure this image exists and is correctly placed
        alt="Anjali's portrait"
        layout="fill"
        objectFit="cover"
        className="object-top"
        priority
      />
    </div>
  </div>
</section>
{/* projects section  */}
   <hr />
   <section id="projects" className="bg-[#fdfaf5] py-24 px-6">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1D3557]">
        Featured <span className="text-[#bc5003]">Projects</span>
      </h2>
      <p className="text-gray-600 text-lg mt-3">
        A few selected works that combine design and code.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
       {
          title: "Clothify  ",
          image: "/image/clothify.images.jpg",
          desc: "lothify is the shopping site where u can buy the products.",
          tech: ["Next.js", "Tailwind CSS", "TypeScript"],
          demo: " http://192.168.1.35:3001/",
          code: "https://github.com/AnjaliCh00/dresses.git",
        },
        {
          title: "Traditional food ",
          image: "/image/WhatsApp Image 2025-07-24 at 11.17.02.jpeg",
          desc: "A traditional food website with a focus on cultural recipes and stories.",
          tech: ["Next.js", "Tailwind CSS", "TypeScript"],
          demo: "https://traditional-tau.vercel.app/",
          code: "https://github.com/AnjaliCh00/traditional.git",
        },
        {
          title: "DecorNest ",
          image: "/image/WhatsApp Image 2025-07-23 at 15.17.24.jpeg",
          desc: "A home decor website with a minimalist design and user-friendly navigation.",
          tech: ["Next.js", "Tailwind CSS", "TypeScript"],
          demo: "https://festival-five-zeta.vercel.app/",
          code: "https://github.com/AnjaliCh00/festival.git",
        },
      ].map((project, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md border border-[#f4e4d0] overflow-hidden hover:shadow-lg transition duration-300"
        >
          <div className="h-44 w-full relative">
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-xl"
            />
          </div>
          <div className="p-5">
            <h3 className="text-xl font-semibold text-[#1D3557] mb-1">{project.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{project.desc}</p>

            <div className="flex flex-wrap gap-2 text-xs mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-[#fcead8] text-[#1D3557] px-3 py-1 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between text-sm font-semibold text-[#bc5003]">
              <a href={project.demo} target="_blank" className="hover:underline">
                Live Demo
              </a>
              <a href={project.code} target="_blank" className="hover:underline">
                Code →
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
{/* skills section  */}
   <hr />
   <section id="skills" className="bg-[#fdfaf5] py-20 px-6">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1D3557] mb-4">
      My <span className="text-[#bc5003]">Skillset</span>
    </h2>
    <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
      A balance of design, development, and adaptability to modern tech — built for clean, functional user experiences.
    </p>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
      {/* Skill Card */}
      {[
        {
          title: "Frontend Foundations",
      
          desc: "Clean, semantic HTML. Styled with modular, responsive CSS.",
          tags: ["HTML5", "CSS3", "JavaScript", "jQuery"],
        },
        {
          title: "Modern Styling",
        
          desc: "Utility-first design with scalable components and fluid layouts.",
          tags: ["Tailwind CSS"],
        },
        {
          title: "UI Development",
        
          desc: "Interactive interfaces with component-based architecture.",
          tags: ["React", "Next.js"],
        },
        {
          title: "Backend Basics",
        
          desc: "Working with logic, data, and persistent storage.",
          tags: ["Javascript","Java", "SQL" ],
        },
        {
          title: "Version Control",
       
          desc: "Code collaboration and versioning across teams.",
          tags: ["Git", "GitHub"],
        },
        {
          title: "Soft Skills",
      
          desc: "Problem solving, communication, adaptability and continuous learning.",
          tags: ["Creativity", "Teamwork", "Growth Mindset"],
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl border border-[#f4e4d0] p-6 shadow-sm hover:shadow-md transition"
        >
          
          <h3 className="text-xl font-semibold text-[#1D3557] mb-1">{item.title}</h3>
          <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-[#fcead8] text-[#1D3557] px-3 py-1 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
{/* contact section */}
<hr />
   <section id="contact" className="bg-[#fdfaf5] py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1D3557] mb-4">
      <span className="text-[#bc5003]">Get In Touch</span>
    </h2>
    <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
      Have an idea, opportunity, or just want to say hello? I’m always open to connecting.
    </p>

    <form
      action="https://formspree.io/f/your-id-here" // ← Replace with your Formspree ID
      method="POST"
      className="bg-white rounded-xl shadow-md p-8 space-y-6 text-left"
    >
      <div>
        <label className="block text-sm font-medium text-[#1D3557] mb-1">Name</label>
        <input
          type="text"
          name="name"
          required
          placeholder="Your full name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bc5003]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#1D3557] mb-1">Email</label>
        <input
          type="email"
          name="email"
          required
          placeholder="you@gmail.com"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bc5003]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#1D3557] mb-1">Message</label>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="What would you like to discuss?"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bc5003]"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-[#1D3557] hover:bg-[#bc5003] text-white px-6 py-3 rounded-full font-semibold transition"
      >
        Send Message
      </button>
    </form>

   
  </div>
</section>

   
   
   
   
   
   
   
   
   </>
  );
}
