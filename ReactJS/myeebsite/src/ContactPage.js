import React from "react";

const ContactPage = () => {
  return (
    <div>
      <h2>Feel Free To Contact Me</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29241.133565709173!2d86.10638149999998!3d23.635096050000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f42346d249289f%3A0x523592afbbd5d20d!2sSiwandih%2C%20Bokaro%20Steel%20City%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1707735882290!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <form
        action="https://formspree.io/f/xgegkerb"
        method="POST"
        className="contactInput"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          autoComplete="off"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="off"
          required
        />
        <textarea
          name="message"
          cols="30"
          rows="6"
          placeholder="Message"
          autoComplete="off"
          required
        ></textarea>
        <button class="w-100 btn btn-lg btn-primary" type="submit" value="send">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
