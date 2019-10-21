import React from 'react';

function Review({ review }) {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <img src={review.user.profile_image}
                            alt="..." className="rounded-circle" />
                    </div>
                    <div className="col">
                        <p>{review.user.name}</p>
                        <b>RATED</b><span className="badge badge-pill badge-success">{review.rating}</span>{review.review_text}
                    </div>
                </div>
            </div>
        </div>

    );
}

// style="color:red"
export default Review;
/*
<div className="card mb-3">
    <div class="card-body">
        <div class="row">
            <div class="col">
                <img src="https://b.zmtcdn.com/data/user_profile_pictures/d0b/7654c87ebef2857941115888714e0d0b.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                    alt="..." class="rounded-circle" />
            </div>
            <div class="col">
                <p>Akhilesh Kumar</p>
                <b>RATED</b><span class="badge badge-pill badge-success">4.0</span>Authentic south indian
                breakfast & lunch options available at this restaurant . We tried veg pulao & south indian
                meals. Food was quite tasty bit price are bit high.
                    </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-light btn-outline-dark"><i class="fa fa-heart"
                        style="color:red"></i>Like</button>
                    <button type=" button" class="btn btn-light btn-outline-dark">0</button>
                </div>
            </div>
        </div>
    </div>
</div>
*/