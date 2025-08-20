import Header from '../components/Header';
import { useState } from 'react';

function WritePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div>
      <Header />

      <div>
        <h1 className="px-5 py-5 font-bold text-7xl">NOTICE</h1>
      </div>

      <div className="flex items-center py-4 px-10 gap-6">
        <h1 className="text-5xl font-bold w-40">TITLE</h1>
        <input
          type="text" placeholder="제목을 입력하세요" className="py-3 px-3 text-3xl text-white bg-black rounded-full w-[1200px] ml-auto"
          value={title} onChange={(e) => setTitle(e.target.value)}/>
      </div>

      <div className="flex items-start py-4 px-10 gap-6">
        <h1 className="text-5xl font-bold w-40">CONTENT</h1>
        <textarea
          placeholder="내용을 입력하세요" className="w-[1200px] h-[270px] text-2xl text-white bg-black rounded px-3 py-2 ml-auto"
          value={content} onChange={(e) => setContent(e.target.value)}>
        </textarea>
      </div>

      <div className="flex justify-between px-10 py-4 gap-4">
        <button className="px-6 py-2 text-3xl text-white bg-black rounded cursor-pointer">
          FILE
        </button>
        <button className="px-6 py-2 text-3xl text-white bg-black rounded cursor-pointer">
          UPLOAD
        </button>
      </div>
    </div>
  );
}

export default WritePage;
