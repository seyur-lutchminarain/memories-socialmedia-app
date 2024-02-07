import React, { useState } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: {
      base64: "",
      type: "",
    },
  });
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };
  const clear = () => {};

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={
            (e) => setPostData({ ...postData, creator: e.target.value }) // here we only change the value of creator -> we dont want to change any other data
          } // Spread to keep all data and not overwrite
        />

        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />

        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />

        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />

        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ type, base64 }) =>
              setPostData({ ...postData, selectedFile: { type, base64 } })
            }
          />
        </div>

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
