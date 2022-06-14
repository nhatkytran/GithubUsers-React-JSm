import { useGlobalContext } from "../../context/context";
import ReposPie3D from "../charts/ReposPie3D";

function Repos({ kindOf }) {
  const { mockRepos } = useGlobalContext();

  let data;
  if (kindOf === "languages") {
    data = mockRepos.reduce((acc, cur) => {
      if (!cur.language) return acc;

      if (!acc[cur.language]) {
        acc[cur.language] = 1;
      } else {
        acc[cur.language] += 1;
      }

      return acc;
    }, {});
  }
  if (kindOf === "stars") {
    data = mockRepos.reduce((acc, cur) => {
      if (!cur.language) return acc;

      if (!acc[cur.language]) {
        acc[cur.language] = cur.stargazers_count;
      } else {
        acc[cur.language] += cur.stargazers_count;
      }

      return acc;
    }, {});
  }

  const chartData = Object.entries(data)
    .map(([key, value]) => {
      return {
        label: key,
        value,
      };
    })
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  return (
    <div className="repos">
      <h3>Repos</h3>
      <hr style={{ margin: "0" }} />
      <ReposPie3D chartData={chartData} kindOf={kindOf} />
    </div>
  );
}

export default Repos;
