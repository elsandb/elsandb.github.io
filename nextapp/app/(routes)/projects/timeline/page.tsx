import Timeline1 from "@/app/_components/vis/visjs/Timeline_1"
import Heading1 from "@/app/_components/elements/H1";
import LeadTxt from "@/app/_components/elements/LeadTxt";

export default function Page() {
    const headerTxt = "Timeline";
    const leadTxt = <>Made with <a href='https://visjs.org'>Vis.js</a></>;
    return (
        <div>
            <Heading1 headerTxt={headerTxt} />
            <LeadTxt txt={leadTxt} />
            <br/>
            <Timeline1 />
        </div>
    )
}