// import fetch from "isomorphic-unfetch";
// import { getTokens, AuthToken } from "../auth/tokenStore";
// import { obtainAccessToken } from "../auth/handleAuth";

// const customFetch = async (url, option) => {
//   const token = getTokens();
//   option.headers["x-token"] = token && token.accessToken; // Setting access token

//   const initialOption = option;
//   let initialFetch = fetch(url, initialOption).then((res) => {
//     let fakeRes = res.clone();

//     // Refreshing the access token
//     return fakeRes.json().then(async (data) => {
//       if (data.errors) {
//         for (let err of data.errors) {
//           if (err.extensions.code === "UNAUTHENTICATED") {
//             const newOption = { ...option };
//             newOption.headers["x-token"] = await obtainAccessToken();
//             return fetch(url, initialOption);
//           }

//           return res;
//         }
//       }

//       return res;
//     });
//   });

//   return initialFetch;
// };

// export default customFetch;
