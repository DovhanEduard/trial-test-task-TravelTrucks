import { Formik, Form, Field } from 'formik';
import Checkbox from '../Checkbox/Checkbox';
import css from './FilterForm.module.css'; // Підключаємо CSS файл

const FilterForm = () => {
  return (
    <Formik
      initialValues={{
        location: '',
        AC: false,
        Automatic: false,
        Kitchen: false,
        TV: false,
        Bathroom: false,
        Van: false,
        FullyIntegrated: false,
        Alcove: false,
      }}
      onSubmit={values => {
        console.log('Form Submitted', values);
      }}
    >
      {({ values, errors, touched }) => (
        <Form className="form-container">
          <div className="location-container">
            <label htmlFor="location">Location</label>
            <Field
              id="location"
              name="location"
              placeholder="City"
              className={css.locationInput}
            />
            {errors.location && touched.location && (
              <div className="error-message">{errors.location}</div>
            )}
          </div>
          <div>
            <h2 className={css.filtersTitle}>Filters</h2>
            <h3 className="section-title">Vehicle Equipment</h3>
            <div className="checkbox-container">
              <Checkbox
                name="AC"
                value={values.AC}
                iconName="icon-wind"
                label="AC"
              />
              <Checkbox
                name="Automatic"
                value={values.Automatic}
                iconName="icon-diagram"
                label="Automatic"
              />
              <Checkbox
                name="Kitchen"
                value={values.Kitchen}
                iconName="icon-cup-hot"
                label="Kitchen"
              />
              <Checkbox
                name="TV"
                value={values.TV}
                iconName="icon-tv"
                label="TV"
              />
              <Checkbox
                name="Bathroom"
                value={values.Bathroom}
                iconName="icon-shower"
                label="Bathroom"
              />
            </div>
          </div>

          <div>
            <h3 className="section-title">Vehicle Type</h3>
            <div className="checkbox-container">
              <Checkbox
                name="Van"
                value={values.Van}
                iconName="icon-bi_grid-1x2"
                label="Van"
              />
              <Checkbox
                name="FullyIntegrated"
                value={values.FullyIntegrated}
                iconName="icon-bi_grid"
                label="Fully Integrated"
              />
              <Checkbox
                name="Alcove"
                value={values.Alcove}
                iconName="icon-bi_grid-3x3-gap"
                label="Alcove"
              />
            </div>
          </div>

          <button type="submit" className={css.submitButton}>
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FilterForm;
