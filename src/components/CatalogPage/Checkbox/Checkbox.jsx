import { Field } from 'formik';
import css from './Checkbox.module.css';
import CustomIcon from 'components/Common/CustomIcon/CustomIcon';

const Checkbox = ({ iconName, label, ...props }) => {
  return (
    <Field name={props.name} type="checkbox">
      {({ field, form }) => (
        <label
          className={`${css.customCheckbox} ${
            form.values[props.name] ? css.checked : ''
          }`}
        >
          <input
            type="checkbox"
            {...field}
            {...props}
            checked={form.values[props.name]}
            style={{ display: 'none' }}
          />
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>
            <CustomIcon iconName={iconName} styleClass={css.chechBoxIcon} />
          </div>
          <span>{label}</span>
        </label>
      )}
    </Field>
  );
};

export default Checkbox;
