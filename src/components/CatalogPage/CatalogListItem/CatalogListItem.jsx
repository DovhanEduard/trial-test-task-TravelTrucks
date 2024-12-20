import CustomIcon from 'components/Common/CustomIcon/CustomIcon';
import { Link } from 'react-router';
import CategoriesList from '../CategoriesList/CategoriesList';
import css from './CatalogListItem.module.css';

const CatalogListItem = ({ camper }) => {
  return (
    <div className={css.catalogListItemWrapper}>
      <div className={css.imageContainer}>
        <img
          className={css.camperImg}
          src={camper.gallery[0].original}
          alt="Truck image"
        />
      </div>

      <div>
        <div className={css.catalogListItemTextWrapper}>
          <h2 className={css.catalogListItemTitle}>{camper.name}</h2>
          <div className={css.priceWrapper}>
            <p className={css.catalogListItemPrice}>€{camper.price}</p>
            <CustomIcon
              styleClass={css.heartIcon}
              iconName="icon-heart"
              ariaLabel="Star icon"
              customWidth="26"
              customHeight="24"
            />
          </div>
        </div>
        <div className={css.textWrapper}>
          <CustomIcon
            styleClass={css.starIcon}
            customWidth="16"
            customHeight="16"
            iconName="icon-star"
            ariaLabel="Star icon"
          />
          <p className={css.catalogListItemText}>
            {camper.rating}({camper.reviews.length} Reviews)
          </p>
          <p className={css.catalogListItemText}>{camper.location}</p>
        </div>
        <p className={css.catalogListItemDescription}>{camper.description}</p>
        <CategoriesList camper={camper} />
        <Link className={css.viewNowLink} to={`/catalog/${camper.id}`}>
          Show more
        </Link>
      </div>
    </div>
  );
};

export default CatalogListItem;
