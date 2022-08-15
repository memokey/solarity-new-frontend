import { LikesIcon, TimerIcon, UsersIcon } from "assets/svgs"
import moment from "moment";
import Image from "next/image"

const LiveEventPanel = (props) => {
    const { data, onClick } = props;

    return (
        <div className="flex flex-col relative overflow-hidden cursor-pointer
                        w-full rounded-[20px] border-[1.2px] border-[#272829] hover:border-primary transition duration-300 bg-[#242424]" onClick={() => {}}>
            <div className="w-full"><Image src={data.image} width="100%" height="70%" layout="responsive" /></div>
            <div className="py-[8px] px-[20px] h-full flex flex-col justify-between">
                <div className="text-[20px] text-[#F3F3F3] leading-[24px]">{data.title}</div>
                <div className="flex items-center justify-between text-[#29B080] text-[14px] mt-[5px]">
                    <div className="flex flex-row items-center">
                        {
                            data.users.filter((user, index) => index < 3).map((user, index) => (
                                <div className={`flex flex-row ${index !== 0 ? 'ml-[-10px]' : '' }`} key={index}><Image src={user.avatar} height={20} width={20} /></div>
                            ))
                        }
                        <div className="text-white bg-[#1F1F20] h-[20px] w-[22px] rounded-[5px] flex flex-row justify-center items-center">{ data.users.length - 3 }+</div>
                    </div>
                    <div className="flex flex-row items-center"><TimerIcon />&nbsp;{ "50 min" }</div>
                </div>
            </div>
        </div>
    )
}

export default LiveEventPanel