import Counter from "./Counter";

const FunFacts = () => {
  return (
    <section id="fun_facts">
      <div className="container">
        <div className="fn_cs_counter_list">
          <ul style={{display:"flex", justifyContent:"center"}}>
            {/* <li>
              <div className="item">
                <h3 className="fn__gradient_title">
                  <span className="prefix" />
                  <Counter end={1000} />
                  <span className="suffix" />
                </h3>
                <p>Followers</p>
                <div className="divider" />
              </div>
            </li> */}
            <li>
              <div className="item">
                <h3 className="fn__gradient_title" style={{display:"flex", fontSize:"5rem", paddingBottom:"0.5rem"}}>
                  <span className="prefix" />
                  <Counter end={10} />
                  <span className="suffix">&nbsp;Days Left</span>
                </h3>
                {/* <p>Left</p> */}
                {/* <div className="divider" /> */}
              </div>
            </li>
            {/* <li>
              <div className="item">
                <h3 className="fn__gradient_title">
                  <span className="prefix" />
                  <Counter end={2.4} decimals={2} />
                  <span className="suffix" />
                </h3>
                <p>Floor Price (ETH)</p>
                <div className="divider" />
              </div>
            </li> */}
            {/* <li>
              <div className="item">
                <h3 className="fn__gradient_title">
                  <span className="prefix" />
                  <Counter end={144} />
                  <span className="suffix">k+</span>
                </h3>
                <p>Volume Traded (ETH)</p>
                <div className="divider" />
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default FunFacts;
