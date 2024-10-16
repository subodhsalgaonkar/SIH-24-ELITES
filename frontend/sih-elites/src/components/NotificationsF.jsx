import React, { useState } from "react";
import { Link } from "react-router-dom";

const NotificationsF = () => {
  const [notificationStates, setNotificationStates] = useState({
    1: { status: null },
    2: { status: null },
    3: { status: null },
  });

  const handleResponse = (id, response) => {
    setNotificationStates((prev) => ({
      ...prev,
      [id]: { status: response },
    }));
  };

  const notifications = [
    {
      id: 1,
      title: "Negotiation Message",
      message: (
        <span>
          Business Man{" "}
          <Link to="/buyerprofile" className="text-blue-500 hover:underline">
            Soham Potharkar
          </Link>{" "}
          has displayed a keen interest in your products. He wants to negotiate
          with you.
        </span>
      ),
      date: "2024-08-30",
      type: "negotiation", // Added type for conditional rendering
    },
    {
      id: 2,
      title: "New Message",
      message:
        "You have received a new message from Jash Shah regarding the recent order.",
      date: "2024-08-29",
    },
    {
      id: 3,
      title: "Order Update",
      message:
        "The order #12345 has been shipped and will reach Ms. Labdhi Shah tomorrow.",
      date: "2024-08-28",
    },
  ];

  return (
    <div className="min-h-screen bg-lime-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="relative bg-green-500 p-8">
          <div className="absolute left-14 top-1/2 transform -translate-y-1/2">
            {/* <img
              src={notificationImg}
              alt="Notifications"
              className="w-48 h-48 rounded-full border-4 border-white"
            /> */}
          </div>
          <div className="text-center mt-24">
            <h1 className="text-3xl font-extrabold text-white">
              Notifications
            </h1>
            <p className="text-lg text-green-200">
              Stay updated with the latest notifications
            </p>
          </div>
        </div>

        {/* Notifications List */}
        <div className="p-6">
          {notifications.length === 0 ? (
            <p className="text-center text-gray-600">
              No notifications available
            </p>
          ) : (
            <ul className="space-y-4">
              {notifications.map((notification) => (
                <li
                  key={notification.id}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center space-x-4"
                >
                  <div className="flex-shrink-0">
                    {/* <img
                      src={notificationImg}
                      alt="Notification Icon"
                      className="w-12 h-12 rounded-full border-2 border-gray-300"
                    /> */}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {notification.title}
                    </h2>
                    <p className="text-gray-600">{notification.message}</p>
                    <p className="text-sm text-gray-500 mt-2">
                      {notification.date}
                    </p>
                  </div>
                  {notification.type === "negotiation" && (
                    <div className="flex-shrink-0 space-x-2 ml-auto">
                      {notificationStates[notification.id]?.status ? (
                        <span
                          className={`font-semibold ${
                            notificationStates[notification.id]?.status ===
                            "accepted"
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {notificationStates[notification.id]?.status
                            .charAt(0)
                            .toUpperCase() +
                            notificationStates[notification.id]?.status.slice(
                              1
                            )}
                        </span>
                      ) : (
                        <>
                          <button
                            className="bg-green-500 text-white px-4 py-2 rounded"
                            onClick={() =>
                              handleResponse(notification.id, "accepted")
                            }
                          >
                            Accept
                          </button>
                          <button
                            className="bg-red-500 text-white px-4 py-2 rounded"
                            onClick={() =>
                              handleResponse(notification.id, "rejected")
                            }
                          >
                            Reject
                          </button>
                        </>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationsF;
