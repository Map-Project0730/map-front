function BoardButton1({onClick}){
  return (
    <div onClick = {onClick} className="text-xl font-semibold pl-4 cursor-pointer">
      게시판
    </div>
  )
}

function BoardButton2({onClick}){
  return (
    <div className="absolute text-[10px] text-gray-800 cursor-pointer bottom-[25px] right-[30px] " onClick = {onClick}>
      더보기 &gt;
    </div>
  )
}

const Board = ()=> {
  return (
    <>
      <div className="flex relative flex-col p-4 space-y-4">
        <BoardButton1 text="게시판" onClick={() => window.location.href = "/board"}/>
        <div className="flex w-[700px] h-[350px] bg-[#EDEEF3] rounded-4xl justify-center items-center flex-col">
          <div className=" m-4 w-[650px] h-[60px] bg-[#D7D7DA] rounded-4xl"></div>
          <div className=" m-4 w-[650px] h-[60px] bg-[#D7D7DA] rounded-4xl"></div>
          <div className=" m-4 w-[650px] h-[60px] bg-[#D7D7DA] rounded-4xl"></div>
          <BoardButton2 text="게시판" onClick={() => window.location.href = "/board"}/>
        </div>
      </div>
    </>
  )
}

export default Board;