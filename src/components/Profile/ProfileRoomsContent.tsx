import RoomsAvatarPanel from "components/Common/Panels/RoomsAvatarPanel"
import { SettingsRoomsTabData } from "data/Profile"
import { useRouter } from "next/router"
import NoGalleryCollection from "./NoGalleryCollection"

const ProfileRoomsContent = () => {

    const { asPath } = useRouter()
    let uName = asPath.replace(/\/profile$/, '')
    uName = uName.replace(/\//,'')

    const content = SettingsRoomsTabData.map((i) => {
        return <RoomsAvatarPanel imageSrc={i.srcUrl} title={i.title} no={i.no} onClick={() => alert("your room")} />
    })

    return (
        <div className="flex flex-row gap-[32px] my-[32px]
                        grid custom-2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 justify-items-center
                        sm:justify-around xs:justify-center">
            { uName === "no_room" ? <NoGalleryCollection text="The user has no rooms" /> : content}
        </div>
    )
}

export default ProfileRoomsContent