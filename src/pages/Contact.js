import React, { useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "../components/Nav";

// Emailjs service
import emailjs from "@emailjs/browser";

import "./Contact.css";
import "../Global.css";
import { FaPhoneAlt, FaMailBulk } from "react-icons/fa";
export default function Contact() {
  const form = useRef();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            alert("Success: Your message was sent!");

            setUserName("");
            setMessage("");
            setUserEmail("");
          }
        },
        (error) => {
          console.log(error.text);
          alert("Error: Something happened");
        }
      );
  };
  return (
    <div>
      <div className="contact">
        <Nav />
        <Header />
        <section className="contact">
          <section className="text-contact">
            <h1 className="encabezado">Get in touch</h1>
            <p className="parrafo-contact">
              We’ll learn a little bit about you, your project and get started
              creating a plan for the next steps
            </p>
            <div className="items-contact">
              <div className="item-contact">
                <FaPhoneAlt className="icon" />
                <a className="item-link" href="tel:+523414190134">
                  +52 341 419 01 34
                </a>
              </div>
              <div class="item-contact">
                <FaMailBulk className="icon" />
                <a
                  className="item-link"
                  href="mailto:hi@alvaroperez.tech?Subject=Let's%20work%20together"
                >
                  hi@alvaroperez.tech
                </a>
              </div>
            </div>
          </section>
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Your name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="user_name"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Your email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="user_email"
                value={userEmail}
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Your message</Form.Label>
              <Form.Control
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                as="textarea"
                rows={3}
                name="message"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </section>
      </div>
      <Footer />
    </div>
  );
}
