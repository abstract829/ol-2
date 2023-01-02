import MyTag from "components/MyTag";

const ProfileItem = ({ tag, text }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1em",
        marginBottom: "1em",
      }}
    >
      <MyTag sx={{ fontSize: 14 }}>{tag}</MyTag>
      <span style={{ color: "white" }}>{text}</span>
    </div>
  );
};

export default ProfileItem;
