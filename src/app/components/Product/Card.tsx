import Image from 'next/image';
import Link from 'next/link';

import { star } from '@/assets/assets';
import { CardProps } from '@/redux';
import { formatPrice, formatUrl, getBrandLogo } from '@/utils';

import { CartButton } from '../Buttons';
interface ProductCardProps {
  cardDetails: CardProps;
}

const Card: React.FC<ProductCardProps> = ({ cardDetails }) => {
  const { id, image, price, brandLogo, name, rating } = cardDetails;

  const brandLogoSrc = getBrandLogo(brandLogo);
  const url = formatUrl(name);

  return (
    <div className="w-full lg:max-w-[314px] text-text-secondary bg-white rounded-2xl shadow-lg overflow-hidden">
      <Link
        href={`/product/${url}?id=${id}`}
        aria-label={`View details for ${name}`}
      >
        <Image
          src={image}
          alt={`${name} product image`}
          width={500}
          height={100}
          quality={100}
          priority
          className="w-full h-[214px] object-cover"
        />
      </Link>
      <div className="p-4 space-y-2">
        <div className="flex justify-between">
          <div>
            <p className="text-base font-medium text-text-primary">{name}</p>
            <p className="text-lg font-semibold text-primary">
              ${formatPrice(price)}
            </p>
          </div>
          <CartButton product={cardDetails} />
        </div>
        <div className="flex justify-between items-center">
          {brandLogoSrc && (
            <Image
              src={brandLogoSrc}
              alt={`${name} brand logo`}
              width={100}
              height={100}
              className="w-14 h-4 "
            />
          )}
          <div className="flex items-center gap-x-1 text-sm">
            <Image src={star} alt="star icon" />
            <p className="font-medium">{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
