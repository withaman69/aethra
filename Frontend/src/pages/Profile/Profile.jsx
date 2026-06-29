import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DashboardLayout from "../../components/layout/DashboardLayout";
import ProfileForm from "../../components/forms/ProfileForm";
import AvatarUpload from "../../components/profile/AvatarUpload";

import {
  getProfile,
  updateProfile,
} from "../../features/profile/profileApi";

import {
  setProfile,
  setLoading,
  setError,
} from "../../features/profile/profileSlice";
import ProfileHeader from "../../components/profile/ProfileHeader";
const Profile = () => {
  const dispatch = useDispatch();

  const {
    profile,
    loading,
    error,
  } = useSelector(
    (state) => state.profile
  );
  const [showForm, setShowForm] =
  useState(false);
const profileFields = [
  profile?.avatar,
  profile?.name,
  profile?.email,
  profile?.bio,
  profile?.occupation,
  profile?.skills?.length > 0,
  profile?.goals?.length > 0,
  profile?.resume,
];

const completedFields =
  profileFields.filter(Boolean).length;

const profileCompletion =
  Math.round(
    (completedFields /
      profileFields.length) *
      100
  );
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        dispatch(setLoading(true));

        const data =
          await getProfile();

        dispatch(
          setProfile(data.data)
        );
      } catch (err) {
        dispatch(
          setError(
            err?.response?.data
              ?.message ||
              "Failed to load profile"
          )
        );
      } finally {
        dispatch(
          setLoading(false)
        );
      }
    };

    fetchProfile();
  }, [dispatch]);

  const handleUpdateProfile =
    async (formData) => {
      try {
        dispatch(setLoading(true));

        const data =
          await updateProfile(
            formData
          );

        dispatch(
          setProfile(data.data)
        );

        alert(
          "Profile updated successfully"
        );
      } catch (err) {
        dispatch(
          setError(
            err?.response?.data
              ?.message ||
              "Profile update failed"
          )
        );
      } finally {
        dispatch(
          setLoading(false)
        );
      }
    };

return ( <DashboardLayout> <div className="max-w-7xl mx-auto p-8">


  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">

   <div className="h-24 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border-b border-white/10">
</div>

    <div className="px-8 pb-8">

      <div className="-mt-20 flex flex-col md:flex-row md:items-end gap-6">

        <img
          src={
            profile?.avatar ||
            "https://ui-avatars.com/api/?name=Aethra"
          }
          alt="avatar"
          className="
          w-40
          h-40
          rounded-full
          border-4
          border-cyan-400
          object-cover
          bg-black
          shadow-[0_0_30px_rgba(34,211,238,0.4)]
          "
        />

        <div>

          <h1 className="text-4xl font-black text-white">
            {profile?.name}
          </h1>

          <p className="text-cyan-300 mt-2 text-lg">
            {profile?.occupation || "Career Explorer"}
          </p>

          <p className="text-slate-400 mt-1">
            {profile?.email}
          </p>

        </div>

      </div>
      <div className="grid md:grid-cols-4 gap-6 mt-10">

  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 rounded-3xl p-6 backdrop-blur-xl">
    <p className="text-slate-400">
      Profile Completion
    </p>

    <h2 className="text-5xl font-black text-cyan-400 mt-3">
      {profileCompletion}%
    </h2>
  </div>

  <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6 backdrop-blur-xl">
    <p className="text-slate-400">
      Skills
    </p>

    <h2 className="text-5xl font-black text-cyan-400 mt-3">
      {profile?.skills?.length || 0}
    </h2>
  </div>

  <div className="bg-white/5 border border-green-500/20 rounded-3xl p-6 backdrop-blur-xl">
    <p className="text-slate-400">
      Goals
    </p>

    <h2 className="text-5xl font-black text-green-400 mt-3">
      {profile?.goals?.length || 0}
    </h2>
  </div>

  <div className="bg-white/5 border border-purple-500/20 rounded-3xl p-6 backdrop-blur-xl">
    <p className="text-slate-400">
      Career Level
    </p>

    <h2 className="text-xl font-bold text-purple-400 mt-3 capitalize">
      {profile?.careerLevel || "Student"}
    </h2>
  </div>

</div>

      <div className="grid lg:grid-cols-2 gap-8 mt-10">

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

          <h2 className="text-2xl font-bold text-cyan-300 mb-4">
            About Me
          </h2>

          <p className="text-slate-300 leading-relaxed">
            {profile?.bio ||
              "No bio added yet."}
          </p>

        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

          <h2 className="text-2xl font-bold text-purple-300 mb-4">
            Career Information
          </h2>

          <div className="space-y-3">

            <div>
              <span className="text-slate-400">
                Career Level:
              </span>

              <p className="text-white font-semibold capitalize">
                {profile?.careerLevel || "Student"}
              </p>

            </div>

            <div>
              <span className="text-slate-400">
                Occupation:
              </span>

              <p className="text-white font-semibold">
                {profile?.occupation ||
                  "Not Added"}
              </p>

            </div>

          </div>

        </div>

      </div>

      <div className="mt-8 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

        <h2 className="text-2xl font-bold text-cyan-300 mb-5">
          Skills
        </h2>

        <div className="flex flex-wrap gap-3">

          {profile?.skills?.length > 0 ? (
            profile.skills.map(
              (skill, index) => (
                <span
                  key={index}
                  className="
                  px-4
                  py-2
                  rounded-full
                  bg-cyan-500/20
                  border
                  border-cyan-500/30
                  text-cyan-300
                  "
                >
                  {skill}
                </span>
              )
            )
          ) : (
            <p className="text-slate-400">
              No skills added
            </p>
          )}

        </div>

      </div>

      <div className="mt-8 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

        <h2 className="text-2xl font-bold text-green-300 mb-5">
          Career Goals
        </h2>

        <div className="flex flex-wrap gap-3">

          {profile?.goals?.length > 0 ? (
            profile.goals.map(
              (goal, index) => (
                <span
                  key={index}
                  className="
                  px-4
                  py-2
                  rounded-full
                  bg-green-500/20
                  border
                  border-green-500/30
                  text-green-300
                  "
                >
                  {goal}
                </span>
              )
            )
          ) : (
            <p className="text-slate-400">
              No goals added
            </p>
          )}

        </div>

      </div>
     <div className="mt-8 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

  <h2 className="text-2xl font-bold text-orange-300 mb-5">
    Resume
  </h2>

  {profile?.resume ? (
    <div className="flex items-center justify-between">

      <div>

        <p className="text-green-400 font-semibold">
          Resume Uploaded ✓
        </p>

        <p className="text-slate-400 text-sm mt-1">
          Your resume is stored securely and ready for ATS analysis.
        </p>

      </div>

      <a
        href={profile.resume}
        target="_blank"
        rel="noreferrer"
        className="
          px-5
          py-3
          rounded-2xl
          bg-cyan-500/20
          border
          border-cyan-500/30
          text-cyan-300
          hover:bg-cyan-500/30
          transition-all
        "
      >
        View Resume
      </a>

    </div>
  ) : (

    <div>

      <p className="text-slate-400">
        No Resume Uploaded
      </p>

      <p className="text-slate-500 text-sm mt-2">
        Upload your resume to unlock ATS Analysis.
      </p>

    </div>

  )}

</div>
<div className="mt-8 bg-white/5 border border-cyan-500/20 rounded-3xl p-6 backdrop-blur-xl">

  <h2 className="text-2xl font-bold text-cyan-300 mb-5">
    ATS Score
  </h2>

  <div className="flex items-center gap-6">

    <div
      className="
      w-32
      h-32
      rounded-full
      border-8
      border-cyan-400
      flex
      items-center
      justify-center
      "
    >
      <span className="text-4xl font-black text-cyan-400">
        78
      </span>
    </div>

    <div>

      <p className="text-green-400 text-lg font-semibold">
        Good Resume
      </p>

      <p className="text-slate-400 mt-2">
        Your resume is ATS friendly but can still be improved.
      </p>

    </div>

  </div>

</div>
<div className="mt-8 bg-white/5 border border-orange-500/20 rounded-3xl p-6 backdrop-blur-xl">

  <h2 className="text-2xl font-bold text-orange-300 mb-5">
    Missing Skills
  </h2>

  <div className="flex flex-wrap gap-3">

    <span className="px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300">
      Docker
    </span>

    <span className="px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300">
      AWS
    </span>

    <span className="px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300">
      CI/CD
    </span>

    <span className="px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300">
      Kubernetes
    </span>

  </div>

</div>
<div
  className="
  mt-8
  bg-gradient-to-r
  from-cyan-500/10
  to-purple-500/10
  border
  border-cyan-500/20
  rounded-3xl
  p-6
  backdrop-blur-xl
"
>

  <h2 className="text-2xl font-bold text-cyan-300">
    Aethra AI Suggestions
  </h2>

  <ul className="mt-5 space-y-3 text-slate-300">

    <li>
      ✅ Add more quantified achievements
    </li>

    <li>
      ✅ Mention React, Node.js and MongoDB more frequently
    </li>

    <li>
      ✅ Include cloud technologies
    </li>

    <li>
      ✅ Improve professional summary section
    </li>

    <li>
      ✅ Add measurable project impact
    </li>

  </ul>

</div>
<div
  className="
  mt-8
  bg-gradient-to-r
  from-cyan-500/10
  to-purple-500/10
  border
  border-cyan-500/20
  rounded-3xl
  p-6
  backdrop-blur-xl
"
>

  <h2 className="text-2xl font-bold text-cyan-300">
    Aethra AI Analysis
  </h2>

  <p className="text-slate-300 mt-4 leading-relaxed">

    {profileCompletion < 50 &&
      "Your profile needs more information. Add skills, goals and resume to improve your career readiness."
    }

    {profileCompletion >= 50 &&
      profileCompletion < 80 &&
      "Your profile is progressing well. Adding certifications and projects can significantly improve your ATS score."
    }

    {profileCompletion >= 80 &&
      "Excellent profile. You are ready to start optimizing for job applications and interview preparation."
    }

  </p>

</div>

      <div className="mt-10">

  <button
    onClick={() =>
      setShowForm(!showForm)
    }
    className="
      px-8
      py-4
      rounded-2xl
      bg-gradient-to-r
      from-cyan-500
      via-blue-500
      to-purple-500
      text-white
      font-bold
      hover:scale-105
      transition-all
      duration-300
      shadow-[0_0_30px_rgba(34,211,238,0.3)]
    "
  >
    {showForm
      ? "Close Profile Editor"
      : "✨ Improve My Profile"}
  </button>

</div>

{showForm && (

  <div className="mt-8">

    <ProfileForm
      profile={profile}
      onSubmit={handleUpdateProfile}
    />

  </div>

)}

    </div>

  </div>

</div>


  </DashboardLayout>
);

};

export default Profile;