import "./home.scss";

export const Home = () => {
  return (
    <div className="home">
      <div className="max-w-container">
        <section id="intro" className="intro">
          <h6 className="red-text">HELLO THERE,</h6>
          <h1 className="title">I'm Hardik.</h1>
          <h6 className="vsmalltext">Visual Designer</h6>

          <p className="sub-title">
            I'm a visual designer based in Mumbai, India with experience in
            delivering end-to-end UX/UI design for software products. I'm
            passionate about improving the lives of others through design and am
            constantly looking to learn new things everyday.
          </p>

          <button className="std-btn">More About Me!</button>

          <span className="tag-line">
            I Create better experience for{" "}
            <span className="slashed-out">Users</span>
            <span className="floating-text">People</span>
          </span>
        </section>
      </div>
    </div>
  );
};
