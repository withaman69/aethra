import { useEffect, useState } from "react";
import { getCareerReadiness } from "../../features/careerReadiness/careerReadinessApi";

const CareerReadinessCard = () => {
const [readiness, setReadiness] =
useState(null);

useEffect(() => {
const fetchReadiness =
async () => {
try {
const data =
await getCareerReadiness();


      setReadiness(
        data.data
      );
    } catch (error) {
      console.error(error);
    }
  };

fetchReadiness();


}, []);

if (!readiness) {
return ( <div
     className="
     bg-white/5
     backdrop-blur-lg
     border
     border-white/10
     rounded-2xl
     p-6
     "
   >
Loading... </div>
);
}

return ( <div
   className="
   bg-gradient-to-br
   from-cyan-500/10
   to-purple-500/10
   backdrop-blur-xl
   border
   border-cyan-500/20
   rounded-3xl
   p-8
   "
 > <h3 className="text-xl font-semibold text-cyan-300">
Career Readiness </h3>


  <p className="text-6xl font-black text-green-400 mt-4">
    {readiness.score}%
  </p>

  <p className="text-slate-300 mt-2 text-lg">
    {readiness.level}
  </p>

  <div className="mt-6">

    <h4 className="text-cyan-300 font-semibold mb-3">
      Improvements
    </h4>

    <ul className="space-y-2 text-slate-400">
      {readiness.improvements?.map(
        (item, index) => (
          <li key={index}>
            • {item}
          </li>
        )
      )}
    </ul>

  </div>
</div>


);
};

export default CareerReadinessCard;
