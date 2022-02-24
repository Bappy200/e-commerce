import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bagImage from '../../assects/bags/bag-1.png'
import shoesImage from '../../assects/shoes/shoe-1.png'
import watchImage from '../../assects/categories/watch.png'
import classes from './Slider.module.css'

function Slider() {
  return (
    <Carousel className={classes.sliderSection} autoPlay={true}
    infiniteLoop={true}
    interval={10000}
    showArrows={false}
    showThumbs={false}
    showStatus={false}
    swipeable={Boolean('swipeable', true)}
    swipeScrollTolerance={4}

    renderIndicator={(onClickHandler, isSelected, index) => {
      const defStyle = { marginLeft: 20, background: "green", cursor: "pointer", width:"10px", height:"10px", borderRadius:"20px", display: "inline-block" };
      const style = isSelected
        ? { ...defStyle, background: "red", width: "20px" }
        : { ...defStyle };
      return (
        <span
          style={style}
          onClick={onClickHandler}
          onKeyDown={onClickHandler}
          value={index}
          key={index}
          role="button"
        >
        
        </span>
      );
    }}

    >
                <div className={classes.slideBox}>
                    <div className={classes.sliderTextBox}>
                        <h2>Bags Buy Now</h2>
                        <p>Best qulity bags are avlable.</p>
                        <button className="global-btn">Buy now</button>
                    </div>
                    <div className={classes.sliderImageBox}>
                        <img src={bagImage} alt="bag"/>
                    </div>
                </div>
                <div className={classes.slideBox}>
                    <div className={classes.sliderTextBox}>
                        <h2>shoes Buy Now</h2>
                        <p>Best qulity bags are avlable.</p>
                        <button className="global-btn">Buy now</button>
                    </div>
                    <div className={classes.sliderImageBox}>
                        <img src={shoesImage} alt="shoes"/>
                    </div>
                </div>
                <div className={classes.slideBox}>
                    <div className={classes.sliderTextBox}>
                        <h2>Bags Buy Now</h2>
                        <p>Best qulity bags are avlable.</p>
                        <button className="global-btn">Buy now</button>
                    </div>
                    <div className={classes.sliderImageBox}>
                        <img src={watchImage} alt="watch"/>
                    </div>
                </div>
        </Carousel>
  )
}

export default Slider