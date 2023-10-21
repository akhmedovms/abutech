import { useEffect, useState } from "react";
import Header from "./components/Header";
import Loading from "./components/Loading";
import { BsGoogle, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaYandex, FaXTwitter } from "react-icons/fa6";
import { SlSocialVkontakte } from "react-icons/sl";
import DarkLightMode from "./components/DarkLightMode";

const links = [
  {
    icon: <BsGoogle className="text-4xl" />,
    name: "GOOGLE - Status:",
    link: "https://www.google.com/",
  },
  {
    icon: <FaYandex className="text-4xl" />,
    name: "YANDEX - Status:",
    link: "https://ya.ru/",
  },

  {
    icon: <BsInstagram className="text-4xl" />,
    name: "INSTAGRAM - Status:",
    link: "https://www.instagram.com/",
  },

  {
    icon: <SlSocialVkontakte className="text-4xl" />,
    name: "ВКОНТАКТЕ - Status:",
    link: "https://www.vk.com/",
  },

  {
    icon: <BsTwitter className="text-4xl" />,
    name: "TWITTER - Status:",
    link: "https://twitter.com/",
  },

  {
    icon: <FaXTwitter className="text-4xl" />,
    name: "TWITTER1 - Status:",
    link: "https://twitter1.com/",
  },
];

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

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const fetchPromise = links.map(async (url) => {
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
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-5 pb-5">
      {data.length > 0 ? <Header /> : ""}
      {data.length > 0 ? <DarkLightMode /> : ""}

      <ul className="card">
        {data.length > 0 ? (
          data.map((item) => {
            return (
              <li
                key={item.name}
                className="container flex flex-col sm:flex-row items-center gap-2 sm:gap-16"
              >
                <div className="flex items-center gap-4 mr-auto">
                  <span>{item.icon}</span>
                  <h1 className="text-h1">{item.name}</h1>
                </div>
                <h1 className="status-h1">
                  <span className="magic-text" style={{ color: item.color }}>
                    {item.status}
                  </span>
                </h1>
              </li>
            );
          })
        ) : (
          <Loading />
        )}
      </ul>
    </div>
  );
}

export default App;
