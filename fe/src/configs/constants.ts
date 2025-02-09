import { IPackage, TOKEN } from "../types";

export const NUMBER_PATTERN = '/^[0-9]*\.?[0-9]*$/';
export const  IPT_PRICE = 0.2;

export const fonts = {
  DMSANS_BOLD: 'DMSans-Bold',
  DMSANS_BOLD_ITALIC: 'DMSans-BoldItalic',
  DMSANS_ITALIC: 'DMSans-Italic',
  DMSANS_MEDIUM: 'DMSans-Medium',
  DMSANS_MEDIUM_ITALIC: 'DMSans-MediumItalic',
  DMSANS_REGULAR: 'DMSans-Regular',
  NOTOSANS : "NotoSans-Bold"

}

export const menus = [
  { name: "Market", url: "/" },
  { name: "Invest", url: "/invest" },
  { name: "Deposit/Withdraw", url: "/deposit-withdraw" },
  { name: "Staking", url: "/staking" },
  { name: "Lending", url: "/lending" },
  { name: "Auction", url: "/auction" },
  { name: "My NFT", url: "/my-nft" },
];

export const packages: IPackage[] = [
  {
    key: 'bnb-01',
    name: 'BNB PACKAGE 01',
    amount: 10,
    bg: 'bnb-bg.jpeg',
    icon: 'bnb.png',
    token: TOKEN.TBNB,
  },
  {
    key: 'bnb-02',
    name: 'BNB PACKAGE 02',
    amount: 20,
    bg: 'bnb-bg.jpeg',
    icon: 'bnb.png',
    token: TOKEN.TBNB,
  },
  {
    key: 'bnb-03',
    name: 'BNB PACKAGE 03',
    amount: 30,
    bg: 'bnb-bg.jpeg',
    icon: 'bnb.png',
    token: TOKEN.TBNB,
  },
  {
    key: 'usdt-01',
    name: 'USDT PACKAGE 01',
    amount: 10,
    bg: 'usdt-bg.png',
    icon: 'usdt.png',
    token: TOKEN.USDT,
  },
  {
    key: 'usdt-02',
    name: 'USDT PACKAGE 02',
    amount: 20,
    bg: 'usdt-bg.png',
    icon: 'usdt.png',
    token: TOKEN.USDT,
  },
  {
    key: 'usdt-03',
    name: 'USDT PACKAGE 03',
    amount: 30,
    bg: 'usdt-bg.png',
    icon: 'usdt.png',
    token: TOKEN.USDT,
  }
]

