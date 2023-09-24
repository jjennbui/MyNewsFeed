function Feed(props) {
  function handleClick(event) {
    if (event.target === event.currentTarget) {
      return;
    }
    event.currentTarget.remove();
  }

  return (
    <div className="container" onClick={handleClick}>
      <span className="delete"> x</span>
      <img src={props.img} width={200} height={150} />
      <div className="content">
        <h2 className="name">
          <a href={props.link}>{props.title}</a>
        </h2>
        <h3> By: {props.creator}</h3>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default Feed;
