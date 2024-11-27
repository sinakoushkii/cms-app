import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch } from "react-redux";
import { addPost, updatePost } from "../features/post/postSlice";
import { useLocation, useNavigate } from "react-router-dom";

const Post = () => {
  const location = useLocation();
  const post = location?.state || { title: "", caption: "" };
  const [formData, setFormData] = useState(post);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const editPost = (e) => {
    e.preventDefault();
    dispatch(updatePost(formData));
    navigate("/");
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
            {location?.state ? (
              <Button
                onClick={(e) => editPost(e)}
                variant="contained"
                endIcon={<SendIcon />}
              >
                Edit
              </Button>
            ) : (
              <Button
                onClick={(e) => formSubmitHandler(e)}
                variant="contained"
                endIcon={<SendIcon />}
              >
                share
              </Button>
            )}
            <Button variant="outlined" color="error">
              Cancel
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Post;
