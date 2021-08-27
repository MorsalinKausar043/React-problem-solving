import React, { useState, useEffect } from "react";

const GithubApi = () => {
  const [covidData, setcovidData] = useState([]);

  const getApi = async () => {
    try {
      const fetchApi = await (
        await fetch("https://jsonplaceholder.typicode.com/photos")
      ).json();
      setcovidData(fetchApi);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-10 col-md-12 mx-auto">
            <h3 className="mb-5 text-center fw-bold rounded shadow-lg py-3">
              GitHub Users!
            </h3>
            <div className="row g-5">
              {covidData.map((crrElm) => {
                const { id,title, url } = crrElm;
                return (
                  <div key={id} className="col-12 col-md-4 md-auto bg-info rounded shadow-lg px-3 py-2">
                    <div className="row">
                      <div className="col-5">
                        <img src={url} alt="githubimg" className="img-fluid" />
                      </div>
                      <div className="col-7 d-flex justify-content-center flex-column">
                        <div className="text-center">
                          <h5 className="text-capitalize fw-bold">{title}</h5>
                        </div>
                        <div className="d-flex justify-content-around">
                          <span>444</span>
                          <span>233</span>
                          <span>423</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GithubApi;
