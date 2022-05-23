import React, { useEffect, useState } from "react";
import { Data } from "../api";

const Homepage = () => {
  const [list, setList] = useState([]);
  const [query, setQuery] = useState("");

  async function getData() {
    let result = await Data();
    try {
      setList(result);
    } catch (error) {
      console.log(error);
    }
  }

  async function searchData() {
    let result = await Data();
    try {
      let resultFilter = result.filter((e) => {
        return e.name == query;
      });
      setList(resultFilter);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    setTimeout(getData, 150);
  }, []);
  useEffect(() => {
    setTimeout(searchData, 100);
  }, [query]);

  return (
    <div className="homepage">
      <h1>Search List</h1>
      <div className="display-top">
        <input
          type="text"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>

      <div className="table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {list.map((e) => {
              return (
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.phone}</td>
                  <td>{e.address}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Homepage;

// import React, { useEffect, useState } from "react";

// const Homepage = () => {
//   const data = [
//     {
//       id: 1,
//       name: "Edward",
//       email: "bhesmkfe@gmail.com",
//       phone: "0978455698",
//       address: "Taichung",
//     },
//     {
//       id: 2,
//       name: "Cory",
//       email: "efefeffef@gmail.com",
//       phone: "0928478632",
//       address: "Ilan",
//     },
//     {
//       id: 3,
//       name: "Tris",
//       email: "asdfghhhj@gmail.com",
//       phone: "0958785412",
//       address: "Taichung",
//     },
//     {
//       id: 4,
//       name: "Mike",
//       email: "miker@gmail.com",
//       phone: "0945879412",
//       address: "Taipei",
//     },
//     {
//       id: 5,
//       name: "Eva",
//       email: "eva123456@gmail.com",
//       phone: "0958785871",
//       address: "Taipei",
//     },
//   ];
//   const [list, setList] = useState(data);
//   const [query, setQuery] = useState("");

//   useEffect(() => {
//     let result = list.filter((e) => {
//       if (query == "") {
//         return e.id > 0;
//       } else {
//         return e.name == query;
//       }
//     });
//     console.log(result);
//     // setList(result);
//     // console.log(list);
//   }, [query]);

//   return (
//     <div>
//       <h1>Homepage</h1>
//       <input
//         type="text"
//         onChange={(e) => {
//           setQuery(e.target.value);
//         }}
//       />
//       <div className="table">
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>Address</th>
//             </tr>
//           </thead>
//           <tbody>
//             {list.map((e) => {
//               return (
//                 <tr key={e.id}>
//                   <td>{e.id}</td>
//                   <td>{e.name}</td>
//                   <td>{e.email}</td>
//                   <td>{e.phone}</td>
//                   <td>{e.address}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Homepage;
