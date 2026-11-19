import { Typography } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Typography
        component="p"
        variant="p"
        color="primary"
        align="center"
        sx={{
          backgroundColor: "#f7f7f7",
          padding: "10px",
          mt: 10,
        }}
      >
        مینی‌پروژه وبلاگ با GraphQL
      </Typography>
    </footer>
  );
}

export default Footer;
