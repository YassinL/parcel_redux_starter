import { useState } from "react";
import axios from "axios";

export const useCustomLogin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setData({
        ...data,
      });
      const result = await axios.post(
        `http://localhost:4000/api/v1/users/login`,
        data
      );
      if (result.status === 200) {
        console.log("Result", result.status);
        return alert("Vous êtes connectés !");
      }
    } catch (error) {
      setData({
        ...data,
      });
    }
  };

  return {
    handleSubmit,
    handleChange,
    data,
  };
};
