export const initialState = {
  name: sessionStorage.getItem("name"),
  token: sessionStorage.getItem("token"),
};

export function reducer(state, action) {
  switch (action.type) {
    case "TokenCheck":
      if (sessionStorage.getItem("token") == "AOQGKICVOGJANGO") {
        return (window.location.href = "/admin");
      }
    case "Logout":
      return sessionStorage.clear();
    default:
      return state;
  }
}
