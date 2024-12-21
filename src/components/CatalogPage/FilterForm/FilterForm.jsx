import { Formik, Form, Field, ErrorMessage } from 'formik';
import Checkbox from '../Checkbox/Checkbox';
import css from './FilterForm.module.css';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { getFilteredCampers } from '../../../redux/campers/operations';
import { CiMap } from 'react-icons/ci';

const FilterForm = ({ setDefaultState }) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    location: Yup.string(),
    AC: Yup.boolean(),
    automatic: Yup.boolean(),
    kitchen: Yup.boolean(),
    TV: Yup.boolean(),
    bathroom: Yup.boolean(),
    van: Yup.boolean(),
    fullyIntegrated: Yup.boolean(),
    alcove: Yup.boolean(),
  });

  return (
    <Formik
      initialValues={{
        location: '',
        AC: false,
        automatic: false,
        kitchen: false,
        TV: false,
        bathroom: false,
        van: false,
        fullyIntegrated: false,
        alcove: false,
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        setDefaultState();

        dispatch(getFilteredCampers({ fromData: values }));
      }}
    >
      {({ values }) => (
        <Form className={css.formContainer}>
          <div className={css.locationContainer}>
            <label htmlFor="location">Location</label>
            <div className={css.locationWrapper}>
              <Field
                id="location"
                name="location"
                placeholder="City"
                className={css.locationInput}
              />
              <CiMap className={css.mapIcon} />
            </div>
            <ErrorMessage
              className={css.errorMessage}
              name="location"
              component="div"
            />
          </div>
          <div>
            <h2 className={css.filtersTitle}>Filters</h2>
            <h3 className={css.sectionTitle}>Vehicle Equipment</h3>
            <div className={css.checkboxContainer}>
              <Checkbox
                name="AC"
                value={values.AC}
                iconName="icon-wind"
                label="AC"
              />
              <Checkbox
                name="automatic"
                value={values.automatic}
                iconName="icon-diagram"
                label="Automatic"
              />
              <Checkbox
                name="kitchen"
                value={values.kitchen}
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
                name="bathroom"
                value={values.bathroom}
                iconName="icon-shower"
                label="Bathroom"
              />
            </div>
          </div>

          <div>
            <h3 className={css.sectionTitle}>Vehicle Type</h3>
            <div className={css.checkboxContainer}>
              <Checkbox
                name="van"
                value={values.van}
                iconName="icon-bi_grid-1x2"
                label="Van"
              />
              <Checkbox
                name="fullyIntegrated"
                value={values.fullyIntegrated}
                iconName="icon-bi_grid"
                label="Fully Integrated"
              />
              <Checkbox
                name="alcove"
                value={values.alcove}
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
