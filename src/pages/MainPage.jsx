import {useNavigate} from "react-router-dom";

function MainPage() {
    return (
        <div className="mt-10 mb-10">
            <div className="flex flex-row h-[400px] justify-center">
                <div className="flex flex-col w-[500px] justify-around text-6xl font-['Tilt_Warp'] font-normal">
                    <span className="first-letter:text-[#404AA6]">MyongJi</span>
                    <span className="first-letter:text-[#404AA6]">Asterisk</span>
                    <span className="first-letter:text-[#404AA6]">Programmer</span>
                </div>
                <div>
                    <img src="/src/assets/images/brand_img.png" alt="대충 이미지" className="w-[400px] align-middle"/>
                </div>
            </div>
            <div className="flex flex-row justify-around max-w-[1500px] mx-auto">
                <div className="font-normal">명지대학교 컴퓨터공학과 스터디 MAP에 오신걸 환영합니다.</div>
                <div>
                    <button
                        className="px-16 py-1 border border-gray-600 bg-white font-normal text-sm rounded-4xl hover:bg-blue-500 hover:text-white hover:cursor-pointer">
                        Log in
                    </button>
                </div>
            </div>
            <div className="mt-40 text-center">
                <div className="text-4xl text-[#404AA6] font-['Tilt_Warp'] mb-14">Activities of MAP</div>
                <div
                    className="mx-auto max-w-[1500px] min-h-[500px] bg-[#404AA6] rounded-[200px] flex flex-col justify-center">
                    <div className="flex items-center justify-around px-16">
                        <div className="flex flex-col justify-center">
                            <div className="w-[250px] h-[300px] bg-white rounded-3xl"></div>
                            <span className="text-white mt-7">1학년 세미나</span>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="w-[250px] h-[300px] bg-white rounded-3xl"></div>
                            <span className="text-white mt-7">멘토 / 멘티</span>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="w-[250px] h-[300px] bg-white rounded-3xl"></div>
                            <span className="text-white mt-7">방학 프로젝트</span>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        className="px-16 py-1 border border-gray-600 bg-white font-normal text-sm rounded-4xl hover:bg-blue-500 hover:text-white hover:cursor-pointer">
                        더 알아보기
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MainPage;