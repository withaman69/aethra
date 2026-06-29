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

 return ( <DashboardLayout> <div className="max-w-7xl mx-auto p-8">


  <div className="mb-10">

    <h1 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
      Certifications
    </h1>

    <p className="text-slate-400 mt-3">
      Showcase verified achievements and credentials.
    </p>

  </div>

  <div className="grid md:grid-cols-4 gap-4 mb-8">

    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
      <p className="text-slate-400">Certificates</p>
      <h2 className="text-3xl font-bold text-cyan-300">
        {certifications.length}
      </h2>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
      <p className="text-slate-400">Organizations</p>
      <h2 className="text-3xl font-bold text-purple-300">
        {
          [...new Set(
            certifications.map(
              (c) => c.organization
            )
          )].length
        }
      </h2>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
      <p className="text-slate-400">Verified</p>
      <h2 className="text-3xl font-bold text-green-300">
        {certifications.length}
      </h2>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
      <p className="text-slate-400">Career Boost</p>
      <h2 className="text-3xl font-bold text-orange-300">
        +100
      </h2>
    </div>

  </div>

  <div className="grid lg:grid-cols-3 gap-8">

    <div className="lg:col-span-1">

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

        <h2 className="text-2xl font-bold text-cyan-300 mb-6">
          Add Certification
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            name="name"
            placeholder="Certification Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-3 text-white placeholder:text-slate-500"
          />

          <input
            type="text"
            name="organization"
            placeholder="Organization"
            value={formData.organization}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-3 text-white placeholder:text-slate-500"
          />

          <input
            type="date"
            name="issueDate"
            value={formData.issueDate}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-3 text-white"
          />

          <input
            type="date"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-3 text-white"
          />

          <input
            type="text"
            name="credentialId"
            placeholder="Credential ID"
            value={formData.credentialId}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-3 text-white placeholder:text-slate-500"
          />

          <input
            type="text"
            name="credentialUrl"
            placeholder="Credential URL"
            value={formData.credentialUrl}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-3 text-white placeholder:text-slate-500"
          />

          <button
            type="submit"
            className="
            w-full
            py-3
            rounded-2xl
            font-bold
            bg-gradient-to-r
            from-cyan-500
            to-purple-500
            hover:scale-[1.02]
            transition-all
            "
          >
            Add Certification
          </button>

        </form>

      </div>

    </div>

    <div className="lg:col-span-2">

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

        <h2 className="text-2xl font-bold text-purple-300 mb-6">
          Certification Vault
        </h2>

        <div className="space-y-5">

          {certifications.length === 0 ? (
            <p className="text-slate-400">
              No certifications added yet.
            </p>
          ) : (
            certifications.map((cert) => (
              <div
                key={cert._id}
                className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-6
                hover:border-cyan-400/60
                hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
                transition-all
                "
              >

                <div className="flex justify-between items-start">

                  <div>

                    <h3 className="text-2xl font-bold text-white">
                      {cert.name}
                    </h3>

                    <p className="text-cyan-300 mt-2">
                      {cert.organization}
                    </p>

                    <div className="flex gap-3 mt-4 flex-wrap">

                      <span
                        className="
                        px-3
                        py-1
                        rounded-full
                        bg-green-500/20
                        border
                        border-green-500/30
                        text-green-300
                        text-sm
                        "
                      >
                        Verified
                      </span>

                      {cert.issueDate && (
                        <span
                          className="
                          px-3
                          py-1
                          rounded-full
                          bg-purple-500/20
                          border
                          border-purple-500/30
                          text-purple-300
                          text-sm
                          "
                        >
                          Issued: {cert.issueDate?.slice(0, 10)}
                        </span>
                      )}

                    </div>

                    {cert.credentialId && (
                      <p className="text-slate-400 mt-4">
                        ID: {cert.credentialId}
                      </p>
                    )}

                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="
                        inline-block
                        mt-4
                        px-4
                        py-2
                        rounded-xl
                        bg-cyan-500/20
                        border
                        border-cyan-500/30
                        text-cyan-300
                        "
                      >
                        View Credential
                      </a>
                    )}

                  </div>

                  <button
                    onClick={() =>
                      handleDelete(cert._id)
                    }
                    className="
                    px-4
                    py-2
                    rounded-xl
                    bg-red-500/20
                    border
                    border-red-500/30
                    text-red-400
                    "
                  >
                    Delete
                  </button>

                </div>

              </div>
            ))
          )}

        </div>

      </div>

    </div>

  </div>

</div>


  </DashboardLayout>
);

};

export default Certifications;