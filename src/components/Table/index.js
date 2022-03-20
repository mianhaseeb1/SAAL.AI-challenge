import React from "react";

function Table(props) {
  return (
    <div>
      <table className="table mt-3">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Image</th>
            <th
              onClick={props.handleToggle}
              className="dropdown-toggle"
              role="button"
              data-toggle="dropdown"
              scope="col"
            >
              Name
            </th>
            <th scope="col">Phone Number</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {props.customerList.length > 0 ? (
            props.customerList.map((customer) => {
              return (
                <tr key={customer.login.uuid}>
                  <th>
                    <img src={customer.picture.thumbnail} alt="profPic" />
                  </th>
                  <td>
                    {customer.name.first} {customer.name.last}
                  </td>
                  <td>{customer.phone}</td>
                  <td>{customer.dob.date}</td>
                  <td>{customer.email}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <th scope="row"></th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
