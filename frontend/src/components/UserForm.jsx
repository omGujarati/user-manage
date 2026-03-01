import { useState } from "react";
import API from "../api/axios";

export default function UserForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    skills: [],
    languages: [],
    country: "",
    dob: "",
    about: "",
    fileMeta: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSkills = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        skills: [...formData.skills, value],
      });
    } else {
      setFormData({
        ...formData,
        skills: formData.skills.filter(
          (s) => s !== value
        ),
      });
    }
  };

  const handleLanguages = (e) => {
    const values = [...e.target.selectedOptions]
      .map((o) => o.value);

    setFormData({
      ...formData,
      languages: values,
    });
  };


  const handleFile = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setFormData({
      ...formData,
      fileMeta: {
        name: file.name,
        size: file.size,
        type: file.type,
      },
    });
  };


  const validateForm = () => {
    if (!formData.name) return "Name required";
    if (!formData.email) return "Email required";
    if (!formData.password) return "Password required";
    return null;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validateForm();

    if (error) {
      alert(error);
      return;
    }

    try {
      const res = await API.post(
        "/",
        formData
      );

      console.log(res.data);

      alert("User Registered ✅");

  
      setFormData({
        name: "",
        email: "",
        password: "",
        age: "",
        gender: "",
        skills: [],
        languages: [],
        country: "",
        dob: "",
        about: "",
        fileMeta: null,
      });

    } catch (err) {
      console.error(err.response?.data);
      alert("Error submitting form");
    }
  };


  return (
    <form onSubmit={handleSubmit} className="form">

      <h2>User Registration</h2>

      <div className="form-group">
        <input
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />
      </div>

    
      <div className="form-group">
        <label>Gender</label>
        <div className="inline">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />
            Female
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>Skills</label>
        <div className="inline">
          <label>
            <input type="checkbox" value="React" checked={formData.skills.includes("React")} onChange={handleSkills} />
            React
          </label>

          <label>
            <input type="checkbox" value="Node" checked={formData.skills.includes("Node")} onChange={handleSkills} />
            Node
          </label>
        </div>
      </div>

      <div className="form-group">
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
        </select>
      </div>

      <div className="form-group">
        <label>Languages</label>
        <select multiple value={formData.languages} onChange={handleLanguages}>
          <option>English</option>
          <option>Hindi</option>
          <option>Gujarati</option>
        </select>
      </div>

      <div className="form-group">
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <textarea
          name="about"
          placeholder="About Yourself"
          value={formData.about}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <input type="file" onChange={handleFile} />
      </div>

      <button type="submit" className="btn">
        Register
      </button>

    </form>
  );
}