import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LizardImg from "../assets/images/lizard.jpg";
import { useDispatch } from "react-redux";
import { deletePost } from "../features/post/postSlice";
import { useNavigate } from "react-router-dom";

function truncateText(text) {
  if (text.length <= 150) {
    return text; // Return the full text if it's less than or equal to 70 characters
  }
  return text.slice(0, 150) + "...";
}
function truncateTitle(title) {
  if (title.length <= 25) {
    return title;
  }
  return title.slice(0, 20) + "...";
}

const PostCard = ({ title, caption, postId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function deletePostHandler(postId) {
    dispatch(deletePost(postId));
    navigate("/");
  }

  function editPostHandler(postId) {
    navigate("/post", {
      state: { id: postId, title: title, caption: caption },
    });
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={LizardImg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {truncateTitle(title)}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {truncateText(caption)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => editPostHandler(postId)}
          variant="outlined"
          size="small"
        >
          Edit
        </Button>
        <Button
          onClick={() => deletePostHandler(postId)}
          variant="outlined"
          color="error"
          size="small"
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostCard;
