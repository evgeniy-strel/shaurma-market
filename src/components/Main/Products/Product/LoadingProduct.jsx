import React from "react";
import ContentLoader from "react-content-loader";

const LoadingProduct = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={385}
      viewBox="0 0 300 385"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="10" y="10" rx="9" ry="9" width="280" height="180" />
      <rect x="20" y="205" rx="6" ry="6" width="260" height="24" />
      <rect x="10" y="245" rx="10" ry="10" width="280" height="73" />
      <rect x="157" y="348" rx="24" ry="24" width="130" height="40" />
      <rect x="10" y="355" rx="5" ry="5" width="100" height="26" />
    </ContentLoader>
  );
};

export default LoadingProduct;
