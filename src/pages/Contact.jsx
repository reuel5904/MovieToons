import React from 'react'
import Footer from '../components/Footer'

export default function Contact() {
    return (
        <>
            <section className="contact__me">
                <div className="container">
                    <div className="row">
                        <div className="contact__me--wrapper">
                            <h3 className="contact__title">Contact Us</h3>
                            <h4 className="contact__sub-title">Have any questions or inquiries? We'd love to hear from you!</h4>
                            <form action="" className="form__contact">
                                <div className="form__item">
                                    <label htmlFor="Name" className="form__item--label">Name</label>
                                    <input type="text" className="input" required/>
                                </div>
                                <div className="form__item">
                                    <label htmlFor="Email" className="form__item--label">Email</label>
                                    <input type="text" className="input" required/>
                                </div>
                                <div className="form__item">
                                    <label className="form__item--label">Message</label>
                                    <textarea name="message" className="input" required></textarea>
                                </div>
                                <div className="form__item contact__me--wrapper">
                                    <button className="form__submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
