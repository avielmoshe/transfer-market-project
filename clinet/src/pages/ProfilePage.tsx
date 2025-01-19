import { useState } from "react";
import { useAuth } from "@/providers/auth-provider";
import { deleteCookie, deleteUser, getUser, updateUser } from "@/utils/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { FaUser } from "react-icons/fa";

export default function ProfilePage() {
  const { userId } = useParams<{ userId?: string }>();
  const [errorMessage, setErrorMessage] = useState("");

  const { setUser, user } = useAuth();
  const navigate = useNavigate();

  // Destructure the refetch method from useQuery
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["getUser", { userId }],
    queryFn: () => getUser(),
  });

  const [isEditing, setIsEditing] = useState(false);
  const [updatedData, setUpdatedData] = useState<any>({
    newUsername: "",
    newFirstName: "",
    newLastName: "",
    newEmail: "",
    newPhone: "",
    newPassword: "",
  });

  const { mutateAsync: updateUserAccount } = useMutation({
    mutationFn: updateUser,
    onSuccess: (data) => {
      // Refetch the user data after a successful mutation
      refetch();
      setIsEditing(false); // Close the editing state after the update
    },
    onError: (error: any) => {
      console.error(error);
      const errorMessageFromApi = error.error || "An error occurred.";

      setErrorMessage(errorMessageFromApi);
    },
  });

  const { mutateAsync: deleteUserAccount } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      deleteCookie();
      navigate("/login");
      setUser(null);
    },
    onError: (error: any) => {
      console.error(error);
      const errorMessageFromApi = error.error || "An error occurred.";

      setErrorMessage(errorMessageFromApi);
    },
  });

  if (error instanceof Error) return <div>Error loading profile data.</div>;
  if (isLoading) return <div>Loading...</div>;

  const currentUser = data?.user;
  if (!user) {
    return (
      <div className="p-6 text-center flex flex-col items-center">
        ERROR 404: ONLY SIGNUP/LOGIN USER CAN SEE THE PROFILE PAGE
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

  // Handle field change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const { value } = e.target;
    setUpdatedData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Handle save changes
  const handleSaveChanges = async () => {
    // Create an object to store only the changed fields
    const changes: any = {};

    // Check for changes and only include the fields that were updated
    if (updatedData.newUsername !== currentUser.username) {
      changes.newUsername = updatedData.newUsername;
    }
    if (updatedData.newFirstName !== currentUser.firstName) {
      changes.newFirstName = updatedData.newFirstName;
    }
    if (updatedData.newLastName !== currentUser.lastName) {
      changes.newLastName = updatedData.newLastName;
    }
    if (updatedData.newEmail !== currentUser.email) {
      changes.newEmail = updatedData.newEmail;
    }
    if (updatedData.newPhone !== currentUser.phone) {
      changes.newPhone = updatedData.newPhone;
    }
    if (updatedData.newPassword) {
      changes.newPassword = updatedData.newPassword;
    }

    // Only send the changes if there are any
    if (Object.keys(changes).length > 0) {
      console.log("Updated Data:", changes);
      await updateUserAccount(changes);
    } else {
      // Optionally, handle the case where no fields have changed
      console.log("No changes detected.");
      setIsEditing(false);
    }
  };

  // Handle logout
  const handleLogout = () => {
    deleteCookie();
    navigate("/login");
    setUser(null);
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Profile Page
      </h1>
      <div className="">
        <div className="space-y-6 flex justify-between">
          {!isEditing ? (
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md space-y-4 w-[400px]">
                <div className="text-gray-700">
                  <span className="font-semibold">Username:</span>
                  <span className="text-lg">{currentUser.username}</span>
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">First Name:</span>
                  <span className="text-lg">{currentUser.firstName}</span>
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">Last Name:</span>
                  <span className="text-lg">{currentUser.lastName}</span>
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">Email:</span>
                  <span className="text-lg">{currentUser.email}</span>
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">Phone:</span>
                  <span className="text-lg">{currentUser.phone}</span>
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">Created At:</span>
                  <span className="text-lg">
                    {new Date(currentUser.createdAt).toLocaleString()}
                  </span>
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">Saved Competitions:</span>
                  <span className="text-lg">
                    {currentUser.savedLiga.length}
                  </span>
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">Saved Clubs:</span>
                  <span className="text-lg">
                    {currentUser.savedClubs.length}
                  </span>
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">Saved Players:</span>
                  <span className="text-lg">
                    {currentUser.savedPlayers.length}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Username:
                  </label>
                  <input
                    type="text"
                    name="newUsername"
                    value={updatedData?.newUsername || currentUser.username}
                    onChange={(e) => handleChange(e, "newUsername")}
                    className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    First Name:
                  </label>
                  <input
                    type="text"
                    name="newFirstName"
                    value={updatedData?.newFirstName || currentUser.firstName}
                    onChange={(e) => handleChange(e, "newFirstName")}
                    className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name:
                  </label>
                  <input
                    type="text"
                    name="newLastName"
                    value={updatedData?.newLastName || currentUser.lastName}
                    onChange={(e) => handleChange(e, "newLastName")}
                    className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="newEmail"
                    value={updatedData?.newEmail || currentUser.email}
                    onChange={(e) => handleChange(e, "newEmail")}
                    className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Phone:
                  </label>
                  <input
                    type="text"
                    name="newPhone"
                    value={updatedData?.newPhone || currentUser.phone}
                    onChange={(e) => handleChange(e, "newPhone")}
                    className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
            </div>
          )}
          <div>{errorMessage}</div>

          <div className="flex justify-end">
            <div className="flex flex-col space-y-4 w-[160px]">
              {isEditing ? (
                <button
                  onClick={handleSaveChanges}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md"
                >
                  Save Changes
                </button>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 bg-yellow-600 text-white rounded-md"
                >
                  Edit Profile
                </button>
              )}
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-md"
              >
                Logout
              </button>

              {/* Account Deletion with Confirmation */}
              <AlertDialog>
                <AlertDialogTrigger>
                  <button className="px-4 py-2 bg-gray-600 text-white rounded-md">
                    Delete Account
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={async () => {
                        await deleteUserAccount();
                      }}
                    >
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
