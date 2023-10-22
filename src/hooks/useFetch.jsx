import { useEffect, useState } from "react";

function useFetch(url) {
  const StatusColor = (status) => {
    if (status >= 100 && status < 199) {
      return "#007bff";
    } else if (status >= 200 && status < 299) {
      return "#5cb85c";
    } else if (status >= 300 && status < 399) {
      return "#ffc107";
    } else if (status >= 400 && status < 499) {
      return "#dc3545";
    } else if (status >= 500 && status < 599) {
      return "#ff0000";
    } else {
      return "#808080";
    }
  };
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const fetchPromise = url.map(async (url) => {
        try {
          const response = await fetch(url);
          const status = response.status;
          const color = StatusColor(status);
          return { name: url.name, status, icon: url.icon, color };
        } catch (error) {
          console.log(error);
          return { name: url.name, status: "Error Fetching", color: "#808080" };
        }
      });
      const results = await Promise.all(fetchPromise);
      setData(results);
    }
    getData();
  }, [url]);

  return { data };
}

export default useFetch;
