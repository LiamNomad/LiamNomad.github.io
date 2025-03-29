import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const files = import.meta.glob('./posts/*.md');
      const loadedPosts = await Promise.all(
        Object.entries(files).map(async ([path, resolver]) => {
          const content = await resolver();
          return {
            title: path.split('/').pop().replace('.md', ''),
            content: content.default,
          };
        })
      );
      setPosts(loadedPosts);
    }
    loadPosts();
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900 p-6 max-w-4xl mx-auto">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Hi, I'm Liam Nomad</h1>
        <p className="text-lg">Data Engineer | Building scalable data pipelines | Open to opportunities</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid gap-6">
          <div className="rounded-2xl shadow p-4 border">
            <h3 className="text-xl font-bold">Real-Time Data Pipeline</h3>
            <p className="mt-2">Built a streaming pipeline using Kafka, Spark Streaming, and Snowflake to ingest and process real-time events. Reduced reporting delay from hours to minutes.</p>
          </div>
          <div className="rounded-2xl shadow p-4 border">
            <h3 className="text-xl font-bold">Cost Optimization on Snowflake</h3>
            <p className="mt-2">Now I'm working on implementing a system to detect idle virtual warehouses and automatically suspend them, that reducing compute costs by 40%.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Blog</h2>
        <div className="grid gap-6">
          {posts.map((post, index) => (
            <div key={index} className="rounded-2xl shadow p-4 border">
              <h3 className="text-xl font-bold">{post.title}</h3>
              <ReactMarkdown className="prose">{post.content}</ReactMarkdown>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-20 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} Liam Nomad. Last updated: {new Date().toLocaleDateString()}
      </footer>
    </main>
  );
}
