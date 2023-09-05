import "./findus.css";

const Findus = () => {
  return (
    <div className="findus_container">
      <div className="left">
        <div className="findus_map"></div>

        <h2>REMOTE LANDS, INC.</h2>
        <p
          style={{
            marginBottom: "30px",
          }}>
          120 East 56th Street, Suite 1600 PH, New York, NY 10022 USA
        </p>
        <div className="findus_office_details">
          <p>Office: +1 (212) 518-1618</p>
          <p>Aman Jet Expeditions Info: +1 (212) 518-1801</p>
          <p>Fax: +1 877 848 2026</p>
        </div>

        <p>Office Hours: 09:00 – 18:00</p>
        <p>
          Email:
          <a href="mailto:info@remotelands.com">info@remotelands.com</a>
        </p>
      </div>
      <div className="right">
        <div className="findus_map"></div>

        <h2>REMOTE LANDS (THAILAND) CO., LTD</h2>
        <p
          style={{
            marginBottom: "30px",
          }}>
          9/F Mahatun Plaza, 888/74 Ploenchit Road, Lumpini, Pathumwan, Bangkok
          10330 Thailand
        </p>
        <div className="findus_office_details">
          <p>Office: +66 2651-5401</p>
          <p>Traveling Client Assistance: +66 63-2250282</p>
        </div>
        <p>Office Hours: 09:00 – 18:00</p>
        <p>
          Email:
          <a href="mailto:info@remotelands.com">info@remotelands.com</a>
        </p>
      </div>
    </div>
  );
};

export default Findus;
