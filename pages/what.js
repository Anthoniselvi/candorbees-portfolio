import Footer from "@/components/Home/Footer";
import Projects from "@/components/Home/Projects";
import Header from "@/components/What/Header";
import WeAreGoodAt from "@/components/What/WeAreGoodAt";
import ProcessAndStack from "@/components/What/ProcessAndStack";

const what = () => {
  return (
    <div className="What_Container">
      <Header />
      <WeAreGoodAt />
      <ProcessAndStack />
      <Projects />
      {/* <Footer /> */}
    </div>
  );
};

export default what;
