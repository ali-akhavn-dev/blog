import { Link } from "react-router";

import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";

function CardEL({ title, slug, coverPhoto, author }) {
  return (
    <Card sx={{ boxShadow: "rgba(0,0,0,0.2) 0 4px 12px", borderRadius: 4 }}>
      <CardHeader
        avatar={<Avatar src={author.avatar[0].url} />}
        title={
          <Typography
            component="p"
            variant="p"
            sx={{ fontWeight: 500 }}
            color="secondary"
          >
            {author.name}
          </Typography>
        }
        sx={{ gap: 2 }}
      />

      <CardMedia
        component="img"
        height="130"
        image={coverPhoto[0].url}
        alt={slug}
        sx={{ width: "100%", objectFit: "cover" }}
      />

      <CardContent>
        <Typography
          component="h3"
          variant="h6"
          color="primary"
          sx={{
            minHeight: "52px",
            fontSize: "16px",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
          }}
        >
          {title}
        </Typography>
      </CardContent>

      <Divider variant="middle" sx={{ margin: "10px" }} />

      <CardActions>
        <Link
          to={`/blogs/${slug}`}
          style={{ width: "100%", textDecoration: "none" }}
        >
          <Button
            variant="outlined"
            size="small"
            sx={{ width: "100%", borderRadius: 2 }}
          >
            مطالعه مقاله
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default CardEL;
