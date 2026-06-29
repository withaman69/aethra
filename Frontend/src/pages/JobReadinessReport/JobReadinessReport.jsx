import {
  useEffect,
  useState,
} from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";

import {
  getJobReadinessReport,
} from "../../features/reports/jobReadinessReportApi";

const JobReadinessReport =
  () => {
    const [
      report,
      setReport,
    ] = useState(null);

    const [
      loading,
      setLoading,
    ] = useState(true);

    useEffect(() => {
      const fetchReport =
        async () => {
          try {
            const data =
              await getJobReadinessReport();

            setReport(
              data.report
            );
          } catch (
            error
          ) {
            console.error(
              error
            );
          } finally {
            setLoading(
              false
            );
          }
        };

      fetchReport();
    }, []);

    if (loading) {
      return (
        <DashboardLayout>
          <div className="p-6">
            Loading...
          </div>
        </DashboardLayout>
      );
    }

    return (
      <DashboardLayout>
        <div className="max-w-6xl mx-auto p-6">

          <h1 className="text-4xl font-bold mb-8">
            Job Readiness Report
          </h1>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-semibold text-lg">
                ATS Score
              </h3>

              <p className="text-5xl font-bold mt-4">
                {report.atsScore}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-semibold text-lg">
                Career Readiness
              </h3>

              <p className="text-5xl font-bold mt-4">
                {
                  report.careerReadiness
                }
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-semibold text-lg">
                Suggestions
              </h3>

              <p className="text-5xl font-bold mt-4">
                {
                  report.suggestionCount
                }
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-semibold text-lg">
                Overall Status
              </h3>

              <p className="text-3xl font-bold mt-4">
                {
                  report.overallStatus
                }
              </p>
            </div>

          </div>

        </div>
      </DashboardLayout>
    );
  };

export default JobReadinessReport;