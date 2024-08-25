import React, { useState } from "react";
import { IComment } from "./Post";

type props = {
  addComment: (comment: IComment, id?: number) => void;
  id?: number | undefined;
};

const AddComment = ({ addComment, id }: props) => {
  const [input, setInput] = useState<string>("");

  const handleAdd = () => {
    addComment(
      {
        id: Date.now(),
        comment: input,
        replies: [],
      },
      id
    );
    setInput("");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add your first comment"
        value={input}
        style={{
          padding: "5px",
          borderLeft: "none",
          borderRight: "none",
          borderTop: "none",
          borderBottom: "10x solid gray",
        }}
      />
      <button
        style={{
          marginLeft: "10px",
          padding: "7px",
          borderRadius: "10px ",
          background: "green",
          color: "white",
        }}
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default AddComment;
