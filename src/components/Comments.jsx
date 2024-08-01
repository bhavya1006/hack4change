import React from 'react';

const Comments = ({ comments }) => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold">Comments</h3>
      {comments.map(comment => (
        <div key={comment.id} className="mt-2 p-2 bg-gray-100 rounded">
          <p className="text-sm font-bold">{comment.user}</p>
          <p className="text-sm">{comment.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
