import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const ButtonText = styled(Typography)({
  backgroundColor: "#5e5f61",
  borderRadius: "50%",
  width: "25px",
  height: "25px",
  lineHeight: 1,
  fontWeight: 800,
  WebkitTextStroke: "2px black",
});

const Options = () => {
  return (
    <div id="options" className="panel">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          color: "orange",
        }}
      >
        <ButtonText
          variant="h5"
          sx={{ padding: 2, border: "6px solid orange" }}
        >
          1
        </ButtonText>
        <ButtonText
          variant="h5"
          sx={{ mr: 10, ml: 10, padding: 2, border: "6px solid blue" }}
        >
          2
        </ButtonText>
        <ButtonText variant="h5" sx={{ padding: 2, border: "6px solid red" }}>
          3
        </ButtonText>
      </Box>
    </div>
  );
};

export default Options;
