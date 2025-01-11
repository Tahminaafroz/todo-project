import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useRef } from "react";
//import { Typography } from "@mui/material";

const style = {
  // position: "absolute",
  // top: "50%",
  // left: "50%",
  // transform: "translate(-50%, -50%)",
  // width: 400,
  // bgcolor: "background.paper",
  // border: "2px solid #000",
  //  boxShadow: 24,
  // p: 4,
};

const ModalComp = ({ children, showModal, setShowModal }) => {
  const modalRef = useRef();

  const handleClose = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  return (
    <div>
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {children}

          <div className="children">
            {/* <Typography id="modal-modal-title" variant="h6" component="h2">
              Add a New Todo
            </Typography> */}
          </div>
        </Box>
      </Modal>
    </div>
  );
};
export default ModalComp;
//<Typography id="modal-modal-description" sx={{ mt: 2 }}>
