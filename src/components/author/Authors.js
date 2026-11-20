import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";

import { useQuery } from "@apollo/client/react";

import { GET_AUTHORS } from "../../graphql/queries";

function Authors() {
  const { loading, data, error } = useQuery(GET_AUTHORS);

  console.log({ loading, data });

  if (loading) {
    return <h3>loading...</h3>;
  }

  if (error) {
    return <h3>something went wrong:))</h3>;
  }

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.2) 0 4px 12px",
        borderRadius: 4,
      }}
    >
      {data.authors.map((author, index) => (
        <Box key={author.id} component="div" sx={{ width: "100%" }}>
          <Grid size={{ xs: 12 }} sx={{ padding: 1.5 }}>
            <a
              href={`/authors/${author.slug}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
              }}
            >
              <Avatar src={author.avatar[0].url} />
              <Typography
                component="p"
                variant="p"
                color="textSecondary"
                sx={{ fontWeight: 500 }}
              >
                {author.name}
              </Typography>
            </a>
          </Grid>
          {index !== data.authors.length - 1 && (
            <Grid size={{ xs: 12 }}>
              <Divider variant="middle" />
            </Grid>
          )}
        </Box>
      ))}
    </Grid>
  );
}

export default Authors;
