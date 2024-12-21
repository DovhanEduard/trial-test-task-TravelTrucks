import CustomIcon from 'components/Common/CustomIcon/CustomIcon';
import { Link } from 'react-router';
import CategoriesList from '../CategoriesList/CategoriesList';
import css from './CatalogListItem.module.css';
import { CiMap } from 'react-icons/ci';
import { useState } from 'react';
import clsx from 'clsx';

const CatalogListItem = ({ camper }) => {
  const [isSelected, setIsSelected] = useState(() => {
    const isSelectedCamper = JSON.parse(
      localStorage.getItem(`selectedCamper${camper.id}`)
    );

    if (isSelectedCamper) {
      return true;
    }
    return false;
  });
  const handleClick = () => {
    const toggleSelect = !isSelected;

    localStorage.setItem(`selectedCamper${camper.id}`, toggleSelect);

    setIsSelected(toggleSelect);
  };

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
            <button
              type="button"
              className={css.heartBtn}
              onClick={handleClick}
            >
              <CustomIcon
                styleClass={clsx({
                  [css.isSelected]: isSelected,
                })}
                iconName="icon-heart"
                ariaLabel="Star icon"
                customWidth="26"
                customHeight="24"
              />
            </button>
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
          <div className={css.locationWrapper}>
            <CiMap className={css.mapIcon} />
            <p className={css.catalogListItemText}>{camper.location}</p>
          </div>
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
