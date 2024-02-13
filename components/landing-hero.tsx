"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The #1 AI Tool for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: [
                "AI Chat.",
                "Beautiful AI Photos",
                "AI Video",
                "Content Creation.",
                "Coding.",
                "Blogging.",
                "Music Creation."
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        10X Your Creativity and Productivity With The Only AI Tool You'll Ever Need.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Get Started For Free
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required.
      </div>
      <div classname="text-zinc-400 text-xs md:text-sm font-normal">
✏️ Chat with the most advanced AI models<br />
📸 Create stunning AI Photos<br />
🎹 Turn Words Into Music<br />
🎞️ Create AI videos<br /> 
✍️ Create AI-generated content for your blog or website<br />
      </div>
    </div>
  );
};
