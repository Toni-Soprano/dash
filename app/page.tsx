// /app/page.tsx
import RevenueChart from "./components/RevenueChart";
import { getLocalData, Post } from "@/lib/getData";

export default async function Dashboard() {
  const posts: Post[] = await getLocalData();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <RevenueChart data={posts} />
    </div>
  );
}
