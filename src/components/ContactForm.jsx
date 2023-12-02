import React, { useRef, useState, useEffect } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNum, setMobileNum] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [budget, setBudget] = useState("");
  const [city, setCity] = useState("");
  const [source, setSource] = useState("");
  const [onlineMeeting, setOnlineMeeting] = useState("");
  const [getInTouch, setGetInTouch] = useState("");
  const [submittedData, setSubmittedData] = useState({});

  const [message, setMessage] = useState("");

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const mobileRef = useRef(null);
  const serviceRef = useRef(null);

  console.log(nameRef);

  // Scroll action
  const scrollToName = () => {
    nameRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToEmail = () => {
    emailRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToMobile = () => {
    mobileRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToService = () => {
    serviceRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Ok button action
  const nameOk = () => {
    if (name === "") {
      setMessage("This field is required");
      console.log("pressed");
    } else {
      scrollToEmail();
    }
  };

  // Enter key press action
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (name === "") {
        setMessage("This field is required");
        console.log("pressed");
      } else {
        scrollToEmail();
      }
    }
  };

  return (
    <div className="fixed right-0 overflow-y-scroll h-screen bg-white w-[800px] flex flex-col z-10">
      <div>
        <div
          className="flex flex-col justify-center items-start gap-10 h-[100vh] px-20"
          ref={nameRef}
          onKeyDown={handleKeyPress}>
          <label className="text-2xl">1. Name</label>
          <input
            type="text"
            placeholder="Name"
            className="text-2xl border-b border-black w-full outline-none"
            value={name}
            onChange={(e) => (setName(e.target.value), setMessage(""))}
            // onKeyDown={handleKeyPress}
            required
          />

          {message && <p className="text-red-600">{message}</p>}

          <div className="flex items-center gap-4">
            <button
              className="bg-zinc-900 py-2 px-4 text-white"
              onClick={nameOk}>
              Ok
            </button>
            <p>Press Enter</p>
          </div>

          <div className="flex justify-end gap-4 p-10">
            <button onClick={scrollToEmail}>down</button>
            <button>up</button>
          </div>
        </div>
      </div>

      <div>
        <div
          className="flex flex-col justify-center items-start gap-10 h-[100vh] px-20"
          ref={emailRef}>
          <label className="text-2xl">2. Email</label>
          <input
            type="text"
            placeholder="Email"
            className="text-2xl border-b border-black w-full outline-none"
            value={email}
            onChange={(e) => (setEmail(e.target.value), setMessage(""))}
          />
          <div className="flex items-center gap-4">
            <button
              className="bg-zinc-900 py-2 px-4 text-white"
              onClick={scrollToMobile}>
              Ok
            </button>
            <p>Press Enter</p>
          </div>
          <div className="flex justify-end gap-4 p-10">
            <button onClick={scrollToMobile}>down</button>
            <button onClick={scrollToName}>up</button>
          </div>
        </div>
      </div>

      <div>
        <div
          className="flex flex-col justify-center items-start gap-10 h-[100vh] px-20"
          ref={mobileRef}>
          <label className="text-2xl">3. Mobile Number</label>
          <input
            type="number"
            placeholder="mobile number"
            className="text-2xl border-b border-black w-full outline-none"
            value={mobileNum}
            onChange={(e) => setMobileNum(e.target.value)}
          />
          <button
            className="bg-zinc-900 py-2 px-4 text-white"
            onClick={scrollToService}>
            Ok
          </button>
          <div className="flex justify-end gap-4 p-10">
            <button onClick={scrollToService}>down</button>
            <button onClick={scrollToEmail}>up</button>
          </div>
        </div>
      </div>

      <div>
        <div
          className="flex flex-col justify-center items-start gap-10 h-[100vh] px-20"
          ref={serviceRef}>
          <label className="text-2xl">4. Service</label>
          <input
            type="text"
            placeholder="service"
            className="text-2xl border-b border-black w-full outline-none"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
          />
          <button className="bg-zinc-900 py-2 px-4 text-white">Ok</button>
          <div className="flex justify-end gap-4 p-10">
            <button>down</button>
            <button onClick={scrollToMobile}>up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
