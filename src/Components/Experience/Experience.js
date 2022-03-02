import './Experience.scss';
import Display from "./Display";

function Experience() {
  return (
      <div className="ExperienceContainer">
        <div className="ExperienceTitle"> Experience</div>
        <p> Helios Interactive </p>
        <div className="ExperienceGrid">
          <Display title="Deliotte" background="#ccffaa" type="column"></Display>
          <Display title="SAP" background="#22aaff" type="half"></Display>
          <Display title="SAP" background="#22aaff" type="half"></Display>
          <Display title="Bayer" background="#ccaaaa" type="row"></Display>
          <Display title="SAP" background="#22aaff" type="half"></Display>
          <Display title="SAP" background="#22aaff" type="half"></Display>
          <Display title="Bayer" background="#ccaaaa" type="row"></Display>

        </div>
      </div>
        );
}

export default Experience;