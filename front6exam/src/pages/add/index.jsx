import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./add.scss"
function Add() {
    const [data, setData] = useState([])

    const fetchData = async () => {
        const response = await fetch("http://localhost:3100/services")
        const api = await response.json()
        setData(api)
    }
    useEffect(() => {
        fetchData()
    }, [])

    async function Delete(id){
        await fetch("http://localhost:3100/services/"+id, {
            method: "DELETE",
        });
        await fetchData()
    }

    async function addDataFormik(item) {
        await fetch("http://localhost:3100/services", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
        });
        await fetchData()
    }


    return (
        <>

            <Helmet>
                <title>Home</title>
            </Helmet>
            <Formik
                initialValues={{ image: '', name: '', title: '' }}
                validationSchema={Yup.object({
                    image: Yup.string()
                        .required('Required'),
                    name: Yup.string()
                        .required('Required'),
                    title: Yup.string()
                        .required('Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        addDataFormik(values)
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form>
                    <label htmlFor="image">icon</label>
                    <Field name="image" type="text" />
                    <ErrorMessage name="image" />
                    <label htmlFor="name">First Name</label>
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" />

                    <label htmlFor="title">Last Name</label>
                    <Field name="title" type="text" />
                    <ErrorMessage name="title" />


                    <button type="submit">Submit</button>
                </Form>
            </Formik>
            <table >
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Country</th>
                        <th>Country</th>
                        <th>Country</th>

                    </tr>
                </thead>
                <tbody>{data.map((item) => (

                    <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>{item.title}</td>
                        <td><i class={item.image}></i></td>
                        <td><button onClick={() => Delete(item._id)}>delete</button></td>
                    </tr>
                ))

                }
                </tbody>

            </table>

        </>
    )
}

export default Add