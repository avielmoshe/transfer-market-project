import { useAuth } from "@/providers/auth-provider";
import { getUser, toggleItemInSavedList } from "@/utils/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";

interface BtnToggleFavoriteProps {
  id: string | undefined;
  type: string;
}

function BtnToggleFavorite({ id, type }: BtnToggleFavoriteProps) {
  const { user } = useAuth();

  const { mutateAsync: toggleItemInSavedListFavorite } = useMutation({
    mutationFn: toggleItemInSavedList,
    onSuccess: () => {
      // Refetch data after mutation is successful
      refetch();
    },
    onError: (error: any) => {
      console.error(error);
      const errorMessageFromApi = error?.error || "An error occurred.";
      alert(errorMessageFromApi); // Provide feedback to the user
    },
  });

  // Memoize listType based on the type prop
  function getListType(type: string) {
    if (type === "player") {
      return "savedPlayers";
    }
    if (type === "club") {
      return "savedClubs";
    }
    if (type === "competition") {
      return "savedLiga";
    }
  }
  const listType = getListType(type);
  // Fetch user data
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["getUser"],
    queryFn: getUser,
  });

  // Handle loading and error states
  if (isLoading) {
    return <div>Loading...</div>; // Show loading spinner or placeholder
  }

  if (error) {
    return <div>Error loading data. Please try again.</div>;
  }

  if (!data) {
    return null;
  }

  const favoriteArray = data.user[listType];
  const inFavorite = favoriteArray?.includes(id);

  const handleToggleFavorite = async () => {
    try {
      await toggleItemInSavedListFavorite({ itemId: id, listType: listType });
    } catch (error) {
      console.error("Failed to toggle favorite:", error);
    }
  };

  return (
    <div>
      <button
        className="text-[6px] bg-yellow-500 p-3 rounded-full font-bold sm:text-[12px]"
        onClick={handleToggleFavorite}
      >
        {inFavorite
          ? `REMOVE ${type.toUpperCase()} FROM FAVORITE`
          : `ADD ${type.toUpperCase()} TO FAVORITE`}
      </button>
    </div>
  );
}

export default BtnToggleFavorite;
