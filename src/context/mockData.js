const mockUserData = {
  login: "john-smilga",
  id: 42133389,
  node_id: "MDQ6VXNlcjQyMTMzMzg5",
  avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/john-smilga",
  html_url: "https://github.com/john-smilga",
  followers_url: "https://api.github.com/users/john-smilga/followers",
  following_url:
    "https://api.github.com/users/john-smilga/following{/other_user}",
  gists_url: "https://api.github.com/users/john-smilga/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/john-smilga/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/john-smilga/subscriptions",
  organizations_url: "https://api.github.com/users/john-smilga/orgs",
  repos_url: "https://api.github.com/users/john-smilga/repos",
  events_url: "https://api.github.com/users/john-smilga/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/john-smilga/received_events",
  type: "User",
  site_admin: false,
  name: "John Smilga",
  company: "Coding Addict",
  blog: "www.johnsmilga.com",
  location: "Los Angeles",
  email: null,
  hireable: null,
  bio: "Creator of Coding Addict",
  twitter_username: "john_smilga",
  public_repos: 226,
  public_gists: 0,
  followers: 10906,
  following: 0,
  created_at: "2018-08-06T06:48:23Z",
  updated_at: "2022-06-06T18:20:42Z",
};

const mockFollowersData = [
  {
    login: "tarasis",
    id: 3006,
    node_id: "MDQ6VXNlcjMwMDY=",
    avatar_url: "https://avatars.githubusercontent.com/u/3006?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/tarasis",
    html_url: "https://github.com/tarasis",
    followers_url: "https://api.github.com/users/tarasis/followers",
    following_url:
      "https://api.github.com/users/tarasis/following{/other_user}",
    gists_url: "https://api.github.com/users/tarasis/gists{/gist_id}",
    starred_url: "https://api.github.com/users/tarasis/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/tarasis/subscriptions",
    organizations_url: "https://api.github.com/users/tarasis/orgs",
    repos_url: "https://api.github.com/users/tarasis/repos",
    events_url: "https://api.github.com/users/tarasis/events{/privacy}",
    received_events_url: "https://api.github.com/users/tarasis/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "elvan",
    id: 35147,
    node_id: "MDQ6VXNlcjM1MTQ3",
    avatar_url: "https://avatars.githubusercontent.com/u/35147?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/elvan",
    html_url: "https://github.com/elvan",
    followers_url: "https://api.github.com/users/elvan/followers",
    following_url: "https://api.github.com/users/elvan/following{/other_user}",
    gists_url: "https://api.github.com/users/elvan/gists{/gist_id}",
    starred_url: "https://api.github.com/users/elvan/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/elvan/subscriptions",
    organizations_url: "https://api.github.com/users/elvan/orgs",
    repos_url: "https://api.github.com/users/elvan/repos",
    events_url: "https://api.github.com/users/elvan/events{/privacy}",
    received_events_url: "https://api.github.com/users/elvan/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "cksachdev",
    id: 37770,
    node_id: "MDQ6VXNlcjM3Nzcw",
    avatar_url: "https://avatars.githubusercontent.com/u/37770?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/cksachdev",
    html_url: "https://github.com/cksachdev",
    followers_url: "https://api.github.com/users/cksachdev/followers",
    following_url:
      "https://api.github.com/users/cksachdev/following{/other_user}",
    gists_url: "https://api.github.com/users/cksachdev/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/cksachdev/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/cksachdev/subscriptions",
    organizations_url: "https://api.github.com/users/cksachdev/orgs",
    repos_url: "https://api.github.com/users/cksachdev/repos",
    events_url: "https://api.github.com/users/cksachdev/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/cksachdev/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "undencem",
    id: 40747,
    node_id: "MDQ6VXNlcjQwNzQ3",
    avatar_url: "https://avatars.githubusercontent.com/u/40747?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/undencem",
    html_url: "https://github.com/undencem",
    followers_url: "https://api.github.com/users/undencem/followers",
    following_url:
      "https://api.github.com/users/undencem/following{/other_user}",
    gists_url: "https://api.github.com/users/undencem/gists{/gist_id}",
    starred_url: "https://api.github.com/users/undencem/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/undencem/subscriptions",
    organizations_url: "https://api.github.com/users/undencem/orgs",
    repos_url: "https://api.github.com/users/undencem/repos",
    events_url: "https://api.github.com/users/undencem/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/undencem/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "pauloesantos",
    id: 46524,
    node_id: "MDQ6VXNlcjQ2NTI0",
    avatar_url: "https://avatars.githubusercontent.com/u/46524?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/pauloesantos",
    html_url: "https://github.com/pauloesantos",
    followers_url: "https://api.github.com/users/pauloesantos/followers",
    following_url:
      "https://api.github.com/users/pauloesantos/following{/other_user}",
    gists_url: "https://api.github.com/users/pauloesantos/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/pauloesantos/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/pauloesantos/subscriptions",
    organizations_url: "https://api.github.com/users/pauloesantos/orgs",
    repos_url: "https://api.github.com/users/pauloesantos/repos",
    events_url: "https://api.github.com/users/pauloesantos/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/pauloesantos/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "arthu",
    id: 55780,
    node_id: "MDQ6VXNlcjU1Nzgw",
    avatar_url: "https://avatars.githubusercontent.com/u/55780?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/arthu",
    html_url: "https://github.com/arthu",
    followers_url: "https://api.github.com/users/arthu/followers",
    following_url: "https://api.github.com/users/arthu/following{/other_user}",
    gists_url: "https://api.github.com/users/arthu/gists{/gist_id}",
    starred_url: "https://api.github.com/users/arthu/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/arthu/subscriptions",
    organizations_url: "https://api.github.com/users/arthu/orgs",
    repos_url: "https://api.github.com/users/arthu/repos",
    events_url: "https://api.github.com/users/arthu/events{/privacy}",
    received_events_url: "https://api.github.com/users/arthu/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "wxqfree",
    id: 57497,
    node_id: "MDQ6VXNlcjU3NDk3",
    avatar_url: "https://avatars.githubusercontent.com/u/57497?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/wxqfree",
    html_url: "https://github.com/wxqfree",
    followers_url: "https://api.github.com/users/wxqfree/followers",
    following_url:
      "https://api.github.com/users/wxqfree/following{/other_user}",
    gists_url: "https://api.github.com/users/wxqfree/gists{/gist_id}",
    starred_url: "https://api.github.com/users/wxqfree/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/wxqfree/subscriptions",
    organizations_url: "https://api.github.com/users/wxqfree/orgs",
    repos_url: "https://api.github.com/users/wxqfree/repos",
    events_url: "https://api.github.com/users/wxqfree/events{/privacy}",
    received_events_url: "https://api.github.com/users/wxqfree/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "mainick",
    id: 67373,
    node_id: "MDQ6VXNlcjY3Mzcz",
    avatar_url: "https://avatars.githubusercontent.com/u/67373?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/mainick",
    html_url: "https://github.com/mainick",
    followers_url: "https://api.github.com/users/mainick/followers",
    following_url:
      "https://api.github.com/users/mainick/following{/other_user}",
    gists_url: "https://api.github.com/users/mainick/gists{/gist_id}",
    starred_url: "https://api.github.com/users/mainick/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/mainick/subscriptions",
    organizations_url: "https://api.github.com/users/mainick/orgs",
    repos_url: "https://api.github.com/users/mainick/repos",
    events_url: "https://api.github.com/users/mainick/events{/privacy}",
    received_events_url: "https://api.github.com/users/mainick/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "esin",
    id: 69767,
    node_id: "MDQ6VXNlcjY5NzY3",
    avatar_url: "https://avatars.githubusercontent.com/u/69767?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/esin",
    html_url: "https://github.com/esin",
    followers_url: "https://api.github.com/users/esin/followers",
    following_url: "https://api.github.com/users/esin/following{/other_user}",
    gists_url: "https://api.github.com/users/esin/gists{/gist_id}",
    starred_url: "https://api.github.com/users/esin/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/esin/subscriptions",
    organizations_url: "https://api.github.com/users/esin/orgs",
    repos_url: "https://api.github.com/users/esin/repos",
    events_url: "https://api.github.com/users/esin/events{/privacy}",
    received_events_url: "https://api.github.com/users/esin/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "yxm0513",
    id: 73510,
    node_id: "MDQ6VXNlcjczNTEw",
    avatar_url: "https://avatars.githubusercontent.com/u/73510?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/yxm0513",
    html_url: "https://github.com/yxm0513",
    followers_url: "https://api.github.com/users/yxm0513/followers",
    following_url:
      "https://api.github.com/users/yxm0513/following{/other_user}",
    gists_url: "https://api.github.com/users/yxm0513/gists{/gist_id}",
    starred_url: "https://api.github.com/users/yxm0513/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/yxm0513/subscriptions",
    organizations_url: "https://api.github.com/users/yxm0513/orgs",
    repos_url: "https://api.github.com/users/yxm0513/repos",
    events_url: "https://api.github.com/users/yxm0513/events{/privacy}",
    received_events_url: "https://api.github.com/users/yxm0513/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "GavinBryan",
    id: 76623,
    node_id: "MDQ6VXNlcjc2NjIz",
    avatar_url: "https://avatars.githubusercontent.com/u/76623?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/GavinBryan",
    html_url: "https://github.com/GavinBryan",
    followers_url: "https://api.github.com/users/GavinBryan/followers",
    following_url:
      "https://api.github.com/users/GavinBryan/following{/other_user}",
    gists_url: "https://api.github.com/users/GavinBryan/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/GavinBryan/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/GavinBryan/subscriptions",
    organizations_url: "https://api.github.com/users/GavinBryan/orgs",
    repos_url: "https://api.github.com/users/GavinBryan/repos",
    events_url: "https://api.github.com/users/GavinBryan/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/GavinBryan/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "coder-selvarajan",
    id: 78447,
    node_id: "MDQ6VXNlcjc4NDQ3",
    avatar_url: "https://avatars.githubusercontent.com/u/78447?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/coder-selvarajan",
    html_url: "https://github.com/coder-selvarajan",
    followers_url: "https://api.github.com/users/coder-selvarajan/followers",
    following_url:
      "https://api.github.com/users/coder-selvarajan/following{/other_user}",
    gists_url: "https://api.github.com/users/coder-selvarajan/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/coder-selvarajan/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/coder-selvarajan/subscriptions",
    organizations_url: "https://api.github.com/users/coder-selvarajan/orgs",
    repos_url: "https://api.github.com/users/coder-selvarajan/repos",
    events_url:
      "https://api.github.com/users/coder-selvarajan/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/coder-selvarajan/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "gogolnr1",
    id: 102792,
    node_id: "MDQ6VXNlcjEwMjc5Mg==",
    avatar_url: "https://avatars.githubusercontent.com/u/102792?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/gogolnr1",
    html_url: "https://github.com/gogolnr1",
    followers_url: "https://api.github.com/users/gogolnr1/followers",
    following_url:
      "https://api.github.com/users/gogolnr1/following{/other_user}",
    gists_url: "https://api.github.com/users/gogolnr1/gists{/gist_id}",
    starred_url: "https://api.github.com/users/gogolnr1/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/gogolnr1/subscriptions",
    organizations_url: "https://api.github.com/users/gogolnr1/orgs",
    repos_url: "https://api.github.com/users/gogolnr1/repos",
    events_url: "https://api.github.com/users/gogolnr1/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/gogolnr1/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "mahdimp",
    id: 106799,
    node_id: "MDQ6VXNlcjEwNjc5OQ==",
    avatar_url: "https://avatars.githubusercontent.com/u/106799?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/mahdimp",
    html_url: "https://github.com/mahdimp",
    followers_url: "https://api.github.com/users/mahdimp/followers",
    following_url:
      "https://api.github.com/users/mahdimp/following{/other_user}",
    gists_url: "https://api.github.com/users/mahdimp/gists{/gist_id}",
    starred_url: "https://api.github.com/users/mahdimp/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/mahdimp/subscriptions",
    organizations_url: "https://api.github.com/users/mahdimp/orgs",
    repos_url: "https://api.github.com/users/mahdimp/repos",
    events_url: "https://api.github.com/users/mahdimp/events{/privacy}",
    received_events_url: "https://api.github.com/users/mahdimp/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "neveo",
    id: 115875,
    node_id: "MDQ6VXNlcjExNTg3NQ==",
    avatar_url: "https://avatars.githubusercontent.com/u/115875?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/neveo",
    html_url: "https://github.com/neveo",
    followers_url: "https://api.github.com/users/neveo/followers",
    following_url: "https://api.github.com/users/neveo/following{/other_user}",
    gists_url: "https://api.github.com/users/neveo/gists{/gist_id}",
    starred_url: "https://api.github.com/users/neveo/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/neveo/subscriptions",
    organizations_url: "https://api.github.com/users/neveo/orgs",
    repos_url: "https://api.github.com/users/neveo/repos",
    events_url: "https://api.github.com/users/neveo/events{/privacy}",
    received_events_url: "https://api.github.com/users/neveo/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "casjay",
    id: 126880,
    node_id: "MDQ6VXNlcjEyNjg4MA==",
    avatar_url: "https://avatars.githubusercontent.com/u/126880?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/casjay",
    html_url: "https://github.com/casjay",
    followers_url: "https://api.github.com/users/casjay/followers",
    following_url: "https://api.github.com/users/casjay/following{/other_user}",
    gists_url: "https://api.github.com/users/casjay/gists{/gist_id}",
    starred_url: "https://api.github.com/users/casjay/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/casjay/subscriptions",
    organizations_url: "https://api.github.com/users/casjay/orgs",
    repos_url: "https://api.github.com/users/casjay/repos",
    events_url: "https://api.github.com/users/casjay/events{/privacy}",
    received_events_url: "https://api.github.com/users/casjay/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "drenovac",
    id: 146121,
    node_id: "MDQ6VXNlcjE0NjEyMQ==",
    avatar_url: "https://avatars.githubusercontent.com/u/146121?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/drenovac",
    html_url: "https://github.com/drenovac",
    followers_url: "https://api.github.com/users/drenovac/followers",
    following_url:
      "https://api.github.com/users/drenovac/following{/other_user}",
    gists_url: "https://api.github.com/users/drenovac/gists{/gist_id}",
    starred_url: "https://api.github.com/users/drenovac/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/drenovac/subscriptions",
    organizations_url: "https://api.github.com/users/drenovac/orgs",
    repos_url: "https://api.github.com/users/drenovac/repos",
    events_url: "https://api.github.com/users/drenovac/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/drenovac/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "DigDug101",
    id: 153598,
    node_id: "MDQ6VXNlcjE1MzU5OA==",
    avatar_url: "https://avatars.githubusercontent.com/u/153598?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/DigDug101",
    html_url: "https://github.com/DigDug101",
    followers_url: "https://api.github.com/users/DigDug101/followers",
    following_url:
      "https://api.github.com/users/DigDug101/following{/other_user}",
    gists_url: "https://api.github.com/users/DigDug101/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/DigDug101/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/DigDug101/subscriptions",
    organizations_url: "https://api.github.com/users/DigDug101/orgs",
    repos_url: "https://api.github.com/users/DigDug101/repos",
    events_url: "https://api.github.com/users/DigDug101/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/DigDug101/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "gaspas",
    id: 168907,
    node_id: "MDQ6VXNlcjE2ODkwNw==",
    avatar_url: "https://avatars.githubusercontent.com/u/168907?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/gaspas",
    html_url: "https://github.com/gaspas",
    followers_url: "https://api.github.com/users/gaspas/followers",
    following_url: "https://api.github.com/users/gaspas/following{/other_user}",
    gists_url: "https://api.github.com/users/gaspas/gists{/gist_id}",
    starred_url: "https://api.github.com/users/gaspas/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/gaspas/subscriptions",
    organizations_url: "https://api.github.com/users/gaspas/orgs",
    repos_url: "https://api.github.com/users/gaspas/repos",
    events_url: "https://api.github.com/users/gaspas/events{/privacy}",
    received_events_url: "https://api.github.com/users/gaspas/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "jazziejoy",
    id: 173430,
    node_id: "MDQ6VXNlcjE3MzQzMA==",
    avatar_url: "https://avatars.githubusercontent.com/u/173430?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/jazziejoy",
    html_url: "https://github.com/jazziejoy",
    followers_url: "https://api.github.com/users/jazziejoy/followers",
    following_url:
      "https://api.github.com/users/jazziejoy/following{/other_user}",
    gists_url: "https://api.github.com/users/jazziejoy/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/jazziejoy/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/jazziejoy/subscriptions",
    organizations_url: "https://api.github.com/users/jazziejoy/orgs",
    repos_url: "https://api.github.com/users/jazziejoy/repos",
    events_url: "https://api.github.com/users/jazziejoy/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/jazziejoy/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "artlantis",
    id: 188478,
    node_id: "MDQ6VXNlcjE4ODQ3OA==",
    avatar_url: "https://avatars.githubusercontent.com/u/188478?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/artlantis",
    html_url: "https://github.com/artlantis",
    followers_url: "https://api.github.com/users/artlantis/followers",
    following_url:
      "https://api.github.com/users/artlantis/following{/other_user}",
    gists_url: "https://api.github.com/users/artlantis/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/artlantis/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/artlantis/subscriptions",
    organizations_url: "https://api.github.com/users/artlantis/orgs",
    repos_url: "https://api.github.com/users/artlantis/repos",
    events_url: "https://api.github.com/users/artlantis/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/artlantis/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "manishnakar",
    id: 190051,
    node_id: "MDQ6VXNlcjE5MDA1MQ==",
    avatar_url: "https://avatars.githubusercontent.com/u/190051?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/manishnakar",
    html_url: "https://github.com/manishnakar",
    followers_url: "https://api.github.com/users/manishnakar/followers",
    following_url:
      "https://api.github.com/users/manishnakar/following{/other_user}",
    gists_url: "https://api.github.com/users/manishnakar/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/manishnakar/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/manishnakar/subscriptions",
    organizations_url: "https://api.github.com/users/manishnakar/orgs",
    repos_url: "https://api.github.com/users/manishnakar/repos",
    events_url: "https://api.github.com/users/manishnakar/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/manishnakar/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "chrischandler",
    id: 193224,
    node_id: "MDQ6VXNlcjE5MzIyNA==",
    avatar_url: "https://avatars.githubusercontent.com/u/193224?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/chrischandler",
    html_url: "https://github.com/chrischandler",
    followers_url: "https://api.github.com/users/chrischandler/followers",
    following_url:
      "https://api.github.com/users/chrischandler/following{/other_user}",
    gists_url: "https://api.github.com/users/chrischandler/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/chrischandler/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/chrischandler/subscriptions",
    organizations_url: "https://api.github.com/users/chrischandler/orgs",
    repos_url: "https://api.github.com/users/chrischandler/repos",
    events_url: "https://api.github.com/users/chrischandler/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/chrischandler/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "manish700",
    id: 211528,
    node_id: "MDQ6VXNlcjIxMTUyOA==",
    avatar_url: "https://avatars.githubusercontent.com/u/211528?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/manish700",
    html_url: "https://github.com/manish700",
    followers_url: "https://api.github.com/users/manish700/followers",
    following_url:
      "https://api.github.com/users/manish700/following{/other_user}",
    gists_url: "https://api.github.com/users/manish700/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/manish700/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/manish700/subscriptions",
    organizations_url: "https://api.github.com/users/manish700/orgs",
    repos_url: "https://api.github.com/users/manish700/repos",
    events_url: "https://api.github.com/users/manish700/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/manish700/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "ClaytonDewey",
    id: 226353,
    node_id: "MDQ6VXNlcjIyNjM1Mw==",
    avatar_url: "https://avatars.githubusercontent.com/u/226353?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/ClaytonDewey",
    html_url: "https://github.com/ClaytonDewey",
    followers_url: "https://api.github.com/users/ClaytonDewey/followers",
    following_url:
      "https://api.github.com/users/ClaytonDewey/following{/other_user}",
    gists_url: "https://api.github.com/users/ClaytonDewey/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/ClaytonDewey/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/ClaytonDewey/subscriptions",
    organizations_url: "https://api.github.com/users/ClaytonDewey/orgs",
    repos_url: "https://api.github.com/users/ClaytonDewey/repos",
    events_url: "https://api.github.com/users/ClaytonDewey/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/ClaytonDewey/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "mhaidarhanif",
    id: 235584,
    node_id: "MDQ6VXNlcjIzNTU4NA==",
    avatar_url: "https://avatars.githubusercontent.com/u/235584?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/mhaidarhanif",
    html_url: "https://github.com/mhaidarhanif",
    followers_url: "https://api.github.com/users/mhaidarhanif/followers",
    following_url:
      "https://api.github.com/users/mhaidarhanif/following{/other_user}",
    gists_url: "https://api.github.com/users/mhaidarhanif/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/mhaidarhanif/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/mhaidarhanif/subscriptions",
    organizations_url: "https://api.github.com/users/mhaidarhanif/orgs",
    repos_url: "https://api.github.com/users/mhaidarhanif/repos",
    events_url: "https://api.github.com/users/mhaidarhanif/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/mhaidarhanif/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "wymna",
    id: 237820,
    node_id: "MDQ6VXNlcjIzNzgyMA==",
    avatar_url: "https://avatars.githubusercontent.com/u/237820?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/wymna",
    html_url: "https://github.com/wymna",
    followers_url: "https://api.github.com/users/wymna/followers",
    following_url: "https://api.github.com/users/wymna/following{/other_user}",
    gists_url: "https://api.github.com/users/wymna/gists{/gist_id}",
    starred_url: "https://api.github.com/users/wymna/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/wymna/subscriptions",
    organizations_url: "https://api.github.com/users/wymna/orgs",
    repos_url: "https://api.github.com/users/wymna/repos",
    events_url: "https://api.github.com/users/wymna/events{/privacy}",
    received_events_url: "https://api.github.com/users/wymna/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "xploregopi",
    id: 247011,
    node_id: "MDQ6VXNlcjI0NzAxMQ==",
    avatar_url: "https://avatars.githubusercontent.com/u/247011?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/xploregopi",
    html_url: "https://github.com/xploregopi",
    followers_url: "https://api.github.com/users/xploregopi/followers",
    following_url:
      "https://api.github.com/users/xploregopi/following{/other_user}",
    gists_url: "https://api.github.com/users/xploregopi/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/xploregopi/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/xploregopi/subscriptions",
    organizations_url: "https://api.github.com/users/xploregopi/orgs",
    repos_url: "https://api.github.com/users/xploregopi/repos",
    events_url: "https://api.github.com/users/xploregopi/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/xploregopi/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "bpc1985",
    id: 271786,
    node_id: "MDQ6VXNlcjI3MTc4Ng==",
    avatar_url: "https://avatars.githubusercontent.com/u/271786?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/bpc1985",
    html_url: "https://github.com/bpc1985",
    followers_url: "https://api.github.com/users/bpc1985/followers",
    following_url:
      "https://api.github.com/users/bpc1985/following{/other_user}",
    gists_url: "https://api.github.com/users/bpc1985/gists{/gist_id}",
    starred_url: "https://api.github.com/users/bpc1985/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/bpc1985/subscriptions",
    organizations_url: "https://api.github.com/users/bpc1985/orgs",
    repos_url: "https://api.github.com/users/bpc1985/repos",
    events_url: "https://api.github.com/users/bpc1985/events{/privacy}",
    received_events_url: "https://api.github.com/users/bpc1985/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "ninjanero",
    id: 293698,
    node_id: "MDQ6VXNlcjI5MzY5OA==",
    avatar_url: "https://avatars.githubusercontent.com/u/293698?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/ninjanero",
    html_url: "https://github.com/ninjanero",
    followers_url: "https://api.github.com/users/ninjanero/followers",
    following_url:
      "https://api.github.com/users/ninjanero/following{/other_user}",
    gists_url: "https://api.github.com/users/ninjanero/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/ninjanero/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/ninjanero/subscriptions",
    organizations_url: "https://api.github.com/users/ninjanero/orgs",
    repos_url: "https://api.github.com/users/ninjanero/repos",
    events_url: "https://api.github.com/users/ninjanero/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/ninjanero/received_events",
    type: "User",
    site_admin: false,
  },
];

const mockReposData = [
  {
    id: 467718770,
    node_id: "R_kgDOG-DScg",
    name: "axios-tutorial-react",
    full_name: "john-smilga/axios-tutorial-react",
    private: false,
    owner: {
      login: "john-smilga",
      id: 42133389,
      node_id: "MDQ6VXNlcjQyMTMzMzg5",
      avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/john-smilga",
      html_url: "https://github.com/john-smilga",
      followers_url: "https://api.github.com/users/john-smilga/followers",
      following_url:
        "https://api.github.com/users/john-smilga/following{/other_user}",
      gists_url: "https://api.github.com/users/john-smilga/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/john-smilga/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/john-smilga/subscriptions",
      organizations_url: "https://api.github.com/users/john-smilga/orgs",
      repos_url: "https://api.github.com/users/john-smilga/repos",
      events_url: "https://api.github.com/users/john-smilga/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/john-smilga/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/john-smilga/axios-tutorial-react",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/john-smilga/axios-tutorial-react",
    forks_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/forks",
    keys_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/teams",
    hooks_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/hooks",
    issue_events_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/events",
    assignees_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/tags",
    blobs_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/languages",
    stargazers_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/stargazers",
    contributors_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/contributors",
    subscribers_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/subscribers",
    subscription_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/subscription",
    commits_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/merges",
    archive_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/downloads",
    issues_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/labels{/name}",
    releases_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/john-smilga/axios-tutorial-react/deployments",
    created_at: "2022-03-09T00:13:20Z",
    updated_at: "2022-05-23T23:32:45Z",
    pushed_at: "2022-03-12T20:15:41Z",
    git_url: "git://github.com/john-smilga/axios-tutorial-react.git",
    ssh_url: "git@github.com:john-smilga/axios-tutorial-react.git",
    clone_url: "https://github.com/john-smilga/axios-tutorial-react.git",
    svn_url: "https://github.com/john-smilga/axios-tutorial-react",
    homepage: null,
    size: 295,
    stargazers_count: 32,
    watchers_count: 32,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 20,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 20,
    open_issues: 0,
    watchers: 32,
    default_branch: "main",
  },
  {
    id: 239164394,
    node_id: "MDEwOlJlcG9zaXRvcnkyMzkxNjQzOTQ=",
    name: "bazinga-example",
    full_name: "john-smilga/bazinga-example",
    private: false,
    owner: {
      login: "john-smilga",
      id: 42133389,
      node_id: "MDQ6VXNlcjQyMTMzMzg5",
      avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/john-smilga",
      html_url: "https://github.com/john-smilga",
      followers_url: "https://api.github.com/users/john-smilga/followers",
      following_url:
        "https://api.github.com/users/john-smilga/following{/other_user}",
      gists_url: "https://api.github.com/users/john-smilga/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/john-smilga/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/john-smilga/subscriptions",
      organizations_url: "https://api.github.com/users/john-smilga/orgs",
      repos_url: "https://api.github.com/users/john-smilga/repos",
      events_url: "https://api.github.com/users/john-smilga/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/john-smilga/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/john-smilga/bazinga-example",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/john-smilga/bazinga-example",
    forks_url: "https://api.github.com/repos/john-smilga/bazinga-example/forks",
    keys_url:
      "https://api.github.com/repos/john-smilga/bazinga-example/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/john-smilga/bazinga-example/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/john-smilga/bazinga-example/teams",
    hooks_url: "https://api.github.com/repos/john-smilga/bazinga-example/hooks",
    issue_events_url:
      "https://api.github.com/repos/john-smilga/bazinga-example/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/john-smilga/bazinga-example/events",
    assignees_url:
      "https://api.github.com/repos/john-smilga/bazinga-example/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/john-smilga/bazinga-example/branches{/branch}",
    tags_url: "https://api.github.com/repos/john-smilga/bazinga-example/tags",
    blobs_url:
      "https://api.github.com/repos/john-smilga/bazinga-example/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/john-smilga/bazinga-example/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/john-smilga/bazinga-example/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/john-smilga/bazinga-example/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/john-smilga/bazinga-example/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/john-smilga/bazinga-example/languages",
    stargazers_url:
      "https://api.github.com/repos/john-smilga/bazinga-example/stargazers",
    contributors_url:
      "https://api.github.com/repos/john-smilga/bazinga-example/contributors",
    subscribers_url:
      "https://api.github.com/repos/john-smilga/bazinga-example/subscribers",
    subscription_url:
      "https://api.github.com/repos/john-smilga/bazinga-example/subscription",
    commits_url:
      "https://api.github.com/repos/john-smilga/bazinga-example/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/john-smilga/bazinga-example/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/john-smilga/bazinga-example/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/john-smilga/bazinga-example/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/john-smilga/bazinga-example/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/john-smilga/bazinga-example/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/john-smilga/bazinga-example/merges",
    archive_url:
      "https://api.github.com/repos/john-smilga/bazinga-example/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/john-smilga/bazinga-example/downloads",
    issues_url:
      "https://api.github.com/repos/john-smilga/bazinga-example/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/john-smilga/bazinga-example/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/john-smilga/bazinga-example/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/john-smilga/bazinga-example/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/john-smilga/bazinga-example/labels{/name}",
    releases_url:
      "https://api.github.com/repos/john-smilga/bazinga-example/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/john-smilga/bazinga-example/deployments",
    created_at: "2020-02-08T16:30:10Z",
    updated_at: "2021-09-03T17:09:26Z",
    pushed_at: "2020-02-08T16:30:48Z",
    git_url: "git://github.com/john-smilga/bazinga-example.git",
    ssh_url: "git@github.com:john-smilga/bazinga-example.git",
    clone_url: "https://github.com/john-smilga/bazinga-example.git",
    svn_url: "https://github.com/john-smilga/bazinga-example",
    homepage: null,
    size: 173,
    stargazers_count: 2,
    watchers_count: 2,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 2,
    default_branch: "master",
  },
  {
    id: 154058683,
    node_id: "MDEwOlJlcG9zaXRvcnkxNTQwNTg2ODM=",
    name: "boot-sweets-setup",
    full_name: "john-smilga/boot-sweets-setup",
    private: false,
    owner: {
      login: "john-smilga",
      id: 42133389,
      node_id: "MDQ6VXNlcjQyMTMzMzg5",
      avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/john-smilga",
      html_url: "https://github.com/john-smilga",
      followers_url: "https://api.github.com/users/john-smilga/followers",
      following_url:
        "https://api.github.com/users/john-smilga/following{/other_user}",
      gists_url: "https://api.github.com/users/john-smilga/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/john-smilga/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/john-smilga/subscriptions",
      organizations_url: "https://api.github.com/users/john-smilga/orgs",
      repos_url: "https://api.github.com/users/john-smilga/repos",
      events_url: "https://api.github.com/users/john-smilga/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/john-smilga/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/john-smilga/boot-sweets-setup",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/john-smilga/boot-sweets-setup",
    forks_url:
      "https://api.github.com/repos/john-smilga/boot-sweets-setup/forks",
    keys_url:
      "https://api.github.com/repos/john-smilga/boot-sweets-setup/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/john-smilga/boot-sweets-setup/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/john-smilga/boot-sweets-setup/teams",
    hooks_url:
      "https://api.github.com/repos/john-smilga/boot-sweets-setup/hooks",
    issue_events_url:
      "https://api.github.com/repos/john-smilga/boot-sweets-setup/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/john-smilga/boot-sweets-setup/events",
    assignees_url:
      "https://api.github.com/repos/john-smilga/boot-sweets-setup/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/john-smilga/boot-sweets-setup/branches{/branch}",
    tags_url: "https://api.github.com/repos/john-smilga/boot-sweets-setup/tags",
    blobs_url:
      "https://api.github.com/repos/john-smilga/boot-sweets-setup/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/john-smilga/boot-sweets-setup/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/john-smilga/boot-sweets-setup/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/john-smilga/boot-sweets-setup/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/john-smilga/boot-sweets-setup/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/john-smilga/boot-sweets-setup/languages",
    stargazers_url:
      "https://api.github.com/repos/john-smilga/boot-sweets-setup/stargazers",
    contributors_url:
      "https://api.github.com/repos/john-smilga/boot-sweets-setup/contributors",
    subscribers_url:
      "https://api.github.com/repos/john-smilga/boot-sweets-setup/subscribers",
    subscription_url:
      "https://api.github.com/repos/john-smilga/boot-sweets-setup/subscription",
    commits_url:
      "https://api.github.com/repos/john-smilga/boot-sweets-setup/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/john-smilga/boot-sweets-setup/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/john-smilga/boot-sweets-setup/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/john-smilga/boot-sweets-setup/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/john-smilga/boot-sweets-setup/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/john-smilga/boot-sweets-setup/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/john-smilga/boot-sweets-setup/merges",
    archive_url:
      "https://api.github.com/repos/john-smilga/boot-sweets-setup/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/john-smilga/boot-sweets-setup/downloads",
    issues_url:
      "https://api.github.com/repos/john-smilga/boot-sweets-setup/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/john-smilga/boot-sweets-setup/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/john-smilga/boot-sweets-setup/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/john-smilga/boot-sweets-setup/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/john-smilga/boot-sweets-setup/labels{/name}",
    releases_url:
      "https://api.github.com/repos/john-smilga/boot-sweets-setup/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/john-smilga/boot-sweets-setup/deployments",
    created_at: "2018-10-21T22:39:19Z",
    updated_at: "2021-04-06T23:54:03Z",
    pushed_at: "2018-10-21T22:39:44Z",
    git_url: "git://github.com/john-smilga/boot-sweets-setup.git",
    ssh_url: "git@github.com:john-smilga/boot-sweets-setup.git",
    clone_url: "https://github.com/john-smilga/boot-sweets-setup.git",
    svn_url: "https://github.com/john-smilga/boot-sweets-setup",
    homepage: null,
    size: 2258,
    stargazers_count: 11,
    watchers_count: 11,
    language: "CSS",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 18,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 18,
    open_issues: 0,
    watchers: 11,
    default_branch: "master",
  },
  {
    id: 286830503,
    node_id: "MDEwOlJlcG9zaXRvcnkyODY4MzA1MDM=",
    name: "bootstrap-4-sushi-monster-website",
    full_name: "john-smilga/bootstrap-4-sushi-monster-website",
    private: false,
    owner: {
      login: "john-smilga",
      id: 42133389,
      node_id: "MDQ6VXNlcjQyMTMzMzg5",
      avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/john-smilga",
      html_url: "https://github.com/john-smilga",
      followers_url: "https://api.github.com/users/john-smilga/followers",
      following_url:
        "https://api.github.com/users/john-smilga/following{/other_user}",
      gists_url: "https://api.github.com/users/john-smilga/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/john-smilga/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/john-smilga/subscriptions",
      organizations_url: "https://api.github.com/users/john-smilga/orgs",
      repos_url: "https://api.github.com/users/john-smilga/repos",
      events_url: "https://api.github.com/users/john-smilga/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/john-smilga/received_events",
      type: "User",
      site_admin: false,
    },
    html_url:
      "https://github.com/john-smilga/bootstrap-4-sushi-monster-website",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website",
    forks_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/forks",
    keys_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/teams",
    hooks_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/hooks",
    issue_events_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/events",
    assignees_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/tags",
    blobs_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/languages",
    stargazers_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/stargazers",
    contributors_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/contributors",
    subscribers_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/subscribers",
    subscription_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/subscription",
    commits_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/merges",
    archive_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/downloads",
    issues_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/labels{/name}",
    releases_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/john-smilga/bootstrap-4-sushi-monster-website/deployments",
    created_at: "2020-08-11T19:26:03Z",
    updated_at: "2022-04-25T21:53:36Z",
    pushed_at: "2020-08-11T19:26:43Z",
    git_url:
      "git://github.com/john-smilga/bootstrap-4-sushi-monster-website.git",
    ssh_url: "git@github.com:john-smilga/bootstrap-4-sushi-monster-website.git",
    clone_url:
      "https://github.com/john-smilga/bootstrap-4-sushi-monster-website.git",
    svn_url: "https://github.com/john-smilga/bootstrap-4-sushi-monster-website",
    homepage: null,
    size: 1332,
    stargazers_count: 5,
    watchers_count: 5,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 5,
    default_branch: "master",
  },
  {
    id: 225279403,
    node_id: "MDEwOlJlcG9zaXRvcnkyMjUyNzk0MDM=",
    name: "bootstrap-car-dealership",
    full_name: "john-smilga/bootstrap-car-dealership",
    private: false,
    owner: {
      login: "john-smilga",
      id: 42133389,
      node_id: "MDQ6VXNlcjQyMTMzMzg5",
      avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/john-smilga",
      html_url: "https://github.com/john-smilga",
      followers_url: "https://api.github.com/users/john-smilga/followers",
      following_url:
        "https://api.github.com/users/john-smilga/following{/other_user}",
      gists_url: "https://api.github.com/users/john-smilga/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/john-smilga/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/john-smilga/subscriptions",
      organizations_url: "https://api.github.com/users/john-smilga/orgs",
      repos_url: "https://api.github.com/users/john-smilga/repos",
      events_url: "https://api.github.com/users/john-smilga/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/john-smilga/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/john-smilga/bootstrap-car-dealership",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/john-smilga/bootstrap-car-dealership",
    forks_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/forks",
    keys_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/teams",
    hooks_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/hooks",
    issue_events_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/events",
    assignees_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/tags",
    blobs_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/languages",
    stargazers_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/stargazers",
    contributors_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/contributors",
    subscribers_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/subscribers",
    subscription_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/subscription",
    commits_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/merges",
    archive_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/downloads",
    issues_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/labels{/name}",
    releases_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/john-smilga/bootstrap-car-dealership/deployments",
    created_at: "2019-12-02T03:42:37Z",
    updated_at: "2021-01-29T23:58:49Z",
    pushed_at: "2019-12-02T03:42:54Z",
    git_url: "git://github.com/john-smilga/bootstrap-car-dealership.git",
    ssh_url: "git@github.com:john-smilga/bootstrap-car-dealership.git",
    clone_url: "https://github.com/john-smilga/bootstrap-car-dealership.git",
    svn_url: "https://github.com/john-smilga/bootstrap-car-dealership",
    homepage: null,
    size: 7379,
    stargazers_count: 5,
    watchers_count: 5,
    language: "HTML",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 1,
    open_issues: 0,
    watchers: 5,
    default_branch: "master",
  },
  {
    id: 161136700,
    node_id: "MDEwOlJlcG9zaXRvcnkxNjExMzY3MDA=",
    name: "bootstrap-furniture-e-commrece",
    full_name: "john-smilga/bootstrap-furniture-e-commrece",
    private: false,
    owner: {
      login: "john-smilga",
      id: 42133389,
      node_id: "MDQ6VXNlcjQyMTMzMzg5",
      avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/john-smilga",
      html_url: "https://github.com/john-smilga",
      followers_url: "https://api.github.com/users/john-smilga/followers",
      following_url:
        "https://api.github.com/users/john-smilga/following{/other_user}",
      gists_url: "https://api.github.com/users/john-smilga/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/john-smilga/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/john-smilga/subscriptions",
      organizations_url: "https://api.github.com/users/john-smilga/orgs",
      repos_url: "https://api.github.com/users/john-smilga/repos",
      events_url: "https://api.github.com/users/john-smilga/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/john-smilga/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/john-smilga/bootstrap-furniture-e-commrece",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece",
    forks_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/forks",
    keys_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/teams",
    hooks_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/hooks",
    issue_events_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/events",
    assignees_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/tags",
    blobs_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/languages",
    stargazers_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/stargazers",
    contributors_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/contributors",
    subscribers_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/subscribers",
    subscription_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/subscription",
    commits_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/merges",
    archive_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/downloads",
    issues_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/labels{/name}",
    releases_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/john-smilga/bootstrap-furniture-e-commrece/deployments",
    created_at: "2018-12-10T07:44:30Z",
    updated_at: "2021-01-27T16:50:23Z",
    pushed_at: "2018-12-10T07:45:08Z",
    git_url: "git://github.com/john-smilga/bootstrap-furniture-e-commrece.git",
    ssh_url: "git@github.com:john-smilga/bootstrap-furniture-e-commrece.git",
    clone_url:
      "https://github.com/john-smilga/bootstrap-furniture-e-commrece.git",
    svn_url: "https://github.com/john-smilga/bootstrap-furniture-e-commrece",
    homepage: null,
    size: 3544,
    stargazers_count: 3,
    watchers_count: 3,
    language: "HTML",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 3,
    default_branch: "master",
  },
  {
    id: 166690253,
    node_id: "MDEwOlJlcG9zaXRvcnkxNjY2OTAyNTM=",
    name: "bootstrap-only-bootstrap-project",
    full_name: "john-smilga/bootstrap-only-bootstrap-project",
    private: false,
    owner: {
      login: "john-smilga",
      id: 42133389,
      node_id: "MDQ6VXNlcjQyMTMzMzg5",
      avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/john-smilga",
      html_url: "https://github.com/john-smilga",
      followers_url: "https://api.github.com/users/john-smilga/followers",
      following_url:
        "https://api.github.com/users/john-smilga/following{/other_user}",
      gists_url: "https://api.github.com/users/john-smilga/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/john-smilga/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/john-smilga/subscriptions",
      organizations_url: "https://api.github.com/users/john-smilga/orgs",
      repos_url: "https://api.github.com/users/john-smilga/repos",
      events_url: "https://api.github.com/users/john-smilga/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/john-smilga/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/john-smilga/bootstrap-only-bootstrap-project",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project",
    forks_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/forks",
    keys_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/teams",
    hooks_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/hooks",
    issue_events_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/events",
    assignees_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/tags",
    blobs_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/languages",
    stargazers_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/stargazers",
    contributors_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/contributors",
    subscribers_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/subscribers",
    subscription_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/subscription",
    commits_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/merges",
    archive_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/downloads",
    issues_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/labels{/name}",
    releases_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/john-smilga/bootstrap-only-bootstrap-project/deployments",
    created_at: "2019-01-20T17:40:24Z",
    updated_at: "2021-10-28T20:01:54Z",
    pushed_at: "2019-01-20T17:45:13Z",
    git_url:
      "git://github.com/john-smilga/bootstrap-only-bootstrap-project.git",
    ssh_url: "git@github.com:john-smilga/bootstrap-only-bootstrap-project.git",
    clone_url:
      "https://github.com/john-smilga/bootstrap-only-bootstrap-project.git",
    svn_url: "https://github.com/john-smilga/bootstrap-only-bootstrap-project",
    homepage: null,
    size: 1799,
    stargazers_count: 4,
    watchers_count: 4,
    language: "HTML",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 2,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 2,
    open_issues: 0,
    watchers: 4,
    default_branch: "master",
  },
  {
    id: 161137201,
    node_id: "MDEwOlJlcG9zaXRvcnkxNjExMzcyMDE=",
    name: "bootstrap-renters-real-estate-project",
    full_name: "john-smilga/bootstrap-renters-real-estate-project",
    private: false,
    owner: {
      login: "john-smilga",
      id: 42133389,
      node_id: "MDQ6VXNlcjQyMTMzMzg5",
      avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/john-smilga",
      html_url: "https://github.com/john-smilga",
      followers_url: "https://api.github.com/users/john-smilga/followers",
      following_url:
        "https://api.github.com/users/john-smilga/following{/other_user}",
      gists_url: "https://api.github.com/users/john-smilga/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/john-smilga/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/john-smilga/subscriptions",
      organizations_url: "https://api.github.com/users/john-smilga/orgs",
      repos_url: "https://api.github.com/users/john-smilga/repos",
      events_url: "https://api.github.com/users/john-smilga/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/john-smilga/received_events",
      type: "User",
      site_admin: false,
    },
    html_url:
      "https://github.com/john-smilga/bootstrap-renters-real-estate-project",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project",
    forks_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/forks",
    keys_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/teams",
    hooks_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/hooks",
    issue_events_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/events",
    assignees_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/tags",
    blobs_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/languages",
    stargazers_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/stargazers",
    contributors_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/contributors",
    subscribers_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/subscribers",
    subscription_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/subscription",
    commits_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/merges",
    archive_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/downloads",
    issues_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/labels{/name}",
    releases_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/john-smilga/bootstrap-renters-real-estate-project/deployments",
    created_at: "2018-12-10T07:48:38Z",
    updated_at: "2021-01-27T16:50:21Z",
    pushed_at: "2018-12-10T07:49:06Z",
    git_url:
      "git://github.com/john-smilga/bootstrap-renters-real-estate-project.git",
    ssh_url:
      "git@github.com:john-smilga/bootstrap-renters-real-estate-project.git",
    clone_url:
      "https://github.com/john-smilga/bootstrap-renters-real-estate-project.git",
    svn_url:
      "https://github.com/john-smilga/bootstrap-renters-real-estate-project",
    homepage: null,
    size: 1942,
    stargazers_count: 3,
    watchers_count: 3,
    language: "CSS",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 3,
    default_branch: "master",
  },
  {
    id: 151336838,
    node_id: "MDEwOlJlcG9zaXRvcnkxNTEzMzY4Mzg=",
    name: "cars",
    full_name: "john-smilga/cars",
    private: false,
    owner: {
      login: "john-smilga",
      id: 42133389,
      node_id: "MDQ6VXNlcjQyMTMzMzg5",
      avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/john-smilga",
      html_url: "https://github.com/john-smilga",
      followers_url: "https://api.github.com/users/john-smilga/followers",
      following_url:
        "https://api.github.com/users/john-smilga/following{/other_user}",
      gists_url: "https://api.github.com/users/john-smilga/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/john-smilga/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/john-smilga/subscriptions",
      organizations_url: "https://api.github.com/users/john-smilga/orgs",
      repos_url: "https://api.github.com/users/john-smilga/repos",
      events_url: "https://api.github.com/users/john-smilga/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/john-smilga/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/john-smilga/cars",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/john-smilga/cars",
    forks_url: "https://api.github.com/repos/john-smilga/cars/forks",
    keys_url: "https://api.github.com/repos/john-smilga/cars/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/john-smilga/cars/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/john-smilga/cars/teams",
    hooks_url: "https://api.github.com/repos/john-smilga/cars/hooks",
    issue_events_url:
      "https://api.github.com/repos/john-smilga/cars/issues/events{/number}",
    events_url: "https://api.github.com/repos/john-smilga/cars/events",
    assignees_url:
      "https://api.github.com/repos/john-smilga/cars/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/john-smilga/cars/branches{/branch}",
    tags_url: "https://api.github.com/repos/john-smilga/cars/tags",
    blobs_url: "https://api.github.com/repos/john-smilga/cars/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/john-smilga/cars/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/john-smilga/cars/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/john-smilga/cars/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/john-smilga/cars/statuses/{sha}",
    languages_url: "https://api.github.com/repos/john-smilga/cars/languages",
    stargazers_url: "https://api.github.com/repos/john-smilga/cars/stargazers",
    contributors_url:
      "https://api.github.com/repos/john-smilga/cars/contributors",
    subscribers_url:
      "https://api.github.com/repos/john-smilga/cars/subscribers",
    subscription_url:
      "https://api.github.com/repos/john-smilga/cars/subscription",
    commits_url: "https://api.github.com/repos/john-smilga/cars/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/john-smilga/cars/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/john-smilga/cars/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/john-smilga/cars/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/john-smilga/cars/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/john-smilga/cars/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/john-smilga/cars/merges",
    archive_url:
      "https://api.github.com/repos/john-smilga/cars/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/john-smilga/cars/downloads",
    issues_url: "https://api.github.com/repos/john-smilga/cars/issues{/number}",
    pulls_url: "https://api.github.com/repos/john-smilga/cars/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/john-smilga/cars/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/john-smilga/cars/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/john-smilga/cars/labels{/name}",
    releases_url: "https://api.github.com/repos/john-smilga/cars/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/john-smilga/cars/deployments",
    created_at: "2018-10-02T23:26:50Z",
    updated_at: "2019-10-11T18:19:05Z",
    pushed_at: "2018-10-02T23:27:32Z",
    git_url: "git://github.com/john-smilga/cars.git",
    ssh_url: "git@github.com:john-smilga/cars.git",
    clone_url: "https://github.com/john-smilga/cars.git",
    svn_url: "https://github.com/john-smilga/cars",
    homepage: null,
    size: 948,
    stargazers_count: 2,
    watchers_count: 2,
    language: "CSS",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 2,
    default_branch: "master",
  },
  {
    id: 283575862,
    node_id: "MDEwOlJlcG9zaXRvcnkyODM1NzU4NjI=",
    name: "course-api",
    full_name: "john-smilga/course-api",
    private: false,
    owner: {
      login: "john-smilga",
      id: 42133389,
      node_id: "MDQ6VXNlcjQyMTMzMzg5",
      avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/john-smilga",
      html_url: "https://github.com/john-smilga",
      followers_url: "https://api.github.com/users/john-smilga/followers",
      following_url:
        "https://api.github.com/users/john-smilga/following{/other_user}",
      gists_url: "https://api.github.com/users/john-smilga/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/john-smilga/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/john-smilga/subscriptions",
      organizations_url: "https://api.github.com/users/john-smilga/orgs",
      repos_url: "https://api.github.com/users/john-smilga/repos",
      events_url: "https://api.github.com/users/john-smilga/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/john-smilga/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/john-smilga/course-api",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/john-smilga/course-api",
    forks_url: "https://api.github.com/repos/john-smilga/course-api/forks",
    keys_url:
      "https://api.github.com/repos/john-smilga/course-api/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/john-smilga/course-api/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/john-smilga/course-api/teams",
    hooks_url: "https://api.github.com/repos/john-smilga/course-api/hooks",
    issue_events_url:
      "https://api.github.com/repos/john-smilga/course-api/issues/events{/number}",
    events_url: "https://api.github.com/repos/john-smilga/course-api/events",
    assignees_url:
      "https://api.github.com/repos/john-smilga/course-api/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/john-smilga/course-api/branches{/branch}",
    tags_url: "https://api.github.com/repos/john-smilga/course-api/tags",
    blobs_url:
      "https://api.github.com/repos/john-smilga/course-api/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/john-smilga/course-api/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/john-smilga/course-api/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/john-smilga/course-api/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/john-smilga/course-api/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/john-smilga/course-api/languages",
    stargazers_url:
      "https://api.github.com/repos/john-smilga/course-api/stargazers",
    contributors_url:
      "https://api.github.com/repos/john-smilga/course-api/contributors",
    subscribers_url:
      "https://api.github.com/repos/john-smilga/course-api/subscribers",
    subscription_url:
      "https://api.github.com/repos/john-smilga/course-api/subscription",
    commits_url:
      "https://api.github.com/repos/john-smilga/course-api/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/john-smilga/course-api/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/john-smilga/course-api/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/john-smilga/course-api/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/john-smilga/course-api/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/john-smilga/course-api/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/john-smilga/course-api/merges",
    archive_url:
      "https://api.github.com/repos/john-smilga/course-api/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/john-smilga/course-api/downloads",
    issues_url:
      "https://api.github.com/repos/john-smilga/course-api/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/john-smilga/course-api/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/john-smilga/course-api/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/john-smilga/course-api/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/john-smilga/course-api/labels{/name}",
    releases_url:
      "https://api.github.com/repos/john-smilga/course-api/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/john-smilga/course-api/deployments",
    created_at: "2020-07-29T18:41:05Z",
    updated_at: "2021-09-03T17:06:23Z",
    pushed_at: "2020-12-20T04:04:25Z",
    git_url: "git://github.com/john-smilga/course-api.git",
    ssh_url: "git@github.com:john-smilga/course-api.git",
    clone_url: "https://github.com/john-smilga/course-api.git",
    svn_url: "https://github.com/john-smilga/course-api",
    homepage: null,
    size: 214,
    stargazers_count: 4,
    watchers_count: 4,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 1,
    open_issues: 0,
    watchers: 4,
    default_branch: "master",
  },
  {
    id: 233153196,
    node_id: "MDEwOlJlcG9zaXRvcnkyMzMxNTMxOTY=",
    name: "css-grid-udemy-restaurant-project",
    full_name: "john-smilga/css-grid-udemy-restaurant-project",
    private: false,
    owner: {
      login: "john-smilga",
      id: 42133389,
      node_id: "MDQ6VXNlcjQyMTMzMzg5",
      avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/john-smilga",
      html_url: "https://github.com/john-smilga",
      followers_url: "https://api.github.com/users/john-smilga/followers",
      following_url:
        "https://api.github.com/users/john-smilga/following{/other_user}",
      gists_url: "https://api.github.com/users/john-smilga/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/john-smilga/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/john-smilga/subscriptions",
      organizations_url: "https://api.github.com/users/john-smilga/orgs",
      repos_url: "https://api.github.com/users/john-smilga/repos",
      events_url: "https://api.github.com/users/john-smilga/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/john-smilga/received_events",
      type: "User",
      site_admin: false,
    },
    html_url:
      "https://github.com/john-smilga/css-grid-udemy-restaurant-project",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project",
    forks_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/forks",
    keys_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/teams",
    hooks_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/hooks",
    issue_events_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/events",
    assignees_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/tags",
    blobs_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/languages",
    stargazers_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/stargazers",
    contributors_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/contributors",
    subscribers_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/subscribers",
    subscription_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/subscription",
    commits_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/merges",
    archive_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/downloads",
    issues_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/labels{/name}",
    releases_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/john-smilga/css-grid-udemy-restaurant-project/deployments",
    created_at: "2020-01-11T00:29:34Z",
    updated_at: "2021-11-28T20:21:44Z",
    pushed_at: "2020-01-15T21:40:54Z",
    git_url:
      "git://github.com/john-smilga/css-grid-udemy-restaurant-project.git",
    ssh_url: "git@github.com:john-smilga/css-grid-udemy-restaurant-project.git",
    clone_url:
      "https://github.com/john-smilga/css-grid-udemy-restaurant-project.git",
    svn_url: "https://github.com/john-smilga/css-grid-udemy-restaurant-project",
    homepage: null,
    size: 10238,
    stargazers_count: 2,
    watchers_count: 2,
    language: "CSS",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 1,
    open_issues: 0,
    watchers: 2,
    default_branch: "master",
  },
  {
    id: 334762073,
    node_id: "MDEwOlJlcG9zaXRvcnkzMzQ3NjIwNzM=",
    name: "default-starter",
    full_name: "john-smilga/default-starter",
    private: false,
    owner: {
      login: "john-smilga",
      id: 42133389,
      node_id: "MDQ6VXNlcjQyMTMzMzg5",
      avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/john-smilga",
      html_url: "https://github.com/john-smilga",
      followers_url: "https://api.github.com/users/john-smilga/followers",
      following_url:
        "https://api.github.com/users/john-smilga/following{/other_user}",
      gists_url: "https://api.github.com/users/john-smilga/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/john-smilga/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/john-smilga/subscriptions",
      organizations_url: "https://api.github.com/users/john-smilga/orgs",
      repos_url: "https://api.github.com/users/john-smilga/repos",
      events_url: "https://api.github.com/users/john-smilga/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/john-smilga/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/john-smilga/default-starter",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/john-smilga/default-starter",
    forks_url: "https://api.github.com/repos/john-smilga/default-starter/forks",
    keys_url:
      "https://api.github.com/repos/john-smilga/default-starter/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/john-smilga/default-starter/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/john-smilga/default-starter/teams",
    hooks_url: "https://api.github.com/repos/john-smilga/default-starter/hooks",
    issue_events_url:
      "https://api.github.com/repos/john-smilga/default-starter/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/john-smilga/default-starter/events",
    assignees_url:
      "https://api.github.com/repos/john-smilga/default-starter/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/john-smilga/default-starter/branches{/branch}",
    tags_url: "https://api.github.com/repos/john-smilga/default-starter/tags",
    blobs_url:
      "https://api.github.com/repos/john-smilga/default-starter/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/john-smilga/default-starter/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/john-smilga/default-starter/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/john-smilga/default-starter/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/john-smilga/default-starter/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/john-smilga/default-starter/languages",
    stargazers_url:
      "https://api.github.com/repos/john-smilga/default-starter/stargazers",
    contributors_url:
      "https://api.github.com/repos/john-smilga/default-starter/contributors",
    subscribers_url:
      "https://api.github.com/repos/john-smilga/default-starter/subscribers",
    subscription_url:
      "https://api.github.com/repos/john-smilga/default-starter/subscription",
    commits_url:
      "https://api.github.com/repos/john-smilga/default-starter/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/john-smilga/default-starter/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/john-smilga/default-starter/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/john-smilga/default-starter/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/john-smilga/default-starter/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/john-smilga/default-starter/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/john-smilga/default-starter/merges",
    archive_url:
      "https://api.github.com/repos/john-smilga/default-starter/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/john-smilga/default-starter/downloads",
    issues_url:
      "https://api.github.com/repos/john-smilga/default-starter/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/john-smilga/default-starter/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/john-smilga/default-starter/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/john-smilga/default-starter/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/john-smilga/default-starter/labels{/name}",
    releases_url:
      "https://api.github.com/repos/john-smilga/default-starter/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/john-smilga/default-starter/deployments",
    created_at: "2021-01-31T21:37:05Z",
    updated_at: "2022-06-08T14:32:49Z",
    pushed_at: "2021-11-11T21:43:33Z",
    git_url: "git://github.com/john-smilga/default-starter.git",
    ssh_url: "git@github.com:john-smilga/default-starter.git",
    clone_url: "https://github.com/john-smilga/default-starter.git",
    svn_url: "https://github.com/john-smilga/default-starter",
    homepage: null,
    size: 147,
    stargazers_count: 94,
    watchers_count: 94,
    language: "CSS",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 46,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 46,
    open_issues: 1,
    watchers: 94,
    default_branch: "main",
  },
  {
    id: 179416940,
    node_id: "MDEwOlJlcG9zaXRvcnkxNzk0MTY5NDA=",
    name: "Drum-Machine-Challenge",
    full_name: "john-smilga/Drum-Machine-Challenge",
    private: false,
    owner: {
      login: "john-smilga",
      id: 42133389,
      node_id: "MDQ6VXNlcjQyMTMzMzg5",
      avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/john-smilga",
      html_url: "https://github.com/john-smilga",
      followers_url: "https://api.github.com/users/john-smilga/followers",
      following_url:
        "https://api.github.com/users/john-smilga/following{/other_user}",
      gists_url: "https://api.github.com/users/john-smilga/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/john-smilga/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/john-smilga/subscriptions",
      organizations_url: "https://api.github.com/users/john-smilga/orgs",
      repos_url: "https://api.github.com/users/john-smilga/repos",
      events_url: "https://api.github.com/users/john-smilga/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/john-smilga/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/john-smilga/Drum-Machine-Challenge",
    description: null,
    fork: true,
    url: "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge",
    forks_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/forks",
    keys_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/teams",
    hooks_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/hooks",
    issue_events_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/events",
    assignees_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/tags",
    blobs_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/languages",
    stargazers_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/stargazers",
    contributors_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/contributors",
    subscribers_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/subscribers",
    subscription_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/subscription",
    commits_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/merges",
    archive_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/downloads",
    issues_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/labels{/name}",
    releases_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/john-smilga/Drum-Machine-Challenge/deployments",
    created_at: "2019-04-04T03:46:07Z",
    updated_at: "2019-10-11T18:17:13Z",
    pushed_at: "2019-02-15T18:04:03Z",
    git_url: "git://github.com/john-smilga/Drum-Machine-Challenge.git",
    ssh_url: "git@github.com:john-smilga/Drum-Machine-Challenge.git",
    clone_url: "https://github.com/john-smilga/Drum-Machine-Challenge.git",
    svn_url: "https://github.com/john-smilga/Drum-Machine-Challenge",
    homepage: null,
    size: 2933,
    stargazers_count: 1,
    watchers_count: 1,
    language: "JavaScript",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 2,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 2,
    open_issues: 0,
    watchers: 1,
    default_branch: "master",
  },
  {
    id: 333961781,
    node_id: "MDEwOlJlcG9zaXRvcnkzMzM5NjE3ODE=",
    name: "express-basic-test-server",
    full_name: "john-smilga/express-basic-test-server",
    private: false,
    owner: {
      login: "john-smilga",
      id: 42133389,
      node_id: "MDQ6VXNlcjQyMTMzMzg5",
      avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/john-smilga",
      html_url: "https://github.com/john-smilga",
      followers_url: "https://api.github.com/users/john-smilga/followers",
      following_url:
        "https://api.github.com/users/john-smilga/following{/other_user}",
      gists_url: "https://api.github.com/users/john-smilga/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/john-smilga/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/john-smilga/subscriptions",
      organizations_url: "https://api.github.com/users/john-smilga/orgs",
      repos_url: "https://api.github.com/users/john-smilga/repos",
      events_url: "https://api.github.com/users/john-smilga/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/john-smilga/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/john-smilga/express-basic-test-server",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/john-smilga/express-basic-test-server",
    forks_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/forks",
    keys_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/teams",
    hooks_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/hooks",
    issue_events_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/events",
    assignees_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/tags",
    blobs_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/languages",
    stargazers_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/stargazers",
    contributors_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/contributors",
    subscribers_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/subscribers",
    subscription_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/subscription",
    commits_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/merges",
    archive_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/downloads",
    issues_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/labels{/name}",
    releases_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/john-smilga/express-basic-test-server/deployments",
    created_at: "2021-01-28T21:31:48Z",
    updated_at: "2021-09-03T17:06:05Z",
    pushed_at: "2021-01-28T22:34:57Z",
    git_url: "git://github.com/john-smilga/express-basic-test-server.git",
    ssh_url: "git@github.com:john-smilga/express-basic-test-server.git",
    clone_url: "https://github.com/john-smilga/express-basic-test-server.git",
    svn_url: "https://github.com/john-smilga/express-basic-test-server",
    homepage: null,
    size: 5,
    stargazers_count: 7,
    watchers_count: 7,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 1,
    open_issues: 0,
    watchers: 7,
    default_branch: "main",
  },
  {
    id: 224077333,
    node_id: "MDEwOlJlcG9zaXRvcnkyMjQwNzczMzM=",
    name: "express-portfolio-server",
    full_name: "john-smilga/express-portfolio-server",
    private: false,
    owner: {
      login: "john-smilga",
      id: 42133389,
      node_id: "MDQ6VXNlcjQyMTMzMzg5",
      avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/john-smilga",
      html_url: "https://github.com/john-smilga",
      followers_url: "https://api.github.com/users/john-smilga/followers",
      following_url:
        "https://api.github.com/users/john-smilga/following{/other_user}",
      gists_url: "https://api.github.com/users/john-smilga/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/john-smilga/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/john-smilga/subscriptions",
      organizations_url: "https://api.github.com/users/john-smilga/orgs",
      repos_url: "https://api.github.com/users/john-smilga/repos",
      events_url: "https://api.github.com/users/john-smilga/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/john-smilga/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/john-smilga/express-portfolio-server",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/john-smilga/express-portfolio-server",
    forks_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/forks",
    keys_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/teams",
    hooks_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/hooks",
    issue_events_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/events",
    assignees_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/tags",
    blobs_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/languages",
    stargazers_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/stargazers",
    contributors_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/contributors",
    subscribers_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/subscribers",
    subscription_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/subscription",
    commits_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/merges",
    archive_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/downloads",
    issues_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/labels{/name}",
    releases_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/john-smilga/express-portfolio-server/deployments",
    created_at: "2019-11-26T01:40:21Z",
    updated_at: "2021-09-03T17:08:58Z",
    pushed_at: "2020-06-25T21:12:32Z",
    git_url: "git://github.com/john-smilga/express-portfolio-server.git",
    ssh_url: "git@github.com:john-smilga/express-portfolio-server.git",
    clone_url: "https://github.com/john-smilga/express-portfolio-server.git",
    svn_url: "https://github.com/john-smilga/express-portfolio-server",
    homepage: null,
    size: 22,
    stargazers_count: 3,
    watchers_count: 3,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 3,
    default_branch: "master",
  },
  {
    id: 224072105,
    node_id: "MDEwOlJlcG9zaXRvcnkyMjQwNzIxMDU=",
    name: "express-simple-portfolio-server",
    full_name: "john-smilga/express-simple-portfolio-server",
    private: false,
    owner: {
      login: "john-smilga",
      id: 42133389,
      node_id: "MDQ6VXNlcjQyMTMzMzg5",
      avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/john-smilga",
      html_url: "https://github.com/john-smilga",
      followers_url: "https://api.github.com/users/john-smilga/followers",
      following_url:
        "https://api.github.com/users/john-smilga/following{/other_user}",
      gists_url: "https://api.github.com/users/john-smilga/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/john-smilga/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/john-smilga/subscriptions",
      organizations_url: "https://api.github.com/users/john-smilga/orgs",
      repos_url: "https://api.github.com/users/john-smilga/repos",
      events_url: "https://api.github.com/users/john-smilga/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/john-smilga/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/john-smilga/express-simple-portfolio-server",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/john-smilga/express-simple-portfolio-server",
    forks_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/forks",
    keys_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/teams",
    hooks_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/hooks",
    issue_events_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/events",
    assignees_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/tags",
    blobs_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/languages",
    stargazers_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/stargazers",
    contributors_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/contributors",
    subscribers_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/subscribers",
    subscription_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/subscription",
    commits_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/merges",
    archive_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/downloads",
    issues_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/labels{/name}",
    releases_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/john-smilga/express-simple-portfolio-server/deployments",
    created_at: "2019-11-26T01:05:23Z",
    updated_at: "2019-12-12T21:00:06Z",
    pushed_at: "2019-11-26T01:14:52Z",
    git_url: "git://github.com/john-smilga/express-simple-portfolio-server.git",
    ssh_url: "git@github.com:john-smilga/express-simple-portfolio-server.git",
    clone_url:
      "https://github.com/john-smilga/express-simple-portfolio-server.git",
    svn_url: "https://github.com/john-smilga/express-simple-portfolio-server",
    homepage: null,
    size: 563,
    stargazers_count: 1,
    watchers_count: 1,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: "master",
  },
  {
    id: 329106645,
    node_id: "MDEwOlJlcG9zaXRvcnkzMjkxMDY2NDU=",
    name: "express-testing-app-1",
    full_name: "john-smilga/express-testing-app-1",
    private: false,
    owner: {
      login: "john-smilga",
      id: 42133389,
      node_id: "MDQ6VXNlcjQyMTMzMzg5",
      avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/john-smilga",
      html_url: "https://github.com/john-smilga",
      followers_url: "https://api.github.com/users/john-smilga/followers",
      following_url:
        "https://api.github.com/users/john-smilga/following{/other_user}",
      gists_url: "https://api.github.com/users/john-smilga/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/john-smilga/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/john-smilga/subscriptions",
      organizations_url: "https://api.github.com/users/john-smilga/orgs",
      repos_url: "https://api.github.com/users/john-smilga/repos",
      events_url: "https://api.github.com/users/john-smilga/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/john-smilga/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/john-smilga/express-testing-app-1",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/john-smilga/express-testing-app-1",
    forks_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/forks",
    keys_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/teams",
    hooks_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/hooks",
    issue_events_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/events",
    assignees_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/tags",
    blobs_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/languages",
    stargazers_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/stargazers",
    contributors_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/contributors",
    subscribers_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/subscribers",
    subscription_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/subscription",
    commits_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/merges",
    archive_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/downloads",
    issues_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/labels{/name}",
    releases_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/john-smilga/express-testing-app-1/deployments",
    created_at: "2021-01-12T20:39:32Z",
    updated_at: "2021-09-03T17:06:15Z",
    pushed_at: "2021-01-12T20:40:52Z",
    git_url: "git://github.com/john-smilga/express-testing-app-1.git",
    ssh_url: "git@github.com:john-smilga/express-testing-app-1.git",
    clone_url: "https://github.com/john-smilga/express-testing-app-1.git",
    svn_url: "https://github.com/john-smilga/express-testing-app-1",
    homepage: null,
    size: 4,
    stargazers_count: 8,
    watchers_count: 8,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 8,
    default_branch: "main",
  },
  {
    id: 209595879,
    node_id: "MDEwOlJlcG9zaXRvcnkyMDk1OTU4Nzk=",
    name: "firebase-basic-app",
    full_name: "john-smilga/firebase-basic-app",
    private: false,
    owner: {
      login: "john-smilga",
      id: 42133389,
      node_id: "MDQ6VXNlcjQyMTMzMzg5",
      avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/john-smilga",
      html_url: "https://github.com/john-smilga",
      followers_url: "https://api.github.com/users/john-smilga/followers",
      following_url:
        "https://api.github.com/users/john-smilga/following{/other_user}",
      gists_url: "https://api.github.com/users/john-smilga/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/john-smilga/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/john-smilga/subscriptions",
      organizations_url: "https://api.github.com/users/john-smilga/orgs",
      repos_url: "https://api.github.com/users/john-smilga/repos",
      events_url: "https://api.github.com/users/john-smilga/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/john-smilga/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/john-smilga/firebase-basic-app",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/john-smilga/firebase-basic-app",
    forks_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/forks",
    keys_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/teams",
    hooks_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/hooks",
    issue_events_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/events",
    assignees_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/tags",
    blobs_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/languages",
    stargazers_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/stargazers",
    contributors_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/contributors",
    subscribers_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/subscribers",
    subscription_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/subscription",
    commits_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/merges",
    archive_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/downloads",
    issues_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/labels{/name}",
    releases_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/john-smilga/firebase-basic-app/deployments",
    created_at: "2019-09-19T16:05:37Z",
    updated_at: "2022-04-05T23:00:36Z",
    pushed_at: "2019-09-19T17:07:16Z",
    git_url: "git://github.com/john-smilga/firebase-basic-app.git",
    ssh_url: "git@github.com:john-smilga/firebase-basic-app.git",
    clone_url: "https://github.com/john-smilga/firebase-basic-app.git",
    svn_url: "https://github.com/john-smilga/firebase-basic-app",
    homepage: null,
    size: 169,
    stargazers_count: 2,
    watchers_count: 2,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 2,
    default_branch: "master",
  },
  {
    id: 210205879,
    node_id: "MDEwOlJlcG9zaXRvcnkyMTAyMDU4Nzk=",
    name: "firebase-restaurant-application",
    full_name: "john-smilga/firebase-restaurant-application",
    private: false,
    owner: {
      login: "john-smilga",
      id: 42133389,
      node_id: "MDQ6VXNlcjQyMTMzMzg5",
      avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/john-smilga",
      html_url: "https://github.com/john-smilga",
      followers_url: "https://api.github.com/users/john-smilga/followers",
      following_url:
        "https://api.github.com/users/john-smilga/following{/other_user}",
      gists_url: "https://api.github.com/users/john-smilga/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/john-smilga/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/john-smilga/subscriptions",
      organizations_url: "https://api.github.com/users/john-smilga/orgs",
      repos_url: "https://api.github.com/users/john-smilga/repos",
      events_url: "https://api.github.com/users/john-smilga/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/john-smilga/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/john-smilga/firebase-restaurant-application",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/john-smilga/firebase-restaurant-application",
    forks_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/forks",
    keys_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/teams",
    hooks_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/hooks",
    issue_events_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/events",
    assignees_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/tags",
    blobs_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/languages",
    stargazers_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/stargazers",
    contributors_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/contributors",
    subscribers_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/subscribers",
    subscription_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/subscription",
    commits_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/merges",
    archive_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/downloads",
    issues_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/labels{/name}",
    releases_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/john-smilga/firebase-restaurant-application/deployments",
    created_at: "2019-09-22T19:55:30Z",
    updated_at: "2022-04-01T11:22:47Z",
    pushed_at: "2019-09-24T20:36:44Z",
    git_url: "git://github.com/john-smilga/firebase-restaurant-application.git",
    ssh_url: "git@github.com:john-smilga/firebase-restaurant-application.git",
    clone_url:
      "https://github.com/john-smilga/firebase-restaurant-application.git",
    svn_url: "https://github.com/john-smilga/firebase-restaurant-application",
    homepage: null,
    size: 197,
    stargazers_count: 3,
    watchers_count: 3,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 4,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 4,
    open_issues: 0,
    watchers: 3,
    default_branch: "master",
  },
  {
    id: 197610547,
    node_id: "MDEwOlJlcG9zaXRvcnkxOTc2MTA1NDc=",
    name: "flexbox-backroads-project",
    full_name: "john-smilga/flexbox-backroads-project",
    private: false,
    owner: {
      login: "john-smilga",
      id: 42133389,
      node_id: "MDQ6VXNlcjQyMTMzMzg5",
      avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/john-smilga",
      html_url: "https://github.com/john-smilga",
      followers_url: "https://api.github.com/users/john-smilga/followers",
      following_url:
        "https://api.github.com/users/john-smilga/following{/other_user}",
      gists_url: "https://api.github.com/users/john-smilga/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/john-smilga/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/john-smilga/subscriptions",
      organizations_url: "https://api.github.com/users/john-smilga/orgs",
      repos_url: "https://api.github.com/users/john-smilga/repos",
      events_url: "https://api.github.com/users/john-smilga/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/john-smilga/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/john-smilga/flexbox-backroads-project",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/john-smilga/flexbox-backroads-project",
    forks_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/forks",
    keys_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/teams",
    hooks_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/hooks",
    issue_events_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/events",
    assignees_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/tags",
    blobs_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/languages",
    stargazers_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/stargazers",
    contributors_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/contributors",
    subscribers_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/subscribers",
    subscription_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/subscription",
    commits_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/merges",
    archive_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/downloads",
    issues_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/labels{/name}",
    releases_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/john-smilga/flexbox-backroads-project/deployments",
    created_at: "2019-07-18T15:14:01Z",
    updated_at: "2022-04-06T21:32:28Z",
    pushed_at: "2019-07-26T21:13:10Z",
    git_url: "git://github.com/john-smilga/flexbox-backroads-project.git",
    ssh_url: "git@github.com:john-smilga/flexbox-backroads-project.git",
    clone_url: "https://github.com/john-smilga/flexbox-backroads-project.git",
    svn_url: "https://github.com/john-smilga/flexbox-backroads-project",
    homepage: null,
    size: 3699,
    stargazers_count: 7,
    watchers_count: 7,
    language: "CSS",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 13,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 13,
    open_issues: 0,
    watchers: 7,
    default_branch: "master",
  },
  {
    id: 155356283,
    node_id: "MDEwOlJlcG9zaXRvcnkxNTUzNTYyODM=",
    name: "flexbox-car-dealership",
    full_name: "john-smilga/flexbox-car-dealership",
    private: false,
    owner: {
      login: "john-smilga",
      id: 42133389,
      node_id: "MDQ6VXNlcjQyMTMzMzg5",
      avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/john-smilga",
      html_url: "https://github.com/john-smilga",
      followers_url: "https://api.github.com/users/john-smilga/followers",
      following_url:
        "https://api.github.com/users/john-smilga/following{/other_user}",
      gists_url: "https://api.github.com/users/john-smilga/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/john-smilga/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/john-smilga/subscriptions",
      organizations_url: "https://api.github.com/users/john-smilga/orgs",
      repos_url: "https://api.github.com/users/john-smilga/repos",
      events_url: "https://api.github.com/users/john-smilga/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/john-smilga/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/john-smilga/flexbox-car-dealership",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/john-smilga/flexbox-car-dealership",
    forks_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/forks",
    keys_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/teams",
    hooks_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/hooks",
    issue_events_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/events",
    assignees_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/tags",
    blobs_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/languages",
    stargazers_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/stargazers",
    contributors_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/contributors",
    subscribers_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/subscribers",
    subscription_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/subscription",
    commits_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/merges",
    archive_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/downloads",
    issues_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/labels{/name}",
    releases_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/john-smilga/flexbox-car-dealership/deployments",
    created_at: "2018-10-30T09:14:22Z",
    updated_at: "2020-05-21T09:38:13Z",
    pushed_at: "2018-10-30T09:17:56Z",
    git_url: "git://github.com/john-smilga/flexbox-car-dealership.git",
    ssh_url: "git@github.com:john-smilga/flexbox-car-dealership.git",
    clone_url: "https://github.com/john-smilga/flexbox-car-dealership.git",
    svn_url: "https://github.com/john-smilga/flexbox-car-dealership",
    homepage: null,
    size: 1149,
    stargazers_count: 2,
    watchers_count: 2,
    language: "CSS",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 2,
    default_branch: "master",
  },
  {
    id: 281786048,
    node_id: "MDEwOlJlcG9zaXRvcnkyODE3ODYwNDg=",
    name: "gatsby-airtable-design-project",
    full_name: "john-smilga/gatsby-airtable-design-project",
    private: false,
    owner: {
      login: "john-smilga",
      id: 42133389,
      node_id: "MDQ6VXNlcjQyMTMzMzg5",
      avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/john-smilga",
      html_url: "https://github.com/john-smilga",
      followers_url: "https://api.github.com/users/john-smilga/followers",
      following_url:
        "https://api.github.com/users/john-smilga/following{/other_user}",
      gists_url: "https://api.github.com/users/john-smilga/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/john-smilga/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/john-smilga/subscriptions",
      organizations_url: "https://api.github.com/users/john-smilga/orgs",
      repos_url: "https://api.github.com/users/john-smilga/repos",
      events_url: "https://api.github.com/users/john-smilga/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/john-smilga/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/john-smilga/gatsby-airtable-design-project",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project",
    forks_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/forks",
    keys_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/teams",
    hooks_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/hooks",
    issue_events_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/events",
    assignees_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/tags",
    blobs_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/languages",
    stargazers_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/stargazers",
    contributors_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/contributors",
    subscribers_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/subscribers",
    subscription_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/subscription",
    commits_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/merges",
    archive_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/downloads",
    issues_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/labels{/name}",
    releases_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/john-smilga/gatsby-airtable-design-project/deployments",
    created_at: "2020-07-22T21:24:22Z",
    updated_at: "2021-09-03T17:06:21Z",
    pushed_at: "2020-12-26T17:48:31Z",
    git_url: "git://github.com/john-smilga/gatsby-airtable-design-project.git",
    ssh_url: "git@github.com:john-smilga/gatsby-airtable-design-project.git",
    clone_url:
      "https://github.com/john-smilga/gatsby-airtable-design-project.git",
    svn_url: "https://github.com/john-smilga/gatsby-airtable-design-project",
    homepage: null,
    size: 1159,
    stargazers_count: 8,
    watchers_count: 8,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 9,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "0bsd",
      name: "BSD Zero Clause License",
      spdx_id: "0BSD",
      url: "https://api.github.com/licenses/0bsd",
      node_id: "MDc6TGljZW5zZTM1",
    },
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 9,
    open_issues: 0,
    watchers: 8,
    default_branch: "master",
  },
  {
    id: 188733902,
    node_id: "MDEwOlJlcG9zaXRvcnkxODg3MzM5MDI=",
    name: "gatsby-backroads-project-recording",
    full_name: "john-smilga/gatsby-backroads-project-recording",
    private: false,
    owner: {
      login: "john-smilga",
      id: 42133389,
      node_id: "MDQ6VXNlcjQyMTMzMzg5",
      avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/john-smilga",
      html_url: "https://github.com/john-smilga",
      followers_url: "https://api.github.com/users/john-smilga/followers",
      following_url:
        "https://api.github.com/users/john-smilga/following{/other_user}",
      gists_url: "https://api.github.com/users/john-smilga/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/john-smilga/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/john-smilga/subscriptions",
      organizations_url: "https://api.github.com/users/john-smilga/orgs",
      repos_url: "https://api.github.com/users/john-smilga/repos",
      events_url: "https://api.github.com/users/john-smilga/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/john-smilga/received_events",
      type: "User",
      site_admin: false,
    },
    html_url:
      "https://github.com/john-smilga/gatsby-backroads-project-recording",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording",
    forks_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/forks",
    keys_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/teams",
    hooks_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/hooks",
    issue_events_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/events",
    assignees_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/tags",
    blobs_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/languages",
    stargazers_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/stargazers",
    contributors_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/contributors",
    subscribers_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/subscribers",
    subscription_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/subscription",
    commits_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/merges",
    archive_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/downloads",
    issues_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/labels{/name}",
    releases_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/john-smilga/gatsby-backroads-project-recording/deployments",
    created_at: "2019-05-26T21:36:23Z",
    updated_at: "2021-09-03T17:06:10Z",
    pushed_at: "2021-01-20T21:36:42Z",
    git_url:
      "git://github.com/john-smilga/gatsby-backroads-project-recording.git",
    ssh_url:
      "git@github.com:john-smilga/gatsby-backroads-project-recording.git",
    clone_url:
      "https://github.com/john-smilga/gatsby-backroads-project-recording.git",
    svn_url:
      "https://github.com/john-smilga/gatsby-backroads-project-recording",
    homepage: null,
    size: 1033,
    stargazers_count: 10,
    watchers_count: 10,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 4,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 4,
    open_issues: 1,
    watchers: 10,
    default_branch: "master",
  },
  {
    id: 158024818,
    node_id: "MDEwOlJlcG9zaXRvcnkxNTgwMjQ4MTg=",
    name: "gatsby-bootstrap",
    full_name: "john-smilga/gatsby-bootstrap",
    private: false,
    owner: {
      login: "john-smilga",
      id: 42133389,
      node_id: "MDQ6VXNlcjQyMTMzMzg5",
      avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/john-smilga",
      html_url: "https://github.com/john-smilga",
      followers_url: "https://api.github.com/users/john-smilga/followers",
      following_url:
        "https://api.github.com/users/john-smilga/following{/other_user}",
      gists_url: "https://api.github.com/users/john-smilga/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/john-smilga/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/john-smilga/subscriptions",
      organizations_url: "https://api.github.com/users/john-smilga/orgs",
      repos_url: "https://api.github.com/users/john-smilga/repos",
      events_url: "https://api.github.com/users/john-smilga/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/john-smilga/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/john-smilga/gatsby-bootstrap",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/john-smilga/gatsby-bootstrap",
    forks_url:
      "https://api.github.com/repos/john-smilga/gatsby-bootstrap/forks",
    keys_url:
      "https://api.github.com/repos/john-smilga/gatsby-bootstrap/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/john-smilga/gatsby-bootstrap/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/john-smilga/gatsby-bootstrap/teams",
    hooks_url:
      "https://api.github.com/repos/john-smilga/gatsby-bootstrap/hooks",
    issue_events_url:
      "https://api.github.com/repos/john-smilga/gatsby-bootstrap/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/john-smilga/gatsby-bootstrap/events",
    assignees_url:
      "https://api.github.com/repos/john-smilga/gatsby-bootstrap/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/john-smilga/gatsby-bootstrap/branches{/branch}",
    tags_url: "https://api.github.com/repos/john-smilga/gatsby-bootstrap/tags",
    blobs_url:
      "https://api.github.com/repos/john-smilga/gatsby-bootstrap/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/john-smilga/gatsby-bootstrap/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/john-smilga/gatsby-bootstrap/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/john-smilga/gatsby-bootstrap/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/john-smilga/gatsby-bootstrap/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/john-smilga/gatsby-bootstrap/languages",
    stargazers_url:
      "https://api.github.com/repos/john-smilga/gatsby-bootstrap/stargazers",
    contributors_url:
      "https://api.github.com/repos/john-smilga/gatsby-bootstrap/contributors",
    subscribers_url:
      "https://api.github.com/repos/john-smilga/gatsby-bootstrap/subscribers",
    subscription_url:
      "https://api.github.com/repos/john-smilga/gatsby-bootstrap/subscription",
    commits_url:
      "https://api.github.com/repos/john-smilga/gatsby-bootstrap/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/john-smilga/gatsby-bootstrap/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/john-smilga/gatsby-bootstrap/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/john-smilga/gatsby-bootstrap/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/john-smilga/gatsby-bootstrap/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/john-smilga/gatsby-bootstrap/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/john-smilga/gatsby-bootstrap/merges",
    archive_url:
      "https://api.github.com/repos/john-smilga/gatsby-bootstrap/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/john-smilga/gatsby-bootstrap/downloads",
    issues_url:
      "https://api.github.com/repos/john-smilga/gatsby-bootstrap/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/john-smilga/gatsby-bootstrap/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/john-smilga/gatsby-bootstrap/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/john-smilga/gatsby-bootstrap/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/john-smilga/gatsby-bootstrap/labels{/name}",
    releases_url:
      "https://api.github.com/repos/john-smilga/gatsby-bootstrap/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/john-smilga/gatsby-bootstrap/deployments",
    created_at: "2018-11-17T21:04:00Z",
    updated_at: "2021-01-29T23:58:38Z",
    pushed_at: "2018-11-17T21:04:23Z",
    git_url: "git://github.com/john-smilga/gatsby-bootstrap.git",
    ssh_url: "git@github.com:john-smilga/gatsby-bootstrap.git",
    clone_url: "https://github.com/john-smilga/gatsby-bootstrap.git",
    svn_url: "https://github.com/john-smilga/gatsby-bootstrap",
    homepage: null,
    size: 353,
    stargazers_count: 2,
    watchers_count: 2,
    language: "CSS",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 2,
    default_branch: "master",
  },
  {
    id: 169362536,
    node_id: "MDEwOlJlcG9zaXRvcnkxNjkzNjI1MzY=",
    name: "gatsby-coffee-project",
    full_name: "john-smilga/gatsby-coffee-project",
    private: false,
    owner: {
      login: "john-smilga",
      id: 42133389,
      node_id: "MDQ6VXNlcjQyMTMzMzg5",
      avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/john-smilga",
      html_url: "https://github.com/john-smilga",
      followers_url: "https://api.github.com/users/john-smilga/followers",
      following_url:
        "https://api.github.com/users/john-smilga/following{/other_user}",
      gists_url: "https://api.github.com/users/john-smilga/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/john-smilga/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/john-smilga/subscriptions",
      organizations_url: "https://api.github.com/users/john-smilga/orgs",
      repos_url: "https://api.github.com/users/john-smilga/repos",
      events_url: "https://api.github.com/users/john-smilga/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/john-smilga/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/john-smilga/gatsby-coffee-project",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/john-smilga/gatsby-coffee-project",
    forks_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/forks",
    keys_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/teams",
    hooks_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/hooks",
    issue_events_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/events",
    assignees_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/tags",
    blobs_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/languages",
    stargazers_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/stargazers",
    contributors_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/contributors",
    subscribers_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/subscribers",
    subscription_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/subscription",
    commits_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/merges",
    archive_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/downloads",
    issues_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/labels{/name}",
    releases_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/john-smilga/gatsby-coffee-project/deployments",
    created_at: "2019-02-06T06:06:00Z",
    updated_at: "2022-05-13T11:26:08Z",
    pushed_at: "2022-04-09T02:58:29Z",
    git_url: "git://github.com/john-smilga/gatsby-coffee-project.git",
    ssh_url: "git@github.com:john-smilga/gatsby-coffee-project.git",
    clone_url: "https://github.com/john-smilga/gatsby-coffee-project.git",
    svn_url: "https://github.com/john-smilga/gatsby-coffee-project",
    homepage: null,
    size: 4376,
    stargazers_count: 28,
    watchers_count: 28,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 7,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 21,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 7,
    open_issues: 21,
    watchers: 28,
    default_branch: "master",
  },
  {
    id: 238067823,
    node_id: "MDEwOlJlcG9zaXRvcnkyMzgwNjc4MjM=",
    name: "gatsby-courses",
    full_name: "john-smilga/gatsby-courses",
    private: false,
    owner: {
      login: "john-smilga",
      id: 42133389,
      node_id: "MDQ6VXNlcjQyMTMzMzg5",
      avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/john-smilga",
      html_url: "https://github.com/john-smilga",
      followers_url: "https://api.github.com/users/john-smilga/followers",
      following_url:
        "https://api.github.com/users/john-smilga/following{/other_user}",
      gists_url: "https://api.github.com/users/john-smilga/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/john-smilga/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/john-smilga/subscriptions",
      organizations_url: "https://api.github.com/users/john-smilga/orgs",
      repos_url: "https://api.github.com/users/john-smilga/repos",
      events_url: "https://api.github.com/users/john-smilga/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/john-smilga/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/john-smilga/gatsby-courses",
    description: null,
    fork: true,
    url: "https://api.github.com/repos/john-smilga/gatsby-courses",
    forks_url: "https://api.github.com/repos/john-smilga/gatsby-courses/forks",
    keys_url:
      "https://api.github.com/repos/john-smilga/gatsby-courses/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/john-smilga/gatsby-courses/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/john-smilga/gatsby-courses/teams",
    hooks_url: "https://api.github.com/repos/john-smilga/gatsby-courses/hooks",
    issue_events_url:
      "https://api.github.com/repos/john-smilga/gatsby-courses/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/john-smilga/gatsby-courses/events",
    assignees_url:
      "https://api.github.com/repos/john-smilga/gatsby-courses/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/john-smilga/gatsby-courses/branches{/branch}",
    tags_url: "https://api.github.com/repos/john-smilga/gatsby-courses/tags",
    blobs_url:
      "https://api.github.com/repos/john-smilga/gatsby-courses/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/john-smilga/gatsby-courses/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/john-smilga/gatsby-courses/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/john-smilga/gatsby-courses/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/john-smilga/gatsby-courses/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/john-smilga/gatsby-courses/languages",
    stargazers_url:
      "https://api.github.com/repos/john-smilga/gatsby-courses/stargazers",
    contributors_url:
      "https://api.github.com/repos/john-smilga/gatsby-courses/contributors",
    subscribers_url:
      "https://api.github.com/repos/john-smilga/gatsby-courses/subscribers",
    subscription_url:
      "https://api.github.com/repos/john-smilga/gatsby-courses/subscription",
    commits_url:
      "https://api.github.com/repos/john-smilga/gatsby-courses/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/john-smilga/gatsby-courses/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/john-smilga/gatsby-courses/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/john-smilga/gatsby-courses/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/john-smilga/gatsby-courses/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/john-smilga/gatsby-courses/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/john-smilga/gatsby-courses/merges",
    archive_url:
      "https://api.github.com/repos/john-smilga/gatsby-courses/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/john-smilga/gatsby-courses/downloads",
    issues_url:
      "https://api.github.com/repos/john-smilga/gatsby-courses/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/john-smilga/gatsby-courses/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/john-smilga/gatsby-courses/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/john-smilga/gatsby-courses/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/john-smilga/gatsby-courses/labels{/name}",
    releases_url:
      "https://api.github.com/repos/john-smilga/gatsby-courses/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/john-smilga/gatsby-courses/deployments",
    created_at: "2020-02-03T21:41:58Z",
    updated_at: "2020-07-02T18:49:08Z",
    pushed_at: "2020-02-03T04:00:38Z",
    git_url: "git://github.com/john-smilga/gatsby-courses.git",
    ssh_url: "git@github.com:john-smilga/gatsby-courses.git",
    clone_url: "https://github.com/john-smilga/gatsby-courses.git",
    svn_url: "https://github.com/john-smilga/gatsby-courses",
    homepage: null,
    size: 4934,
    stargazers_count: 2,
    watchers_count: 2,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 2,
    default_branch: "master",
  },
  {
    id: 192434000,
    node_id: "MDEwOlJlcG9zaXRvcnkxOTI0MzQwMDA=",
    name: "gatsby-mdx-blog-project",
    full_name: "john-smilga/gatsby-mdx-blog-project",
    private: false,
    owner: {
      login: "john-smilga",
      id: 42133389,
      node_id: "MDQ6VXNlcjQyMTMzMzg5",
      avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/john-smilga",
      html_url: "https://github.com/john-smilga",
      followers_url: "https://api.github.com/users/john-smilga/followers",
      following_url:
        "https://api.github.com/users/john-smilga/following{/other_user}",
      gists_url: "https://api.github.com/users/john-smilga/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/john-smilga/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/john-smilga/subscriptions",
      organizations_url: "https://api.github.com/users/john-smilga/orgs",
      repos_url: "https://api.github.com/users/john-smilga/repos",
      events_url: "https://api.github.com/users/john-smilga/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/john-smilga/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/john-smilga/gatsby-mdx-blog-project",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project",
    forks_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/forks",
    keys_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/teams",
    hooks_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/hooks",
    issue_events_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/events",
    assignees_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/tags",
    blobs_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/languages",
    stargazers_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/stargazers",
    contributors_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/contributors",
    subscribers_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/subscribers",
    subscription_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/subscription",
    commits_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/merges",
    archive_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/downloads",
    issues_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/labels{/name}",
    releases_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-project/deployments",
    created_at: "2019-06-17T23:58:40Z",
    updated_at: "2022-02-25T10:10:24Z",
    pushed_at: "2022-06-03T22:49:10Z",
    git_url: "git://github.com/john-smilga/gatsby-mdx-blog-project.git",
    ssh_url: "git@github.com:john-smilga/gatsby-mdx-blog-project.git",
    clone_url: "https://github.com/john-smilga/gatsby-mdx-blog-project.git",
    svn_url: "https://github.com/john-smilga/gatsby-mdx-blog-project",
    homepage: null,
    size: 757,
    stargazers_count: 3,
    watchers_count: 3,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 1,
    open_issues: 1,
    watchers: 3,
    default_branch: "master",
  },
  {
    id: 267145715,
    node_id: "MDEwOlJlcG9zaXRvcnkyNjcxNDU3MTU=",
    name: "gatsby-mdx-blog-udemy-course-second-project-starter-project",
    full_name:
      "john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project",
    private: false,
    owner: {
      login: "john-smilga",
      id: 42133389,
      node_id: "MDQ6VXNlcjQyMTMzMzg5",
      avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/john-smilga",
      html_url: "https://github.com/john-smilga",
      followers_url: "https://api.github.com/users/john-smilga/followers",
      following_url:
        "https://api.github.com/users/john-smilga/following{/other_user}",
      gists_url: "https://api.github.com/users/john-smilga/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/john-smilga/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/john-smilga/subscriptions",
      organizations_url: "https://api.github.com/users/john-smilga/orgs",
      repos_url: "https://api.github.com/users/john-smilga/repos",
      events_url: "https://api.github.com/users/john-smilga/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/john-smilga/received_events",
      type: "User",
      site_admin: false,
    },
    html_url:
      "https://github.com/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project",
    forks_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/forks",
    keys_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/teams",
    hooks_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/hooks",
    issue_events_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/events",
    assignees_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/tags",
    blobs_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/languages",
    stargazers_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/stargazers",
    contributors_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/contributors",
    subscribers_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/subscribers",
    subscription_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/subscription",
    commits_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/merges",
    archive_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/downloads",
    issues_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/labels{/name}",
    releases_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project/deployments",
    created_at: "2020-05-26T20:31:59Z",
    updated_at: "2022-04-19T17:04:04Z",
    pushed_at: "2022-06-03T23:02:45Z",
    git_url:
      "git://github.com/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project.git",
    ssh_url:
      "git@github.com:john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project.git",
    clone_url:
      "https://github.com/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project.git",
    svn_url:
      "https://github.com/john-smilga/gatsby-mdx-blog-udemy-course-second-project-starter-project",
    homepage: null,
    size: 24989,
    stargazers_count: 4,
    watchers_count: 4,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 5,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 1,
    open_issues: 5,
    watchers: 4,
    default_branch: "master",
  },
  {
    id: 222823776,
    node_id: "MDEwOlJlcG9zaXRvcnkyMjI4MjM3NzY=",
    name: "gatsby-mdx-project-starter",
    full_name: "john-smilga/gatsby-mdx-project-starter",
    private: false,
    owner: {
      login: "john-smilga",
      id: 42133389,
      node_id: "MDQ6VXNlcjQyMTMzMzg5",
      avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/john-smilga",
      html_url: "https://github.com/john-smilga",
      followers_url: "https://api.github.com/users/john-smilga/followers",
      following_url:
        "https://api.github.com/users/john-smilga/following{/other_user}",
      gists_url: "https://api.github.com/users/john-smilga/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/john-smilga/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/john-smilga/subscriptions",
      organizations_url: "https://api.github.com/users/john-smilga/orgs",
      repos_url: "https://api.github.com/users/john-smilga/repos",
      events_url: "https://api.github.com/users/john-smilga/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/john-smilga/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/john-smilga/gatsby-mdx-project-starter",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter",
    forks_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/forks",
    keys_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/teams",
    hooks_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/hooks",
    issue_events_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/events",
    assignees_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/tags",
    blobs_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/languages",
    stargazers_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/stargazers",
    contributors_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/contributors",
    subscribers_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/subscribers",
    subscription_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/subscription",
    commits_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/merges",
    archive_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/downloads",
    issues_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/labels{/name}",
    releases_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/john-smilga/gatsby-mdx-project-starter/deployments",
    created_at: "2019-11-20T01:25:35Z",
    updated_at: "2020-07-02T18:50:07Z",
    pushed_at: "2022-06-03T22:53:02Z",
    git_url: "git://github.com/john-smilga/gatsby-mdx-project-starter.git",
    ssh_url: "git@github.com:john-smilga/gatsby-mdx-project-starter.git",
    clone_url: "https://github.com/john-smilga/gatsby-mdx-project-starter.git",
    svn_url: "https://github.com/john-smilga/gatsby-mdx-project-starter",
    homepage: null,
    size: 723,
    stargazers_count: 1,
    watchers_count: 1,
    language: "CSS",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 1,
    watchers: 1,
    default_branch: "master",
  },
  {
    id: 212595520,
    node_id: "MDEwOlJlcG9zaXRvcnkyMTI1OTU1MjA=",
    name: "gatsby-personal-site-2019-starter",
    full_name: "john-smilga/gatsby-personal-site-2019-starter",
    private: false,
    owner: {
      login: "john-smilga",
      id: 42133389,
      node_id: "MDQ6VXNlcjQyMTMzMzg5",
      avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/john-smilga",
      html_url: "https://github.com/john-smilga",
      followers_url: "https://api.github.com/users/john-smilga/followers",
      following_url:
        "https://api.github.com/users/john-smilga/following{/other_user}",
      gists_url: "https://api.github.com/users/john-smilga/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/john-smilga/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/john-smilga/subscriptions",
      organizations_url: "https://api.github.com/users/john-smilga/orgs",
      repos_url: "https://api.github.com/users/john-smilga/repos",
      events_url: "https://api.github.com/users/john-smilga/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/john-smilga/received_events",
      type: "User",
      site_admin: false,
    },
    html_url:
      "https://github.com/john-smilga/gatsby-personal-site-2019-starter",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter",
    forks_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/forks",
    keys_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/teams",
    hooks_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/hooks",
    issue_events_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/events",
    assignees_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/tags",
    blobs_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/languages",
    stargazers_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/stargazers",
    contributors_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/contributors",
    subscribers_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/subscribers",
    subscription_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/subscription",
    commits_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/merges",
    archive_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/downloads",
    issues_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/labels{/name}",
    releases_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/john-smilga/gatsby-personal-site-2019-starter/deployments",
    created_at: "2019-10-03T14:04:22Z",
    updated_at: "2020-07-08T10:02:47Z",
    pushed_at: "2019-10-03T14:05:41Z",
    git_url:
      "git://github.com/john-smilga/gatsby-personal-site-2019-starter.git",
    ssh_url: "git@github.com:john-smilga/gatsby-personal-site-2019-starter.git",
    clone_url:
      "https://github.com/john-smilga/gatsby-personal-site-2019-starter.git",
    svn_url: "https://github.com/john-smilga/gatsby-personal-site-2019-starter",
    homepage: null,
    size: 343,
    stargazers_count: 10,
    watchers_count: 10,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 6,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 6,
    open_issues: 0,
    watchers: 10,
    default_branch: "master",
  },
];

export { mockUserData, mockFollowersData, mockReposData };
