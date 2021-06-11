import { useState } from "react";
import { useHistory } from "react-router";
import api from "../../../utils/api";

export const useCustomRegister = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    event.persist();
    setData(() => ({
      ...data,
      [event.target.name]: event.target.value,
    }));
  };

  const history = useHistory();

  const handleSubmit = async (event) => {
    setError(null);
    try {
      event.preventDefault();
      const result = await api.post(`users`, data);
      if (result.status === 201) {
        console.log("bien inscrit", result.status);
        setData({
          ...data,
        });
        setError(null);
        history.push("/login");
      }
    } catch (error) {
      console.log("Failded inscription", error.response);
      setData({
        ...data,
      });
      setError(error.response.data.message);
    }
  };

  return {
    handleSubmit,
    handleChange,
    data,
    error,
  };
};
