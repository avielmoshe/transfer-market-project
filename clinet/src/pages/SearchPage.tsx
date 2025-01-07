import React from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getLeagueByName } from "../utils/api";

// Component
const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();

  // React Query Hook
  //   const useLeagueSearch = (search: string, page: string = "1") => {
  //     return useQuery({
  //       queryKey: ["leagueSearch", search, page],
  //       queryFn: () => getLeagueByName(search, page),
  //       enabled: !!search, // Fetch only if a search term is provided
  //     });
  //   };
  const search = searchParams.get("query") || "";
  console.log(search);
  use;
  //   const queryClient = useQueryClient();
  //   const { data: leagues, error, isLoading } = useLeagueSearch(query, page);

  //   // Optional: Prefetch the next page
  //   //   React.useEffect(() => {
  //   //     if (query && page) {
  //   //       queryClient.prefetchQuery(
  //   //         ["leagueSearch", query, (parseInt(page) + 1).toString()],
  //   //         () => getLeagueByName(query, (parseInt(page) + 1).toString())
  //   //       );
  //   //     }
  //   //   }, [query, page, queryClient]);

  //   if (isLoading) return <div>Loading...</div>;
  //   if (error)
  //     return <div>Error: {(error as any).message || "Something went wrong"}</div>;
  //   if (!leagues) return <div>No results found.</div>;

  return (
    <div>
      <h1>Search Results for "{search}"</h1>
      <ul></ul>
    </div>
  );
};

export default SearchPage;
