import { useAuth } from "@/providers/auth-provider";
import { FaUser } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

function FavoritePage() {
  const { userId } = useParams<{ userId?: string }>();
  const { setUser, user } = useAuth();
  if (!user) {
    return (
      <div className="p-6 text-center flex flex-col items-center">
        ERROR 404: ONLY SIGNUP/LOGIN USER CAN SEE THE FAVORITE PAGE
        <button className="mt-3 bg-[rgb(92,166,255)] flex items-center justify-center gap-[5px] rounded-[4px] p-[7px] w-[150px] hover:bg-[#00193f] ">
          <div>
            <FaUser className="text-white" />
          </div>
          <Link to={"/login"}>
            <div className="text-white text-[10px]">LOG IN NOW</div>
          </Link>
        </button>
      </div>
    );
  }

  return <div>FavoritePage</div>;
}

export default FavoritePage;
