import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CareerAnalyticsChart = () => {
  const data = [
    {
      name: "ATS",
      value: 45,
    },
    {
      name: "Readiness",
      value: 35,
    },
    {
      name: "Skills",
      value: 60,
    },
    {
      name: "Projects",
      value: 40,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Career Analytics
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={data}>
          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="value"
          />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
};

export default CareerAnalyticsChart;