import IconButton from "@mui/material/IconButton";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import InfoDialog from "../dialogs/InfoDialog";
import useStore from "../state/store";

const Info = () => {
  const setShowInfoDialog = useStore((state) => state.setShowInfoDialog);

  return (
    <>
      <div id="info" className="panel">
        <IconButton onClick={() => setShowInfoDialog(true)} color="warning">
          <InfoOutlinedIcon fontSize={"large"} />
        </IconButton>
      </div>
      <InfoDialog />
    </>
  );
};

export default Info;
