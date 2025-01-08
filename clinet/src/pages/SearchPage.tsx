import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTransferMarketData } from "../utils/api";

// Component
const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("query") || "";

  const { data, error, isLoading } = useQuery({
    queryKey: ["transferMarketData", { search }],
    queryFn: () => fetchTransferMarketData(search, "1"),
  });
  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;
  if (!data) {
    return null;
  }
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>
        Transfer Market Search Results
      </h1>

      {/* Players Section */}
      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>Players</h2>
        {data.players?.length > 0 ? (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {data.players.map((player) => (
              <div
                key={player.id}
                style={{
                  width: "300px",
                  margin: "10px",
                  padding: "15px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  background: "#f9f9f9",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <strong style={{ display: "block", marginBottom: "5px" }}>
                  Name:
                </strong>{" "}
                {player.playerName} <br />
                <strong style={{ display: "block", marginBottom: "5px" }}>
                  First Name:
                </strong>{" "}
                {player.firstName} <br />
                <strong style={{ display: "block", marginBottom: "5px" }}>
                  Last Name:
                </strong>{" "}
                {player.lastName}
              </div>
            ))}
          </div>
        ) : (
          <p>No players found.</p>
        )}
      </div>

      {/* Clubs Section */}
      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>Clubs</h2>
        {data.clubs?.length > 0 ? (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {data.clubs.map((club) => (
              <div
                key={club.id}
                style={{
                  width: "300px",
                  margin: "10px",
                  padding: "15px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  background: "#f9f9f9",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <strong style={{ display: "block", marginBottom: "5px" }}>
                  Name:
                </strong>{" "}
                {club.name} <br />
                <strong style={{ display: "block", marginBottom: "5px" }}>
                  League:
                </strong>{" "}
                {club.league || "N/A"} <br />
                <strong style={{ display: "block", marginBottom: "5px" }}>
                  Competition:
                </strong>{" "}
                {club.competitionName || "N/A"}
              </div>
            ))}
          </div>
        ) : (
          <p>No clubs found.</p>
        )}
      </div>

      {/* Coaches Section */}
      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>Coaches</h2>
        {data.coaches?.length > 0 ? (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {data.coaches.map((coach) => (
              <div
                key={coach.id}
                style={{
                  width: "300px",
                  margin: "10px",
                  padding: "15px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  background: "#f9f9f9",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <strong style={{ display: "block", marginBottom: "5px" }}>
                  Name:
                </strong>{" "}
                {coach.coachName} <br />
                <strong style={{ display: "block", marginBottom: "5px" }}>
                  First Name:
                </strong>{" "}
                {coach.firstName} <br />
                <strong style={{ display: "block", marginBottom: "5px" }}>
                  Last Name:
                </strong>{" "}
                {coach.lastName} <br />
                <img
                  src={coach.coachImage || "https://via.placeholder.com/150"}
                  alt={coach.coachName}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    marginTop: "10px",
                    borderRadius: "50%",
                  }}
                />
              </div>
            ))}
          </div>
        ) : (
          <p>No coaches found.</p>
        )}
      </div>

      {/* Agents Section */}
      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>Agents</h2>
        {data.agents?.length > 0 ? (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {data.agents.map((agent) => (
              <div
                key={agent.id}
                style={{
                  width: "300px",
                  margin: "10px",
                  padding: "15px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  background: "#f9f9f9",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <strong style={{ display: "block", marginBottom: "5px" }}>
                  Company Name:
                </strong>{" "}
                {agent.companyName}
              </div>
            ))}
          </div>
        ) : (
          <p>No agents found.</p>
        )}
      </div>

      {/* Referees Section */}
      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>Referees</h2>
        {data.referees?.length > 0 ? (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {data.referees.map((referee) => (
              <div
                key={referee.id}
                style={{
                  width: "300px",
                  margin: "10px",
                  padding: "15px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  background: "#f9f9f9",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <strong style={{ display: "block", marginBottom: "5px" }}>
                  Name:
                </strong>{" "}
                {referee.refereeName} <br />
                <strong style={{ display: "block", marginBottom: "5px" }}>
                  First Name:
                </strong>{" "}
                {referee.firstName} <br />
                <strong style={{ display: "block", marginBottom: "5px" }}>
                  Last Name:
                </strong>{" "}
                {referee.lastName} <br />
                <img
                  src={
                    referee.refereeImage || "https://via.placeholder.com/150"
                  }
                  alt={referee.refereeName}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    marginTop: "10px",
                    borderRadius: "50%",
                  }}
                />
              </div>
            ))}
          </div>
        ) : (
          <p>No referees found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
