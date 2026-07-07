import { useState , useEffect} from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { uploadResume, getResume, deleteResume } from "../../features/resume/resumeApi";

const Resume = () => {
const [file, setFile] = useState(null);
const [loading, setLoading] = useState(false);
const [resumeUrl, setResumeUrl] =
  useState("");
const [fetching, setFetching] = useState(true);

  useEffect(() => {
  fetchResume();
}, []);

const fetchResume = async () => {
  try {
    const res = await getResume();
    setResumeUrl(res.resume || "");
  } catch (err) {
    console.log(err);
  } finally {
    setFetching(false);
  }
};
  
const handleUpload = async () => {
if (!file) {
alert("Select a PDF Resume");
return;
}


try {
  setLoading(true);

  const data = await uploadResume(file);
setResumeUrl(
  data.resume
);
  console.log(data);

  alert("Resume Uploaded Successfully");
} catch (error) {
  console.log(error);

  alert("Resume Upload Failed");
} finally {
  setLoading(false);
}


};
const handleDelete = async () => {
  try {
    await deleteResume();

    setResumeUrl("");
    setFile(null);

    alert("Resume Deleted");
  } catch (error) {
    console.log(error);
    alert("Delete Failed");
  }
};
if (fetching) {
  return (
    <DashboardLayout>
      <div className="p-8 text-white">
        Loading Resume...
      </div>
    </DashboardLayout>
  );
}
return ( <DashboardLayout> <div className="max-w-6xl mx-auto p-8">

    <div className="mb-10">

      <h1 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        Resume Center
      </h1>

      <p className="text-slate-400 mt-3 text-lg">
        Upload and optimize your resume for maximum career impact.
      </p>

    </div>

    <div className="grid lg:grid-cols-3 gap-8">

      <div className="lg:col-span-2">

        <div
          className="
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          p-10
          "
        >

          <h2 className="text-2xl font-bold text-cyan-300 mb-6">
            Upload Resume
          </h2>

          <label
            className="
            flex
            flex-col
            items-center
            justify-center
            h-72
            border-2
            border-dashed
            border-cyan-500/30
            rounded-3xl
            cursor-pointer
            hover:border-cyan-400
            transition-all
            "
          >

            <div className="text-center">

              <div className="text-6xl mb-4">
                📄
              </div>

              <p className="text-white text-lg font-semibold">
                Drag & Drop Resume
              </p>

              <p className="text-slate-400 mt-2">
                PDF format only
              </p>

              {file && (
                <p className="mt-4 text-cyan-300">
                  {file.name}
                </p>
              )}

            </div>

            <input
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={(e) =>
                setFile(
                  e.target.files[0]
                )
              }
            />

          </label>

          <button
            onClick={handleUpload}
            disabled={loading}
            className="
            mt-6
            w-full
            py-4
            rounded-2xl
            font-bold
            bg-gradient-to-r
            from-cyan-500
            to-purple-500
            hover:scale-[1.02]
            transition-all
            "
          >
            {loading
              ? "Uploading..."
              : "Upload Resume"}
          </button>

        </div>

      </div>

      <div className="space-y-6">

        <div
          className="
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          p-6
          "
        >

          <h3 className="text-xl font-bold text-cyan-300 mb-4">
            Resume Status
          </h3>

          <p className="text-slate-300">
  {resumeUrl
    ? "Resume Uploaded"
    : "No Resume Uploaded"}
</p>

{resumeUrl && (
  <div className="mt-4 space-y-3">
    <a
      href={resumeUrl}
      target="_blank"
      rel="noreferrer"
      className="block text-cyan-400 hover:underline"
    >
      View Resume
    </a>

    <button
      onClick={handleDelete}
      className="px-4 py-2 rounded-lg bg-red-500 text-white"
    >
      Delete Resume
    </button>
  </div>
)}

        </div>

        <div
          className="
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          p-6
          "
        >

          <h3 className="text-xl font-bold text-purple-300 mb-4">
            ATS Tips
          </h3>

          <ul className="space-y-3 text-slate-300 text-sm">

            <li>
              ✓ Use clear section headings
            </li>

            <li>
              ✓ Add relevant keywords
            </li>

            <li>
              ✓ Quantify achievements
            </li>

            <li>
              ✓ Keep formatting clean
            </li>

          </ul>

        </div>

        <div
          className="
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          p-6
          "
        >

          <h3 className="text-xl font-bold text-green-300 mb-4">
            Future Analytics
          </h3>

          <p className="text-slate-400">
            ATS Score, Resume Analysis and AI Recommendations will appear here.
          </p>

        </div>

      </div>

    </div>

  </div>
</DashboardLayout>


);
};

export default Resume;
