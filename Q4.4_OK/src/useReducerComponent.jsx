export const initialState = {
  name: sessionStorage.getItem("name"),
  token: sessionStorage.getItem("token"),
};

export function reducer(state, action) {
  switch (action.type) {
    case "check":
      return sessionStorage.setItem("name", action.payload.name), sessionStorage.setItem("token", action.payload.token);
    case "logout":
      return sessionStorage.clear();
    default:
      return state;
  }
}
