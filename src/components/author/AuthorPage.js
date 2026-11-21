import { useQuery } from "@apollo/client/react";
import { useParams } from "react-router";
import { GET_AUTHOR } from "../../graphql/queries";

import sanitizeHtml from "sanitize-html";

import CardEl from "../shared/CardEL";
import Loader from "../shared/Loader";

import { Avatar, Container, Grid, Typography } from "@mui/material";

function AuthorPage() {
  const { authorSlug } = useParams();

  const { loading, data, error } = useQuery(GET_AUTHOR, {
    variables: { slug: authorSlug },
  });

  console.log({ loading, data });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h3>Error...</h3>;
  }

  const {
    author: { name, field, avatar, description, post },
  } = data;

  return (
    <Container maxWidth="lg">
      <Grid container sx={{ marginTop: 10 }}>
        <Grid
          size={{ xs: 12 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar src={avatar[0].url} sx={{ width: 250, height: 250 }} />
          <Typography
            component="h3"
            variant="h5"
            sx={{ fontWeight: 700, mt: 4 }}
          >
            {name}
          </Typography>
          <Typography
            component="p"
            variant="h5"
            color="textSecondary"
            sx={{ mt: 2 }}
          >
            {field}
          </Typography>
        </Grid>

        <Grid size={{ xs: 12 }} sx={{ mt: 5 }}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(description.html),
            }}
          ></div>
        </Grid>

        <Grid size={{ xs: 12 }} sx={{ mt: 6 }}>
          <Typography
            component="h3"
            variant="h5"
            sx={{ fontWeight: 700, mb: 3 }}
          >
            مقالات {name}
          </Typography>

          <Grid container spacing={2}>
            {post.map((post) => (
              <Grid key={post.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <CardEl
                  title={post.title}
                  slug={post.slug}
                  coverPhoto={post.coverPhoto}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
