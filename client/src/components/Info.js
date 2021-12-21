import React from "react";

const Info = ({
  data: {
    ip = "",
    region = "",
    city = "",
    postalCode = "",
    timezone = "",
    isp = "",
  },
}) => {
  return (
    <div className="info">
      <div className="info-box">
        <p>IP Address</p>
        <p>{ip}</p>
      </div>
      <div className="info-box">
        <p>Location</p>
        <p>
          {region ? `${region}, ` : ""}
          {city ? `${city}` : ""}
        </p>
        <p>{postalCode}</p>
      </div>
      <div className="info-box">
        <p>Timezone</p>
        <p>UTC {timezone}</p>
      </div>
      <div className="info-box">
        <p>ISP</p>
        <p>{isp}</p>
      </div>
    </div>
  );
};

export default Info;
