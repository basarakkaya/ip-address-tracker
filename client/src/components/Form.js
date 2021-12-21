/* eslint-disable no-useless-escape */
import React from "react";

const ipAddressRegex =
  /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

const domainRegex =
  /^(?!(https:\/\/|http:\/\/|www\.|mailto:|smtp:|ftp:\/\/|ftps:\/\/))(((([a-zA-Z0-9])|([a-zA-Z0-9][a-zA-Z0-9\-]{0,86}[a-zA-Z0-9]))\.(([a-zA-Z0-9])|([a-zA-Z0-9][a-zA-Z0-9\-]{0,73}[a-zA-Z0-9]))\.(([a-zA-Z0-9]{2,12}\.[a-zA-Z0-9]{2,12})|([a-zA-Z0-9]{2,25})))|((([a-zA-Z0-9])|([a-zA-Z0-9][a-zA-Z0-9\-]{0,162}[a-zA-Z0-9]))\.(([a-zA-Z0-9]{2,12}\.[a-zA-Z0-9]{2,12})|([a-zA-Z0-9]{2,25}))))$/g;

const Form = ({ onSubmit }) => {
  const formRef = React.useRef(null);
  const [loading, setLoading] = React.useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const addressEntry = formRef.current["address"]?.value;

    if (ipAddressRegex.test(addressEntry)) {
      onSubmit(addressEntry, "ipAddress");
    } else if (domainRegex.test(addressEntry)) {
      onSubmit(addressEntry, "domain");
    } else {
      alert("Invalid IP Address Entry");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={onSubmitHandler} ref={formRef}>
      <input
        name="address"
        placeholder="Search for any IP address or domain"
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        Search
      </button>
    </form>
  );
};

export default Form;
