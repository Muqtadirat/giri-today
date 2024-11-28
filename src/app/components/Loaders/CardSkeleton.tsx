import Skeleton from '../Skeleton';

const CardSkeleton: React.FC<{ itemKey: number }> = ({ itemKey }) => {
  return (
    <div
      key={itemKey}
      className="w-full lg:max-w-[314px] text-text-secondary bg-white rounded-2xl shadow-lg overflow-hidden"
    >
      <Skeleton className="w-full h-[214px]" />
      <div className="p-4 space-y-2">
        <Skeleton className="h-6 w-3/4 rounded-lg" />
        <Skeleton className="h-6 w-1/2 rounded-lg" />
        <div className="flex justify-between items-center">
          <Skeleton className="w-14 h-6 rounded-lg" />
          <div className="flex items-center gap-x-1 text-sm">
            <Skeleton className="w-4 h-4 rounded-lg" />
            <Skeleton className="w-12 h-4 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
