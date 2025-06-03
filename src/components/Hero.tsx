import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4">
      <section className="relative w-full max-w-5xl flex flex-col items-center justify-center text-white text-center py-20">

        {/* Background green blobs */}
        <div className="absolute w-72 h-72 bg-[#72d60f] rounded-full blur-3xl opacity-40 z-0 -top-20 -left-20"></div>
        <div className="absolute w-64 h-64 bg-[#a3ff1a] rounded-full blur-2xl opacity-30 z-0 top-20 right-20"></div>
        <div className="absolute w-64 h-64 bg-[#72d60f] rounded-full blur-[100px] opacity-25 z-0"></div>

        {/* Profile Image */}
        <div className="relative z-10 mb-10">
          <Image
            src="/images/Profile_Pic.jpg" // ✅ This should be your uploaded image
            alt="Abiha Ahmed"
            width={300}
            height={300}
            className="rounded-2xl object-cover shadow-xl ring-4 ring-white"
          />
        </div>

        {/* Text Content */}
        <h1 className= "text-4xl md:text-5xl font-bold mb-4 z-10">
          Hi, I am Syeda Abiha Ahmed
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8 z-10">
          A Front-End Developer & UI/UX Engineer. I bring creativity and precision to every pixel and line of code.
        </p>

        {/* Button */}
        <button className="bg-[#a3ff1a] hover:bg-[#8bd00f] text-black font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300 z-10">
          Contact Me
        </button>
      </section>
    </main>
  );
}
