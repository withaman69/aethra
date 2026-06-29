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

<h1 className="text-4xl font-bold mb-8">
Skill Gap Analysis
</h1>

<div className="grid lg:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl shadow-lg p-8">

<h2 className="text-xl font-bold mb-6">
Match Score
</h2>

<div className="w-48 mx-auto">

<CircularProgressbar
value={
result.completion
}
text={`${result.completion}%`}
/>

</div>

</div>

<div className="bg-white rounded-2xl shadow-lg p-8">

<h2 className="text-xl font-bold mb-4 text-green-600">

Matched Skills

</h2>

<div className="space-y-3">

{result.matchedSkills.map(
(skill) => (

<div
key={skill}
className="bg-green-100 text-green-700 px-4 py-2 rounded-lg"
>

✓ {skill}

</div>

)
)}

</div>

</div>

<div className="bg-white rounded-2xl shadow-lg p-8">

<h2 className="text-xl font-bold mb-4 text-red-600">

Missing Skills

</h2>

<div className="space-y-3">

{result.missingSkills.map(
(skill) => (

<div
key={skill}
className="bg-red-100 text-red-700 px-4 py-2 rounded-lg"
>

✗ {skill}

</div>

)
)}

</div>

</div>

</div>

<div className="bg-white rounded-2xl shadow-lg p-8 mt-8">

<h2 className="text-2xl font-bold mb-4">
Recommendations
</h2>

<p className="text-lg">

Focus on learning:

</p>

<ul className="list-disc pl-6 mt-4">

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