import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import Logo from "components/Common/Logo";

import {
  AddressImg,
  AvatarImg,
  DaoBGImg,
  DaoImg1,
  DaoImg2,
  GalleryImg,
} from "components/Common/Images";
import {
  MetamaskImg,
  PhantomImg,
  SlopeImg,
  SolflareImg,
  SolletExImg,
  SolletImg,
  TorusImg,
} from "components/Common/Images";
import { useDispatch, RootStateOrAny, useSelector } from "react-redux";
import {
  startLoadingApp,
  stopLoadingApp,
} from "../../redux/slices/commonSlice";
import { EditStyle, UserBadges, UserDaos, UserInfo, UserPic, NftDemo, UserRoom } from "./Steps";
import { UserAvatar } from "components/Common/Panels";
import { changeInfo, goStep } from "redux/slices/authSlice";
import ProgressBar from "./ProgressBar";
import Circle from "./Circle";

const WALLETS = [
  {
    label: "Phantom",
    id: "phantom",
    type: "solana",
    image: PhantomImg,
  },
  {
    label: "Solflare",
    id: "solflare",
    type: "solana",
    image: SolflareImg,
  },
  {
    label: "Metamask",
    id: "metamask",
    type: "ethereum",
    image: MetamaskImg,
  },
];

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { steps } = router.query;
  const { userInfo, step } = useSelector((state: RootStateOrAny) => ({
    userInfo: state.auth.userInfo,
    step: state.auth.step,
  }));

  const [avatar, setAvatar] = useState<Object>(null);

  const publicKey = localStorage.getItem("publickey");
  const walletType = localStorage.getItem("type");

  useEffect(() => {
    if (publicKey) {
      const payload = {
        value: publicKey,
        type: "solanaAddress",
      };
      dispatch(changeInfo({ payload: payload }));
    }
  }, []);

  const onGoStep = (stepNum, data, flag) => {
    const payload = {
      stepNum,
      data,
      flag
    };
    dispatch(goStep({ payload: payload }));
  };

  return (
    <div className="lg:flex lg:flex-row justify-center md:flex-col gap-[25px] mt-[50px] items-center">
      <div className="w-[90%] md:w-[65%] lg:w-[50%] xl:w-[60%] custom-2xl:w-[55%] m-auto">
        <div className="relative w-auto mx-auto">
          <div className="rounded-[30px] min-h-[800px] lg:min-h-[calc(100vh-100px)] shadow-lg relative w-full bg-[#141416] outline-none focus:outline-none flex flex-row">
            <div className="hidden xl:w-[40%] xl:block h-full">
              <div className="py-6">
                <Logo />
              </div>
              <Circle />
              <ProgressBar />
            </div>
            <div className="w-[100%] xl:w-[60%] flex flex-col relative">
              {step === 1 && <UserInfo goStep={onGoStep} />}
              {step === 2 && <UserDaos goStep={onGoStep} />}
              {step === 3 && <UserPic goStep={onGoStep} />}
              {step === 4 && <EditStyle goStep={onGoStep} />}
              {step === 5 && <UserBadges goStep={onGoStep} />}
              {step === 6 && <UserRoom goStep={onGoStep} />}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] md:w-[85%] lg:w-[50%] xl:w-[40%] custom-2xl:w-[45%] lg:block m-auto">
        <NftDemo setAvatar={setAvatar} avatar={avatar} goStep={onGoStep} />
      </div>
    </div>
  );
};

export default RegisterPage;