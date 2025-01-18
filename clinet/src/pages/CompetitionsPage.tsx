import { fetchDataOfBestCompetitions } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

function CompetitionsPage() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchDataOfBestCompetitions"],
    queryFn: () => fetchDataOfBestCompetitions(),
  });
  if (error) return null;
  if (!data) {
    return null;
  }
  console.log(data);

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "repeating-linear-gradient(135deg, #00173d 0.625rem, #00193f 1.5625rem)",
      }}
    >
      <h1 className="text-white text-center text-4xl font-bold mb-5">
        Top competitions
      </h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {data.defaultCompetitions.map((Competition) => (
          <Link
            key={Competition.id}
            to={`/competitionProfile/${Competition.id}/overview/2024`}
          >
            <div className="group">
              <div className="bg-white w-[90px] h-[90px] p-3 flex justify-center rounded-xl overflow-hidden">
                <img
                  src={Competition.image}
                  alt="Competition.image"
                  className="w-[50px] h-[65px] transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              <p className="text-white text-[12px] w-[90px] font-bold text-center mt-2">
                {Competition.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CompetitionsPage;
