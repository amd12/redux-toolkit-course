import React, { FC } from 'react';
import { IPost } from '../../model/IPost';

interface PostItemProps {
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({
  post,
  remove,
  update,
}) => {

  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();

    remove(post);
  };

  const handleUpdate = () => {
    const title = prompt() || '';
    update({
      ...post,
      title,
    });
  };

  return (
    <>
      <div className="post__item" onClick={handleUpdate}>
        <div className="post__title">
        {post.id} - {post.title}
        </div>
        <div className="post__remove">
          <button onClick={handleRemove}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default PostItem;
