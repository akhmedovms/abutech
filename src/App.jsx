import Header from "./components/Header";
import Loading from "./components/Loading";
import DarkLightMode from "./components/DarkLightMode";
import useFetch from "./hooks/useFetch";
import { links } from "./data";

function App() {
  const { data } = useFetch(links);
  const readyData = data || [];

  return (
    <div className="flex flex-col justify-center items-center gap-5 pb-5">
      {readyData.length > 0 ? <Header /> : ""}
      {readyData.length > 0 ? <DarkLightMode /> : ""}

      <ul className="card">
        {readyData.length > 0 ? (
          readyData.map((item) => {
            return (
              <li
                key={item.name}
                className="container flex flex-col sm:flex-row items-center gap-2 sm:gap-16"
              >
                <div className="flex items-center gap-4 mr-auto">
                  <span>
                    <img src={item.icon} alt="" />
                  </span>
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
      {readyData.length > 0 ? (
        <p className="text-[#d7b94c] pt-4">Producer: Akhmedov Muhammad Sadiy</p>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
