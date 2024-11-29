import Skeleton from '../Skeleton';

const CartItemSkeleton: React.FC<{ itemKey: number }> = ({ itemKey }) => {
  return (
    <div key={itemKey}>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <Skeleton className="lg:w-[176px] lg:h-[80px] object-contain" />
        <div className="flex flex-col gap-2">
          <Skeleton className="w-28 h-4 rounded-lg" />
          <Skeleton className="w-16 h-4 rounded-lg" />
          <Skeleton className="w-32 h-4 rounded-lg" />
        </div>
        <div>
          <Skeleton className="w-24 h-8 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default CartItemSkeleton;
