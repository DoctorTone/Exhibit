import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import useStore from "../state/store";

const ButtonText = styled(Typography)({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#5e5f61",
  borderRadius: "50%",
  fontWeight: 800,
  WebkitTextStroke: "2px black",
  border: "6px solid #487fd9",
});

const Options = () => {
  const setShowPinDialog = useStore((state) => state.setShowPinDialog);

  return (
    <div id="options" className="panel">
      <Typography variant="h6" color="white" sx={{ textAlign: "center" }}>
        Select for Info
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
          className="hover optionsSize"
          sx={{ padding: 2 }}
          onClick={() => setShowPinDialog(0)}
        >
          1
        </ButtonText>
        <ButtonText
          className="hover optionsSize"
          variant="h5"
          sx={{ mr: 10, ml: 10, padding: 2 }}
          onClick={() => setShowPinDialog(1)}
        >
          2
        </ButtonText>
        <ButtonText
          className="hover optionsSize"
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
