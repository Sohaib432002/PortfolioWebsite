// ModalComponent.jsx
import { gsap } from "gsap";
import { useRef } from "react";
import '../ModelComponent.css';
const skillsData = [
  {
    title: "Orion III",
    image: "https://assets.codepen.io/4787486/orionIII-in-flight.jpg",
    description:
      "A luxury commercial space transport, carrying passengers from Earth to orbiting space facilities. A streamlined, needle-like design ensures smooth atmospheric flight capability, while precise, computer assisted navigation control allows mathematically complex docking and landing operations."
  }
];

const ModalComponent = () => {
  const modalRef = useRef(null);
  const openButtonRef = useRef(null);
  const closeButtonRef = useRef(null);

  const openModal = () => {
    const tl = gsap.timeline();
    tl.to(openButtonRef.current, {
      scale: 1,
      opacity: 0,
      duration: 0.3,
      ease: "expo.in"
    })
      .to(
        modalRef.current,
        { scale: 1, duration: 1, ease: "expo.in" },
        "-=0.3"
      )
      .to(
        modalRef.current.querySelectorAll("h1, .content"),
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "back.out",
          stagger: { amount: 0.45, from: "start" }
        },
        "-=0.5"
      )
      .to(
        closeButtonRef.current,
        { opacity: 1, y: 0, duration: 1, ease: "back.out" },
        "-=0.75"
      );
  };

  const closeModal = () => {
    const tl = gsap.timeline();
    tl.to(modalRef.current.querySelectorAll("h1, .content"), {
      y: "-2em",
      opacity: 0,
      duration: 0.5,
      ease: "power4.in(2)",
      stagger: { amount: 0.3, from: "start" }
    })
      .to(closeButtonRef.current, { opacity: 0, y: "-3em", duration: 0.2 })
      .to(modalRef.current, { scale: 0, duration: 0.75, ease: "power3.out" })
      .to(openButtonRef.current, { scale: 1, opacity: 1, duration: 0.5 }, "-=0.75");
  };

  return (
    <div>
      <div ref={modalRef} className="modal" style={{ scale: 0 }}>
        <div className="modal-content">
          <h1>{skillsData[0].title}</h1>
          <p className="content">
            <img className="orion" src={skillsData[0].image} alt="" />
            {skillsData[0].description}
          </p>
        </div>
        <a href="#0" className="close-button" ref={closeButtonRef} onClick={closeModal}>
          <div className="close1"></div>
          <div className="close2"></div>
        </a>
      </div>

      <a
        className="open-button"
        href="#0"
        ref={openButtonRef}
        onClick={openModal}
      >
        I'm a modal
        <br />
        <small>Click me</small>
      </a>
    </div>
  );
};

export default ModalComponent;
