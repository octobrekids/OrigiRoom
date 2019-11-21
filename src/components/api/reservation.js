import axios from "axios";
const config = {
  headers: { "Access-Control-Allow-Origin": "*" }
};

export default {
  send: async body => {
    const result = await axios.post("localhost:5000/reservation", body, config);
    const { data } = result;
    return data;
  },
  euei: async () => {}
};
