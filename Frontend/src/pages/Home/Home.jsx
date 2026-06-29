import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
Brain,
Route,
FileText,
Mic,
ArrowRight,
Sparkles,
Target,
Briefcase,
} from "lucide-react";

import AppBackground from "../../components/layout/AppBackground";

const Home = () => {
return (
<> <AppBackground />


  <div className="min-h-screen bg-[#0A0A0F] text-white overflow-hidden">

    {/* Navbar */}

    <nav className="max-w-7xl mx-auto flex justify-between items-center px-8 py-6">

      <h1
        className="
        text-4xl
        font-black
        bg-gradient-to-r
        from-cyan-400
        via-blue-500
        to-purple-500
        bg-clip-text
        text-transparent
      "
      >
        AETHRA
      </h1>

      <div className="flex gap-4">

        <Link
          to="/login"
          className="
          px-5 py-2
          rounded-xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          hover:border-cyan-400
          transition
        "
        >
          Login
        </Link>

        <Link
          to="/register"
          className="
          px-5 py-2
          rounded-xl
          font-semibold
          bg-gradient-to-r
          from-cyan-500
          to-purple-500
          shadow-[0_0_25px_rgba(34,211,238,0.3)]
        "
        >
          Get Started
        </Link>

      </div>

    </nav>

    {/* Hero */}

    <section className="max-w-7xl mx-auto px-8 pt-20 pb-32">

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
            text-7xl
            font-black
            leading-tight
            bg-gradient-to-r
            from-cyan-400
            via-blue-400
            to-purple-500
            bg-clip-text
            text-transparent
          "
          >
            Your AI Career
            Operating System
          </motion.h1>

          <p className="text-slate-400 text-xl mt-8 max-w-xl">
            Build your career with AI mentoring,
            interview preparation, ATS optimization,
            career roadmaps and job readiness insights.
          </p>

          <div className="flex gap-4 mt-10">

            <Link
              to="/register"
              className="
              px-8 py-4
              rounded-2xl
              font-bold
              bg-gradient-to-r
              from-cyan-500
              to-purple-500
              flex items-center gap-3
              shadow-[0_0_30px_rgba(34,211,238,0.35)]
            "
            >
              Start Free
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          p-10
          shadow-[0_0_40px_rgba(34,211,238,0.15)]
        "
        >

          <h2 className="text-3xl font-bold mb-8">
            Career Dashboard
          </h2>

          <div className="space-y-4">

            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-4">
              ATS Score: 92%
            </div>

            <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-4">
              Career Readiness: 88%
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-4">
              Interview Score: 90%
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-4">
              Roadmap Progress: 67%
            </div>

          </div>

        </motion.div>

      </div>

    </section>

    {/* Stats */}

    <section className="max-w-7xl mx-auto px-8 mb-32">

      <div className="grid md:grid-cols-4 gap-6">

        <StatCard value="50K+" label="Career Questions Solved" />
        <StatCard value="92%" label="Average ATS Improvement" />
        <StatCard value="1000+" label="Mock Interviews" />
        <StatCard value="24/7" label="AI Mentor Support" />

      </div>

    </section>

    {/* Features */}

    <section className="max-w-7xl mx-auto px-8 mb-32">

      <h2
        className="
        text-6xl
        font-black
        text-center
        mb-20
        bg-gradient-to-r
        from-cyan-400
        to-purple-500
        bg-clip-text
        text-transparent
      "
      >
        Everything You Need
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        <FeatureCard
          icon={<Brain size={28} />}
          title="AI Mentor"
          text="Get instant career guidance powered by AI."
        />

        <FeatureCard
          icon={<Route size={28} />}
          title="Career Roadmaps"
          text="Follow structured learning paths."
        />

        <FeatureCard
          icon={<FileText size={28} />}
          title="ATS Analyzer"
          text="Optimize your resume for recruiters."
        />

        <FeatureCard
          icon={<Mic size={28} />}
          title="Mock Interviews"
          text="Practice before real interviews."
        />

      </div>

    </section>

    {/* Why Aethra */}

    <section className="max-w-7xl mx-auto px-8 mb-32">

      <div className="grid lg:grid-cols-3 gap-8">

        <FeatureWide
          icon={<Sparkles />}
          title="Personalized AI Guidance"
        />

        <FeatureWide
          icon={<Target />}
          title="Goal Tracking System"
        />

        <FeatureWide
          icon={<Briefcase />}
          title="Job Readiness Reports"
        />

      </div>

    </section>

    {/* CTA */}

    <section className="text-center pb-32 px-8">

      <h2
        className="
        text-6xl
        font-black
        bg-gradient-to-r
        from-cyan-400
        to-purple-500
        bg-clip-text
        text-transparent
      "
      >
        Ready To Build Your Future?
      </h2>

      <p className="text-slate-400 mt-6 text-xl">
        Join Aethra and accelerate your career.
      </p>

      <Link
        to="/register"
        className="
        inline-block
        mt-10
        px-10
        py-5
        rounded-2xl
        font-bold
        bg-gradient-to-r
        from-cyan-500
        to-purple-500
        shadow-[0_0_30px_rgba(34,211,238,0.35)]
      "
      >
        Start Free Today
      </Link>

    </section>

  </div>
</>


);
};

const StatCard = ({ value, label }) => (

  <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
    <h3 className="text-5xl font-black text-cyan-400">
      {value}
    </h3>


<p className="text-slate-400 mt-3">
  {label}
</p>


  </div>
);

const FeatureCard = ({
icon,
title,
text,
}) => (

  <div
    className="
    bg-white/5
    backdrop-blur-xl
    border
    border-white/10
    rounded-3xl
    p-8
    hover:border-cyan-400/30
    transition-all
  "
  >
    <div className="text-cyan-400 mb-5">
      {icon}
    </div>

<h3 className="text-xl font-bold">
  {title}
</h3>

<p className="text-slate-400 mt-3">
  {text}
</p>

  </div>
);

const FeatureWide = ({
icon,
title,
}) => (

  <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">

<div className="text-cyan-400 flex justify-center mb-5">
  {icon}
</div>

<h3 className="text-2xl font-bold">
  {title}
</h3>


  </div>
);

export default Home;
