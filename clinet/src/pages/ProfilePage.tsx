import { useAuth } from "@/providers/auth-provider";

export default function ProfilePage() {
  const { setUser, user } = useAuth();

  return <div>ProfilePage</div>;
}
