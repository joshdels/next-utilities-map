import Link from "next/link";

export default function ContactSection() {
  return (
    <>
      <div id="contact" className="page-wrapper">
        <div className="page-wrapper-grid">
          <div className="container">
            <div className="heading-container">
              <span className="sub-heading">Ready to unblock your team?</span>
              <h1 className="heading">
                Not sure if your data is ready or is it worth it?
              </h1>
              <h2 className="description">
                We've worked with everything from clean AutoCAD exports to
                decade-old scanned PDFs. Send us what you have and we'll tell
                you what's possible.
              </h2>
            </div>

            <Link
              href="https://calendly.com/assistantgisjosh/utilty-mapping-consultation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="primary-button">
                Book a Free Discovery Call
              </button>
            </Link>

            <p className="quote">
              No commitment. No sales pitch. Just a real answer about your data.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
