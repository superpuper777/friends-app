import { redirect } from "next/navigation";

const Home = () => {
  redirect("/friends");
  return null;
};

export default Home;
