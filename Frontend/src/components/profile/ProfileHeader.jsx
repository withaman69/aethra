const ProfileHeader = ({ profile }) => {
  console.log("PROFILE DATA:", profile);

  return (
    <div className="border rounded-lg p-6 mb-6">

     

      <img
        src={
          profile?.avatar ||
          "https://via.placeholder.com/120"
        }
        alt="avatar"
        width="120"
      />

      <h2>{profile?.name}</h2>

      <p>{profile?.occupation}</p>

      <p>{profile?.careerLevel}</p>

    </div>
  );
};

export default ProfileHeader;