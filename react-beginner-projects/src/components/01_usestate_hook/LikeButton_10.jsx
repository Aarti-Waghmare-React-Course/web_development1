// Create a simple Like Button

import React, { useState } from 'react';

const LikeButton_10 = () => {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
};

export default LikeButton_10;
