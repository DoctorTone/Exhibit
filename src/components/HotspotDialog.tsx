import { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import useStore from "../state/store";

interface DialogProps {
  showDialog: boolean;
}

const HotspotDialog = ({ showDialog }: DialogProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const setShowInfoDialog = useStore((state) => state.setShowInfoDialog);

  const handleClose = () => {
    setDialogOpen(false);
    setShowInfoDialog(false);
  };

  useEffect(() => {
    setDialogOpen(showDialog);
  }, [showDialog]);

  return (
    <Dialog
      open={dialogOpen}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth={true}
      slotProps={{
        paper: {
          sx: {
            opacity: 0.6,
            backgroundColor: "#444444",
            color: "orange",
            borderRadius: "30px",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          },
        },
      }}
    >
      <DialogTitle variant="h4" sx={{ textAlign: "center" }}>
        Wings
      </DialogTitle>

      <DialogContent>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Wings are made of skin.
        </Typography>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button variant="contained" onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default HotspotDialog;
