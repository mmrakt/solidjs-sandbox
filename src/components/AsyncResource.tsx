import { createSignal, createResource } from "solid-js";
import { render } from "solid-js/web";

const fetchUser = async (id: number) =>
  (await fetch(`https://swapi.dev/api/people/${id}/`)).json();

const AsyncResource = () => {
  const [userId, setUserId] = createSignal(0);
  const [user] = createResource(userId, fetchUser);

  return (
    <>
      <input
        type="number"
        min="1"
        placeholder="Enter Numeric Id"
        onInput={(e) => setUserId(e.currentTarget.valueAsNumber)}
      />
      <span>{user.loading && "Loading..."}</span>
      <div>
        <pre>{JSON.stringify(user(), null, 2)}</pre>
      </div>
    </>
  );
};

export default AsyncResource;
