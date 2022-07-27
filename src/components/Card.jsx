import { FaCommentDots } from "react-icons/fa";

const Card = ({ data, index }) => {
  return (
    <div className="section-center m-auto text-center row col-xs-4 mt-3 row ">
      {data.map((item, itemIndex) => {
        const { image, name, title, quote, id } = item;
        let position = "nextSlide";
        if (itemIndex === index) {
          position = "activeSlide";
        }
        if (
          itemIndex === index - 1 ||
          (index === 0 && itemIndex === data.length - 1)
        ) {
          position = "lastSlide";
        }
        return (
          <section className={position} >
            <div key={id} className='sliderDiv m-auto row col-8'>
              <div className='imgDiv text-center mt-1'>
                <img className='rounded-circle ' src={image} alt='' />
              </div>
              <div className='mainDiv text-center mt-3'>
                <h3 className='text-danger fs-4'>{name.toUpperCase()}</h3>
                <h5 className='text-primary'>
                  {title
                    .split(" ")
                    .map((item) => item[0].toUpperCase() + item.slice(1))
                    .join(" ")}
                </h5>
              </div>
              <div className='quoteDiv'>
                <p className='text-secondary mt-2'>{quote}</p>
              </div>
              <div className='text-center '>
                <p className='fs-1 text-success'>
                  <FaCommentDots />
                </p>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Card;
