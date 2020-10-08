import React, {useState} from 'react';
import styles from './Contact.module.css'
import styleContainer from '../common/styles/Container.module.css';
import {Title} from '../common/components/title/Title';
import axios from 'axios'

export const Contact = () => {
    let [contacts, setContacts] = useState<string>("")
    let [name, setName] = useState<string>("")
    let [message, setMessage] = useState<string>("")

    const onChangeContacts = (value: string) => {
        setContacts(value)
    }
    const onChangeName = (value: string) => {
        setName(value)
    }
    const onChangeMessage = (value: string) => {
        setMessage(value)
    }

    return (
        <div className={styles.contactBlock}>
            <div className={`${styleContainer.container} ${styles.contactContainer}`}>
                <Title title={'Contact'}/>
                <form className={styles.form} action=''>
                    <div className={styles.row}>
                        <div className={styles.name}>
                            <span className={styles.form_control}>
                                <input
                                    value={name}
                                    type="text"
                                    placeholder={'Your name'}
                                    name='name'
                                    onChange={(e) => onChangeName(e.currentTarget.value)}
                                />
                            </span>
                        </div>
                        <div className={styles.email}>
                            <span className={styles.form_control}>
                                <input
                                    value={contacts}
                                    type="text"
                                    placeholder={"Your email"}
                                    name='contacts'
                                    onChange={(e) => onChangeContacts(e.currentTarget.value)}
                                />
                            </span>
                        </div>
                    </div>
                    <div className={styles.messageBlock}>
                        <textarea className={styles.messageForm}
                                  aria-required={true}
                                  aria-invalid={false}
                                  cols={40}
                                  rows={10}
                                  value={message}
                                  placeholder={'Your Message'}
                                  name='message'
                                  onChange={(e) => onChangeMessage(e.currentTarget.value)}
                        />
                    </div>
                    <input type='submit' className={styles.button} value={"Send Message"} onClick={(e) => {
                        e.preventDefault();
                        axios.post('https://smtp-server-node.herokuapp.com/sendMessage', {name, message, contacts})
                            .then(() => {
                                alert('Your message has been send :)')
                            })
                    }}/>
                </form>


            </div>
        </div>
    )
}