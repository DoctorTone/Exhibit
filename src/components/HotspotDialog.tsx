import { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { DIALOG_INFO } from "../state/Config";
import useStore from "../state/store";

interface DialogProps {
  showDialog: number;
}

const HotspotDialog = ({ showDialog }: DialogProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const setShowPinDialog = useStore((state) => state.setShowPinDialog);

  const handleClose = () => {
    setDialogOpen(false);
    setShowPinDialog(-1);
  };

  useEffect(() => {
    setDialogOpen(showDialog > -1);
  }, [showDialog]);

  return (
    <Dialog
      open={dialogOpen}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth={true}
      sx={{ backdropFilter: "blur(10px)" }}
      slotProps={{
        paper: {
          sx: {
            opacity: 0.65,
            backgroundColor: "#444444",
            color: "orange",
            borderRadius: "30px",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          },
        },
      }}
    >
      <DialogTitle variant="h4" sx={{ textAlign: "center" }}>
        {showDialog > -1 && DIALOG_INFO[showDialog].title}
      </DialogTitle>

      <DialogContent dividers>
        <Box>
          {showDialog > -1 && (
            <img src={DIALOG_INFO[showDialog].image} className="w-100" />
          )}
        </Box>
        <Typography variant="h6" sx={{ mb: 2 }}>
          {showDialog > -1 && DIALOG_INFO[showDialog].text}
        </Typography>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button variant="outlined" color="warning" onClick={handleClose}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default HotspotDialog;
