import { useSearchParams } from "react-router-dom";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  console.log(query);
  console.log(12);

  return <div>SearchPage</div>;
}

export default SearchPage;
