import { useState, useEffect } from 'react';

export default function TheEditStyleLayout() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 실제 API로 교체 가능
    setPosts([
      {
        id: 1,
        title: '에디터가 추천하는 가을 아우터 7선',
        summary: '이번 시즌 트렌드를 반영한 아우터 리스트. 스타일과 실용성 모두 잡았다.',
        thumbnail: 'https://via.placeholder.com/600x400?text=Thumbnail+1',
      },
      {
        id: 2,
        title: '테크와 패션의 만남, 스마트워치 리뷰',
        summary: '시계 그 이상을 말하다. 요즘 스마트워치 트렌드 살펴보기.',
        thumbnail: 'https://via.placeholder.com/600x400?text=Thumbnail+2',
      },
      {
        id: 3,
        title: '비 오는 날엔 이런 플레이리스트',
        summary: '잔잔한 음악과 함께하는 감성적인 하루. 에디터 추천 음악 리스트.',
        thumbnail: 'https://via.placeholder.com/600x400?text=Thumbnail+3',
      },
    ]);
  }, []);

  return (
    <div className="bg-white min-h-screen px-4 py-8 font-sans">
      <header className="max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl font-bold tracking-tight">THE EDIT</h1>
        <p className="text-gray-500 mt-2">스타일과 영감을 전하는 디지털 매거진</p>
      </header>

      <main className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="group">
            <div className="overflow-hidden rounded-xl shadow-sm">
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h2 className="mt-4 text-xl font-semibold text-gray-900 group-hover:underline">
              {post.title}
            </h2>
            <p className="text-gray-600 mt-1 text-sm leading-relaxed">
              {post.summary}
            </p>
          </article>
        ))}
      </main>
    </div>
  );
}