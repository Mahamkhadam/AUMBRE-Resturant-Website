import "./PageBanner.css";

function PageBanner({ title, page }) {
  return (
    <section className="page-banner">
      <div className="page-banner-overlay">
        <div className="page-banner-content">
          <p>
            Home <span>/</span> {page}
          </p>

          <h1>{title}</h1>
        </div>
      </div>
    </section>
  );
}

export default PageBanner;