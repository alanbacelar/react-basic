const axios = require("axios").default;
const { useState, useEffect } = require("react");

const App = () => {
  const [people, setPeople] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3001/people");
    const people = response.data;
    setPeople(people.map((item) => <li>{item.name}</li>));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      Teste: <ul>{people}</ul>
    </div>
  );
};

export default App;
