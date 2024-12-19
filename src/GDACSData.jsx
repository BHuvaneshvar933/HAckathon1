import React, { useEffect, useState } from "react";

const EONETDisasters = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [displayedEvents, setDisplayedEvents] = useState(8); // To track how many events to display

  useEffect(() => {
    const fetchDisasters = async () => {
      try {
        const response = await fetch("https://eonet.gsfc.nasa.gov/api/v3/events");
        if (!response.ok) {
          throw new Error("Failed to fetch data from EONET API");
        }
        const data = await response.json();
        setEvents(data.events);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchDisasters();
  }, []);

  const loadMore = () => {
    setDisplayedEvents((prev) => prev + 8); // Load 8 more events when button is clicked
  };

  if (loading) return <p className="text-center text-white">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  const eventsToDisplay = events.slice(0, displayedEvents); // Only display the events up to the displayedEvents count

  return (
    <section id="disasters" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Natural Events</h2>
        <ul className="space-y-8">
          {eventsToDisplay.map((event) => (
            <li key={event.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-400">{event.title}</h3>
              <p className="text-lg">
                <strong>Category:</strong>{" "}
                {event.categories.map((cat) => cat.title).join(", ")}
              </p>
              <p className="text-lg">
                <strong>Date:</strong>{" "}
                {new Date(event.geometry[0].date).toLocaleDateString()}
              </p>
              <p className="text-lg">
                <strong>Location:</strong>{" "}
                {event.geometry[0].coordinates.join(", ")}
              </p>
            </li>
          ))}
        </ul>
        {displayedEvents < events.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out hover:bg-blue-600"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EONETDisasters;
