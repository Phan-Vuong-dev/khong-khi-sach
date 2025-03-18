import { Outlet } from "react-router-dom";
import FooterPage from "../components/FooterPage";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import LoadingPage from "../components/LoadingPage";

const Layout = () => {
  useGSAP(() => {
    const ctes = gsap.timeline();
    ctes.to(".box", {
      scale: 0,
      y: 60,
      rotate: 400,
      duration: 1,
      delay: 0.5,
      stagger: {
        amount: 1.5,
        from: "start",
      },
    });

    ctes.to(".wrapper", {
      opacity: 0,
      display: "none",
    });
  });

  return (
    <div className="max-w-md mx-auto relative bg-white">
      <LoadingPage />
      <div className="relative min-h-[100vh]">
        <main>
          <Outlet />
        </main>
        <footer className="w-full fixed bottom-0 left-0">
          <FooterPage />
        </footer>
      </div>
    </div>
  );
};

export default Layout;
