import { Field } from 'formik';
import css from './Checkbox.module.css';
import CustomIcon from 'components/Common/CustomIcon/CustomIcon';

const Checkbox = ({ iconName, label, ...props }) => {
  return (
    <Field name={props.name} type="checkbox">
      {({ field, form }) => (
        <label
          className={`custom-checkbox ${
            form.values[props.name] ? 'checked' : ''
          }`}
          style={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100px',
            height: '100px',
            margin: '10px',
            border: form.values[props.name]
              ? '2px solid red'
              : '1px solid #ccc',
            borderRadius: '8px',
            cursor: 'pointer',
            textAlign: 'center',
            backgroundColor: form.values[props.name] ? '#ffe6e6' : '#fff',
            transition: 'all 0.3s ease',
          }}
        >
          <input
            type="checkbox"
            {...field}
            {...props}
            checked={form.values[props.name]}
            style={{ display: 'none' }}
          />
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>
            <CustomIcon iconName={iconName} />
          </div>
          <span>{label}</span>
        </label>
      )}
    </Field>
  );
};

export default Checkbox;
