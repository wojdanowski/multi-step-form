import './app.css';

export function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="content-container">
          <div className="sidebar">
            {/* ---------------------- */}
            <div className="sidebar__row">
              <div className="sidebar__circle-container">
                <div className="sidebar__circle sidebar__circle--active">
                  <p>1</p>
                </div>
              </div>
              <div className="sidebar__description">
                <p>STEP 1</p>
                <h4>YOUR INFO</h4>
              </div>
            </div>
            {/* ---------------------- */}
            <div className="sidebar__row">
              <div className="sidebar__circle-container">
                <div className="sidebar__circle">
                  <p>1</p>
                </div>
              </div>
              <div className="sidebar__description">
                <p>STEP 1</p>
                <h4>YOUR INFO</h4>
              </div>
            </div>
            {/* ---------------------- */}
          </div>

          <div className="selection-config-box__container">
            <div className="selection-config-box">
              <div id="step-content">
                <div className="personal-info__header">
                  <h1>Personal Info</h1>
                  <p>
                    Please provide your name, email address, and phone number.
                  </p>
                  <div className="form-container">
                    <form action="">
                      <div className="form-row">
                        <div className="label-container">
                          <label htmlFor="fname">Name</label>
                        </div>
                        <input type="text" id="fname" name="fname" />
                      </div>

                      <div className="form-row">
                        <div className="label-container">
                          <label htmlFor="femail">Email address</label>
                        </div>
                        <input type="text" id="femail" name="femail" />
                      </div>

                      <div className="form-row">
                        <div className="label-container">
                          <label htmlFor="fphone">Phone Number</label>
                          <label className="invalid" htmlFor="femail">
                            This field is required
                          </label>
                        </div>
                        <input
                          className="invalid"
                          type="text"
                          id="fphone"
                          name="fphone"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="plan-box__nav">
                <button className="button--secondary" type="button">
                  Go Back
                </button>
                <button type="button">Next Step</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
