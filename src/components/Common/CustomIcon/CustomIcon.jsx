const CustomIcon = ({
  styleClass,
  iconName,
  ariaLabel,
  customWidth,
  customHeight,
}) => {
  return (
    <svg
      className={styleClass || ''}
      aria-label={ariaLabel}
      width={customWidth || '32'}
      height={customHeight || '32'}
    >
      <use href={`img/icons/icons.svg#${iconName}`}></use>
    </svg>
  );
};

export default CustomIcon;
