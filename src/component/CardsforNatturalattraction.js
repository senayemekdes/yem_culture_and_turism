import React from "react";
import Slidefornaturalattraction from "./Slidefornaturalattraction";
function cards() {
  return (
    <>
      <Slidefornaturalattraction />
      <p class="placeholder-glow">
        <span class="placeholder col-12"></span>
      </p>
      <p class="placeholder-wave">
        <span class="placeholder col-12"></span>
      </p>
      <div class="shadow p-3 mb-5 bg-body-tertiary rounded">
        <h3>Natural Attraction</h3>
      </div>
      <div className="container text-center">
        {/* 1 row */}
        <div className="row">
          <div className="col">
            <div class="card">
              <img
                src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
                alt="car"
              />
              <div class="card-body">
                <h5 class="card-title">The man-made caves of Samu Awasho</h5>

                <a href="index.html" class="btn btn-primary">
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img
                src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Burbarsa waterfall</h5>

                <a href="index.html" class="btn btn-primary">
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img
                src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Kurumni natural cave</h5>

                <a href="index.html" class="btn btn-primary">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 1 end of the row */}
      <p class="placeholder-glow">
        <span class="placeholder col-12"></span>
      </p>
      <p class="placeholder-wave">
        <span class="placeholder col-12"></span>
      </p>
      <div class="shadow p-3 mb-5 bg-body-tertiary rounded">
        <h3>Historical Attraction</h3>
      </div>{" "}
      {/* 2 row */}
      <div class="container text-center">
        <div class="row row-cols-4">
          <div class="col">
            <div class="card">
              <img
                src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">The man-made caves of Samu Awasho</h5>
                <a href="index.html" class="btn btn-primary">
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">
                  Chalo traditional judging and dancing
                </h5>

                <a href="index.html" class="btn btn-primary">
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Fofa Debre Medhnialem Church</h5>

                <a href="index.html" class="btn btn-primary">
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Zofcar plant stone</h5>

                <a href="index.html" class="btn btn-primary">
                  Read more
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Ancient palace of Angeri</h5>

                <a href="index.html" class="btn btn-primary">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="placeholder-glow">
        <span class="placeholder col-12"></span>
      </p>
      <p class="placeholder-wave">
        <span class="placeholder col-12"></span>
      </p>
      <div class="shadow p-3 mb-5 bg-body-tertiary rounded">
        <h3>Cultural Attraction</h3>
      </div>
      <div className="container text-center">
        {/* 3 row */}
        <div className="row">
          <div className="col">
            <div class="card">
              <img
                src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">
                  Bor Mountain and Traditional Medicine Picking /October 17/
                </h5>

                <a href="index.html" class="btn btn-primary">
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img
                src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">
                  Every Nation's New Year Festival /Hebo/
                </h5>

                <a href="index.html" class="btn btn-primary">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 4end of the row */}
    </>
  );
}
export default cards;
