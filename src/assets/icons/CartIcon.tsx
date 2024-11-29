import React from 'react';

interface IconProps {
  fill: string;
  className?: string;
}

const CartIcon: React.FC<IconProps> = ({ fill, className }) => {
  return (
    <svg
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 4.24099e-10 1 4.24098e-10H2.5C2.7298 -6.68943e-06 2.95259 0.0791326 3.13089 0.224104C3.30919 0.369076 3.43212 0.571033 3.479 0.796L3.939 3H15C15.1486 3 15.2954 3.03312 15.4296 3.09698C15.5638 3.16083 15.6821 3.25379 15.7759 3.36912C15.8697 3.48444 15.9366 3.61921 15.9717 3.76363C16.0068 3.90806 16.0093 4.05849 15.979 4.204L14.729 10.204C14.6821 10.429 14.5592 10.6309 14.3809 10.7759C14.2026 10.9209 13.9798 11 13.75 11H5.605L5.813 12H13C13.6368 12.0003 14.2569 12.2033 14.7707 12.5794C15.2844 12.9556 15.6652 13.4855 15.8578 14.0924C16.0505 14.6993 16.045 15.3518 15.8422 15.9554C15.6394 16.559 15.2498 17.0824 14.7298 17.4499C14.2098 17.8174 13.5864 18.0099 12.9497 17.9996C12.313 17.9893 11.6961 17.7766 11.1883 17.3924C10.6806 17.0082 10.3082 16.4724 10.1251 15.8625C9.94202 15.2527 9.95775 14.6003 10.17 14H7.83C8.02466 14.5517 8.05377 15.1483 7.91373 15.7163C7.77369 16.2843 7.47062 16.799 7.04182 17.197C6.61302 17.595 6.07721 17.859 5.50033 17.9564C4.92345 18.0537 4.33069 17.9803 3.795 17.7452C3.25931 17.51 2.80407 17.1233 2.48532 16.6327C2.16657 16.1422 1.99821 15.5691 2.00098 14.984C2.00374 14.399 2.1775 13.8276 2.50087 13.34C2.82424 12.8525 3.28311 12.4701 3.821 12.24L1.686 2H1C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1Z"
        fill={fill}
      />
    </svg>
  );
};

export default CartIcon;
