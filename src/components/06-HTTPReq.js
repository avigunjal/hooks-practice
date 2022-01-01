import React, { useState } from "react";
import Heading from "./Header";

// Api call using async await with window.fetch()

// TODO: Error handling
// TODO: Loading state
// TODO: custom Hooks to accept multiple api calls

function HttpReq() {
  const [data, setData] = useState(null);
  const [error, setError] = useState();
  const didCancel = React.useRef(false);

  const fetchData = async () => {
    const url = "https://randomuser.me/api";
    const result = await fetch(url);
    if (result.ok) {
      const response = await result.json();
      return response;
    }
    throw new Error();
  };

  React.useEffect(() => {
    let cancel = (didCancel.current = false);
    console.log(cancel);
    fetchData()
      .then((response) => {
        !didCancel.current && setData(response.results[0]);
      })
      .catch(() => setError("Bad request !!"));
    return () => {
      cancel = true;
    };
    //fetchData().catch(() => console.log("Invalid connection"));
  }, []);

  function FallbackError() {
    return (
      <div
        style={{
          padding: "20px",
          lineHeight: "25px",
          width: "300px",
          background: "whitesmoke"
        }}
      >
        <p style={{ color: "red" }}>Something went wrong!!</p>
        <p>Please try after some time</p>
      </div>
    );
  }

  function DisplayUserDetails({ name, email, phone, gender }) {
    let fullName;
    if (name !== null) {
      const { title, first, last } = { ...name };
      fullName = `${title}. ${first} ${last}`;
    }
    return (
      <section>
        <p>
          <strong>Name:</strong> {fullName}
        </p>
        <p>
          <strong>Email: </strong>
          {email}
        </p>
        <p>
          <strong>Phone no: </strong>
          {phone}
        </p>
        <p>
          <strong>Gender: </strong>
          {gender}
        </p>
      </section>
    );
  }

  return (
    <main>
      <Heading title="Http Call using async await with fetch api" />
      <div>Network Request to : https://randomuser.me/api/</div>
      <hr />
      <br />

      {error ? (
        <FallbackError />
      ) : data === null ? (
        "Loading data..."
      ) : (
        <DisplayUserDetails
          name={data.name}
          email={data.email}
          phone={data.phone}
          gender={data.gender}
        />
      )}
    </main>
  );
}

export default HttpReq;
