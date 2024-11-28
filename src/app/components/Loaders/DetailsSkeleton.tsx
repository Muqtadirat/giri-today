import Skeleton from '../Skeleton';

const DetailsSkeleton = () => {
  return (
    <div className="mt-10 lg:mt-16 grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
      <div>
        <Skeleton className="h-8 w-3/4 mb-6 rounded-lg" />

        <div className="flex items-center justify-between mt-6 mb-10 font-semibold">
          <Skeleton className="h-6 w-1/4 rounded-lg" />
          <div className="flex items-center gap-x-1 text-sm">
            <Skeleton className="h-4 w-4 rounded-full" />
            <Skeleton className="h-4 w-12 rounded-lg" />
          </div>
        </div>

        <div className="mb-6">
          <Skeleton className="h-6 w-full rounded-lg" />
          <Skeleton className="h-6 w-3/4 mt-4 rounded-lg" />
          <Skeleton className="h-6 w-2/3 mt-4 rounded-lg" />
        </div>

        <div className="flex justify-between items-center mt-8 gap-6">
          <Skeleton className="w-24 h-12 bg-gray-300 rounded-md" />
          <Skeleton className="h-12 w-32 rounded-md" />
        </div>
      </div>

      <Skeleton className="h-[250px] w-full rounded-md" />
    </div>
  );
};

export default DetailsSkeleton;
