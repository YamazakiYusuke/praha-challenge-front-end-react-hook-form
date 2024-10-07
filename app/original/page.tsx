'use client'

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: '', gender: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log("Submit button clicked");
    console.log("Form data:", formData);
  };

  return (
    <div className="items-center justify-items-center p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="mb-4">Original</h1>
      <input type="text" name="name" placeholder="名前を入力" onChange={handleChange} className="mb-4 p-2 text-black border border-gray-300 rounded" />
      <div className="mb-4">
        <label className="mr-4">
          <input type="radio" name="gender" value="male" onChange={handleChange} className="mr-1" />
          男
        </label>
        <label>
          <input type="radio" name="gender" value="female" onChange={handleChange} className="mr-1" />
          女
        </label>
      </div>
      <button type="button" onClick={handleSubmit} className="p-2">Submit</button>
    </div>
  );
}
