// Feedback.js
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa"; // Import relevant icons
import InputField from "../UI/InputField";
import Button from "../UI/Button";

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleSendFeedback = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSendFeedback}>
        {/* Name field with user icon */}
        <InputField
          label="Name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
          }}
          error={errors?.name}
          required
          Icon={<FaUser />} // User icon
        />
        
        {/* Email field with envelope icon */}
        <InputField
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
          }}
          error={errors?.email}
          required
          Icon={<FaEnvelope />} // Envelope icon
        />
        
        {/* Feedback message field with comment icon */}
        <InputField
          label="Feedback"
          type="textarea"
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setErrors((prevErrors) => ({ ...prevErrors, message: "" }));
          }}
          error={errors?.message}
          required
          Icon={<FaCommentDots />} // Comment dots icon
        />
        
        <Button type="submit">
          Send Feedback
        </Button>
      </form>
    </div>
  );
};

export default Feedback;
