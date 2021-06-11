import { useState } from "react";
import { useHistory } from "react-router";
import api from "../../../utils/api";

export const useCustomLogin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const history = useHistory();

  const handleSubmit = async (event) => {
    console.log("Here");
    setError(null);
    try {
      event.preventDefault();
      setData({
        ...data,
      });
      const result = await api.post(`users/login`, data);
      console.log("Result", result.data);
      if (result.status === 201) {
        console.log("Result", result.status);
        setError(null);
        history.push("/");
        // return alert("Vous êtes connectés !");
      }
    } catch (error) {
      console.log("ERROR", error.response);
      setData({
        ...data,
      });
      setError(error.response.data);
    }
  };

  return {
    handleSubmit,
    handleChange,
    data,
    error,
  };
};
