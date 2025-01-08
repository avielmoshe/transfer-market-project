import React from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getLeagueByName } from "../utils/api";

// Component
const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();

  const search = searchParams.get("query") || "";

  return (
    <div>
      <h1>Search Results for "{search}"</h1>
      <ul></ul>
    </div>
  );
};

export default SearchPage;
