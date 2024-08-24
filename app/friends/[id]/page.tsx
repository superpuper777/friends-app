import { friendDetail } from "@/mock/friends";
import Image from "next/image";

const FriendPage: React.FC<{ params: { id: string } }> = async ({ params }) => {
  //   const friend = await fetchFriend(params.id);

  return (
    <div className="bg-white p-10">
      {friendDetail.avatarUrl && (
        <Image
          src={friendDetail.avatarUrl}
          alt={friendDetail.name}
          width={64}
          height={64}
          className="w-16 h-16 rounded-full mb-4"
        />
      )}
      <h1 className="text-2xl font-bold mb-4">{friendDetail.name}</h1>
      <p className="text-lg">Phone: {friendDetail.phone}</p>
    </div>
  );
};

export default FriendPage;
