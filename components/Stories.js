import faker, { fake } from "faker";
import { useEffect, useState } from "react";
import Story from "./Story";
import axios from "axios";

function Stories() {
  var peopleCount = 20;
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/?results=${peopleCount}`)
      .then((res) => {
        setSuggestions(res.data.results);
      });
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8  border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {suggestions.map((profile, key) => (
        <Story
          key={key}
          image={profile.picture["large"]}
          username={profile.name["first"] + " " + profile.name["last"]}
        />
      ))}
      {/* Story  */}
      {/* Story  */}
      {/* Story  */}
      {/* Story  */}
      {/* Story  */}
    </div>
  );
}

export default Stories;
