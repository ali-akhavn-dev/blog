import { useNavigate, useParams } from "react-router";

import { useQuery } from "@apollo/client/react";

import sanitizeHtml from "sanitize-html";

import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import { GET_BLOG } from "../../graphql/queries";
import Loader from "../shared/Loader";

import CommentForm from "../comment/CommentForm";
import Comments from "../comment/Comments";

function BlogPage() {
  const { blogSlug } = useParams();
  const navigate = useNavigate();

  const { loading, data, error } = useQuery(GET_BLOG, {
    variables: { slug: blogSlug },
  });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h3>Error</h3>;
  }

  const {
    post: { title, slug, content, author, coverPhoto },
  } = data;

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid
          size={{ xs: 12 }}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 9,
          }}
        >
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            sx={{
              fontWeight: 700,
              maxWidth: "550px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {title}
          </Typography>

          <Button
            onClick={() =>
              navigate(-1, {
                preventScrollReset: false,
              })
            }
          >
            <ArrowBackRoundedIcon />
          </Button>
        </Grid>

        <Grid size={{ xs: 12 }} sx={{ mt: 6 }}>
          <img
            width="100%"
            src={coverPhoto[0].url}
            alt={slug}
            style={{ borderRadius: 15 }}
          />
        </Grid>

        <Grid
          size={{ xs: 12 }}
          sx={{ mt: 7, display: "flex", alignItems: "center", gap: 2 }}
        >
          <Avatar src={author.avatar[0].url} sx={{ width: 80, height: 80 }} />

          <Box component="div">
            <Typography component="p" variant="h5" sx={{ fontWeight: 700 }}>
              {author.name}
            </Typography>
            <Typography component="p" variant="h5" color="secondary">
              {author.field}
            </Typography>
          </Box>
        </Grid>

        <Grid size={{ xs: 12 }} sx={{ mt: 5 }}>
          <div
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(content.html) }}
          ></div>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <CommentForm slug={slug} />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Comments slug={slug} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogPage;
