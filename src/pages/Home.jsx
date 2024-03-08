import React from "react"
import Marquee from "react-fast-marquee"
import ProductCard from "../components/ProductCard"
import BlogCard from "../components/BlogCard"
import SpecialProduct from "../components/SpecialProduct"
import { Link } from "react-router-dom"
import Meta from "../components/Meta"
import Container from "../components/Container"
import { services } from "../utils/Data"

const Home = () => {
  return (
    <>
      <Meta title="Shophub" />
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src="/images/main-banner-1.jpg"
                alt="Main Banner"
                className="img-fluid rounded-3"
              />
              <div className="main-banner-content position-absolute">
                <h5>SUPERCHARGED FOR PROS.</h5>
                <h3>iPhone 13 Pro</h3>
                <p>
                  From $999.00 or $41.62/mo. <br />
                  for 24 mo. Footnote*
                </p>
                <button type="button">BUY NOW</button>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap justify-content between align-items-center gap-4">
              <div className="small-banner position-relative">
                <img
                  src="/images/catbanner-01.jpg"
                  alt="Small Banner"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h5>SUPERCHARGED FOR PROS.</h5>
                  <h3>Laptops Max</h3>
                  <p className="w-75">
                    From $999.00 or $41.62/mo. <br />
                    for 24 mo. Footnote*
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="/images/catbanner-02.jpg"
                  alt="Small Banner"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h5>SUPERCHARGED FOR PROS.</h5>
                  <h3>Laptops Max</h3>
                  <p className="w-75">
                    From $999.00 or $41.62/mo. <br />
                    for 24 mo. Footnote*
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="/images/catbanner-03.jpg"
                  alt="Small Banner"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h5>SUPERCHARGED FOR PROS.</h5>
                  <h3>Laptops Max</h3>
                  <p className="w-75">
                    From $999.00 or $41.62/mo. <br />
                    for 24 mo. Footnote*
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="/images/catbanner-04.jpg"
                  alt="Small Banner"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h5>SUPERCHARGED FOR PROS.</h5>
                  <h3>Laptops Max</h3>
                  <p className="w-75">
                    From $999.00 or $41.62/mo. <br />
                    for 24 mo. Footnote*
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="service d-flex aling-items-center justify-content-between">
              {services.map((service, index) => (
                <div className="d-flex gap-4 align-items-center" key={index}>
                  <img src={service.image} alt={service.title} />
                  <div>
                    <h6 className="mb-0">{service.title}</h6>
                    <p className="text-secondary mb-0">{service.tagline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-3">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap justify-content-between align-items-center">
              <div className="category d-flex justify-content-center align-items-center gap-2">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/camera.jpg" alt="Camera" />
              </div>
              <div className="category d-flex align-items-center gap-2">
                <div>
                  <h6>Smart TV</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/tv.jpg" alt="TV" />
              </div>
              <div className="category d-flex align-items-center gap-2">
                <div>
                  <h6>Headphones</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/headphone.jpg" alt="Smart Watch" />
              </div>
              <div className="category d-flex align-items-center gap-2">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/camera.jpg" alt="Camera" />
              </div>
              <div className="category d-flex align-items-center gap-2">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/camera.jpg" alt="Camera" />
              </div>
              <div className="category d-flex align-items-center gap-2">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/camera.jpg" alt="Camera" />
              </div>
              <div className="category d-flex align-items-center gap-2">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/camera.jpg" alt="Camera" />
              </div>
              <div className="category d-flex align-items-center gap-2">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/camera.jpg" alt="Camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collections</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row justify-content-between">
          <div className="col-3">
            <Link className="famous-card">
              <h6>Watch</h6>
              <h5>Apple Watch Series 9</h5>
              <p>From $399 or $16.62/mo. for 24 mo*</p>
              <img
                src="/images/famous1.jpg"
                alt="Famous"
                className="img-fluid mt-3"
              />
            </Link>
          </div>
          <div className="col-3">
            <Link className="famous-card famous-card-product">
              <h6>Laptop</h6>
              <h5>MacBook Air M1</h5>
              <p>13,3-inch Retina display</p>
              <img
                src="/images/famous2.jpg"
                alt="Famous"
                className="img-fluid mt-3"
              />
            </Link>
          </div>
          <div className="col-3">
            <Link className="famous-card famous-card-product">
              <h6>Smartphone</h6>
              <h5>iPhone 13</h5>
              <p>brighter Super Retina XDR display.</p>
              <img
                src="/images/famous3.jpg"
                alt="Famous"
                className="img-fluid mt-3"
              />
            </Link>
          </div>
          <div className="col-3">
            <Link className="famous-card famous-card-product">
              <h6>Headphone</h6>
              <h5>AirPods Max</h5>
              <p>Up to 20 Hours of Playback</p>
              <img
                src="/images/famous4.jpg"
                alt="Famous"
                className="img-fluid mt-3"
              />
            </Link>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Popular Products</h3>
          </div>
          <div className="col-2">
            <Link className="card card-category">
              <div className="category-popular-products d-flex align-items-center gap-2">
                <img
                  src="/images/watch.jpg"
                  alt="Category"
                  className="img-fluid"
                />
                <p className="mb-0">Smart Watch</p>
              </div>
              <div className="category-popular-products d-flex align-items-center gap-2">
                <img
                  src="/images/speaker.jpg"
                  alt="Category"
                  className="img-fluid"
                />
                <p className="mb-0">Speaker</p>
              </div>
              <div className="category-popular-products d-flex align-items-center gap-2">
                <img
                  src="/images/laptop.jpg"
                  alt="Category"
                  className="img-fluid"
                />
                <p className="mb-0">Laptop</p>
              </div>
            </Link>
          </div>
          <div className="col-2">
            <Link to="" className="card card-discount position-relative">
              <div>
                <h6>15% off</h6>
                <h5>Speaker</h5>
                <p>From $399 or $16.62/mo. for 24 mo.*</p>
              </div>
              <div>
                <img
                  src="/images/speaker2.jpg"
                  alt="Product"
                  className="img-fluid"
                />
              </div>
            </Link>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquees">
              <Marquee className="d-flex">
                <div className="mx-5 w-25">
                  <img src="/images/brand-01.png" alt="Brand" />
                </div>
                <div className="mx-5 w-25">
                  <img src="/images/brand-02.png" alt="Brand" />
                </div>
                <div className="mx-5 w-25">
                  <img src="/images/brand-03.png" alt="Brand" />
                </div>
                <div className="mx-5 w-25">
                  <img src="/images/brand-04.png" alt="Brand" />
                </div>
                <div className="mx-5 w-25">
                  <img src="/images/brand-05.png" alt="Brand" />
                </div>
                <div className="mx-5 w-25">
                  <img src="/images/brand-06.png" alt="Brand" />
                </div>
                <div className="mx-5 w-25">
                  <img src="/images/brand-07.png" alt="Brand" />
                </div>
                <div className="mx-5 w-25">
                  <img src="/images/brand-08.png" alt="Brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Latest News</h3>
          </div>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </Container>
    </>
  )
}

export default Home
