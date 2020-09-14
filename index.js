const express=require('express');
const axios=require('axios');

const port= 5000;

app.listen(port, function(err) {
    if (err) console.log("server not running");
    else console.log("server running port : " + port);
  });

  app.get("/", function (req, res) {
    res.send("Checkpoint Axios");
  });

  app.get("/Japon", (req, res) => {
    requestJapon
      .then((data) => {
        res.json(data.data);
      })
      .catch((err) => {});
  });

  const requestJapon = axios.get(
    "http://api.openweathermap.org/data/2.5/forecast?q=japon&appid=8f596241dedadfd0a581c0d70461606e"
  );
  const requestRussia = axios.get(
  "http://api.openweathermap.org/data/2.5/forecast?q=russia&appid=8f596241dedadfd0a581c0d70461606e"
  );
  const requestChina = axios.get(
    "http://api.openweathermap.org/data/2.5/forecast?q=china&appid=8f596241dedadfd0a581c0d70461606e"
    );

    axios
    .all([requestJapon, requestRussia, requestChina])
    .then(
      axios.spread((Japon, Russia, China) => {
        console.log(Japon.data, Russia.data, China.data);
      })
    )
  
    .catch((errors) => {
      console.error(errors);
    });

    ///////////////////////Japon//////////////////////////
  app.get("/Japon", (req, res) => {
    requestJapon
      .then((data) => {
        res.json(data.data);
      })
      .catch((err) => {});
  });
  ///////////////////////Russia//////////////////////////
  app.get("/Russia", (req, res) => {
    requestRussia
      .then((data) => {
        res.json(data.data);
      })
      .catch((err) => {});
  });
  ///////////////////////China//////////////////////////
  app.get("/China", (req, res) => {
    requestChina
      .then((data) => {
        res.json(data.data);
      })
      .catch((err) => {});
  });