import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between px-4 font-sans text-3xl text-white bg-black">
      <h1 className="font-semibold">MAP</h1>
      <div className="flex gap-6">
        <p className="cursor-pointer hover:underline" onClick={() => navigate('/home')}>HOME</p>
        <p className="cursor-pointer hover:underline" onClick={() => navigate('/')}>NOTICE</p>
        <p className="cursor-pointer hover:underline" onClick={() => navigate('/mypage')}>MYPAGE</p>
      </div>
    </header>
  );
}

export default Header;
