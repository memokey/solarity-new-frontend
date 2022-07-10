import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Image from "next/image";

import Dropzone from 'react-dropzone'

import { AddressButton, WalletButton, PrimaryButton, BackButton } from "components/Common/Buttons";

import Logo from "components/Common/Logo";

import { AddressImg, AvatarImg, DaoBGImg, DaoImg1, DaoImg2, DaoPicImg } from "components/Common/Images";
import { AvatarPanel, DaoPanel } from "components/Common/Panels";
import { minifyAddress } from "utils";

import { useDispatch, RootStateOrAny, useSelector } from "react-redux";
import { claimDaos, undoSetupStep } from '../../../redux/slices/profileSlice'
import { startLoadingApp, stopLoadingApp } from '../../../redux/slices/commonSlice'

const UserDaos = (props) => {
  const dispatch = useDispatch()
  const router = useRouter();
  const { getDaos, setDaos } = props
  const { profileData } = useSelector(
    (state: RootStateOrAny) => ({
      profileData: state.profile.data
    })
  );

  // bug code
  const publicKey = localStorage.getItem('publickey');
  const walletType = localStorage.getItem('type');

  const miniPublicKey = minifyAddress(publicKey, 3);
  const provider = (window as any).phantom.solana;

  useEffect(() => {
    // console.log(profileData)
    getDaos()
  }, [])

  useEffect(() => {
    setDaos(profileData.daoMemberships.daos)
  }, [profileData.daoMemberships.daos])

  const undoUserInfo = () => {
    dispatch(startLoadingApp())

    dispatch(undoSetupStep({
      stepName: "info",
      onFinally: () => {
        dispatch(undoSetupStep({
          stepName: "link",
          onFinally: () => {
            router.push({
              pathname: '/auth/register/userInfo'
            })
          }
        }))
      }
    }))

    dispatch(stopLoadingApp())
  }

  const submit = () => {
    dispatch(startLoadingApp())

    dispatch(claimDaos({
      data: {},
      successFunction: () => { },
      errorFunction: () => { },
      finalFunction: () => {
        router.push({
          pathname: '/auth/register/userPic'
        })
      },
    }))
    // router.push({
    //   pathname: '/auth/register/userPic'
    // })
    dispatch(stopLoadingApp())
  }

  return (
    <div className=" pr-[0] lg:pr-[7%]">
      <div className="relative w-auto my-6 mx-auto">
        {/*content*/}
        <div className="rounded-[30px] min-h-[calc(100vh-100px)] shadow-lg relative flex flex-col w-full bg-[#141416] outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between pt-8 pl-[32px] pr-[32px] lg:p-14 lg:pb-0 lg:pr-12 rounded-t">
            <h3 className="text-[28px] lg:text-[30px] text-white font-medium tracking-[0.02em]">
              DAOs you&apos;re already in
            </h3>
            <AddressButton caption={miniPublicKey ? miniPublicKey : ""} icon={AddressImg} onClick={null} />
          </div>
          {/*body*/}
          <div className="relative p-[32px] lg:p-14 flex-auto">
            {
              profileData.daoMemberships.daos?.length ?
                <div className="grid grid-cols-2 xl:grid-cols-3 max-h-[510px] overflow-scroll">
                  {
                    profileData.daoMemberships.daos.map((dao, index) => (
                      <div className="p-2">
                        <DaoPanel imageSrc={dao.profileImageLink} backSrc={DaoBGImg} title={dao.name} />
                      </div>
                    ))
                  }
                </div>
                :
                <div className="text-center	text-[24px] lg:text-[24px] text-white font-medium tracking-[0.02em]">No DAOs you are in.</div>
            }
          </div>
          <div className="w-full px-[32px] py-[32px] lg:px-14 lg:py-8 flex-auto flex items-end">
            <div className="inline-block w-[20%] pr-2">
              <BackButton onClick={undoUserInfo} styles="rounded-[15px]" />
            </div>
            <div className="inline-block w-[80%] pl-2">
              <PrimaryButton caption="Continue" icon="" bordered={false} onClick={submit} disabled={false} styles="rounded-[15px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDaos;