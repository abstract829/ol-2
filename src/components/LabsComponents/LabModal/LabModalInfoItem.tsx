const LabModalInfoItem = ({ text, desc }) => {
  return (
    <span style={{ color: "#999999", fontSize: 14 }}>
      {text}
      <span style={{ color: "white", marginLeft: 10 }}>{desc}</span>
    </span>
  );
};

export default LabModalInfoItem;
