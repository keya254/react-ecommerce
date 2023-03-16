import React from "react";

const Head = () => {
  return (
    <>
        <section className="head">
            <div className="container d_flex">
                <div className="left row">
                    <i className="fa fa-phone"></i>
                    <label>+25471234567890</label>
                    <i className="fa fa-envelope"></i>
                    <label>example@gmail.com</label>
                </div>
                <div className="right row Rtext">
                    <label>Theme FAQ'S</label>
                    <label>Need Help</label>
                    <span>🏴󠁣󠁦󠁵󠁫󠁿</span>
                    <label htmlFor="">EN</label>
                    <span>🏴󠁣󠁦󠁵󠁫󠁿</span>
                    <label htmlFor="">USD</label>
                </div>

            </div>
        </section>
    </>
  );
};

export default Head;
