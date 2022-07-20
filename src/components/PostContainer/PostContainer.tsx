import React, { useState } from 'react';
import { postAPI } from '../../services/PostService';
import PostItem from './PostItem';
import { IPost } from '../../model/IPost';
import './postStyle.scss';

function PostContainer() {
  const [limit, setLimit] = useState(10);
  const {
    data: posts,
    error,
    isLoading,
  } = postAPI.useFetchAllPostQuery(limit);

  const [deletePost] = postAPI.useDeletePostMutation();
  const [updatePost] = postAPI.useUpdatePostMutation();

  const [addNewPost, { isLoading: isCreateLoading, error: createError}] = postAPI.useCreatePostMutation();

  const onSavePost = async () => {
    try {
      const title = prompt();
      await addNewPost({
        title,
        'body': title,
      } as IPost);
    } catch (e) {
      console.error('Failed to save the post: ', e, createError);
    }
  };

  const handleRemove = async (post: IPost) =>{
    deletePost(post)
  }

  const handleUpdate = async (post: IPost) =>{
    updatePost(post)
  }

  return (
    <div className="post__list">
      {isCreateLoading && <h1>Downlands...</h1>}
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error </h1>}

      <div className='post__container'>
      {
        posts && posts.map((post) => <PostItem key={post.id} post={post} remove={handleRemove} update={handleUpdate}/>)
      }
        <div className="post__add">
          <button onClick={() => onSavePost()}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default PostContainer;
