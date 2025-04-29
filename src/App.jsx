import Register from "./components/register";

const App = () => {
  return (
    <div>
      <Register
        info="Salom va xayr"
        imgText="Panda"
        btnText="More info"
        link="https://upload.wikimedia.org/wikipedia/ru/2/24/Kung_Fu_Panda_poster.jpg"
      />
      <Register
        info="Salom va xayr"
        imgText="Pandaxon"
        btnText="More info"
        link="https://upload.wikimedia.org/wikipedia/ru/2/24/Kung_Fu_Panda_poster.jpg"
      />
    </div>
  );
};

export default App;
