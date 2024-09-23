lconst express = require("express");
const axios = require("axios");
const app = express();
app.post("/verify-otp", async (req, res) => {
  try {
    const response = await axios.post(
      "https://account-noneu.truecaller.com/v1/completeOnboarding",
      { phoneNumber: "01717755725", countryCode: "BD" },
      {
        headers: {
          "content-type": "application/json; charset=UTF-8",
          "accept-encoding": "gzip",
          "user-agent": "Truecaller/11.75.5 (Android;10)",
          clientsecret: "lvc22mp3l1sfv6ujg83rd17btt",
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "API Call Failed" });
  }
});
app.listen(3000, () => console.log("Server running on port 3000"));
