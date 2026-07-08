import { useEffect, useState } from "react";

import {
useParams,
} from "react-router-dom";

import DashboardLayout from "../../components/layout/DashboardLayout";

import {
getSkillGap,
} from "../../features/skillGap/skillGapApi";

import {
CircularProgressbar,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

const SkillGap = () => {

const { roadmapId } =
useParams();

const [result, setResult] =
useState(null);

const [loading, setLoading] =
useState(true);

useEffect(() => {

const fetchGap =
async () => {

try {

const data =
await getSkillGap(
roadmapId
);

setResult(
data.data
);

} catch (error) {

console.error(error);

} finally {

setLoading(false);

}

};

fetchGap();

}, [roadmapId]);

if (loading) {

return (
<DashboardLayout>
<div className="p-10">
Loading Skill Gap...
</div>
</DashboardLayout>
);

}

return (
<DashboardLayout>

<div className="p-8 max-w-7xl mx-auto">

<h1 className="text-5xl font-black mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
  Skill Gap Analysis
</h1>

<div className="grid lg:grid-cols-3 gap-8">

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
<h2 className="text-xl font-bold mb-6">
Match Score
</h2>

<div className="w-48 mx-auto">

<CircularProgressbar
  value={result.completion}
  text={`${result.completion}%`}
  styles={{
    path: {
      stroke: "#22d3ee",
    },
    text: {
      fill: "#22d3ee",
      fontSize: "16px",
      fontWeight: "bold",
    },
    trail: {
      stroke: "#1e293b",
    },
  }}
/>

</div>

</div>

<div
  className="
  bg-white/5
  backdrop-blur-xl
  border
  border-green-500/20
  rounded-3xl
  p-8
  "
>
<h2 className="text-xl font-bold mb-4 text-green-400">
Matched Skills

</h2>

<div className="space-y-3">

{result.matchedSkills.map(
(skill) => (

<div
key={skill}
className="
bg-green-500/10
border
border-green-500/20
text-green-300
px-4
py-3
rounded-xl
"
>

✓ {skill}

</div>

)
)}

</div>

</div>

<div
  className="
  bg-white/5
  backdrop-blur-xl
  border
  border-red-500/20
  rounded-3xl
  p-8
  "
>
<h2 className="text-xl font-bold mb-4 text-red-400">

Missing Skills

</h2>

<div className="space-y-3">

{result.missingSkills.map(
(skill) => (

<div
key={skill}
className="
bg-red-500/10
border
border-red-500/20
text-red-300
px-4
py-3
rounded-xl
"
>

✗ {skill}

</div>

)
)}

</div>

</div>

</div>

<div
  className="
  bg-white/5
  backdrop-blur-xl
  border
  border-white/10
  rounded-3xl
  p-8
  mt-8
  "
>
<h2 className="text-2xl font-bold mb-4">
Recommendations
</h2>

<p className="text-lg text-slate-300">

Focus on learning:

</p>

<ul className="list-disc pl-6 mt-4 text-slate-300">

{result.missingSkills.map(
(skill) => (

<li key={skill}>
{skill}
</li>

)
)}

</ul>

</div>

</div>

</DashboardLayout>
);

};

export default SkillGap;