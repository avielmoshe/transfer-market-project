import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function SmallLoader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size={30} />
    </Box>
  );
}

export default SmallLoader;
