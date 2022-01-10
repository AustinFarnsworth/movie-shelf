import React, {useState} from "react";

function AddMovie() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");

  return (
    <form>
      <input type="text" placeholder="name" value={name} />
      <input type="text" placeholder="rating" value={rating} />
    </form>
  );
}

export default AddMovie;
