export const getFilteredProducts = (
  products: any[],
  selectedCategory: string | null,
  selectedSubCategory: string | null,
  tag: string,
) => {
  return products.filter((product) => {
    const hasTag = product.tags.includes(tag);
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    const matchesSubCategory = selectedSubCategory
      ? product.subcategory === selectedSubCategory
      : true;
    return hasTag && matchesCategory && matchesSubCategory;
  });
};