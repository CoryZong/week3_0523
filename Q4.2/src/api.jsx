//api.js
export function Data() {
  return new Promise((res) => {
    setTimeout(
      res([
        {
          id: 1,
          name: "Edward",
          email: "bhesmkfe@gmail.com",
          phone: "0978455698",
          address: "Taichung",
        },
        {
          id: 2,
          name: "Cory",
          email: "efefeffef@gmail.com",
          phone: "0928478632",
          address: "Ilan",
        },
        {
          id: 3,
          name: "Tris",
          email: "asdfghhhj@gmail.com",
          phone: "0958785412",
          address: "Taichung",
        },
        {
          id: 4,
          name: "Mike",
          email: "miker@gmail.com",
          phone: "0945879412",
          address: "Taipei",
        },
        {
          id: 5,
          name: "Eva",
          email: "eva123456@gmail.com",
          phone: "0958785871",
          address: "Taipei",
        },
      ]),
      1000
    );
  });
}
