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
    <div className="info-container">
      <div className="info">
        <div className="info-box">
          <p className="info-title">IP Address</p>
          <p className="info-value">{ip}</p>
        </div>
        <div className="info-divider" />
        <div className="info-box">
          <p className="info-title">Location</p>
          <p className="info-value">
            {region ? `${region}, ` : ""}
            {city ? `${city} ` : ""}
            {postalCode}
          </p>
        </div>
        <div className="info-divider" />
        <div className="info-box">
          <p className="info-title">Timezone</p>
          <p className="info-value">{timezone ? `UTC ${timezone}` : ""}</p>
        </div>
        <div className="info-divider" />
        <div className="info-box">
          <p className="info-title">ISP</p>
          <p className="info-value">{isp}</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
