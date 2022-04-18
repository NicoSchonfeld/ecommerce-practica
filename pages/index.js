import PageHome from "../components/PageHome";
import DataProvider from "../context/DataProvider";

export default function Home() {
  return (
    <DataProvider>
      <PageHome />
    </DataProvider>
  );
}
