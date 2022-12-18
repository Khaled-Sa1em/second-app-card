import "../css/components/Main.css";
export default function Main() {
  return (
    <main className="card--info">
      <div className="titles--links">
        <h1 className="title card--info-name">Khaled Salem</h1>
        <p className="title card--info-jop">Frontend Developer</p>
        <p className="card--info-website">MuslimEye.com</p>
        <div className="card--info-links">
          <a className="title btn btn-email">
            <i class="fa-solid fa-envelope"></i>Email
          </a>
          <a className="title btn btn-linkedin">
            <i class="fa-brands fa-linkedin"></i>LinkedIn
          </a>
        </div>
      </div>

      <div className="card--info--txt">
        <div className="card--info--txt-about">
          <h2 className="title card--info--txt-title">About</h2>
          <p className="txt">
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </div>
        <div className="card--info--txt-interest">
          <h2 className="title card--info--txt-title">Interest</h2>
          <p className="txt">
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </div>
    </main>
  );
}
