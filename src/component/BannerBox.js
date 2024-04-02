import React from 'react';

const BannerBoxes = () => {
  return (
    <div className="banner-boxes-container">
      <style>
        {`
          .banner-boxes-container {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background: transparent;
            padding: 20px 0;
            z-index: 999;
          }

          .single-banner-boxes {
            background-color: transparent;
            border: 1px solid #ccc;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
          }

          .single-banner-boxes:hover {
            background: linear-gradient(135deg, #012353, #43e794);
          }

          .single-banner-boxes:hover h3,
          .single-banner-boxes:hover p {
            color: #ffffff;
          }


          .banner-boxes-container {
            background-position: 50%;
            background-size: cover;
            background-repeat: no-repeat;
            padding-top: 280px;
            padding-bottom: 25px;
        }
        `}
      </style>
      <div className="container">
        <div className="row justify-content-center">
          <BannerBox
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
              </svg>
            }
            title="Analyze Your Data"
            description="Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
          />
          <BannerBox
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            }
            title="Customized Plan"
            description="Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
          />
          <BannerBox
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            }
            title="Implement Solution"
            description="Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
          />
        </div>
      </div>
    </div>
  );
};

const BannerBox = ({ icon, title, description }) => {
  return (
    <div className="col-lg-4 col-sm-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-once="true">
      <div className="single-banner-boxes">
        <div style={{ marginBottom: '10px' }}>{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BannerBoxes;
