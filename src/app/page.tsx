"use client"

import { TypeAnimation } from 'react-type-animation'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-green-700">
      <div className="flex flex-col items-center justify-center min-h-screen w-full">
        <h1 className="text-4xl font-bold text-white text-center">
          Hey, I&apos;m Courtney. 
        </h1>
        <h3 className="text-2xl font-bold text-white text-center">I&apos;m a software engineer.</h3>
        <h3 className="text-2xl font-bold text-white text-center">
          
          <TypeAnimation
            sequence={[
              "I can prove it.",
              2000,
              "Look, an animation!",
              1000,
              "Told ya.",
              1000,
            ]}
            wrapper="span"
            preRenderFirstString={true}
            cursor={true}
            repeat={0}
            className="text-white"
          />
        </h3>
        <button
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }}
          className="mt-8 px-6 py-3 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-blue-500 transition-all"
        >
          More pretty words ↓
        </button>
      </div>
      <div className="h-screen flex flex-col items-center justify-center gap-8">
        <div className="flex flex items-center justify-center px-8 gap-12">
          <div className="flex flex-col items-start justify-center gap-8">
            <h3 className="text-white text-xl font-bold max-w-2xl text-left">What I say about me</h3>
            <p className="text-white text-lg max-w-2xl text-left">
              I like to build things. I&apos;m drawn to UI because it&apos;s the most tangible part of software. 
              I have a love for simplicity and elegance in both the way I work and the products I build.
              Lately, the tools of choice have been React, TypeScript, and Next.js.
            </p>
          </div>
          <div className="flex flex-col items-end justify-center gap-8">
            <h3 className="text-white text-xl font-bold max-w-2xl text-right">What AI says about me</h3>
            <p className="text-white text-lg max-w-2xl text-right">
              I&apos;m a software engineer with a passion for building elegant, user-friendly applications. 
              With experience in frontend development, I specialize in creating responsive web applications 
              using modern technologies like React, TypeScript, and Next.js.
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight*2,
              behavior: 'smooth'
            });
          }}
          className="mt-8 px-6 py-3 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-blue-500 transition-all"
        >
          How to get in touch ↓
        </button>
      </div>
      <div className="h-screen flex flex-col items-center justify-center gap-1">
        <p className="text-white text-lg max-w-2xl text-center">
          I&apos;m always open to new opportunities, so feel free to reach out.
        </p>
        <p className="text-white text-lg max-w-2xl text-center">
          <a href="https://www.linkedin.com/in/connor-mcgrew/" className="text-white font-bold">My LinkedIn </a> 
          is an easy way to reach me and get a snapshot of my work experience. If email is more your style,  
          <a href="mailto:cmcg429@gmai.com" className="text-white font-bold"> cmcg429@gmail.com</a>.
        </p>
        <p className="text-white text-lg max-w-2xl text-center">
          Be sure to let me know how you found me; hope to hear from you soon.
        </p>
        <p className="text-white text-lg max-w-2xl text-center mt-2">
          Cheers,<br/>
          Courtney
        </p>
      </div>
    </div>
  );
}
