
export default props => {
  return <sup><a className="footnote" href={"#" + props.name} name={props.name}></a></sup>
}
