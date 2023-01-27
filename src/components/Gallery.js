const Gallery = () => {
  return (
    <section className='gallery' id='gallery'>
      <div className='container'>
        <h2 className='section-title'>
          Our <span>Gallery</span>
        </h2>
        <p className='gallery-subtitle'>
          Experience the power and discipline of Karate Kastle through our photo
          gallery
        </p>
        <div className='gallary-box-wrapper'>
          <div className='box box-one'>
            <div className='image'>
              <img
                src='https://images.pexels.com/photos/6455247/pexels-photo-6455247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='Karate Kastle student practicing kicks'
              />
            </div>
            <div className='box-overlay'>
              <div className='details'>
                <h3>Kicking into high gear</h3>
                <p>Karate Kastle student practicing kicks</p>
              </div>
            </div>
          </div>
          <div className='box box-two'>
            <div className='image'>
              <img
                src='https://images.pexels.com/photos/7045577/pexels-photo-7045577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='Instructors teaching proper technique'
              />
            </div>
            <div className='box-overlay'>
              <div className='details'>
                <h3>Perfecting form</h3>
                <p>Instructors teaching proper technique</p>
              </div>
            </div>
          </div>
          <div className='box box-three'>
            <div className='image'>
              <img
                src='https://images.pexels.com/photos/7045602/pexels-photo-7045602.jpeg?auto=compress&cs=tinysrgb&w=600'
                alt='Instructors and students practicing together'
              />
            </div>
            <div className='box-overlay'>
              <div className='details'>
                <h3>Bonding through discipline</h3>
                <p>Instructors and students practicing together</p>
              </div>
            </div>
          </div>
          <div className='box box-four'>
            <div className='image'>
              <img
                src='https://images.pexels.com/photos/8612000/pexels-photo-8612000.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                alt='Karate Kastle students learning self-defense techniques'
              />
            </div>
            <div className='box-overlay'>
              <div className='details'>
                <h3>The power of self-defense</h3>
                <p>Karate Kastle students learning self-defense techniques</p>
              </div>
            </div>
          </div>
          <div className='box box-five'>
            <div className='image'>
              <img
                src='https://images.pexels.com/photos/8041997/pexels-photo-8041997.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                alt='Students training with weights and equipment'
              />
            </div>
            <div className='box-overlay'>
              <div className='details'>
                <h3>Building strength and focus</h3>
                <p>Students training with weights and equipment</p>
              </div>
            </div>
          </div>
          <div className='box box-six'>
            <div className='image'>
              <img
                src='https://images.pexels.com/photos/6832254/pexels-photo-6832254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='Karate Kastle students competing in tournaments'
              />
            </div>
            <div className='box-overlay'>
              <div className='details'>
                <h3>The thrill of competition</h3>
                <p>Karate Kastle students competing in tournaments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
