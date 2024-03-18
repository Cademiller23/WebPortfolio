import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import {sent} from '../assets/images'

import { Porsche } from "../models";
import useAlert from "../hooks/useAlert";
import { Alert, Loader } from "../components";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const [isTyping, setIsTyping] = useState(false);
  const [porschePosition, setPorschePosition] = useState([0.5, 0.35, 0]); 
  const [showSentMessage, setShowSentMessage] = useState(false);
  const drivePorscheOffScreen = () => {
    let start = null;
    const duration = 1000; // Duration in milliseconds
    const initialPosition = [...porschePosition];
    const finalPosition = [-10, 0.35, 0]; // Destination position

    function animate(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const ratio = Math.min(progress / duration, 1);
      setPorschePosition([
        initialPosition[0] + (finalPosition[0] - initialPosition[0]) * ratio,
        initialPosition[1],
        initialPosition[2]
      ]);
      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setShowSentMessage(true);
        setTimeout(() => {
          setShowSentMessage(false);
          setPorschePosition([0.5, 0.35, 0]);

        }, 3000)
      }
    }

    requestAnimationFrame(animate);
  };


  {/* const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  }; */}

  const handleFocus = () => {
    setIsTyping(true); // Assuming this controls the animation
  };
  const handleBlur = () => {
    setIsTyping(false); // Assuming this controls the animation
  };
  
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  
    // Change animation state to 'typing' whenever the form changes
    setCurrentAnimation("typing");
  };
  
  const handleSubmit = async (e) => { // Marked as async
    e.preventDefault();
    setLoading(true);
  
    // Example: Change animation state to 'typing'
    setCurrentAnimation("typing");
  
    try {
      const response = await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      showAlert({
        show: true,
        text: "Thank you for your message 😃",
        type: "success",
      });
      drivePorscheOffScreen(); // Animate Porsche driving off after successful form submission
      // Reset form after a delay to show animation
      setTimeout(() => {
        hideAlert();
        setForm({ name: "", email: "", message: "" });
        setLoading(false);
      }, 3000); // Adjust timeout as needed
    } catch (error) {
      console.error(error);
      showAlert({
        show: true,
        text: "I didn't receive your message 😢",
        type: "danger",
      });
      setLoading(false);
    }
  };
  
  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert.show && <Alert {...alert} />}
       {showSentMessage && (
        <div className="absolute top-[50%] left-[50%] translate-x-[5%] translate-y-[-50%]">
          <img src={sent} alt="Sent" className=" w-100 h-auto"/>
        </div>
      )}
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Reach Out!</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-7 mt-14'
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='Cade'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='CadeMiller@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows='4'
              className='textarea'
              placeholder='Your Message...'
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Porsche
              currentAnimation={currentAnimation}
              position={porschePosition}
              rotation={[13, -0.9, 0]}
              scale={[1, 1, 1]} isTyping={isTyping}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
