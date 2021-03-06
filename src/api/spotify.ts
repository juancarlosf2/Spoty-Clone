// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "6f2dddf453be4c26a9feedf7af1812fa";
const redirectUri = "http://localhost:3000";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromResponse = () => {
  // return window.location.hash
  //   .substring(1)
  //   .split("&")
  //   .reduce((initial: Record<string, any>, item: string) => {
  //     let parts = item.split("=");
  //     initial[parts[0]] = decodeURIComponent(parts[1]);

  //     return initial;
  //   }, {});

  // var url = new URL(window.location.href).searchParams.get("#Access_token");

  const getParam = (param: string) => {
    console.log(window.location);
    return new URLSearchParams(window.location.hash).get(param);
  };
  return getParam("#access_token");
  // const token = getParam("#access_token");
  // console.log(url);
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
