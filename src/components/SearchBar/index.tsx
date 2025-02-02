import { useEffect, useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { Link } from "react-router-dom";

type FormData = {
  userName: string;
};

export default function SearchBar() {
  const [formData, setFormData] = useState<FormData>({ userName: "" });
  const navigate = useNavigate();

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleFormSubmit(event: any) {
    event.preventDefault();
    const fullName = "https://api.github.com/users/" + formData.userName;
    navigate(`/before/after?fullName=${encodeURIComponent(fullName)}`);
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          className="dga-input-form-control"
          name="userName"
          value={formData.userName}
          type="text"
          placeholder="Usuário GitHub"
          onChange={handleInputChange}
        />
        <div className="dga form-button">
         
         <Button name="Encontrar" />
         
        </div>
      </form>
    </>
  );
}
