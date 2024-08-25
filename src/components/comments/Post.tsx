import React, { useState } from "react";
import AddComment from "./AddComment";
import ShowComments from "./ShowComments";
import commentData from "../data.json";

export interface IComment {
  id: number;
  comment: string;
  replies: IComment[];
}

const Post = () => {
  const { data } = commentData;
  const [comments, setComments] = useState<IComment[]>(data);

  const addComment = (data: IComment, id?: number): void => {
    if (!id) {
      setComments((prev) => [data, ...prev]);
      return;
    } else {
      const updatedComments = findAndAddChildComments(comments, id, data);
      setComments(updatedComments);
    }
  };

  const deleteComment = (id: number): void => {
    const updatedComments = findAndDeleteChildComments(comments, id);
    setComments(updatedComments);
  };

  function findAndDeleteChildComments(
    comments: IComment[],
    id: number
  ): IComment[] {
    const leftComments = comments
      .filter((item) => item.id !== id)
      .map((item) => {
        if (item.replies.length > 0) {
          return {
            ...item,
            replies: findAndDeleteChildComments(item.replies, id),
          };
        } else {
          return item;
        }
      });
    return leftComments;
  }

  function findAndAddChildComments(
    comments: IComment[],
    id: number,
    data: IComment
  ): IComment[] {
    const updatedComments = comments.map((item) => {
      if (item.id === id) {
        return { ...item, replies: [data, ...item.replies] };
      } else if (item.replies.length > 0) {
        return {
          ...item,
          replies: findAndAddChildComments(item.replies, id, data),
        };
      }
      return item;
    });
    return updatedComments;
  }

  return (
    <div style={{ margin: "2%" }}>
      <AddComment addComment={addComment} />
      {comments?.map((item) => (
        <ShowComments
          key={item.id}
          {...item}
          addComment={addComment}
          deleteComment={deleteComment}
        />
      ))}
    </div>
  );
};

export default Post;
