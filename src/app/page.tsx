// app/page.tsx
import CreatePost from "@/components/CreatePost";
import WhoToFollow from "@/components/WhoToFollow";

import { getPosts } from "@/actions/post.action";
import { getDbUserId } from "@/actions/user.action";
import PostCard from "@/components/PostCard";

export default async function Home() {
  const posts = await getPosts();
  const dbUserId = await getDbUserId();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      <div className="lg:col-span-6">
        {/* Always render CreatePost, it will check auth internally via useUser */}
        <CreatePost />

        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} dbUserId={dbUserId} />
          ))}
        </div>
      </div>

      <div className="hidden lg:block lg:col-span-4 sticky top-20">
        <WhoToFollow />
      </div>
    </div>
  );
}
