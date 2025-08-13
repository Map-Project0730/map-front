import { useState } from "react";

function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [passwordCheck, setpasswordCheck] = useState('');
    
    const handleLogin = () => {
    console.log("이름:", name);
    console.log("학번:", number);
    console.log("이메일:", email);
    console.log("비밀번호:", password);
    console.log("비밀번호확인:", passwordCheck);
    }

    return (
      <div className="flex items-center justify-center mt-[50px] flex-col">
  
          <div className=" text-black font-bold text-[40px] my-[50px] ">회원가입</div>
  
          <div className='flex flex-col gap-[50px]'>

          <div className='flex'>
          <div className="bg-[#404AA6] w-[100px] flex items-center justify-center text-white font-semibold rounded-l-full">이름</div>
           <input 
            type = "text"
            value={name}
            onChange ={(e)=> setName(e.target.value)}
            className="w-[800px] h-[80px] rounded-r-full bg-gray-300"/>
            </div>

          <div className='flex'>
          <div className="bg-[#404AA6] w-[100px] flex items-center justify-center text-white font-semibold rounded-l-full">학번</div>
           <input 
            type = "text"
            value={number}
            onChange ={(e)=> setNumber(e.target.value)}
            className="w-[800px] h-[80px] rounded-r-full bg-gray-300"/>
            </div>

          <div className='flex'>
          <div className="bg-[#404AA6] w-[100px] flex items-center justify-center text-white font-semibold rounded-l-full">이메일</div>
           <input 
            type = "text"
            value={email}
            onChange ={(e)=> setEmail(e.target.value)}
            className="w-[800px] h-[80px] rounded-r-full bg-gray-300"/>
            </div>
  
           <div className='flex'>
           <div className="bg-[#404AA6] w-[100px] flex items-center justify-center text-white font-semibold rounded-l-full">비밀번호</div>
           <input 
            type = "text"
            value={password}
            onChange ={(e)=> setPassword(e.target.value)}
            className="w-[800px] h-[80px] rounded-r-full bg-gray-300"/>
          </div> 

          <div className='flex'>
          <div className="bg-[#404AA6] w-[100px] flex items-center justify-center text-white font-semibold rounded-l-full text-[15px]">비밀번호확인</div>
           <input 
            type = "text"
            value={passwordCheck}
            onChange ={(e)=> setpasswordCheck(e.target.value)}
            className="w-[800px] h-[80px] rounded-r-full bg-gray-300"/>
            </div>
  
          <button className=' font-bold bg-[#404AA6] w-[100px] h-[50px] text-white rounded-full mx-auto cursor-pointer' onClick={handleLogin}>
            회원가입
          </button>
          </div>
  
         
      </div>
    )
}

export default Signin;