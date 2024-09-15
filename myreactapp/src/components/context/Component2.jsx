import Component3 from "./Component3";
// const Component2 = ({ c1msg }) => {
const Component2 = () => {
  return (
    <div className="border border-warning rounded border-3 m-3 p-3">
      <h2> Component 2</h2>
      {/* without context
      <Component3 c2msg={c1msg} /> */}
      {/* with context */}
      <Component3 />
    </div>
  );
};

export default Component2;
