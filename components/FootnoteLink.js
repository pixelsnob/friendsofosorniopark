

export default props => {
  return (
    <>
      <a className="footnote" href={"#" + props.href}>{props.children}</a>
    </>
  );
}
