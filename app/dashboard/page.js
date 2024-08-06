// /pages/index.js

import Link from 'next/link';
import dummyPosts from '../../data/dummyData.js';

const Dashboard = () => {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {dummyPosts.map((post) => (
          <li key={post.id}>
            <Link href={`/dashboard/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
