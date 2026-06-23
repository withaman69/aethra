import { useEffect } from "react";
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

const Profile = () => {
  const dispatch = useDispatch();

  const {
    profile,
    loading,
    error,
  } = useSelector(
    (state) => state.profile
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

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto p-6">

        <h1 className="text-4xl font-bold mb-6">
          My Profile
        </h1>

        {/* Avatar Upload */}
        <div className="mb-8">
          <AvatarUpload />
        </div>

        {/* Profile Form */}
        <ProfileForm
          profile={profile}
          onSubmit={
            handleUpdateProfile
          }
          loading={loading}
        />

        {error && (
          <p className="text-red-500 mt-4">
            {error}
          </p>
        )}

      </div>
    </DashboardLayout>
  );
};

export default Profile;