import React, { useState } from "react"
import Meta from "../components/Meta"
import Breadcrumb from "../components/Breadcrumb"
import ProductCard from "../components/ProductCard"
import ReactStars from "react-rating-stars-component"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Autoplay, Thumbs } from "swiper/modules"
import { FaCodeCompare } from "react-icons/fa6"
import { FaRegHeart, FaShareAlt } from "react-icons/fa"
import { MdOutlineLocalShipping } from "react-icons/md"
import Container from "../components/Container"

const SingleProduct = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [storageActive, setStorageActive] = useState(0)
  const [colorActive, setColorActive] = useState(0)
  return (
    <>
      <Meta title="Product Name" />
      <Breadcrumb title="Product Name" />
      <Container class1="product-wrapper py-5">
        <section className="product-container">
          <div className="row">
            <div className="col-4">
              <div className="product-image-container">
                <div className="product-image">
                  <Swiper
                    loop={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Thumbs]}
                  >
                    <SwiperSlide>
                      <img src="/images/macbook-air-m1.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="/images/macbook-air-m1-2.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="/images/macbook-air-m1-2.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="/images/macbook-air-m1-2.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </SwiperSlide>
                  </Swiper>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    slidesPerView={4}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <img src="/images/macbook-air-m1.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="/images/macbook-air-m1-2.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="/images/macbook-air-m1-2.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="/images/macbook-air-m1-2.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="product-detail-container">
                <h1 className="title text-dark">MacBook Air M1 (2020)</h1>
                <div className="py-2">
                  <p className="price text-dark mb-2">$649.00</p>
                  <div className="d-flex gap-2 align-items-center mb-2">
                    <ReactStars
                      count={5}
                      size={20}
                      value={5}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">(2 reviews)</p>
                  </div>
                  <a href="#review" className="write-a-review mb-2">
                    Write a review
                  </a>
                </div>
                <div className="py-3 d-flex flex-column gap-3">
                  <div className="d-flex gap-2 align-items-center">
                    <p className="mb-0">Type : </p> <span>Macbook</span>
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                    <p className="mb-0">Brand : </p> <span>Apple</span>
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                    <p className="mb-0">Categories : </p>{" "}
                    <span>Laptop, Computer</span>
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                    <p className="mb-0">Tags : </p> <span>Laptop Macbook</span>
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                    <p className="mb-0">SKU : </p> <span>SKU027</span>
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                    <p className="mb-0">Availability : </p>{" "}
                    <span>13 in stock</span>
                  </div>
                  <div className="d-flex gap-2 flex-column">
                    <p className="mb-0">Storage : </p>
                    <div className="d-flex gap-3 storage">
                      <button
                        className={storageActive === 1 && "active"}
                        onClick={() => setStorageActive(1)}
                      >
                        256 GB
                      </button>
                      <button
                        className={storageActive === 2 && "active"}
                        onClick={() => setStorageActive(2)}
                      >
                        512 GB
                      </button>
                    </div>
                  </div>
                  <div className="d-flex gap-2 flex-column">
                    <p className="mb-0">Color : </p>
                    <div className="d-flex gap-3 colors">
                      <button
                        className={colorActive === 1 && "active"}
                        onClick={() => setColorActive(1)}
                      >
                        <div className="d-flex gap-2 align-items-center">
                          <span className="color"></span>
                          <span>Space Grey</span>
                        </div>
                      </button>
                      <button
                        className={colorActive === 2 && "active"}
                        onClick={() => setColorActive(2)}
                      >
                        <div className="d-flex gap-2 align-items-center">
                          <span className="color"></span>
                          <span>Silver</span>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                    <p className="mb-0">Quantity : </p>
                    <input
                      type="number"
                      name="quantity"
                      min={1}
                      max={10}
                      defaultValue={1}
                      id="quantity"
                      className="input-quantity"
                    />
                  </div>
                  <div className="action-btn d-flex flex-wrap align-items-center gap-3 mt-3">
                    <button className="buy-now">Buy Now</button>
                    <button className="add-to-cart">Add To Cart</button>
                  </div>
                  <div className="d-flex align-items-center gap-4 mt-2">
                    <button
                      type="button"
                      className="add-to-wishlist d-flex align-items-center gap-1"
                    >
                      <FaRegHeart />
                      <p className="mb-0">Add to wishlist</p>
                    </button>
                    <button
                      type="button"
                      className="add-to-compare d-flex align-items-center gap-1"
                    >
                      <FaCodeCompare />
                      <p className="mb-0">Add to compare</p>
                    </button>
                  </div>
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed d-flex align-items-center gap-2"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <MdOutlineLocalShipping />
                          <span>Shipping & Returns</span>
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed d-flex align-items-center gap-2"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <FaRegHeart />
                          <span>Care Instructions</span>
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the second item's accordion body.
                          </strong>{" "}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link className="d-flex align-items-center gap-2 py-3 fs-5 text-dark">
                  <FaShareAlt />
                  <p className="mb-0">Share Product</p>
                </Link>
                <div className="payment-methods-container">
                  <h1 className="text-center text-dark">Payment Methods</h1>
                  <img src="" alt="" />
                  <img src="" alt="" />
                  <img src="" alt="" />
                  <img src="" alt="" />
                  <img src="" alt="" />
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="row">
          <div className="col-12">
            <section className="description-container">
              <h1 className="title">Description</h1>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                quam ut culpa a aperiam cupiditate enim nesciunt, error illum
                fugit deleniti dicta optio esse provident. Eos iusto aspernatur
                dolores adipisci? Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Nesciunt vero beatae incidunt cupiditate
                commodi sint aliquam vel dolor voluptates placeat dicta fugiat
                possimus harum, nihil, ullam ut illum, nemo labore?
              </p>
            </section>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <section className="reviews-container" id="review">
              <h1 className="title">Reviews</h1>
              <div className="reviews">
                <div className="review-header">
                  <div className="review-content d-flex justify-content-between align-items-end mb-3">
                    <div className="d-flex flex-column">
                      <p className="customer-reviews mb-2">Customer Reviews</p>
                      <div className="rating d-flex align-items-center gap-1">
                        <ReactStars
                          count={5}
                          size={20}
                          value={4}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <span>Based on 2 reviews</span>
                      </div>
                    </div>
                    <Link className="write-a-review mb-0">Write a review</Link>
                  </div>
                </div>
                <div className="review-form py-4">
                  <p>Write A Review</p>
                  <form action="" className="d-flex flex-column gap-3">
                    <div className="form-input-rating d-flex flex-column gap-2">
                      <label htmlFor="rating">Rating</label>
                      <ReactStars
                        count={5}
                        size={24}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div className="form-input-comment d-flex flex-column gap-2">
                      <label htmlFor="comment">Comment (1500)</label>
                      <textarea
                        rows={5}
                        id="comment"
                        className="w-100 form-control"
                        placeholder="Write your comment here"
                        style={{ resize: "none" }}
                      />
                    </div>
                    <div className="d-flex justify-content-end">
                      <button type="submit">Submit</button>
                    </div>
                  </form>
                </div>
                <div className="reviews-user">
                  <div className="review">
                    <div className="d-flex flex-column gap-1">
                      <p className="mb-0 text-dark">Username</p>
                      <ReactStars
                        count={5}
                        size={20}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Unde, excepturi! Quos, quaerat ut. Iste beatae ipsum
                      voluptatum iure at laborum voluptatibus ullam facere, modi
                      culpa neque consectetur facilis vitae omnis.
                    </p>
                  </div>
                  <div className="review">
                    <div className="d-flex flex-column gap-1">
                      <p className="mb-0 text-dark">Username</p>
                      <ReactStars
                        count={5}
                        size={20}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Unde, excepturi! Quos, quaerat ut. Iste beatae ipsum
                      voluptatum iure at laborum voluptatibus ullam facere, modi
                      culpa neque consectetur facilis vitae omnis.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <section className="row related-products">
          <h1 className="title">You May Also Like</h1>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </section>
      </Container>
    </>
  )
}

export default SingleProduct
