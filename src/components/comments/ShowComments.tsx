import React, { useState } from "react";
import { IComment } from "./Post";
import AddComment from "./AddComment";

interface IProps extends IComment {
  addComment: (data: IComment, id?: number) => void;
  deleteComment: (id: number) => void;
}

const ShowComments = ({
  comment,
  id,
  replies,
  addComment,
  deleteComment,
}: IProps) => {
  const [showInput, setShowInput] = useState(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          background: "#eee",
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
          borderLeft: "10px solid #34495e",
          marginTop: "5px",
        }}
      >
        <div
          style={{
            background: "green",
            height: "50px",
            width: "50px",
            borderRadius: "80px",
            margin: "5px",
          }}
        ></div>
        <div style={{ padding: "10px", fontSize: "15px" }}>
          <span>{comment}</span>
          <div>
            <b
              style={{ fontSize: "10px", cursor: "pointer" }}
              onClick={() => setShowInput(true)}
            >
              Reply
            </b>
            {showInput && <AddComment addComment={addComment} id={id} />}
            <b
              style={{
                marginLeft: "10px",
                fontSize: "10px",
                cursor: "pointer",
              }}
              onClick={() => deleteComment(id)}
            >
              Delete
            </b>
          </div>
        </div>
      </div>
      {replies?.length > 0 &&
        replies.map((item) => (
          <div style={{ marginLeft: "15px" }} key={item.id}>
            <ShowComments
              {...item}
              addComment={addComment}
              deleteComment={deleteComment}
            />
          </div>
        ))}
    </>
  );
};

export default ShowComments;
