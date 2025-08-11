import { useState } from 'react'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /*const handleLogin = () => {
    console.log("이메일:", email);
    console.log("비밀번호:", password);*/

  return (
    <div className="flex items-center justify-center mt-[100px] flex-col">

        <div className=" text-black font-bold text-[40px] my-[50px] ">로그인</div>

        <div className='flex flex-col gap-[50px]'>
        <div className='flex'>
        <div className="bg-[#404AA6] w-[100px] flex items-center justify-center text-white font-semibold rounded-l-full">이메일</div>
         <input 
          type = "text"
          value={email}
          onChange ={(e)=> setEmail(e.target.value)}
          className="w-[800px] h-[80px] rounded-r-full bg-gray-300"
          placeholder='이메일을 입력하세요.'/>
          </div>

         <div className='flex'>
         <div className="bg-[#404AA6] w-[100px] flex items-center justify-center text-white font-semibold rounded-l-full">비밀번호</div>
         <input 
          type = "text"
          value={password}
          onChange ={(e)=> setPassword(e.target.value)}
          className="w-[800px] h-[80px] rounded-r-full bg-gray-300"
          placeholder='비밀번호를 입력하세요.'/>
        </div> 

        <button className=' font-bold bg-[#404AA6] w-[100px] h-[50px] text-white rounded-full mx-auto cursor-pointer' /*onClick={handleLogin*/>
          로그인
        </button>
        </div>

       
    </div>
  )
}

export default Login;