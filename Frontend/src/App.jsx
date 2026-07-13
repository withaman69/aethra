import { useState, useEffect } from "react";
import AppRouter from "./routes/AppRouter";
import AethraLoader from "./components/loading/AethraLoader";

function App() {
  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const hasVisited =
      sessionStorage.getItem(
        "aethra_loader_seen"
      );

    if (!hasVisited) {
      const timer = setTimeout(() => {
        setLoading(false);

        sessionStorage.setItem(
          "aethra_loader_seen",
          "true"
        );
      }, 5000);

      return () =>
        clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <AethraLoader />;
  }

  return <AppRouter />;
}

export default App;