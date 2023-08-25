import './directory-card.styles.scss';


type Props = {
  category: {
    title: string,
    imageUrl: string,
  },
}

function DirectoryCard({ category }: Props) {
  const { title, imageUrl } = category;
  return (
    <div className="directory-card">
      <div
        className='directory-card__background'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="directory-card__body">
        <h2 className="directory-card__title title">
          {title}
        </h2>
        <p className="directory-card__description description">
          Shop now
        </p>
      </div>
    </div>
  )
}

export default DirectoryCard

