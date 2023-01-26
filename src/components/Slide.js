const Slide = ({ image }) => {
  return (
    <div
      className='slide'
      style={{ backgroundImage: `url(${image.src}) ` }}
      key={image.id}
    >
      <div className='slide-content container'>
        <h1>{image.headline}</h1>
        <p>{image.body}</p>
        <a href={`#${image.target}`} className='slide-cta-link'>
          {image.cta}
        </a>
      </div>
    </div>
  );
};

export default Slide;
