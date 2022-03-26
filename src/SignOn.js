import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';


function Yemployee() {
   const formik = useFormik({
      initialValues: {
         Company_Name : '',
         Company_Address : '',
         EmailId : '',
         Contact_No : '',
         UseId : '',
         Password : ''
         
      },
      validationSchema: yup.object({
         Company_Name: yup.string()
            .min(30, 'Not more than 30 characters')
            .required('Please Enter Company Name'),

            Company_Address: yup.string()
               .max(50, 'Not more than 50 characters')
               .required('Please Enter Company Address'),

               EmailId: yup.string()
                  .required('Please Enter Valid EmailId' ),

                  Contact_No: yup.string()
                  .required('Please Enter Contact_no' ),
        
                  UseId: yup.string()
                     .required('Please Enter valid userId'),

                     Password: yup.string()
                        .email('Invalid Format')
                        .required('Please Enter Valid Password'),
   
       }),
      onSubmit: values => {

         alert(JSON.stringify(values));
      },
   });

   return (<form onSubmit={formik.handleSubmit}>
      <p>
         <label>Company_Name : <input type="text" name="Company_Name"
            value={formik.values.Company_Name}
            {...formik.getFieldProps("Company_Name")}></input>
            {formik.touched.Company_Name && formik.errors.Company_Name ?
               <span style={{ color: 'red' }}>{formik.errors.Company_Name}</span> : null}</label>
      </p>   <p>
         <label>Company_Address : <input type="text" name="Company_Address "
            value={formik.values.Company_Address }
            {...formik.getFieldProps("Company_Address ")}></input>
            {formik.touched.Company_Address && formik.errors.Company_Address  ? <span style={{ color: 'red' }}>{formik.errors.Company_Address }</span> : null}</label>
      </p>   <p>
         <label>EmailId : <input type="text" name="EmailId"
            value={formik.values.EmailId}
            {...formik.getFieldProps("EmailId")}></input>
            {formik.touched.EmailId && formik.errors.EmailId ? <span style={{ color: 'red' }}>{formik.errors.EmailId}</span> : null}</label>
      </p>
      <p>
         <label>Contact_No : <input type="text" name="Contact_No"
            value={formik.values.Contact_No}
            {...formik.getFieldProps("Contact_No")}></input>
            {formik.touched.Contact_No && formik.errors.Contact_No ? <span style={{ color: 'red' }}>{formik.errors.Contact_No}</span> : null}</label>
      </p>   <p>
         <label>UseId : <input type="text" name="UseId"
            value={formik.values.UseId}
            {...formik.getFieldProps("UseId")}></input>
            {formik.touched.UseId && formik.errors.UseId ? <span style={{ color: 'red' }}>{formik.errors.UseId}</span> : null}</label>
      </p>
      <p>
         <label>Password : <input type="text" name="Password"
            value={formik.values.Password} {...formik.getFieldProps("Password")}
         ></input>
            {formik.touched.Password && formik.errors.Password ? <span style={{ color: 'red' }}>{formik.errors.Password}</span> : null}</label>
      </p>
      <button type="submit">SignUp</button>
   </form>
   );
}

export default Yemployee;
