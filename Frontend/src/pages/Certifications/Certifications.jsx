import {
  useEffect,
  useState,
} from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import {
  getCertifications,
  createCertification,
  deleteCertification,
} from "../../features/certifications/certificationApi";

const Certifications = () => {
  const [
    certifications,
    setCertifications,
  ] = useState([]);

  const [formData, setFormData] =
    useState({
      name: "",
      organization: "",
      issueDate: "",
      expiryDate: "",
      credentialId: "",
      credentialUrl: "",
    });

  const fetchCertifications =
    async () => {
      try {
        const data =
          await getCertifications();

        setCertifications(
          data.data
        );
      } catch (error) {
        console.error(error);
      }
    };

  useEffect(() => {
    fetchCertifications();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      try {
        await createCertification(
          formData
        );

        alert(
          "Certification Added Successfully"
        );

        setFormData({
          name: "",
          organization: "",
          issueDate: "",
          expiryDate: "",
          credentialId: "",
          credentialUrl: "",
        });

        fetchCertifications();
      } catch (error) {
        console.error(error);
      }
    };

  const handleDelete =
    async (id) => {
      try {
        await deleteCertification(
          id
        );

        fetchCertifications();
      } catch (error) {
        console.error(error);
      }
    };

  return (
     <DashboardLayout>
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Certifications
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 mb-8"
      >
        <input
          type="text"
          name="name"
          placeholder="Certification Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="organization"
          placeholder="Organization"
          value={
            formData.organization
          }
          onChange={handleChange}
        />

        <input
          type="date"
          name="issueDate"
          value={
            formData.issueDate
          }
          onChange={handleChange}
        />

        <input
          type="date"
          name="expiryDate"
          value={
            formData.expiryDate
          }
          onChange={handleChange}
        />

        <input
          type="text"
          name="credentialId"
          placeholder="Credential ID"
          value={
            formData.credentialId
          }
          onChange={handleChange}
        />

        <input
          type="text"
          name="credentialUrl"
          placeholder="Credential URL"
          value={
            formData.credentialUrl
          }
          onChange={handleChange}
        />

        <button type="submit">
          Add Certification
        </button>
      </form>

      <div>
        {certifications.map(
          (cert) => (
            <div
              key={cert._id}
              className="border p-4 mb-4"
            >
              <h3>
                {cert.name}
              </h3>

              <p>
                {
                  cert.organization
                }
              </p>

              <button
                onClick={() =>
                  handleDelete(
                    cert._id
                  )
                }
              >
                Delete
              </button>
            </div>
          )
        )}
      </div>
    </div>
    </DashboardLayout>
  );
};

export default Certifications;