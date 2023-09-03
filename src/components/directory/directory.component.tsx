import DirectoryCard from "@components/directory-card/directory-card.component";
import categories from "@data/categories.data";
import "./directory.styles.scss";


function Directory() {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryCard key={category.id} category={category} />
      ))}
    </div>
  )
}

export default Directory