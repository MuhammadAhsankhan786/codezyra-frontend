import React, { useEffect, useState } from "react";

const ServicesAdmin = () => {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", icon: "" });
  const [editingId, setEditingId] = useState(null);

  const token = localStorage.getItem("adminToken"); // Admin token from login

  // Fetch services
  const fetchServices = async () => {
    try {
      const res = await fetch("http://localhost:5002/api/services", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setServices(data);
    } catch (err) {
      console.error(err);
      alert("Error fetching services");
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // Handle form input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add or Update service
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = editingId
        ? `http://localhost:5002/api/services/${editingId}`
        : "http://localhost:5002/api/services";
      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.message || "Something went wrong");
        return;
      }

      setForm({ title: "", description: "", icon: "" });
      setEditingId(null);
      fetchServices();
    } catch (err) {
      console.error(err);
      alert("Error saving service");
    }
  };

  // Edit service
  const handleEdit = (service) => {
    setEditingId(service._id);
    setForm({
      title: service.title,
      description: service.description,
      icon: service.icon,
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this service?"))
      return;

    try {
      const res = await fetch(`http://localhost:5002/api/services/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.message || "Something went wrong");
        return;
      }
      fetchServices();
    } catch (err) {
      console.error(err);
      alert("Error deleting service");
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-poppins">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Admin Services Panel
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mb-8 bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-xl font-semibold mb-4">
          {editingId ? "Edit Service" : "Add Service"}
        </h2>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />
        <input
          type="text"
          name="icon"
          value={form.icon}
          onChange={handleChange}
          placeholder="Icon name (optional)"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button
          type="submit"
          className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded transition"
        >
          {editingId ? "Update Service" : "Add Service"}
        </button>
      </form>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service._id}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col"
          >
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <div className="mt-auto flex gap-2">
              <button
                onClick={() => handleEdit(service)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(service._id)}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesAdmin;
