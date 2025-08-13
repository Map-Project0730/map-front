function AnnouncementsButton1({onClick}){
  return (
    <div className="text-xl font-semibold pl-4 cursor-pointer" onClick = {onClick}>
      공지
    </div>
  )
}

function AnnouncementsButton2({onClick}){
  return (
    <div className="absolute text-[10px] text-gray-800 cursor-pointer bottom-[25px] right-[35px] " onClick = {onClick}>
      더보기 &gt;
    </div>
  )
}

const Announcements = ()=> {
  return (
    <>
      <div className="flex relative flex-col p-4 space-y-4">
        <AnnouncementsButton1 text="공지" onClick={() => window.location.href = "/announcements"}/>
        <div className="flex w-[700px] h-[350px] bg-[#EDEEF3] rounded-4xl justify-center items-center flex-col">
          <div className=" m-4 w-[650px] h-[60px] bg-[#D7D7DA] rounded-4xl"></div>
          <div className=" m-4 w-[650px] h-[60px] bg-[#D7D7DA] rounded-4xl"></div>
          <div className=" m-4 w-[650px] h-[60px] bg-[#D7D7DA] rounded-4xl"></div>
          <AnnouncementsButton2 text="공지" onClick={() => window.location.href = "/announcements"}/>
        </div>
      </div>
    </>
  )
}

export default Announcements;