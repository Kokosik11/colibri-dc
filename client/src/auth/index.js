// import { useHttp } from "../hooks/http.hook";
import "./style.css"
import logo from "../assets/logo.svg";

export const Auth = () => {
  // const { loading, request } = useHttp();

  // const getData = async () => {
  //   try {
  //     const data = await request("/test1");
  //     console.log("Data: ", data)
  //   } catch(e) {
  //     console.log(e);
  //   }
  // }

  return (
    <div className="auth-panel">
      <div className="auth-content">
        <img src={logo}></img>

        <h1>Авторизация</h1>
        <div>Colibri CRM machine</div>

        <button>Войти с Google</button>
        <div>или войдите через Email</div>

        <form>
          <label for="email">Email*</label>
          <input type="email" id="email" name="password" placeholder="example@gmail.com" />
          <label for="password">Пароль*</label>
          <input type="password" id="password" name="password" placeholder="От 8 символов" />
          
          <div>
            <input type="checkbox" id="remember" name="remember" />
            <label for="remember">Запомнить меня</label>
          </div>
          
          <button>Войти</button>
        </form>

        <div>©2021 Colibri Development Company.</div>
      </div>
    </div>
  );
}

