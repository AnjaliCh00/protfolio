import Image from "next/image";

export default function Home() {
  return (
   <>
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
        A front-end developer who builds clean, responsive, and accessible websites with a focus on performance and UX. Let’s create something great together.
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
      <div className="w-64 h-64 mx-auto relative rounded-full overflow-hidden border-4 border-[#1D3557] shadow-xl">
        <Image
          src="/images/profile.jpg"
          alt="Anjali's Profile"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </div>
  </div>
</section>


   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   </>
  );
}
