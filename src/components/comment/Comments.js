import { useQuery } from "@apollo/client/react";

import { Avatar, Box, Grid, Typography } from "@mui/material";

import { GET_COMMENTS } from "../../graphql/queries";
import Loader from "../shared/Loader";

function Comments({ slug }) {
  const { loading, data, error } = useQuery(GET_COMMENTS, {
    variables: { slug },
  });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h3>Error</h3>;
  }

  const { comments } = data;

  return (
    <Grid
      container
      sx={{
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        borderRadius: 4,
        py: 1,
        mt: 8,
      }}
    >
      <Grid size={{ xs: 12 }} sx={{ margin: 2 }}>
        <Typography
          component="p"
          variant="h6"
          sx={{ fontWeight: 700 }}
          color="primary"
        >
          کامنت ها
        </Typography>

        {comments.length === 0 && <p>هنوز نظری ثبت نشده!</p>}

        {comments.map((comment) => (
          <Grid
            key={comment.id}
            size={{ xs: 12 }}
            sx={{
              margin: 2,
              padding: 2,
              border: "1px solid silver",
              borderRadius: 1,
            }}
          >
            <Box
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontWeight: "500",
                mb: 3,
              }}
            >
              <Avatar>{comment.name[0]}</Avatar>
              <Typography component="span" variant="p">
                {comment.name}
              </Typography>
            </Box>
            <Typography component="p" variant="p">
              {comment.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Comments;
