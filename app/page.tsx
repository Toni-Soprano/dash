import PredictionComponent from './components/PredictionComponent';
import RevenueChart from './components/RevenueChart';
import { getLocalData, Post } from '@/lib/getData';
import Navbar from './components/Navbar';

export default async function Dashboard() {
  const posts: Post[] = await getLocalData();

  return (
    <div className="p-6">
      <Navbar />
      
      <div className="flex justify-center m-6 space-x-6">
        <div className="flex-1">
          <RevenueChart data={posts} />
        </div>
        <div className="flex-none">
          <PredictionComponent />
        </div>
      </div>
    </div>
  );
}
