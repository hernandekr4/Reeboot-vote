import { useState } from 'react';

const PledgeForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', age: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/pledge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setMessage(data.message);
    } catch (err) {
      console.error('Error submitting pledge:', err);
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Pledge to Vote</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border"
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Your Age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-2 border"
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2">
          Submit Pledge
        </button>
      </form>
      {message && <p className="mt-4 text-green-700">{message}</p>}
    </div>
  );
};

export default PledgeForm;
