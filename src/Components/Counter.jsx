import React, { useEffect, useState } from "react";
import "../css/Counter.css"; // Ensure you have appropriate styles here

const Counter = ({ id, onReady }) => {
  // State for storing the fetched counter data
  const [counters, setCounters] = useState(null);
  const [count, setCount] = useState([]);

  useEffect(() => {
    // Fetch the counter data from the API
    fetch(`/api/counter/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCounters(data);
        setCount(data.counter_paragraphs.map(() => 0)); // Initialize the counts to 0
        onReady(); // Call onReady when data is fetched
      })
      .catch((error) => console.error("Error fetching counter data:", error));
  }, [id]);

  //   useEffect(() => {
  //       var data = {
  //         "title": "Portfolio counter block",
  //         "body": null,
  //         "counter_bg_image": "http://dev.hapusinfotech.com/sites/default/files/2024-08/bg.jpg",
  //         "counter_paragraphs": [
  //           {
  //             "title": "Happy Clients",
  //             "count": "123"
  //           },
  //           {
  //             "title": "Projects Done",
  //             "count": "131"
  //           },
  //           {
  //             "title": "Win Awards",
  //             "count": "111"
  //           },
  //           {
  //             "title": "Services Done",
  //             "count": "43"
  //           }
  //         ]
  //       };
  //       setCounters(data);
  //         setCount(data.counter_paragraphs.map(() => 0));
  //   }, []);

  useEffect(() => {
    if (counters) {
      const interval = 50; // Update the counter every 50ms
      const increments = counters.counter_paragraphs.map((counter) =>
        Math.ceil(counter.count / (2000 / interval))
      ); // Calculate increments

      const intervalId = setInterval(() => {
        setCount((prevCount) =>
          prevCount.map((currValue, index) =>
            currValue < counters.counter_paragraphs[index].count
              ? currValue + increments[index]
              : counters.counter_paragraphs[index].count
          )
        );
      }, interval);

      return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }
  }, [counters]);

  if (!counters) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <section
      className="counter-section fix"
      style={{ backgroundImage: `url(${counters.counter_bg_image})` }}
    >
      <div className="counter-overlay"></div>
      <div className="container pt100 pb100">
        <div className="row">
          {counters.counter_paragraphs.map((counter, index) => (
            <div className="col-md-3 col-sm-6" key={index}>
              <div className="currency-counter count-items">
                <span className="currency-count">{count[index]}</span>
                <h2>{counter.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
