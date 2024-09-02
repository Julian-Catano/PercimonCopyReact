import { dataIce } from "../../utils/data";
import "./Ices.scss";

const Section = () => {
  return (
    <>
      <section>
        {dataIce.map((item, index) => (
          <div key={index} className="card-ice">
            <div className="col-izquierda-section">
              <div className="col-izquierda-info">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <p>
                  <button>VER MAS</button>
                </p>
              </div>
            </div>
            <div className="col-derecha-section">
              <img src={item.image} alt="" />
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Section;
