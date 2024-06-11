import "./_styles/globals.css";
import Heading1 from "./_components/elements/H1";
import LeadTxt from "./_components/elements/LeadTxt";

export default function Home() {
  const headerTxt = "🚧 Byggin pågår 🚧";
  const leadTxt = "Digitale verktøy helsepersonell ønsker seg.";

  const bakgrunn = (
    <>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut voluptatem
      totam eaque provident quia, iste dolores nulla maxime molestiae veritatis
      aliquam quidem eius ad laboriosam deserunt ipsa adipisci ratione dolorum?
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut voluptatem
      totam eaque provident quia, iste dolores nulla maxime molestiae veritatis
      aliquam quidem eius ad laboriosam deserunt ipsa adipisci ratione dolorum?
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut voluptatem
      totam eaque provident quia, iste dolores nulla maxime molestiae veritatis
      aliquam quidem eius ad laboriosam deserunt ipsa adipisci ratione dolorum?
    </>
  );
  const tlDescription1 = "";

  return (
    <>
      <Heading1 headerTxt={headerTxt} />
      <LeadTxt txt={leadTxt} />
      <hr />

      <div className="row">
        <div className="col-lg-8">
          <p>{bakgrunn}</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            nostrum laborum ut maxime quisquam natus quae velit et, libero
            corrupti eos! Fuga at unde sed non laborum, optio dolores quaerat.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            placeat dolores totam distinctio aspernatur earum libero! Soluta
            suscipit porro in quod. Magni esse culpa illo, omnis adipisci
            mollitia voluptates autem. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Esse neque fuga consequatur inventore velit
            quisquam cum earum harum? Molestiae deserunt soluta alias sunt dicta
            qui consectetur aspernatur facere corrupti quo.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <p>...</p>
        </div>
      </div>
    </>
  );
}
