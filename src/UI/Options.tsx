import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import useStore from "../state/store";

const ButtonText = styled(Typography)({
  backgroundColor: "#5e5f61",
  borderRadius: "50%",
  width: "20px",
  height: "20px",
  lineHeight: 0.8,
  fontWeight: 800,
  WebkitTextStroke: "2px black",
  border: "6px solid #fff",
});

const Options = () => {
  const setShowPinDialog = useStore((state) => state.setShowPinDialog);

  return (
    <div id="options" className="panel">
      <Typography variant="h6" color="white" sx={{ textAlign: "center" }}>
        Info
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          color: "orange",
          backgroundColor: "rgba(30, 30, 30, 0.25)",
          pt: 1,
          pb: 1,
          borderRadius: "30px",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        <ButtonText
          variant="h5"
          sx={{ padding: 2 }}
          onClick={() => setShowPinDialog(0)}
        >
          1
        </ButtonText>
        <ButtonText
          variant="h5"
          sx={{ mr: 10, ml: 10, padding: 2 }}
          onClick={() => setShowPinDialog(1)}
        >
          2
        </ButtonText>
        <ButtonText
          variant="h5"
          sx={{ padding: 2 }}
          onClick={() => setShowPinDialog(2)}
        >
          3
        </ButtonText>
      </Box>
    </div>
  );
};

export default Options;
