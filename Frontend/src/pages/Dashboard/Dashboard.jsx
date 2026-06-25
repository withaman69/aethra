import DashboardLayout from "../../components/layout/DashboardLayout";
import StatCard from "../../components/dashboard/StatCard";
import { useEffect, useState } from "react";

import {
  getDashboardStats,
  getDashboardSummary,
} from "../../features/dashboard/dashboardApi";
import AIInsights from "../../components/dashboard/AIInsights";
const Dashboard = () => {
  const [stats, setStats] = useState({
    skills: 0,
    projects: 0,
    goals: 0,
    certifications: 0,
  });

  const [summary, setSummary] =
    useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data =
          await getDashboardStats();

        setStats(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStats();
  }, []);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const data =
          await getDashboardSummary();

        setSummary(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSummary();
  }, []);

  return (
    <DashboardLayout>
      <div className="p-6">

        <h1 className="text-4xl font-bold mb-8">
          Dashboard
        </h1>

        {/* Main Stats */}
        <div className="grid grid-cols-4 gap-6">

          <StatCard
            title="Skills"
            value={stats.skills}
          />

          <StatCard
            title="Projects"
            value={stats.projects}
          />

          <StatCard
            title="Goals"
            value={stats.goals}
          />

          <StatCard
            title="Certificates"
            value={stats.certifications}
          />

        </div>

        {/* AI Career Summary */}
        <div className="grid grid-cols-4 gap-6 mt-8">

          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-500">
              ATS Score
            </p>

            <h2 className="text-4xl font-bold mt-2">
              {summary?.atsScore || 0}
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-500">
              Career Readiness
            </p>

            <h2 className="text-4xl font-bold mt-2">
              {summary?.readinessScore || 0}%
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-500">
              Profile Completion
            </p>

            <h2 className="text-4xl font-bold mt-2">
              {summary?.profileCompletion || 0}%
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-500">
              Suggestions
            </p>

            <h2 className="text-4xl font-bold mt-2">
              {summary?.suggestionCount || 0}
            </h2>
          </div>

        </div>

      {/* AI Insights */}
        <AIInsights />
      </div>
        
    </DashboardLayout>
  );
};

export default Dashboard;