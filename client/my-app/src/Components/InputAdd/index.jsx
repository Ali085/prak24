import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import './index.scss'
const SignupForm = () => {
  return (
    <section className='AddSec'>

    <Formik
      initialValues={{ imageUrl: '', name: '', job: '' , description: '' }}
      validationSchema={Yup.object({
        imageUrl: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        name: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        
      })}
      onSubmit={(values) => {
        axios.post("http://localhost:1245/users", values)
       }}
    >
      <Form>
        <label htmlFor="imageUrl">Image Url</label>
        <Field name="imageUrl" type="text" />
        

        <label htmlFor="name">Name</label>
        <Field name="name" type="text" />
        

        <label htmlFor="job">JOB</label>
        <Field name="job" type="job" />

        <label htmlFor="description">Description</label>
        <Field name="description" type="description" />
      

        <button type="submit">Submit</button>
      </Form>
    </Formik>
    </section>
  );
};

export default SignupForm