import { useQuery } from "@tanstack/react-query";
import FriendCard from "../components/FriendCard";
import { getUserFriends } from "../lib/api";

const FriendsPage = () => {
  const { data: friends = [], isLoading } = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends,
  });

  if (isLoading) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold">Your Friends</h1>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Your Friends</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {friends.map((friend) => (
          <FriendCard key={friend._id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default FriendsPage;
