import { useHttp } from "../hooks/http.hook";
import "./style.css"

export const Auth = () => {
  const { loading, request } = useHttp();

  const getData = async () => {
    try {
      const data = await request("/test1");
      console.log("Data: ", data)
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <div>
      <h1>Hello</h1>
      <button
        onClick={getData}
        disabled={loading}
      >
        Click me
      </button>
    </div>
  );
}

