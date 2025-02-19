//fragment
import './style.css';
const MyComponent = () => {
    // const hoidanit ="eric";
    const hoidanit = {
        name: "hoidanit",
        age: 25
    }
  return (
    <>
        <div> {JSON.stringify(hoidanit)} Hello</div>
        <div>{console.log("ERIC")}</div>
        <div className="child"
        style={
            { borderRadius: "10px"}
        }>child</div>
    </>
  );
}

export default MyComponent;