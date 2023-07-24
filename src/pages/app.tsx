import { useState, useEffect } from "react";
import { getRepositories } from "../features/server/api-handlers";
import { Repositories } from "../features/components/repositories/repositories";

function App() {
  const [repositories, setRepositories] = useState();

  useEffect(() => {
    getRepositories({
      searchParams: {
        language: "python",
        order: "asc",
      },
      setter: setRepositories,
    });
  }, []);

  return (
    <div className="w-full h-full p-28">
      <Repositories repositories={repositories} />
    </div>
  );
}

export default App;
