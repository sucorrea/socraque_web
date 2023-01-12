import React from "react";
import ReactPlayer from "react-player";
import { formatToDateTime } from "brazilian-values";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { Close } from "@mui/icons-material";
import { Theme } from "@mui/material/styles";

import { VideoTypes } from "../../../Types";

type VideoModalProps = {
  open: boolean;
  onClose: () => void;
  item: VideoTypes;
};

export const VideoModal = ({ onClose, open, item }: VideoModalProps) => (
  <Dialog open={open} onClose={onClose} maxWidth="sm">
    <DialogTitle>
      <Box display="flex" justifyContent="flex-end">
        <IconButton
          size="medium"
          disableRipple
          onClick={onClose}
          sx={{ padding: 0 }}
        >
          <Close fontSize="small" />
        </IconButton>
      </Box>
      <Typography
        variant="h6"
        component="h2"
        sx={{ color: (theme: Theme) => theme.palette.primary.main }}
      >
        Olha essa jogada que gravamos pra você...
      </Typography>
      <Divider />
      <Typography
        sx={{
          mt: 2,
          textAlign: "center",
          olor: (theme: Theme) => theme.palette.secondary.main,
        }}
      >
        {`Pantai - ${item.label} - ${formatToDateTime(new Date(item.date))}`}
      </Typography>
    </DialogTitle>
    <DialogContent>
      <ReactPlayer
        style={{ borderRadius: "18px" }}
        url={item.srcSigned}
        controls
        playing
        width="100%"
        height="100%"
      />
    </DialogContent>
  </Dialog>
);

export default VideoModal;
