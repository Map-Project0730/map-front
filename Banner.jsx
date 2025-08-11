import { VscAccount } from "react-icons/vsc";

const Banner = ()=>{
  return(
    <div className="flex-col">
    <div className=" flex items-center p-4 w-[800px] h-[80px] rounded-full bg-[#404AA6]">
      <VscAccount size={45} color="white"/>
      <div className="flex-col m-4">
      <p className=" flex items-start text-white">명지대학교 컴퓨터공학과 (학년)</p>
      <p className=" flex text-white">(이름)</p>
      </div>
    </div>
    <div className="my-[50px] font-bold m-5">
      (이름) 님, 환영합니다.
    </div>
    </div>
  )
}

export default Banner;