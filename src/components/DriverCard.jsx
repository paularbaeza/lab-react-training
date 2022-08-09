import React from 'react';

function DriverCard(props) {
  const { name, rating, img, car } = props;

  const ratingStars = (rating) => {
    if (rating < 0.5) {
      return '☆☆☆☆☆';
    } else if (rating >= 0.5 && rating < 1.5) {
      return '★☆☆☆☆';
    } else if (rating >= 1.5 && rating < 2.5) {
      return '★★☆☆☆';
    } else if (rating >= 2.5 && rating < 3.5) {
      return '★★★☆☆';
    } else if (rating >= 3.5 && rating < 4.5) {
      return '★★★★☆';
    } else if (rating >= 4.5 && rating <= 5) {
      return '★★★★★';
    }
  };
  return (
    <div style={{ backgroundColor: '#496DB3', display:"flex", flexDirection:"row", justifyContent:"center", margin:"20px", borderRadius:"20px"}}>
      <img src={img} alt="driver" width="150" style={{borderRadius:"150px"}}/>
      <div style={{marginLeft:"20px", color:"white"}}>
        <h3>{name}</h3>
        <p>{ratingStars(rating)}</p>
        <p>
          {car.model}
          {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
