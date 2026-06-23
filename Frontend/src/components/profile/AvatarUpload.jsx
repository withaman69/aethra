import { useState } from "react";
import { uploadAvatar } from "../../features/upload/uploadApi";

const AvatarUpload = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      alert("Select an image");
      return;
    }

    try {
      setLoading(true);

      const data = await uploadAvatar(file);

      alert("Avatar uploaded successfully");

      console.log(data);

    } catch (error) {
      console.error(error);

      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">

      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setFile(e.target.files[0])
        }
      />

      <button
        onClick={handleUpload}
        disabled={loading}
      >
        {loading
          ? "Uploading..."
          : "Upload Avatar"}
      </button>

    </div>
  );
};

export default AvatarUpload;