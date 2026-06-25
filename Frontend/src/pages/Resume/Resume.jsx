import { useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import {
  uploadResume,
} from "../../features/resume/resumeApi";

const Resume = () => {
  const [file, setFile] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const handleUpload = async () => {
    if (!file) {
      alert("Select a PDF");
      return;
    }

    try {
      setLoading(true);

      const data =
        await uploadResume(file);

      alert(
        "Resume Uploaded Successfully"
      );

      console.log(data);

    } catch (error) {
      console.log(error);

      alert(
        "Resume Upload Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="p-6">

        <h1 className="text-3xl font-bold mb-6">
          Resume Upload
        </h1>

        <input
          type="file"
          accept=".pdf"
          onChange={(e) =>
            setFile(
              e.target.files[0]
            )
          }
        />

        <button
          onClick={handleUpload}
          disabled={loading}
        >
          {loading
            ? "Uploading..."
            : "Upload Resume"}
        </button>

      </div>
      StatCard.jsx
    </DashboardLayout>
  );
};

export default Resume;