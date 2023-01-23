import { ItemProps } from "components/Community/Communities/Item";
import { FloorPriceIcon } from "components/Community/Feed/Header/Stats/icons/FloorPriceIcon";
import { MembersIcon } from "components/Community/Feed/Header/Stats/icons/MembersIcon";
import { TotalSupplyIcon } from "components/Community/Feed/Header/Stats/icons/TotalSupplyIcon";
import { StatsItemProps } from "components/Community/Feed/Header/Stats/StatsItem";
import { AvatarProps } from "components/Community/Feed/Main/Feed/RightSide/Users/Avatar";
import { EthereumIcon } from "components/icons/EthereumIcon";
import { MemberIcon } from "components/icons/MemberIcon";
import { SolanaLinkIcon } from "components/icons/SolanaLinkIcon";
import { SolanaIcon } from "components/icons/SolanaIcon";
import { FilterItemProps } from "components/Marketplace/Filter/FilterItem";
import { RoomItemProps } from "components/Marketplace/Rooms/Items/Item";

export const communities: ItemProps[] = [
    {
        avatarUrl: '/images/community/avatars/Picture (2).png',
        backUrl: '/images/community/backs/BG (2).png',
        communityName: 'Degods',
        collectionName: 'degods',
        memberNumber: 4500,
        totalSupply: 10000,
        icon: <MemberIcon />,
        description: 'DeGods is a digital art collection and global community of creators, developers, entrepreneurs, athletes, artists, experimenters and innovators.',
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        websiteUrl: "https://degods.com/",
        twitterUrl: "https://twitter.com/DeGodsNFT",
        discordUrl: "https://discord.gg/degods",
        walletIcon: <SolanaLinkIcon />
    },
    {
        avatarUrl: '/images/community/avatars/Picture (7).png',
        backUrl: '/images/community/backs/BG (10).png',
        communityName: 'Solana Monkey Business',
        collectionName: 'solana_monkey_business',
        memberNumber: 2800,
        totalSupply: 5000,
        icon: <MemberIcon />,
        description: "SMB is a collection of 5000 unique randomly generated SolanaMonkeys stored on the blockchain. With their accessibility-oriented design, the monkey's goal is to invade the Solana blockchain with as many individuals as possible, building a large community around them.",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        websiteUrl: "http://solanamonkey.business/ ",
        twitterUrl: "https://twitter.com/SolanaMBS",
        discordUrl: "https://discord.gg/solanamonkey",
        walletIcon: <SolanaLinkIcon />
    },
    {
        avatarUrl: '/images/community/avatars/Picture (5).png',
        backUrl: '/images/community/backs/BG (9).png',
        communityName: 'Degenerate Ape Academy',
        collectionName: 'degenerate_ape_academy',
        memberNumber: 4500,
        totalSupply: 10000,
        icon: <MemberIcon />,
        description: "Our mission here at the academy is simple: Take 10,000 of the smoothest brained apes, put them all in one location and let the mayhem ensue. The academy was founded on the principles of friendship making, crayon eating and absolute, unregulated, deplorable, degenerate behaviour.",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        websiteUrl: "https://degenape.academy/",
        twitterUrl: "https://twitter.com/DegenApeAcademy",
        discordUrl: "https://discord.gg/degenapeacademy",
        walletIcon: <SolanaLinkIcon />
    },
    {
        avatarUrl: '/images/community/avatars/Picture (9).png',
        backUrl: '/images/community/backs/BG (7).png',
        communityName: 'The Fracture - SolGods',
        collectionName: 'solgods',
        memberNumber: 3000,
        totalSupply: 6666,
        icon: <MemberIcon />,
        description: "Inspired by metaphysical artist Giorgio de Chirico. The Gods are the legacy 6666 collection within 'The Fracture'. A Brand Born in Blockchain.",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        websiteUrl: "https://www.thefracture.io/",
        twitterUrl: "https://twitter.com/TheFracture_",
        discordUrl: "https://discord.gg/solgods	https://www.thefracture.io/",
        walletIcon: <SolanaLinkIcon />
    },
    {
        avatarUrl: '/images/community/avatars/Picture (4).png',
        backUrl: '/images/community/backs/BG (4).png',
        communityName: 'Famous Fox Federation',
        collectionName: 'famous_fox_federation',
        memberNumber: 3800,
        totalSupply: 7800,
        icon: <MemberIcon />,
        description: "The Famous Fox Federation, an independent organization of the most fabulously famous foxes on the Blockchain.",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        websiteUrl: "https://aurory.io/",
        twitterUrl: "https://twitter.com/FamousFoxFed",
        discordUrl: "https://discord.gg/aurory",
        walletIcon: <SolanaLinkIcon />
    }
]

export const games: ItemProps[] = [
    {
        avatarUrl: '/images/community/avatars/webb.png',
        backUrl: '/images/community/backs/webb.jpeg',
        itemUrl: '/images/community/posters/webb.png',
        communityName: 'WorldWideWebb',
        collectionName: 'Ethereum',
        memberNumber: 2400,
        totalSupply: 1100,
        icon: <MemberIcon />,
        description: "Worldwide Webb is an interoperable pixel art MMORPG metaverse game giving utility to popular NFT projects. The game uses NFTs for in-game avatars, pets, lands, NFT Items , and quests. Deployed with a build-first mentality by a group of crypto-native game developers, artists, coders, and marketers; rapidly pushing out new technologies and applications.",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        iframeUrl: "https://beta.webb.blue/",
        websiteUrl: "https://webb.game/",
        twitterUrl: "https://www.twitter.com/Worldwide_WEB3",
        discordUrl: "https://discord.gg/worldwidewebb",
        walletIcon: <EthereumIcon />,
        galleryImages: [
            '/images/games/desc.png',
            '/images/games/desc2.png',
            '/images/games/desc3.png',
        ],
        leaderboard: "/images/games/lead.png",
        lobbies: [
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            },
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            }
        ],
    },
    {
        avatarUrl: '/images/community/avatars/DoubleJump.png',
        backUrl: '/images/community/backs/DoubleJump.webp',
        itemUrl: '/images/community/posters/DoubleJump.png',
        communityName: 'Double Jump',
        collectionName: 'Solana',
        memberNumber: 2400,
        totalSupply: 1100,
        icon: <MemberIcon />,
        description: "Double Jump is the first race-to-finish, platform-royale game on Solana! Race in a mad dash against other Jumpers across the world to reach the finish line first. Demo LIVE on Eden Games: https://magiceden.io/games/double_jump",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        iframeUrl: "https://app.doublejump.wtf/demo/game-v1/",
        websiteUrl: "https://www.doublejump.wtf/",
        twitterUrl: "https://twitter.com/doublejumpwtf",
        discordUrl: "https://discord.gg/2j2MDGTWSS",
        walletIcon: <SolanaLinkIcon />,
        galleryImages: [
            '/images/games/desc.png',
            '/images/games/desc2.png',
            '/images/games/desc3.png',
        ],
        leaderboard: "/images/games/lead.png",
        lobbies: [
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            },
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            }
        ],
    },
    {
        avatarUrl: '/images/community/avatars/ave.png',
        backUrl: '/images/community/backs/Aave.gif',
        itemUrl: '/images/community/posters/aavegotchi.png',
        communityName: 'Aavegotchi',
        collectionName: 'Aavegotchi',
        memberNumber: 5000,
        totalSupply: 2850,
        icon: <MemberIcon />,
        description: "A yield-generating NFT that doubles as a digital pet. Take care of them, and they’ll take care of you ^_^",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        iframeUrl: "https://app.aavegotchi.com/",
        websiteUrl: "https://www.aavegotchi.com/",
        twitterUrl: "https://twitter.com/aavegotchi",
        discordUrl: "#",
        walletIcon: <SolanaLinkIcon />,
        galleryImages: [
            '/images/games/desc.png',
            '/images/games/desc2.png',
            '/images/games/desc3.png',
        ],
        leaderboard: "/images/games/lead.png",
        lobbies: [
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            },
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            }
        ],
    },
    {
        avatarUrl: '/images/community/avatars/Oncyber.png',
        backUrl: '/images/community/backs/Oncyber.png',
        itemUrl: '/images/community/posters/Oncyber.png',
        communityName: 'OnCyber',
        collectionName: 'Ethereum',
        memberNumber: 8000,
        totalSupply: 37000,
        icon: <MemberIcon />,
        description: "A multiverse for creators, oncyber is the easiest way for artists and collectors to show their digital assets (NFTs) in fully immersive experiences (3D/VR), for free. Holding an item from any of these collections allows you to use it as a 3D exhibition space for your digital assets oncyber.io/create",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        iframeUrl: "https://oncyber.io/6529om/",
        websiteUrl: "http://oncyber.io/",
        twitterUrl: "https://www.twitter.com/oncyber",
        discordUrl: "#",
        walletIcon: <SolanaLinkIcon />,
        galleryImages: [
            '/images/games/desc.png',
            '/images/games/desc2.png',
            '/images/games/desc3.png',
        ],
        leaderboard: "/images/games/lead.png",
        lobbies: [
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            },
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            }
        ],
    },
    {
        avatarUrl: '/images/community/avatars/Picture (18).png',
        backUrl: '/images/community/backs/BG (18).png',
        itemUrl: '/images/community/posters/Decentraland.png',
        communityName: 'Decentraland',
        collectionName: 'Decentraland',
        memberNumber: 5700,
        totalSupply: 1234,
        icon: <MemberIcon />,
        description: "Decentraland is a user-owned, Ethereum-based virtual world where you can play, explore, and interact with games and activities. You can also purchase parcels of land on which to build your own environments, marketplaces, and applications.",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        iframeUrl: "https://play.decentraland.org/",
        websiteUrl: "https://decentraland.org/",
        twitterUrl: "https://www.twitter.com/decentraland",
        discordUrl: "https://discord.gg/svZP5W7tmq",
        walletIcon: <SolanaLinkIcon />,
        galleryImages: [
            '/images/games/desc.png',
            '/images/games/desc2.png',
            '/images/games/desc3.png',
        ],
        leaderboard: "/images/games/lead.png",
        lobbies: [
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            },
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            }
        ],
    },
    {
        avatarUrl: '/images/community/avatars/Halo.png',
        backUrl: '/images/community/backs/Halo.png',
        itemUrl: '/images/community/posters/Haloo.png',
        communityName: 'Halo',
        collectionName: 'Halo',
        memberNumber: 2400,
        totalSupply: 1100,
        icon: <MemberIcon />,
        description: "Halo is set in the twenty-sixth century, with the player assuming the role of the Master Chief, a cybernetically enhanced supersoldier. The Chief is accompanied by Cortana, an artificial intelligence. Players battle aliens as they attempt to uncover the secrets of the eponymous Halo, a ring-shaped artificial world.",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        iframeUrl: "https://www.xbox.com/en-US/play/games/halo-infinite-campaign/9NP1P1WFS0LB",
        websiteUrl: "https://ev.io",
        twitterUrl: "https://twitter.com/play_evio",
        discordUrl: "https://discord.gg/NFvd4pWemv",
        walletIcon: <SolanaLinkIcon />,
        galleryImages: [
            '/images/games/desc.png',
            '/images/games/desc2.png',
            '/images/games/desc3.png',
        ],
        leaderboard: "/images/games/lead.png",
        lobbies: [
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            },
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            }
        ],
    },
    {
        avatarUrl: '/images/community/avatars/Picture (6).png',
        backUrl: '/images/community/backs/BG (11).png',
        itemUrl: '/images/community/posters/MiniRoyale.png',
        communityName: 'MiniRoyale',
        collectionName: 'MiniRoyale',
        memberNumber: 5700,
        totalSupply: 1234,
        icon: <MemberIcon />,
        description: "Mini Royale: Nations is a community-owned skill-based shooter set on top of an ever-evolving social strategy game.",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        iframeUrl: "https://miniroyale.io/",
        websiteUrl: "https://webb.game/",
        twitterUrl: "https://www.twitter.com/Worldwide_WEB3",
        discordUrl: "https://discord.gg/worldwidewebb",
        walletIcon: <SolanaLinkIcon />,
        galleryImages: [
            '/images/games/desc.png',
            '/images/games/desc2.png',
            '/images/games/desc3.png',
        ],
        leaderboard: "/images/games/lead.png",
        lobbies: [
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            },
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            }
        ],
    },
    {
        avatarUrl: '/images/community/avatars/HeroesEmpire.png',
        backUrl: '/images/community/backs/heroes&empire.jpeg',
        itemUrl: '/images/community/posters/HeroesEmpires.png',
        communityName: 'Heroes & Empires',
        collectionName: 'Ethereum',
        memberNumber: 2400,
        totalSupply: 1100,
        icon: <MemberIcon />,
        description: "Heroes & Empires has exquisitely digital collectibles created using blockchain technology. Each collectible is matchless, genuine and varies in rarity.",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        iframeUrl: "https://play.heroesempires.com/",
        websiteUrl: "https://heroesempires.com/",
        twitterUrl: "https://twitter.com/HeroesEmpires",
        discordUrl: "https://discord.com/invite/HeroesEmpires",
        walletIcon: <EthereumIcon />,
        galleryImages: [
            '/images/games/desc.png',
            '/images/games/desc2.png',
            '/images/games/desc3.png',
        ],
        leaderboard: "/images/games/lead.png",
        lobbies: [
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            },
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            }
        ],
    },
    {
        avatarUrl: '/images/community/avatars/PanzerDogs.png',
        backUrl: '/images/community/backs/PanzerDogs.jpeg',
        itemUrl: '/images/community/posters/Panzer.png',
        communityName: 'PanzerDogs',
        collectionName: 'Solana',
        memberNumber: 2400,
        totalSupply: 1100,
        icon: <MemberIcon />,
        description: "Double Jump is the first race-to-finish, platform-royale game on Solana! Race in a mad dash against other Jumpers across the world to reach the finish line first. Demo LIVE on Eden Games: https://magiceden.io/games/double_jump",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        iframeUrl: "https://play.panzerdogs.io/",
        websiteUrl: "https://home.panzerdogs.io/",
        twitterUrl: "https://twitter.com/panzerdogs",
        discordUrl: "https://discord.gg/panzerdogs",
        walletIcon: <SolanaLinkIcon />,
        galleryImages: [
            '/images/games/desc.png',
            '/images/games/desc2.png',
            '/images/games/desc3.png',
        ],
        leaderboard: "/images/games/lead.png",
        lobbies: [
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            },
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            }
        ],
    },
    {
        avatarUrl: '/images/community/avatars/RuggedReverants.gif',
        backUrl: '/images/community/backs/RuggedReverants.png',
        itemUrl: '/images/community/posters/Rugged.png',
        communityName: 'Rugged Revenants',
        collectionName: 'Solana',
        memberNumber: 2400,
        totalSupply: 1100,
        icon: <MemberIcon />,
        description: "Rugged Revenants is an NFT game where you can exact your Rugged Revenge by turning your Rugged NFTs into valuable NFTs within thriving communities, building fun projects! When you win the Rugged Revenants, not only do you destroy Rugged NFTs, you win valuable NFTs, giving your Rugs new life :).",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        iframeUrl: "https://v6p9d9t4.ssl.hwcdn.net/html/6065861/RuggedRevenantsMagicEden/index.html",
        websiteUrl: "https://ruggedrevenants.io/",
        twitterUrl: "https://twitter.com/ruggedrevenants/",
        discordUrl: "https://discord.gg/ruggedrevenants",
        walletIcon: <SolanaLinkIcon />,
        galleryImages: [
            '/images/games/desc.png',
            '/images/games/desc2.png',
            '/images/games/desc3.png',
        ],
        leaderboard: "/images/games/lead.png",
        lobbies: [
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            },
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            }
        ],
    },
    {
        avatarUrl: '/images/community/avatars/Picture (3).png',
        backUrl: '/images/community/backs/BG (3).png',
        itemUrl: '/images/community/posters/evio.png',
        communityName: 'Ev.io',
        collectionName: 'Solana',
        memberNumber: 2400,
        totalSupply: 1100,
        icon: <MemberIcon />,
        description: "Experience the Halo of Web3: PvP, PvE, 10+ maps, 20+ weapons, 5 game modes, private games, parties and earn WL tokens. All playable now from the comfort of your browser.",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        iframeUrl: "http://ev.io/",
        websiteUrl: "http://ev.io/",
        twitterUrl: "https://twitter.com/play_evio",
        discordUrl: "https://discord.gg/NFvd4pWemv",
        walletIcon: <SolanaLinkIcon />,
        galleryImages: [
            '/images/games/desc.png',
            '/images/games/desc2.png',
            '/images/games/desc3.png',
        ],
        leaderboard: "/images/games/lead.png",
        lobbies: [
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            },
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            }
        ],
    },
    {
        avatarUrl: '/images/community/avatars/Splinterlands.png',
        backUrl: '/images/community/backs/Splinterlands.png',
        itemUrl: '/images/community/posters/Splinterlands.png',
        communityName: 'SplinterLand',
        collectionName: 'Solana',
        memberNumber: 2400,
        totalSupply: 1100,
        icon: <MemberIcon />,
        description: "Splinterlands makes it easy to earn on a daily basis. Players can win rewards from Tournaments, Ranked play, and Quests! No matter what your skill level ",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        iframeUrl: "https://next.splinterlands.com/login/email",
        websiteUrl: "https://splinterlands.com/",
        twitterUrl: "https://twitter.com/splinterlands",
        discordUrl: "https://discord.gg/splinterlands",
        walletIcon: <SolanaLinkIcon />,
        galleryImages: [
            '/images/games/desc.png',
            '/images/games/desc2.png',
            '/images/games/desc3.png',
        ],
        leaderboard: "/images/games/lead.png",
        lobbies: [
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            },
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            }
        ],
    },
    {
        avatarUrl: '/images/community/avatars/Somnium.webp',
        backUrl: '/images/community/backs/Somnium.png',
        itemUrl: '/images/community/posters/Somnium.png',
        communityName: 'Somnium',
        collectionName: 'Solana',
        memberNumber: 2400,
        totalSupply: 1100,
        icon: <MemberIcon />,
        description: "A VR world which is fully interconnected and seamless. Fully accessible from any device: PC & VR clients for user's Desktop or an immersive VR experience",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        iframeUrl: "https://somniumspace.com/parcel/",
        websiteUrl: "https://somniumspace.com//",
        twitterUrl: "https://twitter.com/somnium",
        discordUrl: "https://discord.gg/somnium",
        walletIcon: <SolanaLinkIcon />,
        galleryImages: [
            '/images/games/desc.png',
            '/images/games/desc2.png',
            '/images/games/desc3.png',
        ],
        leaderboard: "/images/games/lead.png",
        lobbies: [
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            },
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            }
        ],
    },
    {
        avatarUrl: '/images/community/avatars/Picture (8).png',
        backUrl: '/images/community/backs/BG (6).png',
        itemUrl: '/images/community/posters/Portals.png',
        communityName: 'Portals',
        collectionName: 'Solana',
        memberNumber: 2400,
        totalSupply: 1100,
        icon: <MemberIcon />,
        description: "The Metaverse on Solana. Explore downtown, invite friends, chat, build, show off your NFTs — right in the browser.",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        iframeUrl: "https://preview.theportal.to/?room=835f9e03-9d3b-4b55-9f0b-dd8f28174210-winterfest/",
        websiteUrl: "https://theportal.to/",
        twitterUrl: "https://twitter.com/_portals_",
        discordUrl: "https://discord.gg/9uMBaCPW3f",
        walletIcon: <SolanaLinkIcon />,
        galleryImages: [
            '/images/games/desc.png',
            '/images/games/desc2.png',
            '/images/games/desc3.png',
        ],
        leaderboard: "/images/games/lead.png",
        lobbies: [
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            },
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            }
        ],
    },
    {
        avatarUrl: '/images/community/avatars/Minecraft.png',
        backUrl: '/images/community/backs/minecraft.jpeg',
        itemUrl: '/images/community/posters/minecraft.webp',
        communityName: 'Minecraft',
        collectionName: 'None',
        memberNumber: 2400,
        totalSupply: 1100,
        icon: <MemberIcon />,
        description: "Worldwide Webb is an interoperable pixel art MMORPG metaverse game giving utility to popular NFT projects. The game uses NFTs for in-game avatars, pets, lands, NFT Items , and quests. Deployed with a build-first mentality by a group of crypto-native game developers, artists, coders, and marketers; rapidly pushing out new technologies and applications.",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        iframeUrl: "https://classic.minecraft.net/?join=kQw1fvgi9-erv58J",
        websiteUrl: "https://classic.minecraft.net/",
        twitterUrl: "https://www.twitter.com/Worldwide_WEB3",
        discordUrl: "https://discord.gg/worldwidewebb",
        walletIcon: <EthereumIcon />,
        galleryImages: [
            '/images/games/desc.png',
            '/images/games/desc2.png',
            '/images/games/desc3.png',
        ],
        leaderboard: "/images/games/lead.png",
        lobbies: [
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            },
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            }
        ],
    },
    {
        avatarUrl: '/images/community/avatars/Picture (1).png',
        backUrl: '/images/community/backs/BG (1).png',
        itemUrl: '/images/community/posters/Aurory.png',
        communityName: 'Aurory',
        collectionName: 'None',
        memberNumber: 2400,
        totalSupply: 1100,
        icon: <MemberIcon />,
        description: "Worldwide Webb is an interoperable pixel art MMORPG metaverse game giving utility to popular NFT projects. The game uses NFTs for in-game avatars, pets, lands, NFT Items , and quests. Deployed with a build-first mentality by a group of crypto-native game developers, artists, coders, and marketers; rapidly pushing out new technologies and applications.",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        iframeUrl: "https://app.aurory.io/",
        websiteUrl: "https://aurory.io/",
        twitterUrl: "https://twitter.com/AuroryProject",
        discordUrl: "https://discord.gg/aurory",
        walletIcon: <EthereumIcon />,
        galleryImages: [
            '/images/games/desc.png',
            '/images/games/desc2.png',
            '/images/games/desc3.png',
        ],
        leaderboard: "/images/games/lead.png",
        lobbies: [
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            },
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            }
        ],
    },
    {
        avatarUrl: '/images/community/avatars/DefiLand.png',
        backUrl: '/images/community/backs/DefiLand.jpeg',
        itemUrl: '/images/community/posters/DefiLand.png',
        communityName: 'DefiLand',
        collectionName: 'None',
        memberNumber: 2400,
        totalSupply: 1100,
        icon: <MemberIcon />,
        description: "DeFi, Gaming, NFTs and Metaverse reimagined in a new and all-in-one game:tractor::tractor::tractor:Join to farm, trade, compete, craft and more. Public beta is now open!",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        iframeUrl: "https://play.defiland.app/",
        websiteUrl: "https://defiland.app/",
        twitterUrl: "https://twitter.com/DeFi_Land",
        discordUrl: "https://discord.com/invite/defiland",
        walletIcon: <EthereumIcon />,
        galleryImages: [
            '/images/games/desc.png',
            '/images/games/desc2.png',
            '/images/games/desc3.png',
        ],
        leaderboard: "/images/games/lead.png",
        lobbies: [
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            },
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            }
        ],
    },
    {
        avatarUrl: '/images/community/avatars/DefiLand.png',
        backUrl: '/images/community/backs/Subway.png',
        itemUrl: '/images/community/posters/subway.png',
        communityName: 'Subway Surfers',
        collectionName: 'None',
        memberNumber: 2400,
        totalSupply: 1100,
        icon: <MemberIcon />,
        description: "SWAG!",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        iframeUrl: "https://www.itslearning.tk/subway-surfers/",
        websiteUrl: "https://defiland.app/",
        twitterUrl: "https://twitter.com/DeFi_Land",
        discordUrl: "https://discord.com/invite/defiland",
        walletIcon: <EthereumIcon />,
        galleryImages: [
            '/images/games/desc.png',
            '/images/games/desc2.png',
            '/images/games/desc3.png',
        ],
        leaderboard: "/images/games/lead.png",
        lobbies: [
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            },
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            }
        ],
    },
    {
        avatarUrl: '/images/community/avatars/DefiLand.png',
        backUrl: '/images/community/backs/2048.png',
        itemUrl: '/images/community/posters/2048.png',
        communityName: '2048',
        collectionName: 'None',
        memberNumber: 2400,
        totalSupply: 1100,
        icon: <MemberIcon />,
        description: "2048!",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        iframeUrl: "https://2048-gamma-ten.vercel.app/",
        websiteUrl: "https://defiland.app/",
        twitterUrl: "https://twitter.com/DeFi_Land",
        discordUrl: "https://discord.com/invite/defiland",
        walletIcon: <EthereumIcon />,
        galleryImages: [
            '/images/games/desc.png',
            '/images/games/desc2.png',
            '/images/games/desc3.png',
        ],
        leaderboard: "/images/games/lead.png",
        lobbies: [
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            },
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            }
        ],
    },
    {
        avatarUrl: '/images/community/avatars/DefiLand.png',
        backUrl: '/images/community/backs/tower.png',
        itemUrl: '/images/community/posters/Tower.png',
        communityName: 'Tower',
        collectionName: 'None',
        memberNumber: 2400,
        totalSupply: 1100,
        icon: <MemberIcon />,
        description: "Tower!",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        iframeUrl: "https://iamkun.github.io/tower_game/",
        websiteUrl: "https://defiland.app/",
        twitterUrl: "https://twitter.com/DeFi_Land",
        discordUrl: "https://discord.com/invite/defiland",
        walletIcon: <EthereumIcon />,
        galleryImages: [
            '/images/games/desc.png',
            '/images/games/desc2.png',
            '/images/games/desc3.png',
        ],
        leaderboard: "/images/games/lead.png",
        lobbies: [
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            },
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            }
        ],
    },
    {
        avatarUrl: '/images/community/avatars/DefiLand.png',
        backUrl: '/images/community/backs/Subway.png',
        itemUrl: '/images/community/posters/flappy.webp',
        communityName: 'Tower',
        collectionName: 'None',
        memberNumber: 2400,
        totalSupply: 1100,
        icon: <MemberIcon />,
        description: "SWAG!",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        iframeUrl: "https://flappybird.ee/",
        websiteUrl: "https://defiland.app/",
        twitterUrl: "https://twitter.com/DeFi_Land",
        discordUrl: "https://discord.com/invite/defiland",
        walletIcon: <EthereumIcon />,
        galleryImages: [
            '/images/games/desc.png',
            '/images/games/desc2.png',
            '/images/games/desc3.png',
        ],
        leaderboard: "/images/games/lead.png",
        lobbies: [
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            },
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            }
        ],
    },
    {
        avatarUrl: '/images/community/avatars/DefiLand.png',
        backUrl: '/images/community/backs/Subway.png',
        itemUrl: '/images/community/posters/HexGL.png',
        communityName: 'Tower',
        collectionName: 'None',
        memberNumber: 2400,
        totalSupply: 1100,
        icon: <MemberIcon />,
        description: "SWAG!",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        iframeUrl: "http://hexgl.bkcore.com/play/",
        websiteUrl: "https://defiland.app/",
        twitterUrl: "https://twitter.com/DeFi_Land",
        discordUrl: "https://discord.com/invite/defiland",
        walletIcon: <EthereumIcon />,
        galleryImages: [
            '/images/games/desc.png',
            '/images/games/desc2.png',
            '/images/games/desc3.png',
        ],
        leaderboard: "/images/games/lead.png",
        lobbies: [
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            },
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            }
        ],
    },
    {
        avatarUrl: '/images/community/avatars/DefiLand.png',
        backUrl: '/images/community/backs/CandyCrush.jpeg',
        itemUrl: '/images/community/posters/CandyCrush.jpeg',
        communityName: 'Candy Crush',
        collectionName: 'None',
        memberNumber: 2400,
        totalSupply: 1100,
        icon: <MemberIcon />,
        description: "SWAG!",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        iframeUrl: "https://tobsef.github.io/Candy-Crush-Clone/",
        websiteUrl: "https://defiland.app/",
        twitterUrl: "https://twitter.com/DeFi_Land",
        discordUrl: "https://discord.com/invite/defiland",
        walletIcon: <EthereumIcon />,
        galleryImages: [
            '/images/games/desc.png',
            '/images/games/desc2.png',
            '/images/games/desc3.png',
        ],
        leaderboard: "/images/games/lead.png",
        lobbies: [
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            },
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            }
        ],
    },
    {
        avatarUrl: '/images/community/avatars/DefiLand.png',
        backUrl: '/images/community/backs/Tetris.jpeg',
        itemUrl: '/images/community/posters/Tetris.png',
        communityName: 'Tetris',
        collectionName: 'None',
        memberNumber: 2400,
        totalSupply: 1100,
        icon: <MemberIcon />,
        description: "SWAG!",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        iframeUrl: "https://reactgular.github.io/tetromino/",
        websiteUrl: "https://defiland.app/",
        twitterUrl: "https://twitter.com/DeFi_Land",
        discordUrl: "https://discord.com/invite/defiland",
        walletIcon: <EthereumIcon />,
        galleryImages: [
            '/images/games/desc.png',
            '/images/games/desc2.png',
            '/images/games/desc3.png',
        ],
        leaderboard: "/images/games/lead.png",
        lobbies: [
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            },
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            }
        ],
    },
    {
        avatarUrl: '/images/community/avatars/DefiLand.png',
        backUrl: '/images/community/backs/wordle_banner.png',
        itemUrl: '/images/community/posters/wordle.webp',
        communityName: 'Worlde',
        collectionName: 'None',
        memberNumber: 2400,
        totalSupply: 1100,
        icon: <MemberIcon />,
        description: "SWAG!",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        iframeUrl: "https://vegeta897.github.io/wordle-peaks/",
        websiteUrl: "https://defiland.app/",
        twitterUrl: "https://twitter.com/DeFi_Land",
        discordUrl: "https://discord.com/invite/defiland",
        walletIcon: <EthereumIcon />
    },
    {
        avatarUrl: '/images/community/avatars/DefiLand.png',
        backUrl: '/images/community/backs/wordle_banner.png',
        itemUrl: '/images/community/posters/unnamed (2).png',
        communityName: 'Pop',
        collectionName: 'None',
        memberNumber: 2400,
        totalSupply: 1100,
        icon: <MemberIcon />,
        description: "SWAG!",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        iframeUrl: "https://ourcade.github.io/coronavirus-pop-phaser/",
        websiteUrl: "https://defiland.app/",
        twitterUrl: "https://twitter.com/DeFi_Land",
        discordUrl: "https://discord.com/invite/defiland",
        walletIcon: <EthereumIcon />,
        galleryImages: [
            '/images/games/desc.png',
            '/images/games/desc2.png',
            '/images/games/desc3.png',
        ],
        leaderboard: "/images/games/lead.png",
        lobbies: [
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            },
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            }
        ],
    },
    {
        avatarUrl: '/images/community/avatars/DefiLand.png',
        backUrl: '/images/community/backs/wordle_banner.png',
        itemUrl: '/images/community/posters/Chess.png',
        communityName: 'Chess',
        collectionName: 'None',
        memberNumber: 2400,
        totalSupply: 1100,
        icon: <MemberIcon />,
        description: "SWAG!",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        iframeUrl: "https://chess-react-app.netlify.app/game",
        websiteUrl: "https://defiland.app/",
        twitterUrl: "https://twitter.com/DeFi_Land",
        discordUrl: "https://discord.com/invite/defiland",
        walletIcon: <EthereumIcon />,
        galleryImages: [
            '/images/games/desc.png',
            '/images/games/desc2.png',
            '/images/games/desc3.png',
        ],
        leaderboard: "/images/games/lead.png",
        lobbies: [
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            },
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            }
        ],
    },
    {
        avatarUrl: '/images/community/avatars/DefiLand.png',
        backUrl: '/images/community/backs/wordle_banner.png',
        itemUrl: '/images/community/posters/woodoku.png',
        communityName: 'Woodoku',
        collectionName: 'None',
        memberNumber: 2400,
        totalSupply: 1100,
        icon: <MemberIcon />,
        description: "SWAG!",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        iframeUrl: "https://html5.gamedistribution.com/9ed0d4b243484a6cb2456068085e0aa2/?gd_sdk_referrer_url=https%3A%2F%2Fgeometrydash.io%2Fwoodoku",
        websiteUrl: "https://defiland.app/",
        twitterUrl: "https://twitter.com/DeFi_Land",
        discordUrl: "https://discord.com/invite/defiland",
        walletIcon: <EthereumIcon />,
        galleryImages: [
            '/images/games/desc.png',
            '/images/games/desc2.png',
            '/images/games/desc3.png',
        ],
        leaderboard: "/images/games/lead.png",
        lobbies: [
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            },
            {
                title: "Aurory Hatch Event",
                startDate: "11/22/22",
                reward: 144,
                unit: "AURY",
                avatar: "/images/community/img/one.png",
                mainMember: "monkeDAO",
                backgroundImage:"/images/games/event.png"
            }
        ],
    },
]
export const stats: StatsItemProps[] = [
    {
        icon: <MembersIcon />,
        count: 445,
        name: 'Members'
    },
    {
        icon: <TotalSupplyIcon />,
        count: 500,
        name: 'Total supply'
    },
    {
        icon: <FloorPriceIcon />,
        count: 0.063,
        unit: 'SOL',
        name: 'Floor price'
    },
]

export const members: AvatarProps[] = [
    {
        imgUrl: '/images/community/members/Avatar.png'
    },
    {
        imgUrl: '/images/community/members/Avatar (1).png'
    },
    {
        imgUrl: '/images/community/members/Avatar (2).png'
    },
    {
        imgUrl: '/images/community/members/Avatar (3).png'
    },
    {
        imgUrl: '/images/community/members/Avatar (4).png'
    },
    {
        imgUrl: '/images/community/members/Avatar (5).png'
    },
    {
        imgUrl: '/images/community/members/Avatar (6).png'
    },
    {
        imgUrl: '/images/community/members/Avatar (7).png'
    },
    {
        imgUrl: '/images/community/members/Avatar (8).png'
    },
    {
        imgUrl: '/images/community/members/Avatar (9).png'
    },
    {
        imgUrl: '/images/community/members/Avatar (10).png'
    },
    {
        imgUrl: '/images/community/members/Avatar (11).png'
    },
    {
        imgUrl: '/images/community/members/Avatar (12).png'
    },
    {
        imgUrl: '/images/community/members/Avatar (13).png'
    },
    {
        imgUrl: '/images/community/members/Avatar (14).png'
    },
    {
        imgUrl: '/images/community/members/Avatar (15).png'
    },
    {
        imgUrl: '/images/community/members/Avatar (16).png'
    },
]

export const rooms: RoomItemProps[] = [
    {
        price: 5,
        imgUrl: "/images/experience/room_images/room_1.jpg",
        valueIcon: <EthereumIcon />,
        walletIcon: <SolanaLinkIcon />,
        collectionName: "CollectionName",
        roomName: "The Vincent Van Dough Gallery",
    },
    {
        price: 5,
        imgUrl: "/images/experience/room_images/room_2.jpg",
        valueIcon: <EthereumIcon />,
        walletIcon: <SolanaIcon />,
        collectionName: "CollectionName",
        roomName: "Teufzer",
    },
    {
        price: 5,
        imgUrl: "/images/experience/room_images/room_3.jpg",
        valueIcon: <EthereumIcon />,
        walletIcon: <SolanaIcon />,
        collectionName: "CollectionName",
        roomName: "RESSURECTION enriched with death",
    },
    {
        price: 5,
        imgUrl: "/images/experience/room_images/room_4.jpg",
        valueIcon: <EthereumIcon />,
        walletIcon: <SolanaIcon />,
        collectionName: "Solana Money Boys",
        roomName: "Meta trap house",
    },
    {
        price: 5,
        imgUrl: "/images/experience/room_images/room_5.jpg",
        valueIcon: <EthereumIcon />,
        walletIcon: <SolanaIcon />,
        collectionName: "CollectionName",
        roomName: "This room is really fantastic",
    },
    {
        price: 5,
        imgUrl: "/images/experience/room_images/room_6.jpg",
        valueIcon: <EthereumIcon />,
        walletIcon: <SolanaLinkIcon />,
        collectionName: "CollectionName",
        roomName: "The Vincent Van Dough Gallery",
    },
    {
        price: 5,
        imgUrl: "/images/experience/room_images/room_7.jpg",
        valueIcon: <EthereumIcon />,
        walletIcon: <SolanaIcon />,
        collectionName: "CollectionName",
        roomName: "Teufzer",
    },
    {
        price: 5,
        imgUrl: "/images/experience/room_images/room_8.jpg",
        valueIcon: <EthereumIcon />,
        walletIcon: <SolanaIcon />,
        collectionName: "CollectionName",
        roomName: "RESSURECTION enriched with death",
    },
    {
        price: 5,
        imgUrl: "/images/experience/room_images/room_9.jpg",
        valueIcon: <EthereumIcon />,
        walletIcon: <SolanaIcon />,
        collectionName: "Solana Money Boys",
        roomName: "Meta trap house",
    },
    {
        price: 5,
        imgUrl: "/images/experience/room_images/room_10.jpg",
        valueIcon: <EthereumIcon />,
        walletIcon: <SolanaIcon />,
        collectionName: "CollectionName",
        roomName: "This room is really fantastic",
    },
    {
        price: 5,
        imgUrl: "/images/experience/room_images/room_11.jpg",
        valueIcon: <EthereumIcon />,
        walletIcon: <SolanaIcon />,
        collectionName: "Solana Money Boys",
        roomName: "Meta trap house",
    },
    {
        price: 5,
        imgUrl: "/images/experience/room_images/room_12.jpg",
        valueIcon: <EthereumIcon />,
        walletIcon: <SolanaIcon />,
        collectionName: "CollectionName",
        roomName: "This room is really fantastic",
    },

]

export const categoriesData: FilterItemProps[] = [
    {
        name: 'All categories',
        active: true
    },
    {
        name: 'Rooms',
        active: false
    },
    {
        name: 'NFTs',
        active: false
    }
]

export const collectionsData: FilterItemProps[] = [
    {
        name: 'All Collections',
        active: true
    },
    {
        name: 'Solarity',
        active: false
    },
    {
        name: 'Monkeys',
        active: false
    },
    {
        name: 'Goblintown',
        active: false
    },
    {
        name: 'Moonbirds Odities',
        active: false
    },
    {
        name: 'Chimpers',
        active: false
    },
    {
        name: 'Azuki',
        active: false
    },
    {
        name: 'Cuiosities',
        active: false
    },
    {
        name: 'Moonbirds',
        active: false
    },
    {
        name: 'CloneX',
        active: false
    },
    {
        name: 'Chimpers',
        active: false
    },
    {
        name: 'Azuki',
        active: false
    },
    {
        name: 'Cuiosities',
        active: false
    },
    {
        name: 'Moonbirds',
        active: false
    },
    {
        name: 'CloneX',
        active: false
    }
]

export const GUILDS: ItemProps[] = [
    {
        avatarUrl: '/images/daos/degods.png',
        backUrl: '/images/community/backs/degods_bg.png',
        communityName: 'DeGods Guild',
        memberNumber: 445,
        icon: <MemberIcon />,
        description: 'Solana Money Boys is thrilled to announce its debut PFP (profile picture) collection—The Loaded Lions. The drop is the first native platform-owned jkajfadfjalsd jkflkjadlfk',
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        walletIcon: <SolanaLinkIcon />
    },
    {
        avatarUrl: '/images/daos/degods.png',
        backUrl: '/images/community/backs/degods_bg.png',
        communityName: 'DeGods Guild',
        memberNumber: 445,
        icon: <MemberIcon />,
        description: 'Solana Money Boys is thrilled to announce its debut PFP (profile picture) collection—The Loaded Lions. The drop is the first native platform-owned jkajfadfjalsd jkflkjadlfk',
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        walletIcon: <SolanaLinkIcon />
    },
    {
        avatarUrl: '/images/daos/degods.png',
        backUrl: '/images/community/backs/degods_bg.png',
        communityName: 'DeGods Guild',
        memberNumber: 445,
        icon: <MemberIcon />,
        description: 'Solana Money Boys is thrilled to announce its debut PFP (profile picture) collection—The Loaded Lions. The drop is the first native platform-owned jkajfadfjalsd jkflkjadlfk',
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        walletIcon: <SolanaLinkIcon />
    },
    {
        avatarUrl: '/images/daos/degods.png',
        backUrl: '/images/community/backs/degods_bg.png',
        communityName: 'DeGods Guild',
        memberNumber: 445,
        icon: <MemberIcon />,
        description: 'Solana Money Boys is thrilled to announce its debut PFP (profile picture) collection—The Loaded Lions. The drop is the first native platform-owned jkajfadfjalsd jkflkjadlfk',
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        walletIcon: <SolanaLinkIcon />
    },
];