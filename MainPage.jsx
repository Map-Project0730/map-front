import Header from '../components/Header';

function MainPage() {
  return (
    <div>
      <Header />
      

      <div className="flex justify-between items-center py-6 px-9 font-extrabold text-7xl">
        <h1 className="font-extrabold text-7xl">NOTICE</h1>

        <input 
          type="text" 
          placeholder="검색어를 입력하세요" 
          className="px-10 py-2 text-2xl text-white placeholder-white bg-black border rounded-full w-[600px] h-[100px]" 
        />

        <button 
          onClick={() => window.location.href='/write'} 
          className="px-6 py-2 text-2xl text-white bg-black cursor-pointer rounded-3xl w-[150px] h-[100px]"
        >
          글쓰기
        </button>
      </div>

      <hr className="my-5 border-black border-t-3" />

      <div className="flex justify-between px-3 font-mono text-0.5xl ml-auto">
        <h1 className="px-5 text-3xl">NUMBER</h1>
        <h1>TITLE</h1>
        <h1>WRITER</h1>
        <h1>DATE</h1>
        <h1>VIEW</h1>
      </div>

      <hr className="my-5 border-black border-t-3" />
    </div>
  );
}

export default MainPage;
