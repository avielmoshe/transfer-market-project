import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function BigLoader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress size={80} />
    </Box>
  );
}

export default BigLoader;
if (isLoading) return <BigLoader />;
if (isLoading) return <SmallLoader />;
