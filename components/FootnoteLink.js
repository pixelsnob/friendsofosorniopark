
export default props => {
  return <sup><a className="footnote" href={"#" + props.href} name={props.name}></a></sup>
}
