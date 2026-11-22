import { useState } from "react";

import { useMutation } from "@apollo/client/react";

import { Button, Grid, TextField, Typography } from "@mui/material";

import { SEND_COMMENT } from "../../graphql/mutations";

import { toast, ToastContainer } from "react-toastify";

function CommentForm({ slug }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const [submitForm, { loading }] = useMutation(SEND_COMMENT);

  const emptyFields = () => {
    setName("");
    setEmail("");
    setText("");
  };

  const handleSendComment = () => {
    if (name && email && text) {
      submitForm({ variables: { name, email, text, slug } });
      emptyFields();

      return toast.success("کامنت با موفقیت ارسال شد", {
        style: { fontFamily: "YekanBakh" },
        position: "top-right",
      });
    }

    toast.warn("تمام فیلدها را پر کنید", {
      style: { fontFamily: "YekanBakh" },
      position: "top-right",
    });
  };

  return (
    <Grid
      container
      sx={{
        boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid size={{ xs: 12 }} sx={{ margin: 2 }}>
        <Typography
          component="p"
          variant="h6"
          color="primary"
          sx={{ fontWeight: 700 }}
        >
          فرم ارسال کامنت
        </Typography>
      </Grid>

      <Grid size={{ xs: 12 }} sx={{ margin: 2 }}>
        <TextField
          label="نام کاربر"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
      </Grid>

      <Grid size={{ xs: 12 }} sx={{ margin: 2 }}>
        <TextField
          label="ایمیل"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
      </Grid>

      <Grid size={{ xs: 12 }} sx={{ margin: 2 }}>
        <TextField
          label="کامنت"
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
          fullWidth
          multiline
          minRows={4}
        />
      </Grid>

      <Grid size={{ xs: 12 }} sx={{ margin: 2 }}>
        <Button
          variant="contained"
          onClick={() => !loading && handleSendComment()}
          disabled={loading}
        >
          {loading ? "درحال ارسال..." : "ارسال"}
        </Button>
      </Grid>

      <ToastContainer />
    </Grid>
  );
}

export default CommentForm;
