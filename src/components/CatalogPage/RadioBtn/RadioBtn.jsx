import { Field } from 'formik';
import css from './RadioBtn.module.css';
import CustomIcon from 'components/Common/CustomIcon/CustomIcon';

const RadioBtn = ({ name, options }) => {
  return (
    <div className={css.radioButtonGroup}>
      {options.map(option => (
        <Field key={option.value} name={name}>
          {({ field, form }) => {
            const isSelected = form.values[name] === option.value;

            const handleClick = () => {
              if (isSelected) {
                form.setFieldValue(name, '');
              } else {
                form.setFieldValue(name, option.value);
              }
            };

            return (
              <div
                className={`${css.radioButton} ${
                  isSelected ? css.checked : ''
                }`}
                onClick={handleClick}
              >
                <input
                  type="radio"
                  {...field}
                  value={option.value}
                  checked={isSelected}
                  readOnly
                  style={{ display: 'none' }}
                />
                <div className={css.iconWrapper}>
                  <CustomIcon
                    styleClass={css.radioBtnIcon}
                    iconName={option.iconName}
                    customWidth="32"
                    customHeight="32"
                  />
                </div>
                <span className={css.truckType}>{option.label}</span>
              </div>
            );
          }}
        </Field>
      ))}
    </div>
  );
};

export default RadioBtn;
