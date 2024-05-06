/**
 * # New Post
 */

/**
 * ## Imports
 */
import { createPost } from '@/actions/posts';
import PostForm from '@/components/post-form';

/**
 * ## Component
 */
export default function NewPostPage() {
    return <PostForm action={createPost} />
};
