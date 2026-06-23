import DashboardLayout from "../../components/layout/DashboardLayout";

import StatsCard from "../../components/dashboard/StatsCard";
import ProfileCompletionCard from "../../components/dashboard/ProfileCompletionCard";
import CareerReadinessCard from "../../components/dashboard/CareerReadinessCard";
import RecentActivity from "../../components/dashboard/RecentActivity";
import QuickAction from "../../components/dashboard/QuickActions";

import {
  User,
  FileText,
  Target,
  Trophy,
} from "lucide-react";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">

        <h1 className="text-4xl font-bold text-white">
          Welcome To Aethra 🚀
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <StatsCard
            title="Profile Completion"
            value="70%"
            icon={<User />}
          />

          <StatsCard
            title="ATS Score"
            value="82"
            icon={<FileText />}
          />

          <StatsCard
            title="Career Readiness"
            value="78%"
            icon={<Target />}
          />

          <StatsCard
            title="Achievements"
            value="12"
            icon={<Trophy />}
          />

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <ProfileCompletionCard />

          <CareerReadinessCard />

          <RecentActivity />

          <QuickAction />

        </div>

      </div>
    </DashboardLayout>
  );
};
<div className="bg-red-500 text-white p-10 rounded-xl">
  Tailwind Working
</div>

export default Dashboard;