import CategoryCard from "components/category-card/category-card.component";
import categories from "data/categories.data";
import "./directory.styles.scss";


function Directory() {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  )
}

export default Directory