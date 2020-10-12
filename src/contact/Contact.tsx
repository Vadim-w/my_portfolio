import React from 'react';
import styles from './Contact.module.scss'
import styleContainer from '../common/styles/Container.module.scss';
import {Title} from '../common/components/title/Title';
import axios from 'axios'
import {useFormik} from "formik";

type FormikErrorType = {
    name?: string
    contacts?: string
    message?: string
}

export const Contact = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            contacts: '',
            message: ''
        },
        onSubmit: values => {
            axios.post('https://smtp-server-node.herokuapp.com/sendMessage', values)
                .then(() => {
                    alert('Your message has been send :)')
                })
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.contacts) {
                errors.contacts = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.contacts)) {
                errors.contacts = 'Invalid email address';
            }
            if (!values.name) {
                errors.name = 'Required';
            } else if (values.name.length > 20) {
                errors.name = 'Must be 20 characters or less';
            }
            if (!values.message) {
                errors.message = 'Required';
            } else if (values.message.length < 10) {
                errors.message = 'Must be at least 10 characters long';
            }
            return errors;
        },
    })


    return (
        <div className={styles.contactBlock} id='contact'>
            <div className={`${styleContainer.container} ${styles.contactContainer}`}>
                <Title title={'Contact'}/>
                <form className={styles.form} onSubmit={formik.handleSubmit}>
                    <div className={styles.row}>
                        <div className={styles.name}>
                            <span className={styles.form_control}>
                                <input
                                    id={'name'}
                                    type="text"
                                    placeholder={'Your name'}
                                    {...formik.getFieldProps('name')}
                                />
                                {formik.errors.name ? <div className={styles.error}>{formik.errors.name}</div> : null}
                            </span>
                        </div>
                        <div className={styles.email}>
                            <span className={styles.form_control}>
                                <input
                                    id={'contacts'}
                                    type="text"
                                    placeholder={"Your email"}
                                    {...formik.getFieldProps('contacts')}
                                />
                                {formik.errors.contacts ?
                                    <div className={styles.error}>{formik.errors.contacts}</div> : null}
                            </span>
                        </div>
                    </div>
                    <div className={styles.messageBlock}>
                            <textarea className={styles.messageForm}
                                      id={'message'}
                                      aria-required={true}
                                      aria-invalid={false}
                                      cols={40}
                                      rows={10}
                                      placeholder={'Your Message'}
                                      {...formik.getFieldProps('message')}
                            />
                        {formik.errors.message ? <div className={styles.error}>{formik.errors.message}</div> : null}
                    </div>
                    <button type='submit' className={styles.button} value={"Send Message"}>Send Message</button>
                </form>
            </div>
        </div>
    )
}