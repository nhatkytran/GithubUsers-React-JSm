import { useGlobalContext } from "../../context/context";
import ColumnAndBar3D from "../charts/ColumnAndBar3D";

function StarsAndForks({ kindOf }) {
  const { mockRepos } = useGlobalContext();

  // Data for stars and forks is similar
  let chartData;
  if (kindOf === "stars") {
    chartData = mockRepos.map((repo) => {
      return {
        label: repo.name,
        value: repo.stargazers_count,
      };
    });
  }
  if (kindOf === "forks") {
    chartData = mockRepos.map((repo) => {
      return {
        label: repo.name,
        value: repo.forks,
      };
    });
  }
  chartData = chartData.sort((a, b) => b.value - a.value).slice(0, 5);

  return (
    <div className="stars-and-forks">
      <h3>Stars and Forks</h3>
      <hr style={{ margin: "0" }} />
      <ColumnAndBar3D chartData={chartData} kindOf={kindOf} />
    </div>
  );
}

export default StarsAndForks;
