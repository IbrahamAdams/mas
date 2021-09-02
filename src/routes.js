import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import DashboardLayout from "src/layouts/DashboardLayout";
import HomeLayout from "src/layouts/HomeLayout";

export const routes = [

  {
    exact: true,
    path: "/",
    // layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/ConnectWallet/ConnectYorWallet")
    ),
  },
  {
    exact: true,
    path: "/connected-wallet",
    // layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/ConnectWallet/ConnectedWallet")
    ),
  },
  {
    exact: true,
    path: "/create-account",
    // layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/ConnectWallet/CreateAccount")
    ),
  },
  {
    exact: true,
    path: "/chat",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Chat/index")),
  },
  {
    exact: true,
    path: "/profile",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Profile/index")),
  },
  {
    exact: true,
    path: "/share-audience",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Profile/ShareAudience")),
  },
  {
    exact: true,
    path: "/SearchResult",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Users/Searchresult")),
  },
  {
    exact: true,
    path: "/NFT-detail",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/NFTDetail/index")),
  },

  {
    exact: true,
    path: "/refferal",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/UserSignUp/Refferal")),
  },
  {
    exact: true,
    path: "/basicinfo",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/UserSignUp/BasicInfo")),
  },
  {
    exact: true,
    path: "/socialaccounts",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/UserSignUp/SocialAccounts")),
  },
  {
    exact: true,
    path: "/profilesettings",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/UserSignUp/ProfileSetting")),
  },
  {
    exact:true,
    path: '/auctionpage',
    layout: HomeLayout,
    component: lazy(() => import ('src/views/pages/UserSignUp/AuctionPage'))
  },
  {
    exact: true,
    path: "/modal",
    component: lazy(() => import("src/views/pages/Modal")),
  },
  {
    exact: true,
    path: "/home",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Home/index")),
  },
  {
    exact: true,
    path: "/favorite",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Home/Favorite")),
  },
  {
    exact: true,
    path: "/mas-profile",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/MASProfile/index")),
  },
  // {
  //   exact: true,
  //   path: "/ShareAudience",
  //   layout: HomeLayout,
  //   component: lazy(() => import("src/views/pages/UserSignUp/ShareAudience")),
  // },
  {
    exact: true,
    path: "/404",
    component: lazy(() => import("src/views/errors/NotFound")),
  },
  {
    component: () => <Redirect to="/404" />,
  },
];
