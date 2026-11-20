import { useQuery } from "@apollo/client/react";

import { Grid } from "@mui/material";

import { GET_BLOGS } from "../../graphql/queries";
import CardEL from "../shared/CardEL";

function Blogs() {
  const { loading, data, errors } = useQuery(GET_BLOGS);

  console.log(loading, data);

  if (loading) {
    return <h3>loading...</h3>;
  }

  if (errors) {
    return <h3>something went wrong:))</h3>;
  }

  return (
    <Grid container spacing={2.5}>
      {data.posts.map((post) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
          <CardEL {...post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Blogs;
