import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FloatingAIMentor from "../../components/dashboard/FloatingAIMentor";
import DashboardLayout from "../../components/layout/DashboardLayout";
import {
  Sparkles,
  Rocket,
  Brain,
  Trophy,
  TrendingUp,
} from "lucide-react";
import {
  getDashboardSummary,
} from "../../features/dashboard/dashboardApi";
import CareerAnalyticsChart from "../../components/dashboard/CareerAnalyticsChart";
import GoalAnalytics from "../../components/dashboard/GoalAnalytics";
import CountUp from "react-countup";
import CareerReadinessCard from "../../components/dashboard/CareerReadinessCard";
const Dashboard = () => {
  const [summary, setSummary] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchSummary =
      async () => {
        try {
          const data =
            await getDashboardSummary();

          setSummary(
            data.data
          );
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

    fetchSummary();
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="p-6">
          Loading Dashboard...
        </div>
      </DashboardLayout>
    );
  }

return ( <DashboardLayout> <div className="relative p-8 overflow-hidden">


  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[180px] rounded-full"></div>

  {/* Hero */}
<motion.div
initial={{ opacity: 0, y: -40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.7 }}
className="relative z-10 mb-12"

>

  <div
    className="
    relative
    overflow-hidden
    rounded-3xl
    p-10
    bg-gradient-to-r
    from-cyan-500/10
    via-blue-500/10
    to-purple-500/10
    border
    border-cyan-500/20
    backdrop-blur-xl
    "
  >
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 blur-[150px]" />
    </div>


<div className="relative z-10">

  <div className="flex items-center gap-3 mb-4">
    <Sparkles className="text-cyan-400" />
    <span className="text-cyan-300 font-semibold">
      AI Powered Career Intelligence
    </span>
  </div>

  <h1
    className="
    text-6xl
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
    Welcome Back,
    <br />
    Aman 👋
  </h1>

  <p className="text-slate-300 text-xl mt-5 max-w-3xl">
    Your career operating system is actively tracking
    ATS score, interview readiness, roadmap progress,
    projects and growth opportunities.
  </p>

  <div className="grid md:grid-cols-4 gap-4 mt-8">

    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
      <Rocket className="text-cyan-400 mb-2" />
      <p className="text-slate-400 text-sm">
        Next Goal
      </p>
      <p className="font-bold">
        ATS 90+
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
      <Brain className="text-purple-400 mb-2" />
      <p className="text-slate-400 text-sm">
        AI Mentor
      </p>
      <p className="font-bold">
        Active
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
      <TrendingUp className="text-green-400 mb-2" />
      <p className="text-slate-400 text-sm">
        Growth
      </p>
      <p className="font-bold">
        +18%
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
      <Trophy className="text-orange-400 mb-2" />
      <p className="text-slate-400 text-sm">
        Career Level
      </p>
      <p className="font-bold capitalize">
        {summary?.careerLevel}
      </p>
    </div>

  </div>

  <div className="flex flex-wrap gap-4 mt-8">

    <Link
      to="/resume"
      className="
      px-6
      py-3
      rounded-2xl
      bg-cyan-500
      text-black
      font-bold
      hover:scale-105
      transition
      "
    >
      Resume Analyzer
    </Link>

    <Link
      to="/mentor"
      className="
      px-6
      py-3
      rounded-2xl
      border
      border-purple-500/40
      bg-purple-500/10
      hover:scale-105
      transition
      "
    >
      AI Mentor
    </Link>

    <Link
      to="/roadmaps"
      className="
      px-6
      py-3
      rounded-2xl
      border
      border-green-500/40
      bg-green-500/10
      hover:scale-105
      transition
      "
    >
      Career Roadmap
    </Link>

  </div>

</div>


  </div>
</motion.div>
{/* AI Career Command Center */}

<div
  className="
  mb-10
  bg-gradient-to-r
  from-cyan-500/10
  via-blue-500/10
  to-purple-500/10
  backdrop-blur-xl
  border
  border-cyan-500/20
  rounded-3xl
  p-8
"
>

  <div className="flex items-center gap-4 mb-8">

    <div
      className="
      w-16
      h-16
      rounded-2xl
      bg-gradient-to-r
      from-cyan-500
      to-purple-500
      flex
      items-center
      justify-center
      text-3xl
    "
    >
      🤖
    </div>

    <div>
      <h2 className="text-3xl font-black">
        AI Career Command Center
      </h2>

      <p className="text-slate-400">
        Real-time career intelligence
      </p>
    </div>

  </div>

  <div className="grid md:grid-cols-4 gap-6">

    <div className="bg-black/20 rounded-2xl p-5">

      <p className="text-slate-400 text-sm">
        Career Readiness
      </p>

      <h3 className="text-4xl font-black text-cyan-400 mt-2">
        {summary?.readinessScore}%
      </h3>

    </div>

    <div className="bg-black/20 rounded-2xl p-5">

      <p className="text-slate-400 text-sm">
        ATS Score
      </p>

      <h3 className="text-4xl font-black text-purple-400 mt-2">
        {summary?.atsScore}
      </h3>

    </div>

    <div className="bg-black/20 rounded-2xl p-5">

      <p className="text-slate-400 text-sm">
        Profile Completion
      </p>

      <h3 className="text-4xl font-black text-green-400 mt-2">
        {summary?.profileCompletion}%
      </h3>

    </div>

    <div className="bg-black/20 rounded-2xl p-5">

      <p className="text-slate-400 text-sm">
        Career Level
      </p>

      <h3 className="text-2xl font-black text-orange-400 mt-3 capitalize">
        {summary?.careerLevel}
      </h3>

    </div>

  </div>

  <div
    className="
    mt-8
    bg-white/5
    border
    border-white/10
    rounded-2xl
    p-6
  "
  >

    <p className="text-cyan-300 font-bold mb-3">
      AI Recommendation
    </p>

    <p className="text-slate-300 text-lg">
      Based on your current profile,
      completing 2 additional projects and
      1 certification could increase your
      readiness score by 15%.
    </p>

  </div>

</div>

  {/* AI Insight */}
  <div className="grid lg:grid-cols-3 gap-6 mb-10">

    <div className="lg:col-span-2 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8">

      <h2 className="text-2xl font-bold text-cyan-300">
        AI Career Insight
      </h2>

      <p className="mt-4 text-slate-300 leading-relaxed">
        Based on your current profile, completing
        more projects and certifications can improve
        your readiness score significantly.
      </p>

    </div>

    <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

      <p className="text-slate-400">
        Career Readiness
      </p>

      <h2 className="text-6xl font-black text-cyan-400 mt-4">
        {summary?.readinessScore}%
      </h2>

    </div>

  </div>
  {/* AI Command Center */}

<div className="grid lg:grid-cols-3 gap-6 mb-10">

  {/* Main AI Card */}

  <div
    className="
    lg:col-span-2
    relative
    overflow-hidden
    rounded-3xl
    border
    border-cyan-500/20
    bg-gradient-to-br
    from-cyan-500/10
    to-purple-500/10
    backdrop-blur-xl
    p-8
  "
  >

    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 blur-[120px]" />
    </div>

    <div className="relative z-10">

      <p className="text-cyan-300 font-semibold">
        AETHRA AI
      </p>

      <h2 className="text-4xl font-black mt-2">
        Career Intelligence Engine
      </h2>

      <p className="text-slate-300 mt-4 max-w-2xl">
        Analyze your profile, identify skill gaps,
        improve ATS score and get personalized
        career guidance instantly.
      </p>

      <div className="flex flex-wrap gap-4 mt-8">

        <button
          className="
          px-6
          py-3
          rounded-2xl
          bg-cyan-500
          text-black
          font-bold
          hover:scale-105
          transition
        "
        >
          Analyze Profile
        </button>

        <button
          className="
          px-6
          py-3
          rounded-2xl
          bg-purple-500/20
          border
          border-purple-500/30
        "
        >
          Ask AI Mentor
        </button>

      </div>

    </div>

  </div>

  {/* Streak Card */}

  <div
    className="
    bg-white/5
    backdrop-blur-xl
    border
    border-white/10
    rounded-3xl
    p-8
  "
  >

    <p className="text-slate-400">
      Growth Streak
    </p>

    <h2 className="text-6xl font-black text-orange-400 mt-4">
      12
    </h2>

    <p className="text-slate-300 mt-2">
      Days Active
    </p>

    <div className="mt-6">
      <div className="flex gap-2">

        {[1,2,3,4,5,6,7].map((day) => (
          <div
            key={day}
            className="
            w-8
            h-8
            rounded-lg
            bg-orange-500
          "
          />
        ))}

      </div>
    </div>

  </div>

</div>
{/* Career Journey Timeline */}

<div className="mb-10">

  <h2 className="text-3xl font-bold text-cyan-300 mb-6">
    Career Journey
  </h2>

  <div
    className="
    bg-white/5
    backdrop-blur-xl
    border
    border-white/10
    rounded-3xl
    p-8
  "
  >

    <div className="space-y-8">

      <div className="flex items-center gap-6">

        <div
          className="
          w-14
          h-14
          rounded-full
          bg-green-500/20
          border
          border-green-500/30
          flex
          items-center
          justify-center
          text-2xl
          "
        >
          ✅
        </div>

        <div>
          <h3 className="font-bold text-lg">
            Profile Created
          </h3>

          <p className="text-slate-400">
            Your Aethra journey started.
          </p>
        </div>

      </div>

      <div className="flex items-center gap-6">

        <div
          className="
          w-14
          h-14
          rounded-full
          bg-cyan-500/20
          border
          border-cyan-500/30
          flex
          items-center
          justify-center
          text-2xl
          "
        >
          📄
        </div>

        <div>
          <h3 className="font-bold text-lg">
            Resume Uploaded
          </h3>

          <p className="text-slate-400">
            ATS analysis completed.
          </p>
        </div>

      </div>

      <div className="flex items-center gap-6">

        <div
          className="
          w-14
          h-14
          rounded-full
          bg-purple-500/20
          border
          border-purple-500/30
          flex
          items-center
          justify-center
          text-2xl
          "
        >
          🚀
        </div>

        <div>
          <h3 className="font-bold text-lg">
            Skills Added
          </h3>

          <p className="text-slate-400">
            Career roadmap generated.
          </p>
        </div>

      </div>

      <div className="flex items-center gap-6">

        <div
          className="
          w-14
          h-14
          rounded-full
          bg-orange-500/20
          border
          border-orange-500/30
          flex
          items-center
          justify-center
          text-2xl
          "
        >
          🎯
        </div>

        <div>
          <h3 className="font-bold text-lg">
            Next Goal
          </h3>

          <p className="text-slate-400">
            Reach ATS score above 85.
          </p>
        </div>

      </div>

    </div>

  </div>

</div>
{/* Achievement Badges */}

<div className="mb-10">

  <h2 className="text-3xl font-bold text-purple-300 mb-6">
    Achievements
  </h2>

  <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

    <div
      className="
      bg-gradient-to-br
      from-cyan-500/10
      to-cyan-500/5
      border
      border-cyan-500/20
      rounded-3xl
      p-6
      hover:scale-105
      transition-all
    "
    >
      <div className="text-5xl mb-4">🏆</div>

      <h3 className="font-bold text-xl">
        ATS Master
      </h3>

      <p className="text-slate-400 mt-2">
        Achieve ATS score above 85
      </p>
    </div>

    <div
      className="
      bg-gradient-to-br
      from-purple-500/10
      to-purple-500/5
      border
      border-purple-500/20
      rounded-3xl
      p-6
      hover:scale-105
      transition-all
    "
    >
      <div className="text-5xl mb-4">📄</div>

      <h3 className="font-bold text-xl">
        Resume Pro
      </h3>

      <p className="text-slate-400 mt-2">
        Complete resume profile
      </p>
    </div>

    <div
      className="
      bg-gradient-to-br
      from-green-500/10
      to-green-500/5
      border
      border-green-500/20
      rounded-3xl
      p-6
      hover:scale-105
      transition-all
    "
    >
      <div className="text-5xl mb-4">🎤</div>

      <h3 className="font-bold text-xl">
        Interview Ready
      </h3>

      <p className="text-slate-400 mt-2">
        Complete mock interviews
      </p>
    </div>

    <div
      className="
      bg-gradient-to-br
      from-orange-500/10
      to-orange-500/5
      border
      border-orange-500/20
      rounded-3xl
      p-6
      hover:scale-105
      transition-all
    "
    >
      <div className="text-5xl mb-4">🚀</div>

      <h3 className="font-bold text-xl">
        Career Explorer
      </h3>

      <p className="text-slate-400 mt-2">
        Finish first roadmap
      </p>
    </div>

  </div>

</div>
{/* AI Recommendations */}

<div className="mb-10">

  <h2 className="text-3xl font-bold text-cyan-300 mb-6">
    AI Recommendations
  </h2>

  <div className="grid lg:grid-cols-3 gap-6">

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
      <h3 className="font-bold text-cyan-400">
        React Projects
      </h3>

      <p className="text-slate-400 mt-3">
        Add 2 production-grade React projects.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
      <h3 className="font-bold text-purple-400">
        Certification
      </h3>

      <p className="text-slate-400 mt-3">
        Complete AWS Cloud Practitioner.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
      <h3 className="font-bold text-green-400">
        Interview Prep
      </h3>

      <p className="text-slate-400 mt-3">
        Solve 10 DSA problems this week.
      </p>
    </div>

  </div>

</div>
{/* Mission Control */}

<div className="mb-10">

  <h2 className="text-3xl font-bold text-cyan-300 mb-6">
    Mission Control
  </h2>

  <div className="grid lg:grid-cols-3 gap-6">

    {/* Current Mission */}

    <div
      className="
      lg:col-span-2
      bg-gradient-to-r
      from-cyan-500/10
      to-purple-500/10
      border
      border-cyan-500/20
      rounded-3xl
      p-8
      backdrop-blur-xl
    "
    >

      <p className="text-cyan-300 font-semibold">
        CURRENT MISSION
      </p>

      <h3 className="text-3xl font-black mt-3">
        Become Interview Ready
      </h3>

      <p className="text-slate-400 mt-4">
        Complete roadmap milestones and improve
        readiness score above 85%.
      </p>

      <div className="mt-6">

        <div className="flex justify-between text-sm mb-2">
          <span>Progress</span>
          <span>72%</span>
        </div>

        <div className="h-4 bg-slate-800 rounded-full overflow-hidden">

          <div
            className="
            h-full
            bg-gradient-to-r
            from-cyan-400
            to-purple-500
          "
            style={{
              width: "72%",
            }}
          />

        </div>

      </div>

    </div>
    

    {/* XP */}

    <div
      className="
      bg-white/5
      border
      border-white/10
      rounded-3xl
      p-8
      backdrop-blur-xl
    "
    >

      <p className="text-slate-400">
        Career XP
      </p>

      <h2 className="text-6xl font-black text-cyan-400 mt-3">
        2450
      </h2>

      <p className="text-green-400 mt-3">
        +120 this week
      </p>

    </div>

  </div>

</div>
{/* Daily Tasks */}

<div className="mb-10">

  <h2 className="text-3xl font-bold text-purple-300 mb-6">
    Daily Tasks
  </h2>

  <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
      <div className="text-3xl mb-3">📄</div>
      Update Resume
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
      <div className="text-3xl mb-3">💻</div>
      Build Project
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
      <div className="text-3xl mb-3">🧠</div>
      Solve 2 DSA Problems
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
      <div className="text-3xl mb-3">🎤</div>
      Mock Interview
    </div>

  </div>

</div>
  {/* Stats */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 mb-10"
  >

    <div className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-6 hover:scale-105 transition-all duration-300">
      <h3 className="text-slate-400">
        ATS Score
      </h3>
      <p className="text-5xl font-black text-cyan-400 mt-3">
        {summary?.atsScore}
      </p>
    </div>

    <div className="bg-white/5 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-6 hover:scale-105 transition-all duration-300">
      <h3 className="text-slate-400">
        Readiness
      </h3>
      <p className="text-5xl font-black text-purple-400 mt-3">
        {summary?.readinessScore}%
      </p>
    </div>

    <div className="bg-white/5 backdrop-blur-xl border border-green-500/20 rounded-3xl p-6 hover:scale-105 transition-all duration-300">
      <h3 className="text-slate-400">
        Career Level
      </h3>
      <p className="text-2xl font-bold text-green-400 mt-3 capitalize">
        {summary?.careerLevel}
      </p>
    </div>

    <div className="bg-white/5 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-6 hover:scale-105 transition-all duration-300">
      <h3 className="text-slate-400">
        Suggestions
      </h3>
      <p className="text-5xl font-black text-orange-400 mt-3">
        {summary?.suggestionCount}
      </p>
    </div>

    <div className="bg-white/5 backdrop-blur-xl border border-pink-500/20 rounded-3xl p-6 hover:scale-105 transition-all duration-300">
      <h3 className="text-slate-400">
        Profile
      </h3>
      <p className="text-5xl font-black text-pink-400 mt-3">
        {summary?.profileCompletion}%
      </p>
    </div>

  </motion.div>

  {/* Profile Completion */}
  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-10">

    <h2 className="text-2xl font-bold mb-5 text-cyan-300">
      Profile Completion
    </h2>

    <div className="w-full bg-slate-800 rounded-full h-5 overflow-hidden">

      <div
        className="bg-gradient-to-r from-cyan-400 to-purple-500 h-5 rounded-full"
        style={{
          width: `${summary?.profileCompletion}%`,
        }}
      />

    </div>

    <p className="mt-4 text-slate-300">
      {summary?.profileCompletion}% Completed
    </p>

  </div>

  {/* Quick Actions */}
  <div className="mb-10">

    <h2 className="text-3xl font-bold mb-6 text-cyan-300">
      Quick Actions
    </h2>

    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

      <Link
        to="/resume"
        className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-cyan-400/50 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.25)] transition-all duration-300"
      >
        <div className="text-4xl mb-4">📄</div>
        <h3 className="font-bold text-xl">
          Resume Builder
        </h3>
      </Link>

      <Link
        to="/roadmaps"
        className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-green-400/50 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.25)] transition-all duration-300"
      >
        <div className="text-4xl mb-4">🎯</div>
        <h3 className="font-bold text-xl">
          Career Roadmaps
        </h3>
      </Link>

      <Link
        to="/mentor"
        className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-purple-400/50 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] transition-all duration-300"
      >
        <div className="text-4xl mb-4">🤖</div>
        <h3 className="font-bold text-xl">
          AI Mentor
        </h3>
      </Link>

      <Link
        to="/interview"
        className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-orange-400/50 hover:scale-105 hover:shadow-[0_0_30px_rgba(251,146,60,0.25)] transition-all duration-300"
      >
        <div className="text-4xl mb-4">🎤</div>
        <h3 className="font-bold text-xl">
          Mock Interview
        </h3>
      </Link>

    </div>

  </div>

  {/* AI Assistant Widget */}
  <div className="mb-10">

    <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

      <div className="flex items-center gap-4">

        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center text-3xl">
          🤖
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Aethra AI Assistant
          </h2>

          <p className="text-slate-400">
            Your career mentor is ready.
          </p>
        </div>

      </div>

      <div className="mt-6 text-slate-300">

        Recommended next steps:

        <ul className="mt-4 space-y-2">

          <li>• Add 2 more projects</li>
          <li>• Complete 1 certification</li>
          <li>• Improve ATS score above 85</li>

        </ul>

      </div>

    </div>

  </div>

  {/* Analytics */}
  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
    <CareerAnalyticsChart />
  </div>

 

</div><CareerReadinessCard />
<FloatingAIMentor />

  </DashboardLayout>
);



};

export default Dashboard;