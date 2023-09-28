import React from "react";

import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Parth",
    text: " Sample",
    replies: [
      {
        name: "Parth",
        text: " Sample",
        replies: [],
      },
      {
        name: "Parth",
        text: " Sample",
        replies: [
          {
            name: "Parth",
            text: " Sample",
            replies: [
              {
                name: "Parth",
                text: " Sample",
                replies: [
                  {
                    name: "Parth",
                    text: " Sample",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Parth",
    text: " Sample",
    replies: [],
  },
  {
    name: "Parth",
    text: " Sample",
    replies: [],
  },
  {
    name: "Parth",
    text: " Sample",
    replies: [],
  },
  {
    name: "Parth",
    text: " Sample",
    replies: [],
  },
];
const CommentsContainer = () => {
  return (
    <div className="m-2 p-2">
      <h1 className="font-bold text-2xl">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
