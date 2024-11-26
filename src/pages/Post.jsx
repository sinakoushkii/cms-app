import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch } from "react-redux";
import { addPost } from "../features/post/postSlice";

const Post = () => {
  const [formData, setFormData] = useState({
    title: "",
    caption: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (formData.title.length <= 3 && formData.title.length <= 5) {
      alert("Enter valid text");
    } else {
      dispatch(addPost(formData));
      setFormData({
        title: "",
        caption: "",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container mx-auto px-8">
      <div className="form-wrapper flex flex-row justify-center items-center gap-3 h-screen w-full border ">
        <Box
          className="flex flex-col gap-4 w-1/2"
          onSubmit={(e) => formSubmitHandler(e)}
        >
          <TextField
            label="Title"
            variant="outlined"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <TextField
            multiline
            rows={6}
            label="Caption"
            variant="outlined"
            name="caption"
            value={formData.caption}
            onChange={handleChange}
          />
          <div className="flex gap-2">
            {isLoading ? (
              <Button loading variant="outlined">
                Loading...
              </Button>
            ) : (
              <Button
                onClick={(e) => formSubmitHandler(e)}
                variant="contained"
                endIcon={<SendIcon />}
              >
                Share
              </Button>
            )}
            <Button disabled={isLoading} variant="outlined" color="error">
              Cancel
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Post;
