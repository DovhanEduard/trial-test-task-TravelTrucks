import { Field } from 'formik';
import css from './RadioBtn.module.css';
import CustomIcon from 'components/Common/CustomIcon/CustomIcon';

const RadioBtn = ({ name, options }) => {
  return (
    <div className={css.radioButtonGroup}>
      {options.map(option => (
        <Field key={option.value} name={name} type="radio" value={option.value}>
          {({ field, form }) => (
            <label
              className={`${css.radioButton} ${
                form.values[name] === option.value ? css.checked : ''
              }`}
            >
              <input
                type="radio"
                {...field}
                value={option.value}
                checked={form.values[name] === option.value}
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
            </label>
          )}
        </Field>
      ))}
    </div>
  );
};

export default RadioBtn;
