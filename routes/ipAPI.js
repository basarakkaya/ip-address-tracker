var axios = require("axios");
var express = require("express");
var router = express.Router();

const baseURL = "https://geo.ipify.org/api/v2/country,city";

// IMPORTANT NOTE: These API calls return sample responses in order not to
// spend all IPIFY service credits while trying. Please enable the commented-out
// parts and delete the sample codes to have real data from IPIFY API.

router.get("/domain/:domain", async function (req, res, next) {
  console.log("DOMAIN", req.params.domain);

  // try {
  //   const _res = await axios.get(
  //     `${baseURL}?apiKey=${process.env.IPIFY_APIKEY}&domain=${req.params.domain}`
  //   );

  //   return res.status(200).json({
  //     ip: _res.data.ip,
  //     ..._res.data.location,
  //     isp: _res.data.isp,
  //   });
  // } catch (error) {
  //   console.error("An error occured while fetching IP data:", error.message);
  //   res.status(500).send("Server Error");
  // }

  const sampleRes = {
    ip: "8.8.8.8",
    location: {
      country: "US",
      region: "California",
      city: "Mountain View",
      // lat: 37.40599,
      // lng: -122.078514,
      lat: Math.random() * 60,
      lng: Math.random() * 60,
      postalCode: "94043",
      timezone: "-07:00",
      geonameId: 5375481,
    },
    domains: [
      "0d2.net",
      "003725.com",
      "0f6.b0094c.cn",
      "007515.com",
      "0guhi.jocose.cn",
    ],
    as: {
      asn: 15169,
      name: "Google LLC",
      route: "8.8.8.0/24",
      domain: "https://about.google/intl/en/",
      type: "Content",
    },
    isp: "Google LLC",
  };

  res.send({
    ip: sampleRes.ip,
    ...sampleRes.location,
    isp: sampleRes.isp,
  });
});

router.get("/ipAddress/:ipAddress", async function (req, res, next) {
  console.log("IP", req.params.ipAddress);

  // try {
  //   const _res = await axios.get(
  //     `${baseURL}?apiKey=${process.env.IPIFY_APIKEY}&ipAddress=${req.params.ipAddress}`
  //   );

  //   return res.status(200).json({
  //     ip: _res.data.ip,
  //     ..._res.data.location,
  //     isp: _res.data.isp,
  //   });
  // } catch (error) {
  //   console.error("An error occured while fetching IP data:", error.message);
  //   res.status(500).send("Server Error");
  // }

  const sampleRes = {
    ip: "192.212.174.101",
    location: {
      country: "US",
      region: "Brooklyn",
      city: "NY",
      // lat: 37.40599,
      // lng: -122.078514,
      lat: Math.random() * 60,
      lng: Math.random() * 60,
      postalCode: "10001",
      timezone: "-05:00",
      geonameId: 5375481,
    },
    domains: [
      "0d2.net",
      "003725.com",
      "0f6.b0094c.cn",
      "007515.com",
      "0guhi.jocose.cn",
    ],
    as: {
      asn: 15169,
      name: "Google LLC",
      route: "8.8.8.0/24",
      domain: "https://about.google/intl/en/",
      type: "Content",
    },
    isp: "Google LLC",
  };

  res.send({
    ip: sampleRes.ip,
    ...sampleRes.location,
    isp: sampleRes.isp,
  });
});

module.exports = router;
