// app/projects/xml-to-csv/page.tsx
import Lead from '@/components/text/lead';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { hybrid, stackoverflowDark, stackoverflowLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const PythonCode = ({ codeString }: { codeString: string }) => {
  return (
    <SyntaxHighlighter language="python" style={stackoverflowDark}>
      {codeString}
    </SyntaxHighlighter>
  );
};


export default function XmlToCsvPage() {
  const simple_xml = `<!-- simple_xml_data.xml -->
  <Notice>
    <item>
      <id>12345</id>
      <Procedure>Open</Procedure>
      <BuyerName>Oslo Kommune</BuyerName>
      <BuyerAddress>Oneway 123 A, 0100 Oslo</BuyerAddress>
    </item>
    <item>
      <id>67890</id>
      <Procedure>Lukket</Procedure>
      <BuyerName>Bergen Kommune</BuyerName>
      <BuyerAddress>Otherway 123 A, 0500 Bergen</BuyerAddress>
    </item>
  </Notice>`;
  const medium_xml = `<!-- medium_simple_xml_data.xml -->
  <Notice>
    <item>
        <id>12345</id>
        <Procedure type="open">Open competition</Procedure>
        <ContractingAuthority id="CA-001" />
    </item>
    <item>
        <id>67890</id>
        <Procedure type="closed">Closed competition</Procedure>
        <ContractingAuthority id="CA-002" />
    </item>
</Notice>`;

  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">
        XML til CSV-konvertering
      </h1>
      <Lead>
        Her vil jeg demonstrere en robust algoritme for konvertering av dypt nestede XML-data til et sett med normaliserte CSV-tabeller, der referanseintegriteten er bevart.
      </Lead>

      <br /><br />

      {/* Problemstilling */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Problemstilling</h2>
        <p>
          Mange virksomheter har data på <code>XML</code>-format, som de ønsker å analysere, eksempelvis i Excel eller Power BI. Da må dataene først konverteres til et tabellbasert format som <code>CSV</code> (comma-separated values).
        </p>
        <p>
          Det er lett å finne tutorials som viser hvordan man konverterer enkle, flate XML-strukturer uten attributter til en pandas dataframe, men virksomhetsdata fra virkeligheten har sjelden så enkelt format.
        </p>

        {/* Details: Conversion of simple XML-structure */}
        <details className="card mb-4 p-4 pb-1 bg-light">
          <summary className='mb-3 fw-bold'>Eksempel 1: Konvertering av en enkel XML-struktur</summary>

          {/* XML-file */}
          <p className='mt-4 mb-0'>
            Et eksempel på en enkel XML-struktur finner vi i filen <code>simple_xml_data.xml</code>:</p>
          <SyntaxHighlighter language="xml" style={stackoverflowDark}>
            {simple_xml}</SyntaxHighlighter>

          {/* Conversion */}
          <p className='mt-4 mb-0'>For å konvertere den enkle XML-strukturen over til CSV,
            kan vi bruke <code>pandas.read_xml()</code>:
          </p>
          <SyntaxHighlighter language="python" style={stackoverflowDark} className='mt-1'>
            {"import pandas as pd\n\ndf = pd.read_xml('simple_xml_data.xml')\ndf.to_csv('data.csv', index=False)\n"}</SyntaxHighlighter>

          {/* Table */}
          <p className='mt-4 mb-0'>Resultatet er en tabell med alle dataene:</p>
          <table className="table table-sm mt-1">
            <thead>
              <tr>
                <th>id</th>
                <th>Procedure</th>
                <th>BuyerName</th>
                <th>BuyerAddress</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12345</td>
                <td>Open</td>
                <td>Oslo Kommune</td>
                <td>Oneway 123 A, 0100 Oslo</td>
              </tr>
              <tr>
                <td>67890</td>
                <td>Lukket</td>
                <td>Bergen Kommune</td>
                <td>Otherway 123 A, 0500 Bergen</td>
              </tr>
            </tbody>
          </table>
        </details>

        <p>Når datastrukturen er så enkel som i eksempel 1, bruker jeg Pandas, men så fort strukturen blir litt mer kompleks, synes jeg det er mye fuzz å bruke Pandas.</p>

        <details className="card mb-4 p-4 pb-1 bg-light">
          <summary className="mb-3 fw-bold bg-light">Eksempel 2: Konvertering av middels kompleks XML-struktur</summary>
          <p>I likhet med XML-filen i eksempel 1, er strukturen under grunn (altså ikke dyp/med mange nivåer). Forskjellen er at to av XML-elementene har en attributt, og ett element er selv-lukkende (self closing tags). Selv om det ikke er en kompleks struktur, blir det mer fuzz å bruke pandas.</p>
          <p>Her er innholdet i filen <code>medium_simple_xml_data.xml</code>:</p>
          <SyntaxHighlighter language="xml" style={stackoverflowDark}>
            {medium_xml}
          </SyntaxHighlighter>

          <p>Legg merke til at </p>

          <table className="table table-sm mt-1">
            <thead>
              <tr>
                <th></th>
                <th>id</th>
                <th>Procedure</th>
                <th>ContractingAuthority</th>
                <th>type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>0</th>
                <td>12345</td>
                <td>Open competition</td>
                <td>NaN</td>
                <td>None</td>
              </tr>
              <tr>
                <th>1</th>
                <td>12345</td>
                <td>None</td>
                <td>NaN</td>
                <td>None</td>
              </tr>
              <tr>
                <th>2</th>
                <td>None</td>
                <td>Open competition</td>
                <td>NaN</td>
                <td>open</td>
              </tr>
              <tr>
                <th>3</th>
                <td>CA-001</td>
                <td>None</td>
                <td>NaN</td>
                <td>None</td>
              </tr>
              <tr>
                <th>4</th>
                <td>67890</td>
                <td>Closed competition</td>
                <td>NaN</td>
                <td>None</td>
              </tr>
              <tr>
                <th>5</th>
                <td>67890</td>
                <td>None</td>
                <td>NaN</td>
                <td>None</td>
              </tr>
              <tr>
                <th>6</th>
                <td>None</td>
                <td>Closed competition</td>
                <td>NaN</td>
                <td>closed</td>
              </tr>
              <tr>
                <th>7</th>
                <td>CA-002</td>
                <td>None</td>
                <td>NaN</td>
                <td>None</td>
              </tr>
            </tbody>
          </table>
        </details>



        <p>
          Noen ganger er dataen kompleks og dypt nestet, med flere nivåer av underordnede elementer og gjentakende strukturer. En enkel flat konvertering vil ikke bevare relasjonene i dataen, og kan føre til tap av informasjon.
          <br />
          Jeg har utviklet en generell algoritme i <code>Python</code> som kan konvertere komplekse, nestede <code>XML</code>-filer til et sett av normaliserte <code>CSV</code>-tabeller. Algoritmen håndterer flere nivåer av nestede elementer, bevarer referanseintegritet ved å lage separate tabeller for relaterte data, og genererer meningsfulle kolonnenavn basert på XML-strukturen.
        </p>
      </section>

      {/* Løsning */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Løsning</h2>

        <strong>Mine krav til XML-CSV-konvertering:</strong>
        <br />
        <ul>
          <li>Programmeringsspråk: Python.</li>
          <li>Generelt:
            <ul>
              <li>Kolonnenavn skal genereres fra stien av XML-tagger som leder til elementet.</li>
              <li>Skal kunne håndtere elementer som inneholder både attributter, tekst og underordnede elementer.</li>
            </ul>
          </li>
          <li>Håndterer komplekse, nestede strukturer.
            <ul>
              <li>Skal kunne håndtere XML-filer med flere nivåer av nestede elementer. Skal finne alle entiteter i XML-filen. Det vil si at dersom et XML-element (ev. med barn) repeteres flere ganger, skal dataen skrives inn i en ny tabell med en nøkkel som peker på forelder-elementene. Om XML-filen har 1 eller 50 lag, skal algoritmen klare å lage nye tabeller for hver nye entitet.</li>
            </ul>
          </li>

          <li>Bevarer referanseintegritet. Det vil si at flere tabeller genereres hvis nødvendig.
            <ul>
              Verdiene fra et element, skal enten ligge i samme tabell som forelderen, eller i en egen tabell med en nøkkel som peker på forelderen. Eksempel: En ordre kan ha flere ordrelinjer. Ordrelinjene skal ligge i en egen tabell med en kolonne som peker på ordren.
            </ul>
          </li>
        </ul>
        Algoritmen håndterer nestede strukturer og bevarer referanseintegritet (https://no.wikipedia.org/wiki/Referanseintegritet).
        (Dersom referanseintegriteten ikke er bevart i XML-filen, vil den heller ikke være det i CSV-filene).
      </section>
      {/* Begrensninger */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Begrensninger</h2>
        <strong>Algoritmen kan ikke:</strong>
        <br />
        <ul>
          <li>
            Håndtere feil i XML-strukturen (f.eks. manglende lukke-tagger).
          </li>
        </ul>

      </section>

      {/* Kodeeksempel */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Kodeeksempel</h2>
        ...
      </section>

      {/* Resultat */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Resultat</h2>
        <p>
          Her er et eksempel på utdata fra en enkel XML-fil:
        </p>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm mt-2">
          field1,field2,field3 <br />
          A,10,True <br />
          B,20,False
        </div>
      </section>

      {/* Refleksjon */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">...</h2>
        <p>

        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Noter</h2>
        <p><i>Hvis du finner feil i koden, eller tilfeller der konverteringen feiler - ta gjerne kontakt.</i></p>
      </section>

    </main >
  );
}
