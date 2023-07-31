import './category-card.styles.scss';

function CategoryCard({ category }: Props) {
  const { title, imageUrl } = category;
  return (
    <div className="category-card">
      <div
        className='category-card__background'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-card__body">
        <h2 className="category-card__title title">
          {title}
        </h2>
        <p className="category-card__description description">
          Shop now
        </p>
      </div>
    </div>
  )
}

export default CategoryCard

type Props = {
  category: {
    title: string,
    imageUrl: string,
  },
}