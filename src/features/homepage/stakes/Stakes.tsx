import "@/shared/styles/wrappers.css";

export default function StakesSection() {
  return (
    <>
      <div className="page-wrapper">
        <div className="page-wrapper-grid">
          <div className="container">
            <span>What it's costing you</span>
            <h1>What staying stuck costs you?</h1>
            <p>
              Every moth your CAD files stay unconverted, the problem compounds.
              It's not a data problem - its format problem. And it's fixible in
              weeks
            </p>

            <h2>Every month you wait</h2>
            <ul>
              <li>Field crews make decisions off outdated printed maps</li>
              <li>Audit requests take days instead of minutes</li>
              <li>New staff can't access or understand the network</li>
              <li>
                Your GIS team stays buried in backlog instead of doing real work
              </li>
            </ul>
            <p>
              None of that is a data problem. It's a format problem and it's
              fixable in weeks
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
