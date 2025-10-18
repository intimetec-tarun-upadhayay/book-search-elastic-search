import React from "react"
import { CircularProgress, Box } from "@mui/material"

const Loader = () => (
  <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
    <CircularProgress size={48} />
  </Box>
)

export default Loader
