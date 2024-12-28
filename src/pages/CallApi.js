import axios from "axios";

function CallApi(name, email, message) {
  // API URL
  const apiUrl = "https://niwaaa.onrender.com/api/v1";

  // API Request
  axios
    .post(apiUrl, {
      name: name,
      email: email,
      message: message,
    })
    .then((response) => {
      console.log("API Response:", response.data);
    })
    .catch((error) => {
      console.error("Error calling the API:", error);
    });
}

export default CallApi;
