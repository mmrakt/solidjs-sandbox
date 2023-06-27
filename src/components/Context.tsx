import { useTheme } from "../utils/theme";

const Context = () => {
  const [theme, { changeColor }] = useTheme();

  console.log(theme.color);

  return (
    <>
      <h1 style={{ color: theme.color }}>{theme.title}</h1>
      <input
        type="color"
        name="color"
        value={theme.color}
        oninput={(e) => changeColor(e.currentTarget.value)}
      />
      <label for="color">Change color theme</label>
    </>
  );
};

export default Context;
