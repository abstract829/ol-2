import { useRouter } from "next/router";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { Box } from "@mui/system";
import NextBtn from "components/Buttons/NextBtn";

interface props {
  title?: string;
  subtitle?: string;
  text?: string;
  variant?: "error" | "success";
  buttonText?: string;
  buttonHref?: string;
}

const ResultScreen = ({
  title,
  subtitle,
  text,
  variant,
  buttonText,
  buttonHref,
}: props) => {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "white",
        marginTop: "2.5em",
      }}
    >
      {variant === "error" ? (
        <AiOutlineCloseCircle
          style={{ fontSize: 120, color: "#F6104E", marginBottom: "10px" }}
        />
      ) : (
        <AiOutlineCheckCircle
          style={{ fontSize: 120, color: "#5FCF5D", marginBottom: "10px" }}
        />
      )}
      {title && <span style={{ fontSize: 64 }}>{title}</span>}
      {subtitle && <h3>Page not found</h3>}
      {text && <p>{text}</p>}

      <NextBtn
        text={buttonText}
        onClick={() => router.push(buttonHref)}
        style={{ marginTop: "2em" }}
      />
    </Box>
  );
};

export default ResultScreen;
