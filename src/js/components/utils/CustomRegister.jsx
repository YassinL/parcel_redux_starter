import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

export const useCustomRegister = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    event.persist();
    setData(() => ({
      ...data,
      [event.target.name]: event.target.value,
    }));
  };

  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const result = await axios.post(
        `http://localhost:4000/api/v1/users`,
        data
      );
      if (result.status === 201) {
        console.log("bien inscrit", result.status);
        setData({
          ...data,
        });
        history.push("/login");
      }
    } catch (error) {
      console.log("Failded inscription");
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
