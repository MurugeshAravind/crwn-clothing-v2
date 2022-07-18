import { useSelector } from "react-redux";
import CategoryPreview from "../../category-preview/category-preview.component";
import { selectCategoriesIsLoading, setCategories } from "../../../store/categories/category.selector";
import Spinner from "../../spinner/spinner.component";
const CategoriesPreview = () => {
  const categoriesMap = useSelector(setCategories)
  const isLoading = useSelector(selectCategoriesIsLoading)
  return (
    <>
      {!isLoading ? Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title]
        return <CategoryPreview key={title} title={title} products={products} />
      }) : <Spinner />}
    </>
  );
};
export default CategoriesPreview;
