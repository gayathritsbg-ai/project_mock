import { useState } from "react";
import { FiMapPin, FiPhone, FiClock } from "react-icons/fi";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  alert("Message sent successfully!");

  setFormData({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
};

  const contactDetails = [
    {
      icon: <FiMapPin />,
      title: "Address",
      text: "400 University Drive Suite 200, Coral Gables, FL 33134 USA",
    },
    {
      icon: <FiPhone />,
      title: "Phone",
      text: "+1 234 567 890",
    },
    {
      icon: <FiClock />,
      title: "Working Time",
      text: "Monday - Friday: 9:00 - 18:00",
    },
  ];

  return (
    <div className="contact-page">

      <section className="contact-banner">
  <h1>Contact</h1>

  <p>
    Home <span>/</span> Contact
  </p>
</section>

      <section className="contact-section">
        <div className="contact-heading">
          <h2>Get In Touch With Us</h2>

<p>
  For more information about our products and services,
  please feel free to drop us an email. Our team is always
  here to help you with any questions or concerns.
</p>
        </div>

        <div className="contact-content">

          <div className="contact-info">
            {contactDetails.map((item) => (
              <div className="contact-info-item" key={item.title}>
                <div className="contact-icon">
                  {item.icon}
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>

            <label>Your name</label>
            <input
              type="text"
              name="name"
              placeholder="Abc"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email address</label>
            <input
              type="email"
              name="email"
              placeholder="Abc@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="This is an optional"
              value={formData.subject}
              onChange={handleChange}
            />

            <label>Message</label>
            <textarea
              name="message"
              placeholder="Hi! I'd like to ask about..."
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />

            <button type="submit">
              Submit
            </button>

          </form>

        </div>
      </section>

    </div>
  );
}

export default Contact;